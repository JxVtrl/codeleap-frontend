import React, { useState } from "react"

export default function EditModal({ states, onSubmit, onCancel }) {
  const [title, setTitle] = useState(states.title)
  const [content, setContent] = useState(states.content)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() && content.trim()) {
      onSubmit({ title, content })
    } else {
      alert("Please fill in all fields.")
    }
  }

  return (
    <div className="modal-backdrop">
      <form className="modal" onSubmit={handleSubmit}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: 0,
            padding: 0,
            marginBottom: "1rem",
          }}
        >
          Edit item
        </h2>

        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
              gap: "0.5rem",
            }}
          >
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="input"
              required
              maxLength="60"
              minLength="5"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              className="input"
              required
              maxLength="500"
              minLength="30"
              rows="5"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "1rem",
            gap: `16px`,
            justifyContent: "flex-end",
          }}
        >
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}
