import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good -bad) / all || 0
  const positive = good * 100 / all || 0

  return (
    <div>
      <h1>Give feedback</h1>
      
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>

      <h1>Statistics</h1>
      good {good} <br/>
      neutral {neutral} <br/>
      bad {bad} <br/>
      all {all} <br/>
      average {average} <br/>
      positive {positive} %
    
    </div>
  )
}

export default App