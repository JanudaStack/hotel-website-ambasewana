import img1 from '../assets/Image-Gallery/1.jpg';
import img2 from '../assets/Image-Gallery/2.jpg';
import img3 from '../assets/Image-Gallery/3.jpg';
// import img4 from '../assets/Image-Gallery/4.jpg';
import img5 from '../assets/Image-Gallery/5.jpg';
import img6 from '../assets/Image-Gallery/6.jpg';
import img7 from '../assets/Image-Gallery/7.jpg';
import img8 from '../assets/Image-Gallery/8.jpg';
// import img9 from '../assets/Image-Gallery/9.jpg';
import img10 from '../assets/Image-Gallery/10.jpg';
import img11 from '../assets/Image-Gallery/11.jpg';
import img12 from '../assets/Image-Gallery/12.jpg';
// import img13 from '../assets/Image-Gallery/13.jpg';
import img14 from '../assets/Image-Gallery/14.jpg';
// import img15 from '../assets/Image-Gallery/15.jpg';
// import img16 from '../assets/Image-Gallery/16.jpg';
// import img17 from '../assets/Image-Gallery/17.jpg';
import img18 from '../assets/Image-Gallery/18.jpg';
import img19 from '../assets/Image-Gallery/19.jpg';
// import img20 from '../assets/Image-Gallery/20.jpg';
import img21 from '../assets/Image-Gallery/21.jpg';

function Gallery() {
    return (
        <>
            <div className="gallery__container">
                <div className="heading">
                    <h2>Gallery</h2>
                </div>
                <div className="image__container">
                    <div className="dream">
                        <img src={img2} alt="image" />
                        <img src={img10} alt="image" className="showOnBtn" />
                        <img src={img3} alt="image" />
                        <img src={img21} alt="image" />
                        {/* <img src={img5} alt="image" /> */}
                    </div>
                    <div className="dream">
                        <img src={img6} alt="image" />
                        <img src={img8} alt="image" className="showOnBtn" />
                        <img src={img7} alt="image" />
                        <img src={img18} alt="image" />
                        <img src={img5} alt="image" />
                    </div>
                    <div className="dream">
                        <img src={img1} alt="image" className="showOnBtn" />
                        <img src={img11} alt="image" />
                        <img src={img12} alt="image" />
                        <img src={img14} alt="image" />
                        <img src={img19} alt="image" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;
