import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ArrowUp2, ArrowDown2 } from 'iconsax-react'

import './styles/main.css'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

const App = () => {
  return (
    <div className='card'>
      <h1>
        <span className='blue'>&lt;</span>User
        <span className='blue'>&gt;</span> <span className='yellow'>Lists</span>
      </h1>
      <h2>
        Call data from this{' '}
        <a href={API_URL} target='_blank' rel='noreferrer'>
          API
        </a>
      </h2>

      <div className='search-box'>
        <input type='text' placeholder='Search' />
      </div>

      <table className='container'>
        <thead>
          <tr>
            <th>
              <div role='button'>
                {'Name '}
                {/* <ArrowUp2 size="14" color="#185875" /> */}
                {/* <ArrowDown2 size="14" color="#185875" /> */}
              </div>
            </th>
            <th>
              <div role='button'>
                {'Email '}
                {/* <ArrowUp2 size="14" color="#185875" /> */}
                {/* <ArrowDown2 size="14" color="#185875" /> */}
              </div>
            </th>
            <th>
              <div role='button'>
                {'company '}
                {/* <ArrowUp2 size="14" color="#185875" /> */}
                {/* <ArrowDown2 size="14" color="#185875" /> */}
              </div>
            </th>
            <th>
              <div role='button'>
                {'website '}
                {/* <ArrowUp2 size="14" color="#185875" /> */}
                {/* <ArrowDown2 size="14" color="#185875" /> */}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Company name</td>
            <td>user website</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
