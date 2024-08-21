import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/games">Games</Link>
        </li>
      </ul>
    </>
  );
}