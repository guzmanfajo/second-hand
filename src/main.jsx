import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';

const redirect = sessionStorage.redirect;

if (redirect) {
  sessionStorage.removeItem("redirect");

  window.history.replaceState(
    null,
    "",
    import.meta.env.BASE_URL + redirect
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
);