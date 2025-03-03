import img1 from '../assets/Images/amba-1.jpg';

const About = () => {
    return (
        <>
            <div className="section-spacing"></div>
            <div className="container">
                <h2>About Us</h2>
                <div className="content">
                    <img src={img1} alt="" height={'600px'} />
                    <p>
                        Nestled in the serene countryside of Ussapitiya, Hotel
                        Ambasewana Walawwa is a timeless retreat that blends
                        heritage, luxury, and nature. Built on a rich history,
                        our hotel embodies the charm of a traditional Walawwa
                        (colonial-era mansion) while offering the comforts of a
                        modern stay. From its grand architecture to its warm
                        hospitality, every corner of our hotel tells a story of
                        elegance and tradition. Whether you&apos;re seeking a
                        peaceful escape, a family getaway, or an intimate
                        destination for special occasions, we invite you to
                        immerse yourself in the beauty and warmth of Ambasewana
                        Walawwa.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
