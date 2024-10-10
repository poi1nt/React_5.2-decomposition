/**
 * Компонент Header: отвечает за верхнюю часть с логотипом, навигацией и строкой поиска.
 */

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Поисковик</div>
      <nav>
        <ul>
          <li>Видео</li>
          <li>Картинки</li>
          <li>Новости</li>
          <li>Карты</li>
          <li>Маркет</li>
          <li>Переводчик</li>
          <li>Эфир</li>
          <li>ещё</li>
        </ul>
      </nav>

      <div className="search__bar">
        <input type="text" placeholder="Поиск" />
        <button className="btn">Найти</button>
      </div>
    </header>
  );
};
