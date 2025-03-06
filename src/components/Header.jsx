import logo from '../assets/logo/logo-1.png';

function Header() {
    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    };

    const closeSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    };
    return (
        <>
            <div className="bg-img"></div>
            <nav>
                <ul className="sidebar">
                    <li className="close-btn" onClick={closeSidebar}>
                        <i className="bx bx-x"></i>
                    </li>
                    <li>
                        <a href="">About Us</a>
                    </li>
                    <li>
                        <a href="">Rooms & Accommodation</a>
                    </li>
                    <li>
                        <a href="">Restaurant & Dining</a>
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
                </ul>
                <ul className="navbar">
                    <li className="logo">
                        <a href="#home">
                            <img src={logo} alt="" />
                        </a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="">Rooms & Accommodation</a>
                    </li>

                    {/* <li className="hideOnMobile">
                        <a href="">Restaurant & Dining</a>
                    </li> */}
                    <li className="hideOnMobile">
                        <a href="">Events & Functions</a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="">Gallery</a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="">Location & Contact</a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="">About Us</a>
                    </li>
                    <li className="menu-btn" onClick={showSidebar}>
                        <a>
                            <i className="bx bx-menu"></i>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="text-container">
                <div className="text-content" data-aos="fade-right">
                    <h2>
                        {' '}
                        Welcome to Hotel <br />
                        <span>Ambasewana</span>{' '}
                    </h2>
                    <p>- Where Heritage Meets Luxury!</p>
                </div>
            </div>
        </>
    );
}

export default Header;
