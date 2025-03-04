const Card = () => {
    return (
        <>
            <div className="section-spacing-2"></div>
            <div className="container-3 container-heading">
                <h2>Our Amenities</h2>
                <div className="card-container">
                    <div className="card">
                        <i className="ri bx bxs-dish"></i>
                        <h3>Room service</h3>
                        {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque assumenda iste aut sunt quas fugit repellendus
                        rerum ut corrupti nam neque provident error laudantium,
                        accusamus voluptas labore blanditiis magni minus.
                    </p> */}
                    </div>
                    <div className="card" id="card-black">
                        <i className="ri bx bx-wifi"></i>
                        <h3>Free WiFi</h3>
                        {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque assumenda iste aut sunt quas fugit repellendus
                        rerum ut corrupti nam neque provident error laudantium,
                        accusamus voluptas labore blanditiis magni minus.
                    </p> */}
                    </div>
                    <div className="card">
                        <i className="ri ri-parking-box-line"></i>
                        <h3>Free parking</h3>
                        {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque assumenda iste aut sunt quas fugit repellendus
                        rerum ut corrupti nam neque provident error laudantium,
                        accusamus voluptas labore blanditiis magni minus.
                    </p> */}
                    </div>
                    <div className="card" id="card-black">
                        <i className="ri ri-restaurant-line"></i>
                        <h3>Dining</h3>
                        {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque assumenda iste aut sunt quas fugit repellendus
                        rerum ut corrupti nam neque provident error laudantium,
                        accusamus voluptas labore blanditiis magni minus.
                    </p> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
