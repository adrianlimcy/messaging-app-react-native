import React from 'react';
import AppContainer from './AppContainer';
import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {HttpLink} from 'apollo-link-http'
import {ApolloProvider} from 'react-apollo'

const API_URL = 'http://192.168.2.3:4000/graphql'
const cache = new InMemoryCache()
const client = new ApolloClient({
    link: new HttpLink({
        uri: API_URL
    }),
    cache
})

const App = () => (
    <ApolloProvider client={client}>
        <AppContainer/>
    </ApolloProvider>
)

export default App;
