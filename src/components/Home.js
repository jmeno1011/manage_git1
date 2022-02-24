import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="App">
      <header>
        <h1>헤더</h1>
      </header>
      <div>
          <ul>
              <li>
                  <Link to={"/about"}>about</Link>
              </li>
              <li>
                  <Link to={"/carousel"}>carousel (슬라이더)</Link>
              </li>
          </ul>
      </div>
    </div>
  )
}

export default Home