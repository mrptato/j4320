import { useState, useEffect } from 'react'
import './App.css'

const reformatString = (text, k, setter) => {
  let cleaned = '';
  for (let char of text) {
    if (char !== '-')
      cleaned += char.toUpperCase()
  }

  let firstGroupLength = cleaned.length % k;
  if (firstGroupLength === 0 && cleaned.length > 0) {
    firstGroupLength = k
  }

  let result = cleaned.slice(0, firstGroupLength);

  for (let i = firstGroupLength; i < cleaned.length; i += k) {
    result += '-' + cleaned.slice(i, i + k)
  }

  console.log(result)
  setter(result)
}

function App() {
  const [text, setText] = useState('asds-5g-3-Jfd')
  const [k, setK] = useState(4)
  const [result, setResult] = useState('')

  useEffect(() => {
    reformatString(text, k, setResult)
  }, [text, k])

  return (
    <>
      <div>
        <label>Input:</label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <label>K value:</label>
        <input type='number'
          value={k}
          onChange={(e) => setK(Number(e.target.value))}
        />
      </div>
      <div>
        Result: {result}
      </div>
    </>
  )
}

export default App
