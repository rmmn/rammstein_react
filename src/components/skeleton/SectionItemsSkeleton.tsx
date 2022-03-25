const SectionItemsSkeleton = props => {
    return (
        <section className="section news" >
            <div className="section-title">
                <h2 className="title">{props.title}</h2>
                <button className="button read-more secondary">
                    <i className="icon right"></i>
                </button>
            </div>

            <section className="section-list news-items sectionScrollContainer">
                {
                    props.articles?.map(article => {
                        return article
                    })
                }
            </section>
        </section>
    )
};

export default SectionItemsSkeleton;