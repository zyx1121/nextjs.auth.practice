'use client'

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  if (session.status === "loading") return (
    <main className="w-[100dvw] h-[100dvh] flex justify-center items-center">
      <div>
        載入中...
      </div>
    </main>
  )

  if (session.status === "authenticated") return (
    <main className="w-[100dvw] h-[100dvh] flex justify-center items-center">
      <button onClick={() => signOut()}>
        登出 {session.data?.user?.name}
      </button>
    </main>
  )

  if (session.status === "unauthenticated") return (
    <main className="w-[100dvw] h-[100dvh] flex justify-center items-center">
      <button onClick={() => signIn('google')}>
        以 Google 登入
      </button>
    </main>
  )
}
