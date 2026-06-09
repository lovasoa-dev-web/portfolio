import { forwardRef } from 'react';
import styles from './Button.module.css';

const Button = forwardRef(({ children, className, href, variant = 'solid', ...props }, ref) => {
  const Component = href ? 'a' : 'button';
  const classNames = [styles.button, styles[variant], className].filter(Boolean).join(' ');

  return (
    <Component ref={ref} className={classNames} href={href} {...props}>
      {children}
    </Component>
  );
});

export default Button;
