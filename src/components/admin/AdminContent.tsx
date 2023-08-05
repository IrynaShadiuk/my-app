import React from 'react';
import AdminMenu from './AdminMenu';

const AdminContent: React.FC = () => {
  return (
    <div>
      <header>Admin Page</header>
      <main>
        <h1>Ласкаво просимо до сторінки Адмін</h1>
        <AdminMenu />
      </main>
    </div>
  );
};

export default AdminContent;
