import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

// 1. Import Provider and your store
createRoot(document.getElementById('root')).render(
  // 2. Wrap App inside Provider and pass the store prop
  <>
    <App />
  
    </>
  
)
