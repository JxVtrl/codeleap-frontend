import { useState } from "react"
import "./styles.module.scss"

export default function UsernameModal({ onSubmit }) {
  const [username, setUsername] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim()) onSubmit(username)
  }

  return (
    <div className="modal-backdrop">
      <form className="modal" onSubmit={handleSubmit}>
        <h2>Welcome to CodeLeap!</h2>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  )
}
