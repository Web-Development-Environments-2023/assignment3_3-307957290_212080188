<template>
  <div>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview" 
  >
    <div class="recipe-body">
      <!-- <div class="recipe-body"> -->
        <div class="container">
      <img :src="recipe.image" class="recipe-image"  alt="Avatar" style="max-width: 100%; height: 190px;width: 400px;; vertical-align: middle; display: inline-block;"/>
    </div>
  </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <div class="recipe-overview">
        <a>Preparation Time: {{ recipe.readyInMinutes }} minutes</a><br>
         <a>Likes: {{ recipe.popularity }} likes</a> 
    </div>

    </div>
  </router-link>
  <img v-if="recipe.vegan" src="../assets/newvegan.png" width="35" height="35">
      <img v-if="recipe.vegetarian" src="../assets/vegeterian.png" width="25" height="35">
      <img v-if="recipe.glutenFree" src="../assets/gluten-free-icon.png" width="35" height="35">
      <b-button variant="outline-info" @click="addFavoriterecipe" class="mb-2"   width="15" height="15">
        <img v-if="!flag" src="../assets/hearticon.png" width="25" height="25" > 
        <img  v-else src="../assets/favheart.png" width="25" height="25" >
        </b-button>

</div>
</template>

<script>

export default {
  mounted() {
    // this.axios.get(this.recipe.image).then((i) => {
    //   this.image_load = true;
    // }
  },
  data() {
    return {
      flag:false
      // image_load: false
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }

  },
  async created() {
    try {

      let recipeID= this.recipe.id;
      let response;

      try {
        response = await this.axios.get(
          // "https://test-for-3-2.herokuapp.com/recipes/info",
          this.$root.store.server_domain + "/users/favorites",
          // {
          //   params: { id: this.$route.params.recipeId }
          // }
        );

        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      for (let i = 0; i < response.data.length; i++) {
        if(response.data[i].id == recipeID){
          this.flag=true;
          return;
        }
        
      }
    }
  catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }
    },

    methods:{
     async addFavoriterecipe(){
        if(!flag){
          let favouserr;
    
        try {
          favouserr = await this.axios.post(
          // "https://test-for-3-2.herokuapp.com/recipes/info",
          this.$root.store.server_domain + "/users/favorites"+recipeID);
          if (favouserr.status !== 200) this.$router.replace("/NotFound");
        } catch (error) {
          console.log("error.favouserr.status", error.favouserr.status);
          this.$router.replace("/NotFound");
        }
        flag=true;

        }
      }

    }

  }
</script>

<style scoped>
.recipe_preview_img:hover
{
  transform: translateY(2px);
  box-shadow: 0 30px 30px 0 rgba(0,0,0,0.24), 0 30px 50px 0 rgba(0,0,0,0.19);

}

.recipe_preview_img
{
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.recipe-preview {
  display: inline-block;
  width: 50%;
  height: 50%;
  position: relative;
  margin: 10px 10px;
  padding: 60 px;
  margin-left: 25%;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: inline-block;
  width: 98%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}



.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-overview {
  font-size: medium;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 17pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
  font-size: large;
}

.recipe-image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}



.recipe-image:hover {
  opacity: 0.5;
}


</style>


