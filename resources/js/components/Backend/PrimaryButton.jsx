import { Button } from '@/components/ui/button';
import { forwardRef, useRef } from 'react';

export default forwardRef(function PrimaryButton(
  { className = '', disabled, children, ...props },
  ref
) {
  const buttonEl = ref ? ref : useRef(null);

  return (
    <button
      {...props}
      className={`inline-flex items-center px-4 py-2 bg-sky-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-sky-700 focus:bg-sky-700 active:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
        disabled && 'opacity-25'
      } ${className}`}
      disabled={disabled}
      ref={buttonEl}
    >
      {children}
    </button>
  );
});
