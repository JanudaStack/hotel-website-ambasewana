const Location = () => {
    return (
        <>
            <div className="location-container">
                <div className="heading">
                    <h2>Our Location</h2>
                </div>

                <div className="map-container">
                    <div className="box">
                        <p>
                            Nestled in the heart of Ussapitiya, Hotel Ambasewana
                            Walawwa is surrounded by breathtaking natural
                            beauty, cultural heritage, and serene landscapes.
                            Conveniently located away from the hustle and
                            bustle, our hotel offers a perfect retreat for
                            relaxation while still being close to key
                            attractions. Guests can explore scenic waterfalls,
                            ancient temples, lush green forests, and local
                            markets, making it an ideal destination for nature
                            lovers, adventure seekers, and cultural explorers
                            alike. Whether you&aposre here for a peaceful
                            getaway or an exciting adventure, our location
                            ensures an unforgettable experience. <br />
                            <br />
                            🌿 Discover the beauty of Ussapitiya with us!
                        </p>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1992934311897!2d80.45343891952979!3d7.218094284623921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3132d69b78017%3A0x2c3112c80faaa3ce!2sAmbasewana%20Walawwa!5e0!3m2!1sen!2slk!4v1741375844616!5m2!1sen!2slk"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default Location;
