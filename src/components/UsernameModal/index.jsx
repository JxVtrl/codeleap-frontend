import { useState } from "react"

export default function UsernameModal({ onSubmit }) {
  const [username, setUsername] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim()) onSubmit(username)
  }

  return (
    <div className="modal-backdrop">
      <form className="modal" onSubmit={handleSubmit}>
        <h2>Welcome to CodeLeap network!</h2>

        <div className="username-input-container">
          <label htmlFor="username-input" className="username-label">
            Please enter your username
          </label>
          <input
            className="username-input"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button type="submit">Enter</button>
      </form>
    </div>
  )
}
