import React from 'react';



interface MenuItem {
  id: number;
  title: string;
  url: string;
}

const menuItems: MenuItem[] = [
  { id: 1, title: 'Головна', url: '/admin/home' },
  { id: 2, title: 'Користувачі', url: '/admin/users' },
  { id: 3, title: 'Налаштування', url: '/admin/settings' },
];

const AdminMenu: React.FC = () => {
  return (
    <aside>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <a href={menuItem.url}>{menuItem.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AdminMenu;





