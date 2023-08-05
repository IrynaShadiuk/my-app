import React, { useState } from 'react';
import "./admin.scss"
import AdminContent from './AdminContent';

const AdminPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [isIncorrectPassword, setIsIncorrectPassword] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsIncorrectPassword(false);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validPassword = 'Logos123';

    if (password === validPassword) {
      setLoggedIn(true);
    } else {
        setIsIncorrectPassword(true);

    }
  };

  if (loggedIn) {
    return <AdminContent />;
  }

  return (
    <div className="admin-page">
      <p className="password-text">Введіть пароль для доступу:</p>
      <form className="password-form" onSubmit={handleFormSubmit}>
        <div className="password-input-wrapper">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder={isIncorrectPassword ? 'Невірний пароль' : 'Введіть пароль'}
            className={`password-input ${isIncorrectPassword ? 'incorrect' : ''}`}
          />
          {isIncorrectPassword && (
            <p className="error-message">Невірний пароль</p>
          )}
        </div>
        <button type="submit" className="login-button">
          Увійти
        </button>
      </form>
    </div>
  );

};

export default AdminPage;
