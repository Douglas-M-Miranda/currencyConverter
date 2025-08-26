import { useState } from 'react';
import { Repeat } from 'lucide-react';
import Select from 'react-select';
import styles from './CountrySelector.module.css';

import { ApiListCurrencies } from '../hooks/ApiListCurrencies';
import InputCurrency from '../components/InputCurrency';

function CountrySelector() {
    const currenciesList = ApiListCurrencies();
    const option = currenciesList.map((c) => ({
        value: c[0],
        label: c[1],
    }));

    // Base
    const [catchBaseCurrency, setCatchBaseCurrency] = useState<string>(""); // value base
    const [catchBaseLabel, setCatchBaseLabel] = useState<string>("");       // label base

    const handleBaseCurrency = (option: any) => {
        setCatchBaseCurrency(option.value);
        setCatchBaseLabel(option.label);
    };

    // Target
    const [catchTargetCurrency, setCatchTargetCurrency] = useState<string>(""); // value target
    const [catchTargetCurrencyLabel, setCatchTargetCurrencyLabel] = useState<string>(""); // label target

    const handleTargetCurrency = (option: any) => {
        setCatchTargetCurrency(option.value);
        setCatchTargetCurrencyLabel(option.label);
    };

    // Switch
    const switchCurrency = () => {
        const prevBaseCurrency = catchBaseCurrency;
        const prevBaseLabel = catchBaseLabel;

        setCatchBaseCurrency(catchTargetCurrency);
        setCatchBaseLabel(catchTargetCurrencyLabel);

        setCatchTargetCurrency(prevBaseCurrency);
        setCatchTargetCurrencyLabel(prevBaseLabel);
    };

    return (
        <div>
            <div className={styles.containerCountries}>
                <Select
                    options={option}
                    value={
                        catchBaseCurrency
                            ? { value: catchBaseCurrency, label: catchBaseLabel }
                            : null
                    }
                    onChange={handleBaseCurrency}
                />

                <button onClick={switchCurrency}><Repeat /></button>

                <Select
                    options={option}
                    value={
                        catchTargetCurrency
                            ? { value: catchTargetCurrency, label: catchTargetCurrencyLabel }
                            : null
                    }
                    onChange={handleTargetCurrency}
                />
            </div>

            <InputCurrency base={catchBaseCurrency} target={catchTargetCurrency} />
        </div>
    );
}

export default CountrySelector;
