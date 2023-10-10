import getUserList from "./get-user-list"

const getUserById = async (userId: number) => {
  const users = await getUserList()
  const user = users.find((user: User) => user.id == userId)
  return user?.username
}

export default getUserById
