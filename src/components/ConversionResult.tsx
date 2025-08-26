import styles from './ConversionResult.module.css'

interface ConversionData {
    base: string,
    target: string,
    converted: number,
    rateTarget: number
}

function ConversionResult({ base, target, converted, rateTarget }: ConversionData) {
    return (
        <section className={styles.containerResult}>
            {converted > 0 && (
                <><p>{`${converted.toFixed(2)} ${target}`}</p><span>{`1 ${base} = ${rateTarget.toFixed(2)} ${target}`}</span></>
            )}
        </section>
    );
}

export default ConversionResult;