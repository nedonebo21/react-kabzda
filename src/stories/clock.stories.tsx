import {Clock} from "./use-effect.stories.tsx";

export default {
  title: "Clock",
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const DigitalClockExample = () => {
  return <Clock mode={'digital'}/>
}
export const AnalogClockExample = () => {
  return <Clock mode={'analog'}/>
}