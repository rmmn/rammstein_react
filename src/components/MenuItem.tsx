import { Link } from "react-router-dom";

const MenuItem = (props) => {
    return (
        <li>
            <Link to={props?.url} className={"nav-link " + (props.isActive ? "active" : "")}><i className={"icon " + props?.icon}></i> {props?.text}</Link>
        </li>
    )
};

export default MenuItem;