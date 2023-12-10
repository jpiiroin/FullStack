import { useState } from 'react'

const Statistics = (props) => {
 
  if (props.all == 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>&nbsp;{props.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>&nbsp;{props.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>&nbsp;{props.bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>&nbsp;{props.all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>&nbsp;{props.average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>&nbsp;{props.positive}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Button = (props) => (
  <button onClick={props.action}> 
    {props.text}
  </button>
)

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
      <Button action={() => setGood(good + 1)} text="good"/>
      <Button action={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button action={() => setBad(bad + 1)} text="bad"/>
      
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} 
      all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App