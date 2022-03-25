import FastAverageColor from "fast-average-color";
import { Link } from "react-router-dom";

const ArticleSkeleton = props => {

    return (
        <article className="item-skeleton" data-key={props.id}>
            <div className="skeleton-inner">
                <div className="skeleton-image"></div>
                <div className="skeleton-content">
                    <h3 className="skeleton-title"></h3>
                    <p className="skeleton-published"></p>
                    <p className="skeleton-excerpt"></p>
                    <p className="skeleton-excerpt"></p>
                    <p className="skeleton-excerpt"></p>
                </div>
            </div>
        </article>
    );
};

export default ArticleSkeleton;