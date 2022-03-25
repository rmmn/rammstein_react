import FastAverageColor from "fast-average-color";
import { Link } from "react-router-dom";

const Article = props => {

    const getAverageColor = (e) => {
        const fac = new FastAverageColor(),
            item = document.querySelector(`.item[data-key='${props.id}']`) as HTMLElement,
            image = e.target as HTMLImageElement,
            overlay = document.querySelector('.post-cover>.overlay') as HTMLDivElement,
            coverContent = document.querySelector('.post-cover-content') as HTMLDivElement;

        fac.getColorAsync(image).then(color => {
            //image.style.boxShadow = `0 5px 17px 4px ${color.rgba.replace('1)', '.9)')}`;
            item.style.backgroundColor = color.rgba;

            if (color.isLight)
                item.classList.add('is-light')
            else
                item.classList.remove('is-light')
        })
    }
    return (
        <article className="item" data-key={props.id}>
            <Link to={"/post/" + props.id + "?type=" + props.data.type}>
                <img className="item-image" src={props.data.image} alt="" onLoad={getAverageColor} />
                <div className="item-content">
                    <h3 className="item-title">{props.data.title}</h3>
                    <p className="item-published">{props.data.author}</p>
                    <p className="item-excerpt">{props.data.description}</p>
                </div>
            </Link>
        </article>
    );
};

export default Article;