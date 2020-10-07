# Steps in Client
1. download initial file from 
    - https://github.com/PacktPublishing/React-Projects/tree/ch10-initial
2.  expo upgrade
3.  npm start
4.  met with error
5.  expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
6.  npm audit fix
7.  username: test
    password: test
8.  finding the ip of the local machine
    Windows cmd terminal    - ipconfig
    Mac Terminal            - ipconfig getifaddr en0
9.  cd client && npm install graphql apollo-client apollo-link-http apollo-cache-inmemory react-apollo
10. npm audit fix

# Sending authencation to GraphQL Server
1.  npm install apollo-link-context

# Handling subscriptions in React Native with Apollo
1.  npm install apollo-link-ws subscriptions-transport-ws apollo-utilities

# Adding subscriptions
1.  touch client/Components/Conversation/ConversationBody.js