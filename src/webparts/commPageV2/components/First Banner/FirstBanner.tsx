import * as React from 'react';
import styles from './FirstBanner.module.scss';

interface FirstBannerProps {
    onShowSavoirPlus: () => void;
}

const FirstBanner: React.FC<FirstBannerProps> = ({ onShowSavoirPlus }) => {
    return (
        <div className={styles.FirstBanner_container}>
            <div className={styles.background}>
                <div className={styles.bg_left}>

                </div>
                <div className={styles.bg_right}>

                </div>
            </div>
            <div className={styles.second_layer}>

            </div>
            <div className={styles.content_layer}>
            <div className={styles.FB_content}>
                        <p>
                            
                            Unite,<span style={{color:'#044124'}}> Communicate,</span> <span style={{color:'#8EB1E3'}}>Succeed,</span>
                            
                        </p>
                    </div>
                    <div className={styles.FB_card}>
                        <div className={styles.card}>
                            <div className={styles.card_title}>
                                <p>Rencontrez Notre Équipe de Communication aujourd'hui !</p>
                            </div>
                            <div className={styles.card_content}>
                                <p>Découvrez les personnes qui donnent vie à nos projets de communication. Notre équipe dévouée et créative est là pour vous connecter et innover. Explorez maintenant notre équipe exceptionnelle.</p>
                            </div>
                            <button className={styles.card_btn} onClick={onShowSavoirPlus}>
                                Découvrir plus
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default FirstBanner;
