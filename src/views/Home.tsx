import SectionItems from '../components/SectionItems';
import Article from '../components/Article';
import { useParams } from 'react-router-dom';

const Home = props => {
    let { id } = useParams();
    return (
        <div className="root">


            <main role="main">

                <section className="banner">
                    <img className="bg-image" src="https://via.placeholder.com/1920/1080" draggable="false" alt="" />
                    <div className="overlay"></div>
                    <div className="banner-container">

                    </div>
                </section>

                <SectionItems
                    title={props.test + id}
                    articles={new Array(6).fill(null).map((_, index) => {
                        const key = index + 1;
                        return <Article id={index} key={key} />
                    })}
                />
                <SectionItems
                    title="Новости"
                    articles={new Array(6).fill(null).map((_, index) => {
                        const key = index + 1;
                        return <Article id={index} key={key} />
                    })}
                />
                <SectionItems
                    title="Новости"
                    articles={new Array(6).fill(null).map((_, index) => {
                        const key = index + 1;
                        return <Article id={index} key={key} />
                    })}
                />
            </main>
        </div >
    )
};

export default Home;