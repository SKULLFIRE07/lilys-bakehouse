import styles from './Button.module.css';

export default function Button({ children, variant = 'primary', ...props }) {
    return (
        <button className={`${styles.button} ${variant === 'secondary' ? styles.secondary : ''}`} {...props}>
            {children}
        </button>
    );
}
