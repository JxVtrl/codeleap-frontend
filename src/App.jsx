import { useState } from "react"
import UsernameModal from "./components/UsernameModal"
import Home from "./pages/Home"

function App() {
  const [username, setUsername] = useState("")

  return (
    <>
      {!username ? (
        <UsernameModal onSubmit={setUsername} />
      ) : (
        <Home username={username} />
      )}
    </>
  )
}

export default App
