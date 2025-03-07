import img1 from '../assets/Events/1.jpg';
import img2 from '../assets/Events/2.jpg';
import img3 from '../assets/Events/3.jpg';

const Events = () => {
    return (
        <>
            <div className="event-container">
                <div className="heading">
                    <h2>Events & Functions</h2>
                </div>
                <div className="event-card-container">
                    <div className="card-area">
                        <div className="event-card">
                            <img src={img1} alt="" width={'10%'} />
                            <div className="card-content">
                                <h3>Birthday Parties</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Mollitia, eius.
                                </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="event-card">
                            <img src={img2} alt="" width={'10%'} />
                            <div className="card-content">
                                <h3>Parties</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Mollitia, eius.
                                </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="event-card">
                            <img src={img3} alt="" width={'10%'} />
                            <div className="card-content">
                                <h3>Dining</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Mollitia, eius.
                                </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;
