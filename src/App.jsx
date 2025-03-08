import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Header from './components/Header';
import About from './components/About';
import Card from './components/Card';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Rooms from './components/Rooms';
import Location from './components/Location';
import Footer from './components/Footer';

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
            <Rooms />
            <Location />
            <Footer />
        </>
    );
}

export default App;
