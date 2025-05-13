// import {useState} from 'react'

import './App.css'
// import {Button} from "./components/Button/Button.tsx";
import {OnOff} from "./components/OnOff/OnOff.tsx";
import {Rating, RatingValueType} from "./components/Rating/Rating.tsx";
import {Accordion} from "./components/Accordion/Accordion.tsx";
import {useState} from "react";

//function declaration(Components)
export const App = () => {
    console.log("App rendering")
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

    return (
        <div>
            {/*<PageTitle title={"this is APP component"}/>*/}
            {/*<PageTitle title={"My Friends"}/>*/}

            <OnOff/>

            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <Accordion collapsed={accordionCollapsed}
                       onClick={setAccordionCollapsed}
                       titleValue={"Йоу"}/>

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
