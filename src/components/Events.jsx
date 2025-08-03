const Events = () => {
    return (
        <>
            <div className="event-container" id="events-and-functions">
                <div className="heading">
                    <h2>Events & Functions</h2>
                </div>
                <div className="event-card-container">
                    <div className="card-area">
                        <div className="event-card">
                            <img
                                src="/assets/event-images/event-1.jpg"
                                alt=""
                            />
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
                            <img
                                src="/assets/event-images/event-2.jpg"
                                alt=""
                            />
                            <div className="card-content">
                                <h3>Weddings</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Mollitia, eius.
                                </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="event-card">
                            <img
                                src="/assets/event-images/event-3.jpg"
                                alt=""
                            />
                            <div className="card-content">
                                <h3>Night Parties</h3>
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
