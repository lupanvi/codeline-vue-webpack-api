<template>
    <form class="form-inline" method="POST" v-on:submit.prevent="onSubmitForm">
      <div class="form-group">        
        <input type="text" v-model="search_input" class="form-control" id="search" name="search" placeholder="Search...">
      </div>
      
      <button type="submit" class="btn btn-primary">Search</button>
    </form>
</template>

<script>


    export default {

      data: function(){

        return {

              search_input : ''
          }

      },

      methods: {

          onSubmitForm: function()
          {            

              const input = this.search_input;
              
              this.$router.push({ path: `/search/${input}` });
          }
      }
       
    }
</script>