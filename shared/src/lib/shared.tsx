import styles from './shared.module.css';

export function Shared({title}) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to {title}</h1>
    </div>
  );
}

export default Shared;
