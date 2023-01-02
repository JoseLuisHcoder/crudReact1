import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import CardUsers from './components/CardUsers'
import FormUser from './components/FormUser'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  // console.log(updateInfo);

  const getAllUsers = () => {
    const URL = 'https://users-crud.academlo.tech/users/'
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getAllUsers()
  }, [])

  const createNewUser = data => {
    const URL = 'https://users-crud.academlo.tech/users/'
    axios.post(URL, data)
      .then(() => getAllUsers())
      .catch(err => console.log(err))
  }

const deleteUserById = id => {
  const URL = `https://users-crud.academlo.tech/users/${id}/`
  axios.delete(URL)
    .then(() => getAllUsers())
    .catch(err => console.log(err))
}

const updateUserById = (id, data) => {
  const URL = `https://users-crud.academlo.tech/users/${id}/`
  axios.put(URL, data)
    .then(res => getAllUsers())
    .catch(err => console.log(err))

}
  return (
    <div className="App">
      <h1>CRUD USERS</h1>
      <FormUser 
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
      />
      {
        users?.map(user => (
          <CardUsers 
          key={user.id}
          user={user}
          deleteUserById={deleteUserById}
          setUpdateInfo={setUpdateInfo}
          />
        ))
      }
      
    </div>
  )
}

export default App
