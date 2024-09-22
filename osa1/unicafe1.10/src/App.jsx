import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  if ((good + neutral + bad) === 0) 
    return <p>No feedback given</p> 
  return (
    <div>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={good + neutral + bad} />
      <StatisticLine text='average' value={Avg({ good, bad, neutral })} />
      <StatisticLine text='positive' value={Pos({ good, bad, neutral })} />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const StatisticLine
 = ({ text, value }) => <p>{text} {value}</p>

const Avg = ({ good, bad, neutral }) =>{ 
  const total = good + neutral + bad
  if (total === 0) 
    return 0
  return (good - bad)/total
}
const Pos = ({ good, bad, neutral }) =>{ 
const total = good + neutral + bad

if (total === 0) 
  return '0 %'
return ((good/total)*100) + ' %'
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Title = ({ name }) => <h1>{name}</h1>
  

  return (
    <div>
      <Title name='give feedback'/>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Title name='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App