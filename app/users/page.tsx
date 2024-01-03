import React from 'react'
import BackButton from '../components/BackButton'

interface UserData {
  users: [
    {
      id: number,
      firstName: string
    }
  ]
}

const UsersPage = async () => {
    const response = await fetch('https://dummyjson.com/users')
    const allUsers: UserData  = await response.json()

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1 style={{marginBottom: "1rem", fontWeight: "bold", fontSize: "20px"}}>All Users</h1>
      <ul>

      {
        allUsers.users.map((user) => <li key={user.id}>{user.firstName}</li>)
      }
      </ul>
      <BackButton />

    </div>
  )
}

export default UsersPage