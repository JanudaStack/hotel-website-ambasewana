import { events } from '../../constants';

const Events = () => {
    return (
        <>
            <div className="event-container" id="events">
                <div className="heading">
                    <h2>Events & Functions</h2>
                </div>
                <div className="event-card-container">
                    <div className="card-area">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="event-card"
                                data-aos="zoom-in"
                            >
                                <img src={event.imgPath} alt={event.id} />
                                <div className="card-content">
                                    <h3>{event.name}</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Mollitia, eius.
                                    </p>
                                    <a href="">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;
