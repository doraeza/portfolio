import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/layout'
import App from './pages/App'
import './styles/main.css';
/** @jsxImportSource @emotion/react */
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from 'recoil';
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
   <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <Layout>
          <App />
        </Layout>
      </React.StrictMode>
    </QueryClientProvider>
  </RecoilRoot>

)
