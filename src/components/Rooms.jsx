import { rooms } from '../../constants';

const Rooms = () => {
    return (
        <>
            <div className="room-container" id="rooms">
                <div className="heading">
                    <h2>Rooms & Accomodations</h2>
                </div>
                <div className="room-card-container">
                    <div className="room-card-area">
                        {rooms.map((room) => (
                            <div
                                key={room.id}
                                className="room-card"
                                data-aos="zoom-in"
                            >
                                <img src={room.imgPath} alt={room.id} />
                                <div className="card-content">
                                    <h3>{room.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rooms;
