
import { createRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@mui/material'

import './index.css'
import App from './App.jsx'
import theme from './mui/theme.jsx'
import { BrowserRouter } from 'react-router-dom'


const client = new ApolloClient({
  uri:import.meta.env.VITE_GRAPH_CMS_URI,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
  <App />
  </ThemeProvider>
  </BrowserRouter>
  </ApolloProvider>
  
)
