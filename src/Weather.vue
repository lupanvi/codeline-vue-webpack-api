  <template>
    <article class="weather_holder">            

          <div v-if="result.no_data"> {{ result.no_data }} </div> 

          <div v-else>
        
              <h2>{{ result.title }}</h2>

              <div v-if="consolidated" class="all_days">
                  <h3>All of the days</h3>

                      <div class="panel-heading">
                          <h3>{{ result.city_name }} </h3>
                      </div>

                      <div v-for="cons in result.consolidated_weather" class="panel panel-default">
                        <div class="panel-body">                           
                            <p>Day: {{ cons.applicable_date }} </p>
                            <p>Temperature: {{ cons.the_temp }} </p>
                            <p>Max Temperature: {{ cons.max_temp }} </p>
                            <p>Min Temperature: {{ cons.min_temp }} </p>
                            <p><img width="50" :src="'https://www.metaweather.com/static/img/weather/png/' + cons.weather_state_abbr + '.png' " /> </p>            
                        </div>
                      </div>


              </div> 
              <div v-else> 
                  <div class="panel panel-default">
                    <div class="panel-body">
                         <h3>{{ result.city_name }} </h3>
                          <p>Temperature: {{ result.today.the_temp }} </p>
                          <p>Max Temperature: {{ result.today.max_temp }} </p>
                          <p>Min Temperature: {{ result.today.min_temp }} </p>
                          <p><img width="50" :src="'https://www.metaweather.com/static/img/weather/png/' + result.today.weather_state_abbr + '.png' " /> </p>            
                    </div>
                  </div>
              </div>

          </div>  
      
    </article>
</template>


<script>
    export default {

        props: ['woeid', 'consolidated','keyword'],  

        data : function(){
        return {
          result : {
            city_name: '',
            today : {},
            consolidated_weather : [],
            no_data : false
            
          }
        }
      },  

      mounted () {
        this.getPosts();
      },
      
      methods: {
        getPosts() {

          if (this.woeid){        
            this.getPostsByWoeid(this.woeid);
          }else{
            this.getPostsByKeyword(this.keyword);
          }

        },

        getPostsByWoeid(woeid){

            var $this = this;

            let url = '/weather.php?command=location&woeid=' + woeid;
            axios.get(url).then((response) => {                      
              
                this.result.city_name = response.data.title;
                this.result.today = response.data.consolidated_weather[0];          
                this.result.consolidated_weather = response.data.consolidated_weather.map(function(cw){
                  cw.applicable_date = $this.getDayName(cw.applicable_date);
                  return cw;
                });


            }).catch((error) => { 

              console.log(error);

            });

        },

        getPostsByKeyword(keyword){

            let url = '/weather.php?command=search&keyword=' + keyword;
            axios.get(url).then((response) => {

              if(response.data.length == 0){
                  this.result.no_data = 'No results were found. Try changing the keyword!';
              }else{
                  console.log(response.data[0].woeid);
                  this.getPostsByWoeid(response.data[0].woeid);
              }    

            }).catch((error) => { console.log(error); });
        },

        getDayName(dateString){

          let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          let d = new Date(dateString);
          return days[d.getDay()] ;

        }

      }
       
}
</script>