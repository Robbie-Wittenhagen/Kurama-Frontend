import React from "react";
import App from "../App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from '../reducers';

import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const { REACT_APP_SERVER_URL } = process.env;

console.log(REACT_APP_SERVER_URL);

const httpLink = createHttpLink({
    uri: REACT_APP_SERVER_URL,
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("kuramaToken");
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : ""
        }
    };
});

const link = ApolloLink.from([authLink, httpLink]);
const cache = new InMemoryCache();

const client = new ApolloClient({
    link,
    cache,
    credentials: 'include'
});

export default (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </PersistGate>
    </Provider>
);
