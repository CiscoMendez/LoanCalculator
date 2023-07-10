import { writable, derived} from 'svelte/store';

function createLoans(){
    /**
     * @typedef {Object} Loan
     * @property {number} amount - Loan amoun: expresed in American Dollars.
     * @property {number} rate - Loan rate: the value of interest rate per year.
     * @property {number} term - Loan term: quantity in months .
     */
    /** @type {Loan}*/
    const loan = {
        amount: 0,
        rate: 0,
        term: 0,
    };
    const {subscribe, update, set} = writable(loan);
    const methods = {
        /**
         * This method update all loan properties.
         * @param {number} amount - Loan new amount.
         * @param {number} rate - Loan new rate.
         * @param {number} term - Loan new term.
         */
        addItem(amount, rate, term ){ 
            update((obj) => ({
                 ...obj, amount: amount, rate: rate, term: term
                })) 
        },
        /**
         * This method update a selected Property
         * @param {*} propertyName 
         * @param {*} propertyValue 
         */
        update(propertyName, propertyValue){ update((obj) => obj = obj[propertyName] = propertyValue)},
    }
    return{
        subscribe,
        methods,
        set
    }
}

export const loans = createLoans();
export const monthlyPaid = derived(loans, $loans => {
    const rate = $loans.rate/100
    const anualRate = rate/12;
    const denominator = Math.pow(1 + anualRate, -$loans.term);
    const payment = (anualRate * $loans.amount)/(1 - denominator);
    return payment || 0;
})
export const totalPaid = derived([loans, monthlyPaid], ([$loans, $monthlyPaid]) => {
    return $monthlyPaid * $loans.term || 0;
})
export const totalInterest = derived([loans, totalPaid], ([$loans, $totalPaid]) => {
    return $totalPaid - $loans.amount || 0;
})