import logo from '../assets/logo/logo-1.png';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="row">
                    <div className="col">
                        <img src={logo} alt="" className="footer-logo" />
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Error, neque harum. Nesciunt laborum animi
                            recusandae! Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Quia tenetur eius deserunt.
                        </p>
                    </div>
                    <div className="col">
                        <h3>Office</h3>
                        <p>Text1</p>
                        <p>Text2</p>
                        <p>
                            Aranayaka Road, <br />
                            Ussapitiya, Mawanella, 71500 Mawanella
                        </p>
                        <p id="email">Email: ambasewanawalawwa1@gmail.com</p>
                        <h4>
                            <i className="fa-solid fa-phone"></i>
                            076 167 7739
                        </h4>
                    </div>
                    <div className="col">
                        <h3>Links</h3>
                        <ul>
                            <li>
                                <a href="">Rooms & Accomodation</a>
                            </li>
                            <li>
                                <a href="">Events & Functions</a>
                            </li>
                            <li>
                                <a href="">Gallery</a>
                            </li>
                            <li>
                                <a href="">Location & Contact</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Newsletter</h3>
                        <form>
                            <i className="fa-regular fa-envelope"></i>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                            <button type="submit">
                                {' '}
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </form>
                        <div className="social-icons">
                            <i className="fa-brands fa-whatsapp"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-square-facebook"></i>
                        </div>
                    </div>
                </div>
                <hr />
                <p id="copyright">
                    Code by Januda © 2025 - All Rights Reserved
                </p>
            </footer>
        </>
    );
};

export default Footer;
