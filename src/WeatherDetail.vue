<template>
    <section>  

       <weather :woeid="woeid" consolidated="yes"></weather> 
      
    </section>
</template>

<script>

import Weather from './Weather.vue'

    export default {

       props: ['woeid'] ,

       components : {
       		Weather
       }     
       
    }
</script>