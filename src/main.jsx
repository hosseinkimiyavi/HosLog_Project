import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './index.css'
import App from './App.jsx'


const client = new ApolloClient({
  uri: "https://us-west-2.cdn.hygraph.com/content/cm7yq2q1s002406w8oudglcc9/master",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
  <App />
  </ApolloProvider>
  
)
