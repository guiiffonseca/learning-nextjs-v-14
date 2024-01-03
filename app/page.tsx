import Link from 'next/link'
import NewUser from './components/AddUser';

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link href='/users'>Users</Link>
      <Link href='/about'>About</Link>
      <Link href='/products'>Products</Link>
    </main>
  )
}
