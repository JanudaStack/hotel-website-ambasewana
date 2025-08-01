function Gallery() {
    const showDreamImages = () => {
        const showImages = document.querySelectorAll('.showOnBtn');
        showImages.forEach((img) => {
            img.style.display = 'block';
        });
        const moreButton = document.querySelector('.ShowImgBtn');
        moreButton.style.display = 'none';
        const lessButton = document.querySelector('.hideImgBtn');
        lessButton.style.display = 'block';
    };

    const hideDreamImages = () => {
        const hideImages = document.querySelectorAll('.showOnBtn');
        hideImages.forEach((img) => {
            img.style.display = 'none';
        });
        const lessButton = document.querySelector('.hideImgBtn');
        lessButton.style.display = 'none';
        const moreButton = document.querySelector('.ShowImgBtn');
        moreButton.style.display = 'block';
    };

    return (
        <>
            <div className="gallery__container" id="gallery">
                <div className="heading">
                    <h2>Gallery</h2>
                </div>
                <div className="image__container">
                    <div className="dream">
                        <img src="/assets/Image-Gallery/1-1.jpg" alt="image" />
                        <img src="/assets/Image-Gallery/1-2.jpg" alt="image" />
                        <img
                            src="/assets/Image-Gallery/1-3.jpg"
                            alt="image"
                            className="showOnBtn"
                            loading="lazy"
                        />
                        <img
                            src="/assets/Image-Gallery/1-4.jpg"
                            alt="image"
                            className="showOnBtn"
                            loading="lazy"
                        />
                        {/* <img src={img5} alt="image" /> */}
                    </div>
                    <div className="dream">
                        <img src="/assets/Image-Gallery/2-1.jpg" alt="image" />
                        <img src="/assets/Image-Gallery/2-2.jpg" alt="image" />
                        <img
                            src="/assets/Image-Gallery/2-3.jpg"
                            alt="image"
                            className="showOnBtn"
                            loading="lazy"
                        />
                        <img
                            src="/assets/Image-Gallery/2-4.jpg"
                            alt="image"
                            className="showOnBtn"
                            loading="lazy"
                        />
                        <img
                            src="/assets/Image-Gallery/2-5.jpg"
                            alt="image"
                            className="showOnBtn"
                            loading="lazy"
                        />
                    </div>
                    <div className="dream">
                        <img src="/assets/Image-Gallery/3-1.jpg" alt="image" />
                        <img src="/assets/Image-Gallery/3-2.jpg" alt="image" />
                        <img
                            src="/assets/Image-Gallery/3-3.jpg"
                            alt="image"
                            className="showOnBtn"
                            loading="lazy"
                        />
                        <img
                            src="/assets/Image-Gallery/3-4.jpg"
                            alt="image"
                            className="showOnBtn"
                            loading="lazy"
                        />
                        <img
                            src="/assets/Image-Gallery/3-5.jpg"
                            alt="image"
                            className="showOnBtn"
                            loading="lazy"
                        />
                    </div>
                </div>
                <button
                    type="button"
                    className="ShowImgBtn"
                    onClick={showDreamImages}
                >
                    More
                </button>
                <button
                    type="button"
                    className="hideImgBtn"
                    onClick={hideDreamImages}
                >
                    Less
                </button>
            </div>
        </>
    );
}

export default Gallery;
