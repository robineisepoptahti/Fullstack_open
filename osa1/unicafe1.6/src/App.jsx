import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Title = ({ name }) => <h1>{name}</h1>
  
  const Row = ({ text, value }) => <p>{text} {value}</p>

  return (
    <div>
      <Title name='give feedback'/>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Title name='statistics'/>
      <Row text='good' value={good} />
      <Row text='neutral' value={neutral} />
      <Row text='bad' value={bad} />
    </div>
  )
}

export default App