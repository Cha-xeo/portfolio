import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/games">Games</Link>
        </li>
      </ul>
    </>
  );
}