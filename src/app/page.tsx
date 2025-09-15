import Login from "@/components/pages/login/Login";
import React from "react";

function page() {
  return (
    <>
      <Login />
    </>
  );
}

export default page;

// "use client";

// import { useSession, signIn, signOut } from "next-auth/react";

// export default function Home() {
//   const { data: session, status } = useSession();

//   if (status === "loading") return <p>Loading...</p>;

//   if (session) {
//     return (
//       <>
//         <p>Signed in as {session.user?.email}</p>
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }

//   return (
//     <>
//       <p>Not signed in</p>
//       <button onClick={() => signIn("google")}>Sign in with Google</button>
//     </>
//   );
// }
