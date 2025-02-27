function Homepage() {
    function showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    }

    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }
    return (
        <>
            <nav>
                <ul className="sidebar">
                    <li onClick={hideSidebar}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#000"
                                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                            />
                        </svg>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Forum</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <ul>
                    <li className="hideOnMobile">
                        <a href="#">Hotel Ambasewana</a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="#">Products</a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="#">About</a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="#">Forum</a>
                    </li>
                    <li className="hideOnMobile">
                        <a href="#">Contact</a>
                    </li>
                    <li onClick={showSidebar} className="menu-btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#000"
                                fillRule="evenodd"
                                d="M20.75 7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75"
                                clipRule="evenodd"
                            />
                        </svg>
                    </li>
                </ul>
            </nav>
            <div className="background-image">
                <div className="text-content">
                    <h2>Welcome To Hotel Ambasewana</h2>
                </div>
            </div>
        </>
    );
}

export default Homepage;
