const About = () => {
    return (
        <>
            <div className="section-spacing"></div>
            <div className="about-container" id="about">
                <div className="heading">
                    <h2>About</h2>
                </div>
                <div className="content">
                    <div data-aos="fade-right">
                        <img
                            src="/assets/about-image/about-us.jpg"
                            alt=""
                            height={'600px'}
                        />
                    </div>

                    <div data-aos="fade-left">
                        <p id="about">
                            <span className="heading-desc">
                                Your serene escape in timeless luxury
                            </span>
                            <br />
                            <br />
                            Nestled in the serene countryside of Ussapitiya,
                            Hotel Ambasewana Walawwa is a timeless retreat that
                            blends heritage, luxury, and nature. Built on a rich
                            history, our hotel embodies the charm of a
                            traditional Walawwa (colonial-era mansion) while
                            offering the comforts of a modern stay. From its
                            grand architecture to its warm hospitality, every
                            corner of our hotel tells a story of elegance and
                            tradition. <br />
                            <br />
                            Whether you&apos;re seeking a peaceful escape, a
                            family getaway, or an intimate destination for
                            special occasions, we invite you to immerse yourself
                            in the beauty and warmth of Ambasewana Walawwa.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
