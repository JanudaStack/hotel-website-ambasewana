import logo from '../assets/logo/logo-1.png';

function Header() {
    return (
        <>
            <header>
                <a href="#" className="logo">
                    <img src={logo} alt="" width={'150px'} />
                </a>
                <ul className="navlist">
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

                <div className="right-content">
                    <div className="bx bx-menu" id="menu-icon"></div>
                </div>
            </header>
        </>
    );
}

export default Header;
