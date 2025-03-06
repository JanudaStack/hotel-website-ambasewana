import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Header from './components/Header';
import About from './components/About';
import Card from './components/Card';
import Gallery from './components/Gallery';
import Events from './components/Events';
import './App.css';

function App() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Header />
            <About />
            <Card />
            <Gallery />
            <Events />
        </>
    );
}

export default App;
