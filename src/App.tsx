import UsersPage from "./features/users/pages/UsersPage"
import { UsersPageProvider } from "./features/users/UsersStoreProvider"

function App() {
  return (
    <>
      <UsersPageProvider>
        <UsersPage />
      </UsersPageProvider>
    </>
  )
}

export default App
