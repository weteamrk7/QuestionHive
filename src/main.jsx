import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/userContext'

// const clerkPubKey =  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!clerkPubKey) {
//   throw new Error("Missing Clerk Publishable Key")

  
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      {/* <ClerkProvider publishableKey={clerkPubKey}> */}
        <App />
      {/* </ClerkProvider> */}
    </AuthProvider>
  </StrictMode>,
)
