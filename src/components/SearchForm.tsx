const SearchForm = props => {
    return (
        <form action="" className="search-form" method="get">
            <input className="search-input" type="search" name="s" id="s" placeholder="Поиск..." />
            <button className="button search-form-button" type="submit"><i className="icon search"></i></button>
        </form>
    );
};

export default SearchForm;