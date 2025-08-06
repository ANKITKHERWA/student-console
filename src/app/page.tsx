'use client'
import { useUsers } from '@/hooks/apiHooks/useUsers'

export default function Home() {
  // const { data, isLoading, isError, error } = useUsers()

  // if (isLoading) return <p>Loading...</p>
  // if (isError) return <p>Error: {(error as Error).message}</p>

  return (
    <div></div>
    // <ul>
    //   {data.map((user: any) => (
    //     <li key={user.id}>
    //       <ul>
    //         <li>{user.id}</li>
    //         <li>{user.name}</li>
    //         <li>{user.email}</li>
    //       </ul>
    //     </li>
    //   ))}
    // </ul>
  )
}
