import { useState, useEffect } from 'react';
import Navbar from '../Components/Layout/navbar';
import SignUpForm from '../Components/SignUpForm';

interface User {
  username: string;
  password: string;
}

export default function SignUp(): JSX.Element {
  const [userInfo, setUserInfo] = useState<User>({
    username: '',
    password: '',
  });

  useEffect(() => {
    document.title = 'BullBear - Sign Up';
  }, []);

  return (
    <>
      <Navbar />
      <SignUpForm userInfo={userInfo} setUserInfo={setUserInfo} />
    </>
  );
}
