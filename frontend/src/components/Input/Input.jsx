import styles from "./Input.module.css";

export default function Input({ value, onChange, onClick, disabled }) {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.text}
        placeholder="Your prompt here..."
        value={value}
        onChange={onChange}
      />
      <button className={styles.btn} onClick={onClick} disabled={disabled}>
        Go
      </button>
    </div>
  );
}
