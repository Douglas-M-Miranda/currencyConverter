import { useState } from 'react';
import styles from './InputCurrency.module.css'
import ConversionResult from './ConversionResult'

import { ApiCurrencyConverter } from '../hooks/ApiCurrencyConverter'

export interface ICountries {
    base: string,
    target: string,
}

function InputCurrency({ base, target }: ICountries) {
    const [amount, setAmount] = useState<number | null>(null);
    const [error, setError] = useState("");
    const [converted, setConverted] = useState<number | null>(null);
    const [rateTarget, setRateTarget] = useState<number | null>(null);

    async function handleConvert() {
        try {
            const result = await ApiCurrencyConverter({ base, target, amount });
            setConverted(result.result);
            setRateTarget(result.rate)
            setAmount(null);
            setError("");
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError(String(err));
            }
        }
    }

    return (
        <section>
            {error !== "" && (
                <p style={{ color: 'red', fontSize: '1.2rem' }}>
                    Error: {error}
                </p>
            )}
            <div className={styles.containerInput}>
                <input
                    type="text"
                    placeholder='Enter a value'
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
                
                <button onClick={handleConvert} >Converter</button>
            </div>

            <ConversionResult base={base} target={target} converted={converted} rateTarget={rateTarget} />
        </section>
    );
}


export default InputCurrency