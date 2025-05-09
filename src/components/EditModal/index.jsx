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
        <h2>Edit item</h2>
        <div className="modal-fields">
          <div className="modal-field">
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
          <div className="modal-field">
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
        <div className="modal-actions">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form >
    </div >
  )
}
