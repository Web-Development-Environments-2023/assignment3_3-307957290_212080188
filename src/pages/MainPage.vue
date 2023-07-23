 <template>
    <div class="row ">
      <div class="col-md-6 ">
        <div class="leftside" style="font-style: italic; font-family: 'Times New Roman', Times, serif; font: bolder; font-size:xx-large; margin-top: 5%; color: #047ca7; margin-left: 2% ; background-color: rgb(235, 226, 232);">
          Random Recipes
      <!-- task 1.5 -->
      <!-- <RandomRecipes></RandomRecipes> -->
      <b-col v-for="r in recipes" :key="r.id">
          <RecipePreview class="recipePreview" :recipe="r" />
        </b-col>
      <button type="submit" @click="updateRecipes" style="margin-left: 30%; font-size: x-large; font-style: italic;">More Recipes</button>
        </div>
      </div>
    
      <div class="col-md-6 ">
        <div class="rightside" style="font-style: italic; font-family: 'Times New Roman', Times, serif; font: bolder; font-size:xx-large; margin-top: 5%; color: #047ca7; background-color: rgb(228, 237, 239);">
          <span v-if="!$root.store.username" >
            SignIn
            <LogInComp ></LogInComp>
          </span>
          <span v-else>
            Last Viewed Recipes
      <!-- task 1.5 -->
      <b-col v-for="k in Lastrecipes" :key="k.id">
          <RecipePreview class="recipePreview" :recipe="k" />
        </b-col>

      <!-- <RecipePreviewList></RecipePreviewList> -->
          </span>
      <!-- task 1.5 -->
      
        </div>
      </div>

    </div>

    


      
    </template>
    
    <script>
    //task 1.5
    // import RecipePreviewList from "../components/RecipePreviewList.vue";
    import LogInComp from "../components/LogInComp.vue";
    // import RandomRecipes from "../components/RandomRecipes.vue";
    import RecipePreview from "../components/RecipePreview.vue";

    export default{
      name: "MainPage",

      data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined
      },
      recipes: [],
      Lastrecipes: [],
    };
  },
    //task1
      //task 1.5
      components: {
    // RecipePreviewList,
    LogInComp,
    // RandomRecipes,
    RecipePreview
      },
      //task 4
      mounted() {
      this.updateRecipes();
      this.updateLastRecipes();
      },
    methods: {
      async updateRecipes() {
        try {
          // console.log(this.$root.store.server_domain+"/users/recipe"1);
          const response = await this.axios.get(
            this.$root.store.server_domain +"/users/RandomRecipes");
          // console.log(response);
          const recipes = response.data;
          this.recipes = [];
          this.recipes.push(...recipes);
          // console.log(this.recipes);
        } catch (error) {
          console.log(error);
        }
      },

      async updateLastRecipes() {
        try {
          // console.log(this.$root.store.server_domain+"/users/recipe"1);
          const response = await this.axios.get(
            this.$root.store.server_domain +"/users/recipe");
          // console.log(response);
          const lastrecipes = response.data;
          this.Lastrecipes = [];
          this.Lastrecipes.push(...lastrecipes);
          // console.log(this.recipes);
        } catch (error) {
          console.log(error);
        }
      }

    }
      
    
  };
    </script>
    
    <style></style>
    




<!-- 


    <template>
      <div class="container">
        <h1 class="title">Main Page</h1>
        <RecipePreviewList title="Randome Recipes" class="RandomRecipes center" />
        <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link>
        {{ !$root.store.username }}
        <RecipePreviewList
          title="Last Viewed Recipes"
          :class="{
            RandomRecipes: true,
            blur: !$root.store.username,
            center: true
          }"
          disabled
        ></RecipePreviewList>
        <div
          style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
        >
          Centeredasdasdad
        </div>
      </div>
    </template>
    
    <script>
    import RecipePreviewList from "../components/RecipePreviewList";
    export default {
      components: {
        RecipePreviewList
      }
    };
    </script>
    
    <style lang="scss" scoped>
    .RandomRecipes {
      margin: 10px 0 10px;
    }
    .blur {
      -webkit-filter: blur(5px); 
      filter: blur(2px);
    }
    ::v-deep .blur .recipe-preview {
      pointer-events: none;
      cursor: default;
    }
    </style> -->
