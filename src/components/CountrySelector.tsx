import styles from './CountrySelector.module.css'
import { Repeat } from 'lucide-react';

function CountrySelector() {
    return(
        <section className={styles.containerCountries}>
            <select name="countries" className={styles.containerSelect}>
                <option value="">Please choose an countrie</option>
                <option value="Brasileiro">Brasileiro</option>
                <option value="Estados MUTIO Nutritos">eua</option>
            </select>

            <button><Repeat /></button>

            <select name="countries" className={styles.containerSelect}>
                <option value="">Please choose an countrie</option>
                <option value="Brasileiro">Brasileiro</option>
                <option value="Estados MUTIO Nutritos">eua</option>
            </select>
        </section>
    );
}

export default CountrySelector;