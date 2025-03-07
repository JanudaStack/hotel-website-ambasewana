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
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Aspernatur at perspiciatis, error sequi veniam
                            dignissimos. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Aliquam necessitatibus numquam,
                            molestias sunt voluptates vero. Odit eaque at
                            consequuntur maiores minima accusantium, quisquam
                            nemo id repudiandae qui laboriosam tempore
                            aspernatur?
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
