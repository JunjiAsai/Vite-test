import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <h2>Welcome to Vite test project</h2>
            <div className="card">
                {/*<button onClick={() => setCount((count) => count + 1)}>*/}
                <h3>count is {count}</h3>
                {/*</button>*/}
                <div>
                    <button onClick={() => setCount(count + 1)}>up</button>
                    <button onClick={() => setCount(count - 1)}>down</button>
                </div>
                <div>
                    <button onClick={() => setCount(count * 2)}>double</button>
                    <button onClick={() => setCount(count / 2)}>half</button>
                </div>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
