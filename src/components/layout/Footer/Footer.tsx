import React, { useState } from 'react';
import "./footer.scss"
import { ThemeContext } from '../../../ThemeProvider';
import { useContext } from 'react';

interface OrderForm {
  name: string;
  email: string;
  message: string;
}

const Footer: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as any;
  console.log("context");

  const [orderForm, setOrderForm] = useState<OrderForm>({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setOrderForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Order submitted:', orderForm);
    setOrderForm({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <footer className={`footer ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div className={"footer-top ${theme === 'dark' ? 'dark-theme' : 'light-theme'}"}>
        <h2>MAKE AN ORDER</h2>
        <p>For orders or any other questions drop a message here.</p>
        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Enter your name</label>
            <input
              className='input-1'
              type="text"
              id="name"
              name="name"
              value={orderForm.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter your email</label>
            <input
              className='input-1'
              type="email"
              id="email"
              name="email"
              value={orderForm.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Enter your message</label>
            <textarea
              className='txt-ft'
              id="message"
              name="message"
              value={orderForm.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button className="submit-btn" type="submit">SEND</button>
        </form>
      </div>
      <div className="footer-bottom">
      <div className="theme-box">
          <p>{theme}</p>
          <input 
          type="checkbox" 
          checked={theme === 'dark'} 
          onChange={toggleTheme} />
        </div>
        <p>Bohemian © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
