import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FloatingLabelInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: string;
  textarea?: boolean;
  rows?: number;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  error,
  textarea = false,
  rows = 4,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const isFloating = isFocused || value.length > 0;

  const InputComponent = textarea ? 'textarea' : 'input';

  return (
    <div className="relative">
      <div className="relative">
        <motion.label
          htmlFor={id}
          animate={{
            y: isFloating ? -28 : 0,
            scale: isFloating ? 0.85 : 1,
            x: isFloating ? -8 : 0,
          }}
          transition={{ duration: 0.2 }}
          className={`absolute left-4 top-4 pointer-events-none transition-colors ${
            isFloating
              ? 'text-jamia-primary font-medium'
              : error
              ? 'text-red-500'
              : 'text-gray-500'
          }`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </motion.label>

        {React.createElement(InputComponent, {
          ref: inputRef as any,
          id,
          name,
          type: textarea ? undefined : type,
          rows: textarea ? rows : undefined,
          value,
          onChange,
          onFocus: () => setIsFocused(true),
          onBlur: () => setIsFocused(false),
          required,
          className: `input-modern pt-6 pb-2 ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : isFocused
              ? 'border-jamia-primary'
              : ''
          } ${textarea ? 'resize-none' : ''}`,
        })}
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-500 flex items-center space-x-1"
        >
          <span>⚠</span>
          <span>{error}</span>
        </motion.p>
      )}
    </div>
  );
};

export default FloatingLabelInput;

