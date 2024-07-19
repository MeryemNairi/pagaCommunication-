import * as React from 'react';
import { NewsService } from './NewsService';
import styles from './News.module.scss';

const News: React.FC = () => {
  const [newsItems, setNewsItems] = React.useState<string[]>([]);
  const [paused, setPaused] = React.useState<boolean>(false);

  React.useEffect(() => {
    const newsService = new NewsService();

    const fetchNews = async () => {
      const items = await newsService.getNewsItems();
      setNewsItems(items.map(item => item.Title)); // Fetching Data from the 'Title' field
    };

    fetchNews();
  }, []);

  const handleMouseEnter = () => {
    setPaused(true);
  };

  const handleMouseLeave = () => {
    setPaused(false);
  };

  const handleClick = () => {
    setPaused(true);
  };

  return (
    <div className={`${styles.News} ${paused ? styles.paused : ''}`}>
      <div className={styles.News_holder}>
        <div 
          className={styles.News_content}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {newsItems.map((news, index) => (
            <React.Fragment key={index}>
              <span>{news}</span>
              {index < newsItems.length - 1 && (
                <svg width="30" height="25" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logo}>
                  <path d="M0 14.3725L16.0031 0H34.002C38.4186 0 42 3.24086 42 7.23749V23.5186L25.997 38V18.8559C25.997 16.3644 23.7603 14.3533 21.0071 14.3661H0.00708477L0 14.3725Z" fill="white"/>
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
