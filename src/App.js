// App.js
import React, {useState} from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{padding: '20px', maxWidth: '500px', margin: 'auto'}}>
      <h2>Contact Us</h2>
      {/* If form is not submitted, show the form */}
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Message:
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type='submit'>Submit</button>
        </form>
      ) : (
        <p>Success! Your message has been sent.</p>
      )}
    </div>
  )
}

export default App
