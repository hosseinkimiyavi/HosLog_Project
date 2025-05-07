
import { createRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@mui/material'

import './index.css'
import App from './App.jsx'
import theme from './mui/theme.jsx'


const client = new ApolloClient({
  uri:import.meta.env.REACT_APP_GRAPH_CMS_URI,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
  <App />
  </ThemeProvider>
  </ApolloProvider>
  
)
