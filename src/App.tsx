// import {useState} from 'react'

import './App.css'
// import Accordion from "./components/Accordion/Accordion.tsx";
// import {Rating} from "./components/Rating/Rating.tsx";
//
// import {Button} from "./components/Button/Button.tsx";
import {OnOff} from "./components/OnOff/OnOff.tsx";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion.tsx";
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating.tsx';

//function declaration(Components)
export const App = () => {
    console.log("App rendering")

    //полезное что-то
    //обязана вернуть jsx (фактически html(для глаз))
    return (
        <div>
            {/*<PageTitle title={"this is APP component"}/>*/}
            {/*<PageTitle title={"My Friends"}/>*/}

            <OnOff/>

            <UncontrolledAccordion titleValue={"Меню"}/>

            <UncontrolledRating/>


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
