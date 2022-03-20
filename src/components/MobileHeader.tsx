import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const MobileHeader = (props) => {
    return (
        <section className="mobile-header">
            <Link to="/" className="logo">
                <img src={props.logo} alt="" />
            </Link>
            <div className="search-container-mobile">
                <SearchForm />
            </div>
        </section>
    )
};


export default MobileHeader;