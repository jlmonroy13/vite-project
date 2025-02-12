import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Log environment variables
  console.log('NEXT_PUBLIC variables:', import.meta.env.VITE_NEXT_PUBLIC_VARIABLE_NAME);
  console.log('REACT_APP variables:', import.meta.env.VITE_REACT_APP_VARIABLE_NAME);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TypeScript + MAIN</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        HELLO THERE
      </p>
      <div>
        <h2>Environment Variables</h2>
        <p>NEXT_PUBLIC_VARIABLE_NAME: {import.meta.env.VITE_NEXT_PUBLIC_VARIABLE_NAME}</p>
        <p>//// NEXT_PUBLIC_VARIABLE_NAME ////: {process.env.VITE_NEXT_PUBLIC_VARIABLE_NAME}</p>
        <p>REACT_APP_VARIABLE_NAME: {import.meta.env.VITE_REACT_APP_VARIABLE_NAME}</p>
      </div>
    </>
  )
}

export default App
