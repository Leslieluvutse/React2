import React, { useState } from 'react';

const BlogForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  const handleSave = () => {
    // Validate and save the blog
    if (title && author && body) {
      onSave({ title, author, body });
      // Optionally, you can reset the form fields
      setTitle('');
      setAuthor('');
      setBody('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create a New Blog</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Body</label>
          <textarea
            className="form-control"
            id="body"
            rows="4"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSave}>
          Save Blog
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
