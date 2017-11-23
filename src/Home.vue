
<template>
    <section id="home">
        
        <weather woeid="2344116" v-on:click.native="goToDetails(2344116)"></weather>        
          
        <hr />

        
        <weather woeid="638242" v-on:click.native="goToDetails(638242)"></weather> 
        

        <hr />

        
        <weather woeid="44418" v-on:click.native="goToDetails(44418)"></weather>
        

        <hr />

        
        <weather woeid="565346" v-on:click.native="goToDetails(565346)"></weather>                                
        
        
        <hr />

        
        <weather woeid="560743" v-on:click.native="goToDetails(560743)"></weather> 
        

        <hr />

        
        <weather woeid="9807" v-on:click.native="goToDetails(9807)"></weather>
        

    </section>

</template>

<script>

    import Weather from './Weather.vue'

    export default {

         methods: {

          goToDetails: function(woeid){

            this.$router.push({ path: `/weather/${woeid}` });

          }

        },

        components: {Weather}
       
    }
</script>