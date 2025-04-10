import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function Home() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/booking`;
        navigate(path);
    };

    return (
        <>
            <div className="bg-img"></div>
            <Navbar />
            <div className="text-container">
                <div className="text-content" data-aos="fade-right">
                    <h2>
                        {' '}
                        Welcome to Hotel <br />
                        <span>Ambasewana</span>{' '}
                    </h2>
                    <p> Where Heritage Meets Luxury!</p>
                    <button className="animated-button" onClick={routeChange}>
                        <svg
                            viewBox="0 0 24 24"
                            className="arr-2"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                        <span className="text">Book Now</span>
                        <span className="circle"></span>
                        <svg
                            viewBox="0 0 24 24"
                            className="arr-1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                    </button>
                    <div className="book-now" onClick={routeChange}>
                        <div className="btn-text">
                            <button>
                                Book Now <i className="ri-arrow-right-line"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
