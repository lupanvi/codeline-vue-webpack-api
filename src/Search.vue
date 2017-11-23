<template>
    <section>  
      <h1>Search: {{ keyword }}</h1>
      <weather :keyword="keyword"></weather>       
    </section>
</template>
<script>

import Weather from './Weather.vue'

    export default {

      props: ['keyword'],

      data(){
          return {
            data:{
              search_keyword : this.keyword
            }
          }

      },
      components:{
          Weather
      }
       
    }
      
</script>