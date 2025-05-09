export default function DeleteModal({ onSubmit, onCancel }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <div className="modal-backdrop">
      <form className="modal" onSubmit={handleSubmit}>
        <h2>Are you sure you want to delete this item?</h2>

        <div>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Delete</button>
        </div>
      </form>
    </div>
  )
}
