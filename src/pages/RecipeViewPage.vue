<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" style="width: 10%;" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>Likes: {{ recipe.popularity }} likes</div>
              <div><img v-if="vegen" src="../assets/newvegan.png" width="35" height="35"></div>
              <div><img v-if="vegeterian" src="../assets/vegeterian.png" width="25" height="35"></div>
              <div><img v-if="glutenFree" src="../assets/gluten-free-icon.png" width="35" height="35"></div>

              <b-button variant="outline-info" @click="AddFavorite" class="mb-2"   width="15" height="15">
                 <img v-if="!flag" src="../assets/hearticon.png" width="25" height="25" > 
                 <img  v-else src="../assets/favheart.png" width="25" height="25" >
              </b-button>

            </div>
            Ingredients:
            <ul>
              <!-- <li
                v-for="(r, index) in recipe.ingredients"
                :key="index + '_' + r.name"
              > </li>  -->
             <!-- <li v-for="s in recipe.ingredients" :key="s.name">{{ s.amount }}, {{ s.unit }}, {{ s.name }}</li>  -->
             <li v-for="s in recipe.ingredients" :key="s.name">
              {{ s.amount }} {{ s.unit }} of {{ s.name }}
              </li>
             
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
              <li v-for="s in recipe.directions" :key="s.stepNumber">
                {{ s.instruction }}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null,
      vegeterian: false,
      vegen: false,
      glutenFree: false,
      flag:false
    };
  },

  mounted:{
    async created() {
      let response;

      try {
        response = await this.axios.get(
          // "https://test-for-3-2.herokuapp.com/recipes/info",
          this.$root.store.server_domain + "/recipes/favorites");
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }
      for (let i = 0; i < response.data.length; i++) {
        if(response.data[i].id == this.$route.params.recipeId){
          this.flag=true;
          return;
        }
        
      }


  }
},

  async created() {
    try {
      let response;

      try {
        response = await this.axios.get(
          // "https://test-for-3-2.herokuapp.com/recipes/info",
          this.$root.store.server_domain + "/recipes/"+this.$route.params.recipeId);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      if(response.data.vegen){
        this.vegen=true;
      }
      if(response.data.vegeterian){
        this.vegeterian=true;
      }
      if(response.data.glutenFree){
        this.glutenFree=true;
      }

      let {
        // analyzedInstructions,
        directions,
        // extendedIngredients,
        ingredients,
        popularity,
        readyInMinutes,
        image,
        title
      } = response.data;

      // let _instructions = analyzedInstructions
      //   .map((fstep) => {
      //     fstep.steps[0].step = fstep.name + fstep.steps[0].step;
      //     return fstep.steps;
      //   })
      //   .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        directions,
        // _instructions,
        // analyzedInstructions,
        // extendedIngredients,
        ingredients,
        popularity,
        readyInMinutes,
        image,
        title
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  
},
   
methods:{


  async AddFavorite(){
    let responsefav;
    if(!this.flag){
      this.flag=true;
    try {
          // "https://test-for-3-2.herokuapp.com/recipes/favorites",
          responsefav = await this.axios.post(this.$root.store.server_domain +"/users/favorites",
                      {
                        recipeId: this.$route.params.recipeId

                      }
        );
          if (favouser.status !== 200) this.$router.replace("/NotFound");
        } catch (error) {
          console.log("error.responsefav.status", error.responsefav.status);
          this.$router.replace("/NotFound");
          return;
        }
        
      }
  }
}
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
/* .recipe-header{

} */
</style>
