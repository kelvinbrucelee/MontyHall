import styles from "../styles/NumericInput.module.css";

interface NumericInputProps {
    text: string;
    value: number;
    onChange: (newValue: number) => void;
}

export default function NumericInput(props: NumericInputProps) {
    const decrement = () => props.onChange(props.value - 1);
    const increment = () => props.onChange(props.value + 1);

    return (
        <div className={styles.numericInput}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.buttons}>
                <button className={styles.btn} onClick={decrement}>-</button>
                <button className={styles.btn} onClick={increment}>+</button>
            </div>
        </div>
    );
}
