import logo from '/assets/logo/logo-1.png';
import '../Navbar/Navbar.css';

const Navbar = () => {
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
            <nav>
                <ul className="sidebar">
                    <li className="close-btn" onClick={closeSidebar}>
                        <i className="bx bx-x"></i>
                    </li>
                    <li>
                        <a href="#about">About Us</a>
                    </li>
                    <li>
                        <a href="#rooms&acco">Rooms & Accommodation</a>
                    </li>
                    <li>
                        <a href="">Restaurant & Dining</a>
                    </li>
                    <li>
                        <a href="#events&func">Events & Functions</a>
                    </li>
                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="#location">Location & Contact</a>
                    </li>
                </ul>
                <ul className="navbar">
                    <li className="logo">
                        <a href="#home">
                            <img src={logo} alt="" />
                        </a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="#about">About Us</a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="#events&func">Events & Functions</a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="#rooms&acco">Rooms & Accommodation</a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="#gallery">Gallery</a>
                    </li>
                    {/* <li className="hideOnMobile">
                            <a href="">Restaurant & Dining</a>
                        </li> */}
                    <li className="hideOnMobile">
                        <a href="#location">Location & Contact</a>
                    </li>

                    <li className="menu-btn" onClick={showSidebar}>
                        <a>
                            <i className="bx bx-menu"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
