function Hero() {
    // let menu = document.querySelector('#menu-icon');
    // let navlist = document.querySelector('.navlist');

    // menu.onclick = () => {
    //     menu.classList.toggle('bx-x');
    //     navlist.classList.toggle('open');
    // };
    return (
        <>
            <section className="hero">
                <div className="hero-text">
                    {/* <h5>✨ Unwind. Indulge. Discover. ✨</h5> */}
                    <h1>
                        Welcome to Hotel <br />
                        Ambasewana
                    </h1>
                    <p>Where Heritage Meets Luxury!</p>
                </div>
            </section>
            <div className="icons">
                <a href="">
                    <i className="bx bxl-facebook"></i>
                </a>
                <a href="">
                    <i className="bx bxl-youtube"></i>
                </a>
                <a href="">
                    <i className="bx bxl-twitter"></i>
                </a>
            </div>
            <div className="scroll">
                <a href="#">
                    <i className="bx bx-down-arrow-alt"></i>
                </a>
            </div>
        </>
    );
}

export default Hero;
