const Rooms = () => {
    return (
        <>
            <div className="room-container" id="rooms&acco">
                <div className="heading">
                    <h2>Rooms & Accomodations</h2>
                </div>
                <div className="room-card-container">
                    <div className="room-card-area">
                        <div className="room-card">
                            <img
                                src="/assets/rooms/room-3.jpg"
                                alt="room-img"
                            />
                            <div className="card-content">
                                <h3>King Rooms</h3>
                            </div>
                        </div>
                        <div className="room-card">
                            <img
                                src="/assets/rooms/room-1.jpg"
                                alt="room-img"
                            />
                            <div className="card-content">
                                <h3>Couple Rooms</h3>
                            </div>
                        </div>
                        <div className="room-card">
                            <img
                                src="/assets/rooms/room-2.jpg"
                                alt="room-img"
                            />
                            <div className="card-content">
                                <h3>Guest Rooms</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rooms;
