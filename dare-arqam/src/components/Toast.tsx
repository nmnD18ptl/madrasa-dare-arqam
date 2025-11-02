import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, isVisible, onClose, duration = 5000 }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const bgColors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  };

  const icons = {
    success: <FaCheckCircle className="text-xl" />,
    error: <FaExclamationCircle className="text-xl" />,
    info: <FaCheckCircle className="text-xl" />,
  };

  return (
    <>
      {isVisible && (
        <motion.div
          key="toast"
          initial={{ opacity: 0, y: -50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -50, x: '-50%' }}
          className={`fixed top-20 left-1/2 z-[100] ${bgColors[type]} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3 min-w-[300px] max-w-[90vw]`}
        >
          <div className="flex-shrink-0">{icons[type]}</div>
          <p className="flex-1 font-medium">{message}</p>
          <button
            onClick={onClose}
            className="flex-shrink-0 hover:bg-white/20 rounded-full p-1 transition-colors"
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Toast;

