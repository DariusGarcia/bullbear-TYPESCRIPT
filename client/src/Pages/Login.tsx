import { useState, useEffect } from 'react'

import Navbar from '../Components/Layout/navbar'
import LoginForm from '../Components/LoginForm'

interface User {
  username: string;
  password: string
}

export default function Login(): JSX.Element {
  const [userInfo, setUserInfo] = useState<User>({
    username: '',
    password: '',
  })

  useEffect(() => {
    document.title = 'BullBear - Login'
  }, [])

  return (
    <>
      <Navbar />
      <LoginForm userInfo={userInfo} setUserInfo={setUserInfo} />
    </>
  )
}
