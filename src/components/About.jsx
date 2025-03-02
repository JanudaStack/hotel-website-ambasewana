import img1 from '../assets/Images/img-1.jpg';

const About = () => {
    return (
        <>
            <div className="section-spacing"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 heading">
                        <h2>About Us</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <img
                            src={img1}
                            alt=""
                            height={'500vh'}
                            width={'100%'}
                        />
                    </div>
                    <div className="col-lg-6 col-sm-12 paragraph">
                        <h2>
                            Nestled in the serene countryside of Ussapitiya,
                            Hotel Ambasewana Walawwa is a timeless retreat that
                            blends heritage, luxury, and nature. Built on a rich
                            history, our hotel embodies the charm of a
                            traditional Walawwa (colonial-era mansion) while
                            offering the comforts of a modern stay. From its
                            grand architecture to its warm hospitality, every
                            corner of our hotel tells a story of elegance and
                            tradition. Whether you&apos;re seeking a peaceful
                            escape, a family getaway, or an intimate destination
                            for special occasions, we invite you to immerse
                            yourself in the beauty and warmth of Ambasewana
                            Walawwa.
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
