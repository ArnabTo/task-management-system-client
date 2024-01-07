import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Router/Routes'
import { RouterProvider } from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import SmoothScroll from './Components/SmoothScroll';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <DndProvider backend={HTML5Backend}>
  <SmoothScroll>
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
    </SmoothScroll>
  </DndProvider>
)
