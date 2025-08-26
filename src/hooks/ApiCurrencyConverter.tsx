export interface ICurrency {
    base: string;
    target: string;
    amount: number | null;
}

interface ConversionData {
    result: number;
    rate: number;
}

export async function ApiCurrencyConverter({ base, target, amount }: ICurrency): Promise<ConversionData> {
    const apiKey = import.meta.env.VITE_EXCHANGE_API_KEY;
    const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${base}/${target}/${amount}`
    );

    if (!response.ok) {
        throw new Error("Erro ao buscar conversão");
    }

    const data = await response.json();
    return {
        result: data.conversion_result,
        rate: data.conversion_rate
    }
}
