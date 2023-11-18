import UsersPage from "./pages/users/UsersPage"
import { UsersPageProvider } from "./pages/users/UsersPageProvider"

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
