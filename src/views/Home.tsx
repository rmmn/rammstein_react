import SectionItems from '../components/SectionItems';
import Article from '../components/Article';
import { useEffect, useState } from 'react';
import { PostType } from '../interfaces/PostTypeEnum';
import Banner from '../components/Banner';
import { useIsMounted } from '../hooks/useIsMounted';
import ArticleSkeleton from '../components/skeleton/ArticleSkeleton';
import SectionItemsSkeleton from '../components/skeleton/SectionItemsSkeleton';

const Home = props => {
    const [state, setState] = useState({
        data: null,
        loading: true
    });
    const isMounted = useIsMounted();
    let data = null;

    useEffect((): void => {
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
            if (isMounted.current) {
                data = rs.sections;
                setState({
                    data: data,
                    loading: true
                });
            }
        }).finally(() => {
            const load = setTimeout(() => {
                setState({
                    data: data,
                    loading: false
                });
                clearTimeout(load)
            }, 2000)
        });
    }, []);

    if (!state.loading) {
        return (
            <div className="root">
                <main role="main">
                    <Banner is-page-banner={false} data={null} />
                    {
                        state.data.map((section) => {
                            return (
                                <SectionItems
                                    title={section.title}
                                    key={section.sectionID}
                                    slug={section.section_slug}
                                    articles={
                                        section.items.map((item, index) => {
                                            item.type = (section.section_slug === "news" ? PostType.News : section.section_slug === "biographies" ? PostType.Bio : PostType.Disc);
                                            const key = index + 1;
                                            return <Article id={item.id} data={item} key={key} />
                                        })
                                    }
                                />
                            )
                        })
                    }
                </main>
            </div>
        )
    } else {
        return (
            <div className="root">
                <main role="main">
                    <Banner is-page-banner={false} data={null} />
                    {
                        <SectionItemsSkeleton
                            title="Новости"
                            articles={
                                new Array(3).fill(null).map((item, index) => {
                                    const key = index + 1;
                                    return <ArticleSkeleton id={key} key={key} />
                                })
                            }
                        />
                    }
                    {
                        <SectionItemsSkeleton
                            title="Биографии"
                            articles={
                                new Array(3).fill(null).map((item, index) => {
                                    const key = index + 1;
                                    return <ArticleSkeleton id={key} key={key} />
                                })
                            }
                        />
                    }
                    {
                        <SectionItemsSkeleton
                            title="Дискография"
                            articles={
                                new Array(3).fill(null).map((item, index) => {
                                    const key = index + 1;
                                    return <ArticleSkeleton id={key} key={key} />
                                })
                            }
                        />
                    }
                </main>
            </div>
        )
    }
};

export default Home;