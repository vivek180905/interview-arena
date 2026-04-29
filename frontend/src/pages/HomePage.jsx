import React from 'react'
import { SignInButton ,SignUpButton , Show , UserButton, SignOutButton} from '@clerk/react'
import toast from 'react-hot-toast'
import axios from 'axios'

function HomePage() {
  return (
    <div>
    <button className='btn btn-secondary' onClick={() => toast.success("Clicked it")}> Click me</button>
    <Show when="signed-out">
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </Show>
        <Show when="signed-in">
          <SignOutButton />
        </Show>

        <UserButton />
        </div>
  )
}

export default HomePage