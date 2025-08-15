import styles from './InputCurrency.module.css'

function InputCurrency() {
    return(
        <section className={styles.containerInput}>
            <input type="text" />
            <input type="text" />
        </section>
    );
}

export default InputCurrency