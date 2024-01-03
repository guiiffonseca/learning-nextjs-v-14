import Link from 'next/link'
import NewUser from './components/NewUser';

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link href='/users'>Users</Link>
      <NewUser />
    </main>
  )
}
