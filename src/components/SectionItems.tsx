import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const SectionItems = props => {
    const [isLeftClicked, isRightClicked] = [false, false];
    const newsHideButtons = () => {
        const section = document.querySelectorAll('.section')

        section.forEach((sc, key) => {
            const scrollableContent = sc.querySelector('.simplebar-content-wrapper') as HTMLDivElement,
                leftButton = sc.querySelector('.scroll-buttons>.left') as HTMLButtonElement,
                rightButton = sc.querySelector('.scroll-buttons>.right') as HTMLButtonElement;

            leftButton.dataset.key = key.toString();
            rightButton.dataset.key = key.toString();

            if (scrollableContent.scrollLeft > 0) {
                leftButton.style.display = 'flex';
                leftButton.animate([{
                    opacity: 0
                }, {
                    opacity: 1
                }]).onfinish = (e) => {
                    leftButton.style.opacity = '1';
                }
            } else {
                leftButton.animate([{
                    opacity: 1
                }, {
                    opacity: 0
                }]).onfinish = (e) => {
                    leftButton.style.display = 'none';
                    leftButton.style.opacity = '0';
                }
            }

            rightButton.addEventListener('mouseenter', () => {
                scrollableContent.scrollTo({
                    left: scrollableContent.scrollLeft + 23,
                    behavior: 'smooth'
                })
            })

            rightButton.addEventListener('mouseleave', () => {
                scrollableContent.scrollTo({
                    left: scrollableContent.scrollLeft - 23,
                    behavior: 'smooth'
                })
            })

            leftButton.addEventListener('mouseenter', () => {
                scrollableContent.scrollTo({
                    left: scrollableContent.scrollLeft - 23,
                    behavior: 'smooth'
                })
            })

            leftButton.addEventListener('mouseleave', () => {
                scrollableContent.scrollTo({
                    left: scrollableContent.scrollLeft + 23,
                    behavior: 'smooth'
                })
            })

            scrollableContent.addEventListener('scroll', e => {
                //left
                if (scrollableContent.scrollLeft > 0) {
                    leftButton.style.display = 'flex';
                    leftButton.animate([{
                        opacity: 0
                    }, {
                        opacity: 1
                    }]).onfinish = (e) => {
                        leftButton.style.opacity = '1';
                    }
                } else {
                    leftButton.animate([{
                        opacity: 1
                    }, {
                        opacity: 0
                    }]).onfinish = (e) => {
                        leftButton.style.display = 'none';
                        leftButton.style.opacity = '0';
                    }
                }

                // right
                if (scrollableContent.scrollLeft == (scrollableContent.scrollWidth - scrollableContent.clientWidth)) {
                    rightButton.animate([{
                        opacity: 1
                    }, {
                        opacity: 0
                    }]).onfinish = (e) => {
                        rightButton.style.display = 'none';
                        rightButton.style.opacity = '0';
                    }
                } else {
                    rightButton.style.display = 'flex';
                    rightButton.animate([{
                        opacity: 0
                    }, {
                        opacity: 1
                    }]).onfinish = (e) => {
                        rightButton.style.opacity = '1';
                    }
                }
            });

            scrollableContent.addEventListener('mouseover', e => {
                scrollableContent.addEventListener('wheel', (w: WheelEvent) => {

                    if (scrollableContent.scrollLeft > 0) {
                        w.preventDefault()
                        scrollableContent.scrollLeft += (w.deltaY * 2);
                    }

                    if (scrollableContent.scrollLeft != (scrollableContent.scrollWidth - scrollableContent.clientWidth)) {
                        w.preventDefault()
                        scrollableContent.scrollLeft += (w.deltaY * 2);
                    }

                })
            });

            scrollableContent.addEventListener('mouseleave', e => {
                scrollableContent.removeEventListener('wheel', () => {
                    console.log('event wheel rempved');
                })
            });
        })
    };

    const newsScrollClick = (e) => {
        const btn = e.currentTarget as HTMLButtonElement,
            btnDirection = btn.dataset.direction,
            section = document.querySelectorAll('.sectionScrollContainer')

        section.forEach((sc, key) => {
            const scrollableContent = sc.querySelector(`.simplebar-content-wrapper`) as HTMLDivElement,
                content = scrollableContent.querySelector('.simplebar-content') as HTMLDivElement,
                item = content.querySelectorAll('.item')[0] as HTMLDivElement,
                scrollLeft = scrollableContent.scrollLeft;

            if (btnDirection == 'left' && btn.dataset.key == key.toString()) {
                if (scrollLeft > 0) {

                    scrollableContent.scrollTo({
                        left: scrollLeft - item.clientWidth,
                        behavior: 'smooth'
                    })
                }
            } else if (btnDirection == 'right' && btn.dataset.key == key.toString()) {
                if (scrollLeft < content.clientWidth) {
                    scrollableContent.scrollTo({
                        left: scrollLeft + item.clientWidth,
                        behavior: 'smooth'
                    })
                }
            }
        })
    };

    return (
        <section className="section news" onLoad={() => newsHideButtons()} >
            <div className="section-title">
                <h2 className="title">{props.title}</h2>
            </div>

            <div className="scroll-buttons">
                <button className="left button" data-direction="left" onClick={newsScrollClick}>
                    <i className="icon left"></i>
                </button>
                <button className="right button" data-direction="right" onClick={newsScrollClick}>
                    <i className="icon right"></i>
                </button>
            </div>

            <SimpleBar className="section-list news-items sectionScrollContainer" data-simplebar>
                {
                    props.articles?.map(article => {
                        return article
                    })
                }
            </SimpleBar>
        </section>
    )
};

export default SectionItems;