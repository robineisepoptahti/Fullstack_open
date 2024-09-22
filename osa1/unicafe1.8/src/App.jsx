import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {

  return (
    <div>
      <Row text='good' value={good} />
      <Row text='neutral' value={neutral} />
      <Row text='bad' value={bad} />
      <Row text='all' value={good + neutral + bad} />
      <Row text='average' value={Avg({ good, bad, neutral })} />
      <Row text='positive' value={Pos({ good, bad, neutral })} />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Row = ({ text, value }) => <p>{text} {value}</p>

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