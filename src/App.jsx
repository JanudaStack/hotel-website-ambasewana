import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Card from './components/Card';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Rooms from './components/Rooms';
import Location from './components/Location';
import FooterNew from './components/FooterNew';
import './App.css';

function App() {
    useEffect(() => {
        AOS.init({
            once: true, // Animations will only happen once
        });
    }, []);

    return (
        <main>
            <Hero />
            <About />
            <Card />
            <Gallery />
            <Events />
            <Rooms />
            <Location />
            <FooterNew />
        </main>
    );
}

export default App;
