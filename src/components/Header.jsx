import logo from '../assets/logo/logo-1.png';

function Header() {
    const sidebar = document.querySelector('.sidebar');

    function showSidebar() {
        sidebar.style.display = 'flex';
    }
    function hideSidebar() {
        sidebar.style.display = 'none';
    }

    return (
        <>
            <header>
                <a href="#" className="logo">
                    <img src={logo} alt="" width={'150px'} />
                </a>

                <ul className="sidebar">
                    <li onClick={hideSidebar}>
                        <a>
                            <i className="bx bx-x"></i>
                        </a>
                    </li>

                    <li>
                        <a href="">About Us</a>
                    </li>
                    <li>
                        <a href="">Rooms & Accomodation</a>
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
                        <a href="">Locate Us</a>
                    </li>
                </ul>
                <ul className="navlist">
                    <li className="hideOnMobile">
                        <a href="">About Us</a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="">Rooms & Accomodation</a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="">Restaurant & Dining</a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="">Events & Functions</a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="">Gallery</a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="">Locate Us</a>
                    </li>
                    <li onClick={showSidebar} className="menu-btn">
                        <a>
                            <i className="bx bx-menu"></i>
                        </a>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;
