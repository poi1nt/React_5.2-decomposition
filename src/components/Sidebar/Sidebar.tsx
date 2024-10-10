/**
 * Компонент Sidebar: отвечает за боковую панель с дополнительной информацией.
 */

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h2>Посещаемое</h2>
      <ul>
        <li>Посещение 1</li>
        <li>Посещение 2</li>
        <li>Посещение 3</li>
      </ul>
    </aside>
  );
};
