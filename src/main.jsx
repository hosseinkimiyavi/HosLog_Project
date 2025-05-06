import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@mui/material'
import './index.css'
import App from './App.jsx'
import theme from './mui/theme.jsx'


const client = new ApolloClient({
  uri: "https://us-west-2.cdn.hygraph.com/content/cm7yq2q1s002406w8oudglcc9/master",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
  <App />
  </ThemeProvider>
  </ApolloProvider>
  
)
