import {useEffect, useState} from "react";

export default {
  title: "useEffect demo",
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const SimpleExample = () => {
  const [counter, setCounter] = useState(1)
  console.log('simple example')

  useEffect(() => {
    console.log('useEffect every render')
    document.title = counter.toString()
  });

  useEffect(() => {
    console.log('useEffect only first render (componentDidMount)')
    document.title = counter.toString()
  }, []);

  useEffect(() => {
    console.log('useEffect first render and every counter change')
    document.title = counter.toString()
  }, [counter]);

  return (
      <>
        Hello {counter}
        <button onClick={() => setCounter(counter + 1)}>click</button>
      </>
  )
}

export const SetTimeoutExample = () => {
  const [counter, setCounter] = useState(1)
  const [fake, setFake] = useState(1)
  console.log('setTimeout example')

  useEffect(() => {

    setInterval(() => {
      setCounter((state) => state + 1)
    }, 1000)

  }, []);

  return (
      <>
        Hello, counter: {counter} - fake: {fake}
        <button onClick={() => setFake(fake + 1)}>click</button>
      </>
  )
}

export const ClockExample = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {

    setInterval(() => {
      setTime(new Date())
    }, 1000)

  }, []);

  const hours = time.getHours().toString().padStart(2, '0')
  const minutes = time.getMinutes().toString().padStart(2, '0')
  const seconds = time.getSeconds().toString().padStart(2, '0')

  return (
      <>
        {hours}:{minutes}:{seconds}
      </>
  )
}