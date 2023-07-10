<script>
 import { loans } from './store.js';

/** @type {number} */
let amount ; 
/** @type {number} */
let rate ;
/** @type {number} */
let term ;
/** @type {array}*/
const months = [12, 24, 36];

// Reactivity function to change % value in rate
$: if( term >1 && term <=12 ){
rate = 15;
}else if (term >12 && term <=24 ){
    rate = 27;
}else if( term > 24 ){
    rate = 34;
}else{
    rate = 0;
}

function submitForm() {
	loans.methods.addItem(amount,rate,term);
   
}
</script>   

<div class="loan-calculator-wrapper">
    <div class="content-wrapper">
        <h1>The deferred payment loan</h1>
        <p>A loan is a contract in wich the borrower recives an amount of money 
           that they are obligated to pay back in the future
        </p>
    </div>
    <form action="" method="post" class="form-calculator" name="loan-form" on:submit|preventDefault ={submitForm}>
        <div class="input-wrapper" data-format="$">
            <label for="amount">Loan amount</label>
            <input type="number" class="form-input" id="amount" name="amount" placeholder="0.0" bind:value={amount}>
        </div>
        <div class="input-wrapper">
            <label for="term">Loan term</label>
            <div class="lterm-input">
                <label for="term" data-format="{term}">
                    <select class="form-input js-example-basic-single"  id="term" name="term" bind:value={term} >
                        <option  value="0" disabled selected> Term</option>
                        #{#each months as month}
                            <option  value="{month}" style="font-size:1rem;"> {month}</option>
                        {/each}
                    </select>
                    <span class="arrow-down">▼</span>
                </label>
                <div class="date-set-wrapper">
                    <span  class="label">Months</span>
                </div>
            </div>
        </div>
        <div class="input-wrapper" data-format="%">
            <label for="rate">Interest rate per year</label>
            <input type="number" class="form-input" id="rate" name="rate" placeholder="0" bind:value={rate} disabled/>
        </div>
        <button class="btn-primary" type="submit">
            <span>Calculate loan</span>
        </button>
    </form>
</div>

<style>
    .loan-calculator-wrapper{
    display: flex;
    max-width: 32.1875rem;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    background: #2E1AAE;
    }
    .content-wrapper{
    display: flex;
    overflow: hidden;
    padding: 0.3125rem 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
    }
    .content-wrapper h1{
    color: #E8DAD1;
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 4.2rem;
    margin: 0;
    }
    .content-wrapper p {
    color: #AAA;
    font-size: 1.125rem;
    font-family: Outfit;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    }
    .form-calculator{
    display: flex;
    overflow: hidden;
    padding: 1.875rem 0.375rem;
    align-items: flex-end;
    align-content: flex-start;
    gap: 2.5625rem 1.9375rem;
    align-self: stretch;
    flex-wrap: wrap;
    }
    .input-wrapper{
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    }
    .input-wrapper label{
    color: #BDADFF;
    padding: 0rem var(--input-padding-x, 0.5rem);
    
    }

    .input-wrapper .form-input{
    font-family: 'Outfit', sans-serif;
    max-width: 10.875rem;  
    color: #E7D6DC ;
    font-size: 2rem;
    font-weight: 600;
    line-height: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 0.5rem;
    padding-left: 2rem;
    border: none;
    border-bottom: 2px solid #5342C5;
    background-color: transparent;
    }
    .lterm-input{
        width: 100%;
    }
    .lterm-input > label{
        padding: 0;
        position: relative;
        width: 102px;
        height: 58px;
    }
    .lterm-input > label > select{
        cursor: pointer;
    }
    .lterm-input >label::after{
        content: attr(data-format);
        font-family: 'Outfit', sans-serif;     
        position: relative;
        right: 0.3rem;
        bottom: 2.7rem;
        font-size: 2rem;
        font-weight: 600;
        line-height: 2rem;
        color: #E7D6DC ;
       
    }
    .lterm-input> label > select{
        color: transparent!important;
        font-size: 1.12rem !important;
        z-index: 1!important;
        position: relative !important;
        padding-top: 1rem !important;
        padding-bottom: 1rem!important;
    }
    .lterm-input > label > span{
        position: relative;
        bottom: 3rem;
        left: 5rem;
        font-size: .8rem !important;
    }
    .input-wrapper input[type="number"]::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
    }
    .input-wrapper input[type="number"]::placeholder{
    color: #E7D6DC;
    }
    .lterm-input{
    display: flex;
    align-items: center;
    gap: 1.1875rem;
    align-self: stretch;
    }

    .lterm-input .date-set-wrapper{
    color: #E7D6DC;
    background: #4431B5;
    padding: 1rem;

    }

    .btn-primary{
    overflow: hidden;
    font-family: 'Outfit', sans-serif;
    padding: 1.35rem 2.5rem;
    border: none;
    background: #FEB931;
    width: 100%;
    max-width: 12.875rem;
    }

   .input-wrapper::after {
   content: attr(data-format);
   position: absolute;
   left: 0.4rem;
   bottom: 0.3rem;
   font-size: 2rem;
   font-weight: 600;
   color: #E7D6DC;
  
}
</style>