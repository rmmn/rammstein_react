import FastAverageColor from "fast-average-color";
import { useState } from "react";

const Banner = props => {
    const inputData = {
        is_page_banner: props['is-page-banner'],
        data: props.data,
    },
        [img_color, setImgColor] = useState({
            is_dark: null,
            is_light: null
        });

    if (inputData.is_page_banner) {

        const getAverageColor = (e) => {
            const fac = new FastAverageColor(),
                image = e.target as HTMLImageElement,
                overlay = document.querySelector('.post-cover>.overlay') as HTMLDivElement,
                coverContent = document.querySelector('.post-cover-content') as HTMLDivElement;

            fac.getColorAsync(image).then(color => {
                //image.style.boxShadow = `0 5px 17px 4px ${color.rgba.replace('1)', '.9)')}`;
                overlay.style.backgroundColor = color.rgba.replace('1)', '.7)');
                console.log("is_dark_f: ", color.isDark);
                console.log("is_light_f: ", color.isLight);

                if (color.isLight)
                    coverContent.classList.add('is-light')
                else
                    coverContent.classList.remove('is-light')
            })
        }

        return (
            <section className="banner post-cover">
                <img
                    className="bg-image"
                    src={inputData.data.image}
                    alt={inputData.data.title}
                    draggable="false"
                />
                <div className="overlay"></div>
                <div className="banner-container">
                    <img
                        src={inputData.data.image}
                        alt={inputData.data.title}
                        draggable="false"
                        className="post-cover-image"
                        onLoad={getAverageColor}
                    />
                    <div className="post-cover-inner">
                        <div className="post-cover-content">
                            <h2 className="post-title">{inputData.data.title}</h2>
                            <h4 className="post-author">{inputData.data.author}</h4>
                        </div>
                    </div>
                </div>
            </section>
        );
    } else {

        return (
            <section className="banner">
                <img className="bg-image" src="https://via.placeholder.com/1920/1080" draggable="false" alt="" />
                <div className="overlay"></div>
                <div className="banner-container">

                </div>
            </section>
        )
    }
};


export default Banner;