import { galleryImgs } from '../../constants';

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
                    {/* Loop through each column object in the gallerImgs array */}
                    {galleryImgs.map((column) => (
                        // Each 'dream' div represents a column, using a unique colId as the key
                        <div key={column.colId} className="dream">
                            {/* Loop through each image in the column's colData array */}
                            {column.colData.map((imgSrc, imgId) => (
                                // Render each image with a unique key and image path
                                <div key={imgId} data-aos="zoom-in">
                                    <img src={imgSrc.imgPath} alt="image" />
                                </div>
                            ))}
                        </div>
                    ))}
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
