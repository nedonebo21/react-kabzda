// import {useState} from 'react'

import './App.css'
// import {Button} from "./components/Button/Button.tsx";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff.tsx";
import {Rating, RatingValueType} from "./components/Rating/Rating.tsx";
import {Accordion} from "./components/Accordion/Accordion.tsx";
import {useState} from "react";
// import {OnOff} from "./components/OnOff/OnOff.tsx";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating.tsx";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion.tsx";
import {Select} from "./components/Select/Select.stories.tsx";

//function declaration(Components)
export const App = () => {
    console.log("App rendering")
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [type, setType] = useState<boolean>(false)


    return (
        <div>
            <Select/>
            <UncontrolledOnOff onChange={setType}/> {type.toString()}
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={"Йоу"}/>

            {/*<OnOff type={type} onClick={setType}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion items={[]} onClick={() => {}} collapsed={accordionCollapsed} onChange={setAccordionCollapsed} titleValue={"Йоу"}/>
        </div>
    )
}

// type PageTitlePropsType = {
//     title: string,
// }
// function PageTitle(props: PageTitlePropsType) {
//     console.log("AppTitle rendering")
//     return(
//         <h1>
//             { props.title }
//         </h1>
//     )
// }
//
