import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useQuery from '../hooks/useQuery';
import Banner from '../components/Banner';

const Home = () => {

    let { id } = useParams(),
        type = useQuery();
    const [state, setState] = useState({
        id: null,
        title: null,
        image: null,
        author: null,
        description: null
    });

    useEffect(() => {
        fetch('/data.json', {
            method: 'GET',
            mode: 'no-cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            referrerPolicy: 'no-referrer',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(rq => {
            return rq.json();
        }).then(rs => {
            rs.sections.forEach(s => {
                if (s.sectionID.toString() === type.get('type')) {
                    s.items.forEach(i => {
                        if (i.id.toString() === id) {
                            setState({
                                id: i.id,
                                title: i.title,
                                image: i.image,
                                author: i.author,
                                description: i.description
                            })
                        }
                    });
                }
            });
        });
    });

    const scrollToTopOnNavigate = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="root" onLoad={scrollToTopOnNavigate}>
            <main role="main">
                <Banner is-page-banner={true} data={state} />
                <section className="section page-content">
                    <p>ID: {id}, PostType: {type.get('type')} Item: {state.title}</p>
                </section>
            </main>
        </div>
    );
};

export default Home;