import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px"
      }}
    >
        <img src="/error.gif" alt="error" style={{
            height: "60vh"
        }}/>
        <h1>Page Not Found</h1>
        <button className='btn btn-secondary'>
            <Link to={"/"}>
              Home page
            </Link>
        </button>
    </div>
  )
}

export default NotFoundPage