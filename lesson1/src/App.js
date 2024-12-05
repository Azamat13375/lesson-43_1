import './App.css';
import Header2 from "./components/header/Header";


import Home from './components/header/Header'
import MainPage from "./pages/mainPage/MainPage";

function Footer() {
    return (
        <>
            <h2>Tentimishov</h2>
            <Title/>
        </>
    )
}

function Header() {

    return (
        <>
            <h2>Tentimishov</h2>
            <Title/>
        </>
    )
}

function Content() {
    return (
        <>
            <h2>Tentimishov</h2>
            <Title/>
        </>
    )
}

function Title () {
    return <p>Azamat</p>
}





// function Title2 (props) {
//     console.log(props)
//     return <h2>{props.text}, my name is {props.name}</h2>
// }
//
// function Text2({parah}) {
//     return <p>{parah}</p>
// }
//
//
//
//
//
// function Header2() {
//     return (
//         <>
//             <Title2 text="I am header component" name="Azamat"/>
//             <Text2 parah={555}/>
//             </>
//     )
// }
//
// function Footer2() {
//     return (
//         <>
//          <Title2 text="I am footer component"/>
//         </>
//     )
// }
//
// function Content2() {
//     return (
//         <>
//           <p>Lorem Ipsum</p>
//             <Text2 parah={1000}/>
//         </>
//     )
// }



function App() {
  return (
    <div className="App">
        <Header />
        <Footer />
        <Content />
        <h1>Lesson 2</h1>
        {/*<MainPage/>*/}
        {/*<Content2/>*/}
        {/*<Footer2/>*/}
        {/*<Header2/>*/}

    </div>
  );
}

export default App;
