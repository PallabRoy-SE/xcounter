import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    return (
        <section style={{ marginLeft: '1.5rem' }}>
            <h1>Counter App</h1>
            <p style={{ marginBlock: '1.5rem' }}>Count: {count}</p>
            <div>
                <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
                <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
            </div>
        </section>
    );
}

export default App;
