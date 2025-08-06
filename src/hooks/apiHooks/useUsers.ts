// hooks/useUsers.ts

import { fetchUsers } from '@/services/userService'
import { useQuery } from '@tanstack/react-query'

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'], // Unique key
    queryFn: fetchUsers, // Jo service function banaya
  })
}
