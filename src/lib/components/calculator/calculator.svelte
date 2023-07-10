<script>
  import FormCard from './form-card.svelte';
  import ResultCard from './result-card.svelte';
  import { monthlyPaid, totalPaid, totalInterest } from './store';
  
  
console.log($monthlyPaid)
</script>

<section class="container calculator">
    <ResultCard/>
    <FormCard/>
</section>

<style>
    .calculator{
    display: flex;
    padding: var(--section-padding, 1rem);
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    margin: auto;
    }

    @media (min-width: 1440px){
    .calculator{
    flex-direction: row-reverse;
    justify-content: center;
    }
}

</style>
