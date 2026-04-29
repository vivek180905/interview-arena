
// import { SignInButton ,SignUpButton , Show , UserButton, SignOutButton} from '@clerk/react'
import { Routes, Route  , Navigate} from 'react-router'
import HomePage from './pages/HomePage'
import ProblemsPage from './pages/ProblemsPage'
// import './App.css'
import { useUser} from '@clerk/react'
import { Toaster } from 'react-hot-toast'


function App() {
  
   const { isSignedIn } = useUser();
  return (
    <>
    <Routes>
       
       <Route path="/" element={<HomePage />} />
        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> :<Navigate to={"/"} />} />
    </Routes>
    <Toaster toastOptions={{duration:3000}}/>
    </>
  )
}

export default App

