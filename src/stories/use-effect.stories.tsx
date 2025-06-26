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