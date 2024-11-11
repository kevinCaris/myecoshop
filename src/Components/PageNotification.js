import React from 'react';
import { useCart } from './CartContext';

const PageNotification = () => {
  const { notification } = useCart();

  if (!notification) return null;

  return (
    <div className="notification">
      {notification}
    </div>
  );
};

export default PageNotification;
