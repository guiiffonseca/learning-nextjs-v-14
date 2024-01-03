'use client'
import { useRouter } from 'next/navigation'

const NewUser = () => {
  const router = useRouter();

  const handleNewUser = () => {
    router.push('/users/new')
  };
  
  return (
    <button onClick={handleNewUser}>NewUser</button>
  )
}

export default NewUser