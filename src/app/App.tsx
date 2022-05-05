import React, { useState } from 'react'

function App() {
    return (
        <>
            <header>
                <h1>React + Express + TypeScript Template</h1>
            </header>
            <main>
                <div>
                    <button className='wrong-message'>
                        Send wrong message
                    </button>
                    <button className='right-message'>
                        Send right message
                    </button>
                    <button onClick={() => window.location.reload()}>
                        Reload window
                    </button>
                </div>
            </main>
            <footer>
                <p>&copy; 2021. Not all rights reserved</p>
            </footer>
        </>

    )
}
export default App