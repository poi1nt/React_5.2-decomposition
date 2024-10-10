import { NewsItem } from '../NewsItem';

/**
 * Компонент NewsList: отвечает за список новостей.
 */

export const NewsList: React.FC = () => {
  const newsItems = [
    { icon: '🔥', text: 'Новость 1', link: '#' },
    { icon: '🔥', text: 'Новость 2', link: '#' },
    { icon: '🔥', text: 'Новость 3', link: '#' },
    { icon: '🔥', text: 'Новость 4', link: '#' },
    { icon: '🔥', text: 'Новость 5', link: '#' },
  ];

  return (
    <div className="news__list">
      {newsItems.map((item, index) => (
        <NewsItem key={index} icon={item.icon} text={item.text} link={item.link} />
      ))}
    </div>
  );
};
