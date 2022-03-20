import { Link } from "react-router-dom";

const Article = props => {
    return (
        <article className="item">
            <Link to={"/test/" + props.id}>
                <img className="item-image" src="https://via.placeholder.com/750/750" alt="" />
                <div className="item-content">
                    <h3 className="item-title">Boring Girls</h3>
                    <p className="item-published">Sara Taylor</p>
                    <p className="item-excerpt">Amazing, very interesting novel by Sara Taylor. Must read for everyone!
                    </p>
                </div>
            </Link>
        </article>
    );
};

export default Article;