import { useEffect, useState } from "react"
import { fetchPosts, createPost, updatePost, deletePost } from "../services/api"
import "../styles/home.scss"
export default function Home({ username }) {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [editing, setEditing] = useState(null)
  const loadPosts = async () => {
    try {
      const response = await fetchPosts()
      setPosts(response.data)
    } catch (err) {
      console.error("Erro ao buscar posts:", err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editing) {
        await updatePost(editing.id, { title, content })
        setEditing(null)
      } else {
        await createPost({ username, title, content })
      }
      setTitle("")
      setContent("")
      loadPosts()
    } catch (err) {
      console.error("Erro ao salvar post:", err)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deletePost(id)
      loadPosts()
    } catch (err) {
      console.error("Erro ao deletar post:", err)
    }
  }

  const handleEdit = (post) => {
    setEditing(post)
    setTitle(post.title)
    setContent(post.content)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <h1>CodeLeap Network</h1>
        </div>

        <div className="main">
          <form onSubmit={handleSubmit}>
            <h1>
              Welcome, {username}!<br />
              What’s on your mind?
            </h1>
            <div className="input-group">
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
            <div className="input-group">
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
            <button type="submit">Post</button>
            {editing && (
              <button
                type="button"
                onClick={() => {
                  setEditing(null)
                  setTitle("")
                  setContent("")
                }}
              >
                Cancel Edit
              </button>
            )}
          </form>
          {posts.map((post) => (
            <div key={post.id} className="post">
              <div className="post-header">
                <h3>{post.title}</h3>
                {post.username === username && (
                  <div className="post-actions">
                    <button onClick={() => handleDelete(post.id)}>
                      <svg
                        width="19"
                        height="24"
                        viewBox="0 0 19 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.80087 20.75C1.80087 22.125 2.971 23.25 4.40115 23.25H14.8023C16.2324 23.25 17.4025 22.125 17.4025 20.75V5.75H1.80087V20.75ZM4.99921 11.85L6.83241 10.0875L9.6017 12.7375L12.358 10.0875L14.1912 11.85L11.4349 14.5L14.1912 17.15L12.358 18.9125L9.6017 16.2625L6.84541 18.9125L5.01221 17.15L7.76851 14.5L4.99921 11.85ZM14.1522 2L12.852 0.75H6.35136L5.05122 2H0.500732V4.5H18.7027V2H14.1522Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <button onClick={() => handleEdit(post)}>
                      <svg
                        width="32"
                        height="30"
                        viewBox="0 0 32 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.10107 21.2663L14.8386 21.2475L27.3615 9.3225C27.853 8.85 28.1234 8.2225 28.1234 7.555C28.1234 6.8875 27.853 6.26 27.3615 5.7875L25.2995 3.805C24.3166 2.86 22.6017 2.865 21.6266 3.80125L9.10107 15.7288V21.2663ZM23.4611 5.5725L25.527 7.55125L23.4507 9.52875L21.3887 7.5475L23.4611 5.5725ZM11.7014 16.7713L19.5412 9.305L21.6032 11.2875L13.7647 18.7513L11.7014 18.7575V16.7713Z"
                          fill="white"
                        />
                        <path
                          d="M6.50067 26.25H24.7026C26.1367 26.25 27.3029 25.1287 27.3029 23.75V12.915L24.7026 15.415V23.75H10.6065C10.5727 23.75 10.5376 23.7625 10.5038 23.7625C10.4609 23.7625 10.418 23.7512 10.3738 23.75H6.50067V6.25H15.4027L18.003 3.75H6.50067C5.06661 3.75 3.90039 4.87125 3.90039 6.25V23.75C3.90039 25.1287 5.06661 26.25 6.50067 26.25Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              <div className="post-content">
                <div className="post-info">
                  <span>@{post.username}</span>
                  <span>
                    {new Date(post.created_datetime).toLocaleString()}
                  </span>
                </div>
                <p>{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
