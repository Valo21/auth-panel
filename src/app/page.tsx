
import { authOptions } from './api/auth/[...nextauth]/route';
import { getServerSession } from "next-auth/next";
import SignOutButton from "@src/components/SignOutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className='text-2xl font-bold'>You are authenticated!</h1>
      <h2>Name: {session?.user?.name}</h2>
      <SignOutButton/>
    </main>
  )
}
