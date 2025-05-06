// import {useState} from 'react'

import './App.css'
import Accordion from "./components/Accordion/Accordion.tsx";
import {Rating} from "./components/Rating/Rating.tsx";

import {Button} from "./components/Button/Button.tsx";
import {OnOff} from "./components/OnOff/OnOff.tsx";

//function declaration(Components)
function App() {
    console.log("App rendering")

    //полезное что-то
    //обязана вернуть jsx (фактически html(для глаз))
    return (
        <div>
            <PageTitle title={"this is APP component"}/>
            <PageTitle title={"My Friends"}/>

            <OnOff/>
            <OnOff/>
            <OnOff/>
            {/*<OnOff type={false}/>*/}

            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Меню навигации"} collapsed={true}/>
            <Accordion titleValue={"Меню поиска"} collapsed={false}/>

            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <Button kind={1} style={{ backgroundColor: 'white' }}/>
            <Button kind={2} style={{ backgroundColor: 'blue' }}/>
            <Button kind={3} style={{ backgroundColor: 'red' }}/>


        </div>
    )
}

type PageTitlePropsType = {
    title: string,
}
function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return(
        <h1>
            { props.title }
        </h1>
    )
}

export default App
