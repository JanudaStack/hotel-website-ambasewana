const Card = () => {
    return (
        <>
            <div className="card-container">
                <div className="heading">
                    <h2>Our Amenities</h2>
                </div>
                <div className="card-container-inner">
                    <div className="card">
                        <i className="ri bx bxs-dish"></i>
                        <h3>Room service</h3>
                    </div>
                    <div className="card" id="card-black">
                        <i className="ri bx bx-wifi"></i>
                        <h3>Free WiFi</h3>
                    </div>
                    <div className="card">
                        <i className="ri ri-parking-box-line"></i>
                        <h3>Free parking</h3>
                    </div>
                    <div className="card" id="card-black">
                        <i className="ri ri-restaurant-line"></i>
                        <h3>Dining</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
