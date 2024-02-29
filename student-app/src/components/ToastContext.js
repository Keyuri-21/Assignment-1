// ToastContext.js
import { createContext, useContext } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const showToast = (message) => {
    toast(message, {
      position: 'top-right',
      autoClose: 3000, 
    });
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <ToastContainer/>
    </ToastContext.Provider>
  );
};
