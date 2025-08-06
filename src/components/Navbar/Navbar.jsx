import { navLinks } from '../../../constants';
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
        <header>
            <nav>
                <ul className="sidebar">
                    <li className="close-btn" onClick={closeSidebar}>
                        <i className="bx bx-x"></i>
                    </li>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <ul className="navbar">
                    <li className="logo">
                        <a href="#home">
                            <img
                                src="/assets/logo/logo-1.png"
                                alt="site-logo"
                            />
                        </a>
                    </li>
                    {navLinks.map((link) => (
                        <li key={link.id} className="hideOnMobile">
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                    <li className="menu-btn" onClick={showSidebar}>
                        <a>
                            <i className="bx bx-menu"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
