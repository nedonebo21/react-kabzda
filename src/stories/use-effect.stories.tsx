import {useEffect, useState} from "react";
import s from './clock.module.css';

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

type ClockPropsType = {
  mode: 'digital' | 'analog'
}

export const Clock = (props: ClockPropsType) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {

    const intervalId = setInterval(() => {
      // console.log('tick')
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }

  }, []);

  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  let view
  switch (props.mode) {
    case 'analog':
      view = <AnalogClockView hours={hours} minutes={minutes} seconds={seconds}/>
      break
    case "digital":
    default:
      view = <DigitalClockView hours={hours} minutes={minutes} seconds={seconds}/>
  }

  return (
      <div>
        {view}
      </div>
  )
}
type ClockViewPropsType = {
  hours: string
  minutes: string
  seconds: string
}
export const DigitalClockView = ({hours, minutes, seconds}: ClockViewPropsType) => {
  return (
      <>
        <span>{hours}</span>
        :
        <span>{minutes}</span>
        :
        <span>{seconds}</span>
      </>
  )
}
export const AnalogClockView = ({hours, minutes, seconds}: ClockViewPropsType) => {
  const secondsStyle = {
    transform: `rotate(${Number(seconds) * 6}deg)`
  }
  const minutesStyle = {
    transform: `rotate(${Number(minutes) * 6}deg)`
  }
  const hoursStyle = {
    transform: `rotate(${Number(hours) * 30}deg)`
  }
  return (
      <div className={s.clock}>
        <div className={s['analog-clock']}>
          <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}></div>
          <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}></div>
          <div className={`${s.dial} ${s.hours}`} style={hoursStyle}></div>
        </div>
      </div>
  )
}