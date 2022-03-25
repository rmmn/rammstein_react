import { Link } from "react-router-dom";


const Header = (props: any) => {
    window.addEventListener("scroll", function (event) {
        const header = document.querySelector('.header') as HTMLElement;

        if (this.scrollY > header.clientHeight / 2) {
            header.classList.add('fullwidth');
        } else {

            header.classList.remove('fullwidth');
        }
    })
    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <img src={props.logoSrc} alt="RB logo" />
                </Link>

                <nav className="nav" role="navigation">
                    <ul>
                        {
                            props.items.map((item, key) => {
                                return item
                            })
                        }
                    </ul>
                </nav>

                <button className="button search" role="button"><i className="icon search"></i></button>
            </div>
        </header>
    );
};

export default Header;