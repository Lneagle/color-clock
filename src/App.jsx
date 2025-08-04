import { useState } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>{format(new Date(), 'PPpp')}</p>
    </>
  )
}

export default App
