import React from 'react';
import { Dimensions, Text, FlatList, ScrollView, View } from 'react-native';
import {Query} from 'react-apollo'
import styled from 'styled-components/native';
import ConversationActions from '../Components/Conversation/ConversationActions';
import Message from '../Components/Message/Message'
import {GET_CONVERSATION} from '../constants'

const ConversationWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const ConversationBody = styled(ScrollView)`
  width: 100%;
  padding: 2%;
  display: flex;
  height: ${Dimensions.get('window').height * 0.6};
`;

const ConversationBodyText = styled(Text)`
  font-size: 20px;
  color: black;
`;

const MessagesList = styled(FlatList)`
  width: 100%;
`;

const Conversation = ({ navigation }) => {
  const userName = navigation.getParam('userName', '');

  return (
    <ConversationWrapper>
      <ConversationBody>
        <Query query={GET_CONVERSATION} variables={{userName}}>
            {({loading, data})=>{
                if (loading) {
                  return <ConversationBodyText>Loading...</ConversationBodyText>
                }

                const { messages } = data.conversation
                return (
                  <MessagesList
                    data={messages}
                    keyExtractor = { item => String(item.id)}
                    renderItem={({item})=>(
                      <Message align={item.userName === 'me' ? 'left' : 'right'}>
                        {item.text}
                      </Message>
                    )}
                  />
                )
            }}
        </Query>
      </ConversationBody>
      <ConversationActions userName={userName} />
    </ConversationWrapper>
  )
}

export default Conversation;
