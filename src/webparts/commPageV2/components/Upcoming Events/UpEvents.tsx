import * as React from 'react';
import styles from './UpEvents.module.scss';

import { EventsItem, fetchLatestNewsData } from './Fetchdata/FetchData'; // Assuming you have the service file





export interface ICommentV1Props {
    description: string;
}

export interface ICommentV1State {
    newComment: string;
    userEmail: string;
}



const UpEvents: React.FC = () => {
    const [events, setEvents] = React.useState<EventsItem[]>([]); // State to hold the fetched events

    // Fetch data on component mount
    React.useEffect(() => {
        async function fetchEvents() {
            try {
                const data = await fetchLatestNewsData();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        }
        fetchEvents();
    }, []);

    //------------------------------->scrolling behavior<----------------
    const cardsContainerRef = React.useRef<HTMLDivElement>(null);


    const scrollLeft = () => {
        if (cardsContainerRef.current) {
            cardsContainerRef.current.scrollBy({ left: -500, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (cardsContainerRef.current) {
            cardsContainerRef.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.UpEvents}>
            <div className={styles.UpE_left}>

                <div className={styles.UpEl_title}>
                    <div className={styles.title_icon}>
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.57008 2.75C10.1442 2.75 10.6096 3.17619 10.6096 3.70192V5.62214C11.5316 5.60577 12.5651 5.60577 13.728 5.60577H13.728H19.272H19.272C20.4349 5.60577 21.4684 5.60577 22.3904 5.62214V3.70192C22.3904 3.17619 22.8558 2.75 23.4299 2.75C24.004 2.75 24.4694 3.17619 24.4694 3.70192V5.70636C26.4643 5.85265 27.7739 6.21167 28.7361 7.09277C29.6982 7.97386 30.0903 9.17316 30.25 11V12.375H2.75V11C2.90974 9.17316 3.30178 7.97386 4.26393 7.09277C5.22608 6.21167 6.5357 5.85265 8.53059 5.70636V3.70192C8.53059 3.17619 8.99598 2.75 9.57008 2.75Z" fill="#002920" />
                            <path opacity="0.5" d="M30.25 19.25V16.5C30.25 15.3463 30.2326 13.2897 30.2148 12.375H2.75805C2.74032 13.2897 2.75776 15.3463 2.75776 16.5V19.25C2.75776 24.4354 2.75776 27.0282 4.36821 28.6391C5.97867 30.25 8.57067 30.25 13.7547 30.25H19.2531C24.4371 30.25 27.0291 30.25 28.6395 28.6391C30.25 27.0282 30.25 24.4354 30.25 19.25Z" fill="#00966C" />
                            <path d="M24.75 22.6875C24.75 23.8266 23.8266 24.75 22.6875 24.75C21.5484 24.75 20.625 23.8266 20.625 22.6875C20.625 21.5484 21.5484 20.625 22.6875 20.625C23.8266 20.625 24.75 21.5484 24.75 22.6875Z" fill="#002920" />
                        </svg>

                    </div>
                    <div className={styles.title}>
                        <p>
                            Evénements à venir
                        </p>
                    </div>
                </div>

                <div className={styles.CardGridContain} ref={cardsContainerRef}>
                    <div className={styles.Cards_container} >


                        {events.map((event, index) => (

                            <div key={index} className={styles.card}>
                                <div className={styles.card_image}>
                                    {/* Use the ImgUrl from the event */}
                                    <img src={event.ImgUrl} alt={event.Event} />

                                </div>
                                <div className={styles.card_content}>
                                    <div className={styles.EvTitle}>
                                        <p>{event.Event}</p>
                                    </div>
                                    <div className={styles.EvDescription}>
                                        <p>{event.Desciption}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.controll_btns}>

                    <button className={styles.btn_left} onClick={scrollLeft}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33684 8.00745L7.34001 12.0088M3.33684 8.00745L7.3382 4.00428M3.33684 8.00745L12.6755 8.00534" stroke="#044123" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button className={styles.btn_right} onClick={scrollRight}>
                        <p>
                            Défilez
                        </p>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6749 8.00745L8.67171 12.0088M12.6749 8.00745L8.67352 4.00428M12.6749 8.00745L3.33626 8.00534" stroke="#044123" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpEvents;

