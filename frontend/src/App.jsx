
import { SignInButton ,SignUpButton , Show , UserButton, SignOutButton} from '@clerk/react'
import './App.css'
// import { SignedOut, SignedIn, SignInButton, SignOutButton } from '@clerk/react'

function App() {
  

  return (
    <>
      <h1>Cheking</h1>
       
       <Show when="signed-out">
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </Show>
        <Show when="signed-in">
          <SignOutButton />
        </Show>

        <UserButton />
     
    </>
  )
}

export default App
