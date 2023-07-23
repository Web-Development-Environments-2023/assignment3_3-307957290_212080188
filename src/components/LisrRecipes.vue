<template>
  <div>
    <ol>
      <RecipePreview
      v-for="r in recipes"
      :id="r.id"
      :title="r.title"
      :readyInMinutes="r.readyInMinutes"
      :image="r.image"
      :aggregateLikes="r.aggregateLikes"
      :key="r.id"
      
    ></RecipePreview>
    </ol>
  </div>
</template>

<script>
//task1.5
import RecipePreview from "./RecipePreview.vue";
export default {
  //task 1
  name: "ListRecipes",
  //task1.5
  components: {
    RecipePreview,
  },
  // <!-- task3 -->
  data() {
    return {
      recipes: []
    };
  },

  mounted() {
      this.ListRecipes();
  },

  methods: {
      async ListRecipes(){
          try{
              const response = await this.axios.get(this.$root.store.server_domain +"/recipes/102"
              );
              // const recipes = response;
              // this.recipes = [];
              this.recipes.push(...response);
              // console.log("jjkkk");
              // console.log(response.data.recipes);
              }
              catch(error){
              console.log("error in List recipes");
              console.log(error);
              }
}
  }

  // <!-- task3 -->
};
</script>

<style></style>

