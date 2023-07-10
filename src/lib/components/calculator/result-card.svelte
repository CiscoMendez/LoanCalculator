<script>
    import { monthlyPaid, totalPaid, totalInterest } from "./store";
    let markUrl = '../../public/assets/svg-total-mark.svg';
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format;
</script>
<div class="loan-info-wrapper"> 
    <div class="result-wrapper">
        <h3>Your monthly payment</h3>
        <span id="loanpay">{formatter($monthlyPaid)}</span>
        
        <figure> 
            <img src=${markUrl} alt="decorator">
        </figure> 
    </div>
    <div class="rates">
        <div class="values">
            <div class="rate-value">
                <span>Total loan payment</span>
                <span id="ppay">{formatter($totalPaid)}</span>
            </div>
            <div class="rate-value">
                <span>Total interest payament</span>
                <span id="inpay">{formatter($totalInterest)}</span>
            </div>
        </div>
        <button class="btn-secondary">
            <span>Compare loan rates</span>
        </button>
    </div>
    <div class="useful-links">
        <a href="#top">Show armotization schedule</a>
        <a href="#top">Add extra payments</a>
        <a href="#top">Save result</a>
    </div>
</div>

<style>
    .loan-info-wrapper{
    background-color: #FFFFFF;
    padding: 2.5rem;
    width: 100%;
    max-width: 25.375rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    }
    .result-wrapper{
    display: flex;
    padding: 1.25rem 2rem;
    flex-direction: column;
    align-items: center;
    gap: 1.125rem;
    }
    .result-wrapper > h3{
    color: #3C3C3C;
    text-align: center;
    font-size: 1.125rem;
    font-weight: 00;
    line-height: normal;
    }
    .result-wrapper > span{
    color: #3C3C3C;
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    }
    .rates{
    display: flex;
    padding: 0.5rem 1.1875rem;
    flex-direction: column;
    gap: 1.5rem;
    }
    .rate-value{
    display: flex;
    padding: var(--input-padding-y, 0.5rem) 0.5rem;
    justify-content: space-between;
    align-items: center;
    }
    .rate-value > span{
    font-size: 0.875rem;
    font-weight: 400;
    }
    .rate-value > span:nth-child(1){
    color: #AAA;
    }
    .rate-value > span:nth-child(2){
    color: #3C3C3C;
    }
    .btn-secondary{
    font-family: 'Outfit', sans-serif;
    display: flex;
    background-color: #FFFFFF;
    padding: 0.75rem 3.1875rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border: 1px solid #A7A7A7;
    }

    .useful-links{
    display: flex;
    padding: 0.5rem 2.4375rem;
    flex-direction: column;
    align-items: center;
    gap: 0.5625rem;
    }
    .useful-links > a{
    color: #A7A7A7;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    }
</style>