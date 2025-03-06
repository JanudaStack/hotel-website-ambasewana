import img1 from '../assets/Events/1.jpg';
import img2 from '../assets/Events/2.jpg';
import img3 from '../assets/Events/3.jpg';

const Events = () => {
    return (
        <>
            <div id="card-area">
                <div className="heading">
                    <h2>Gallery</h2>
                </div>
                <div className="wrapper">
                    <div className="box-area">
                        <div className="box">
                            <img src={img1} alt="" />
                            <div className="overlay">
                                <h3>Card</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Numquam, reiciendis!
                                </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="box">
                            <img src={img2} alt="" />
                            <div className="overlay">
                                <h3>Card</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Numquam, reiciendis!
                                </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="box">
                            <img src={img3} alt="" />
                            <div className="overlay">
                                <h3>Card</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Numquam, reiciendis!
                                </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;
