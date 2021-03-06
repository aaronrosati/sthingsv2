import React  from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './app';
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import './style.css'




const Index = () => {
    return (
        <BrowserRouter>
        <div id='page'>
            <Nav/>
            <App />
            <Footer/>
        </div>
        </BrowserRouter>

    )
}
ReactDOM.render(<Index />, document.getElementById("app"))