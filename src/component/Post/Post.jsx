import React from 'react'

const Post = () => {
  const cardStyle = {
    border: '2px solid pink',
    padding: '20px',
    margin: '20px auto',
    width: '60%',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '10px'
  };

  const lineStyle = {
    border: 'none',
    borderTop: '1px solid #ccc',
    margin: '10px 0'
  };

  const bodyStyle = {
    fontSize: '14px',
    color: '#444'
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>this is the post Title</h2>
      <hr style={lineStyle}/>
      <p style={bodyStyle}>this is the post body</p>
    </div>
  )
}

export default Post
