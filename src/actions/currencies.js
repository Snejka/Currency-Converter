export const SWAP_CURRENCY = 'SWAP_CURRENCY'
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
export const CHANGE_BASE_CURENCY = 'CHANGE_BASE_CURENCY';
export const CHANGE_QUOTE_CURENCY = 'CHANGE_QUOTE_CURENCY';
export const GET_INITIAL_CONVERSION = 'GET_INITIAL_CONVERSION';

export const CONVERSION_SUCCESS = 'CONVERSION_SUCCESS';
export const CONVERSION_ERROR = 'CONVERSION_ERROR';

export const swapCurrencies = () => ({
    type: SWAP_CURRENCY,
});

export const changeCurrencyAmount = (amount) => ({
    type: CHANGE_CURRENCY_AMOUNT,
    amount: parseFloat(amount),
});

export const changeBaseCurrency = (currency) => ({
    type: CHANGE_BASE_CURENCY,
    currency
});

export const changeQuoteCurrency = (currency) => ({
    type: CHANGE_QUOTE_CURENCY,
    currency
});

export const getInitialConversion = () => ({
    type: GET_INITIAL_CONVERSION,
})


