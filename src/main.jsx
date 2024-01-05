import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Router/Routes'
import { RouterProvider } from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DndProvider backend={HTML5Backend}>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </DndProvider>
)
