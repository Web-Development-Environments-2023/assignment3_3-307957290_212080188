<template>
  <div id="app">
    <div id="nav" style="font-style: italic;">
      <b-navbar type="dark" variant="dark" toggleable="lg" sticky style="height: 60px; font-size: 20px;">
        <b-navbar-nav>
          <b-nav-item><router-link :to="{ name: 'main' }">Vue Recipes</router-link></b-nav-item>
          <b-nav-item><router-link :to="{ name: 'search' }">Search</router-link></b-nav-item>
          <b-nav-item><router-link :to="{ name: 'about' }">About</router-link></b-nav-item>
          <b-nav-item v-if="$root.store.username"><router-link :to="{ name: 'newRecipe' }">New_Recipe</router-link></b-nav-item>

        </b-navbar-nav>
      <!-- {{ !$root.store.username }} -->
      <b-navbar-nav v-if="!$root.store.username" class="ml-auto">
        <b-nav-item style="margin-top: 0%;">Hello Guest:</b-nav-item>
        <b-nav-item><router-link :to="{ name: 'register' }">Register</router-link></b-nav-item>
        <b-nav-item><router-link :to="{ name: 'login' }">Login</router-link></b-nav-item>

      </b-navbar-nav>
      <b-navbar-nav v-else class="ml-auto">
        <!-- Hello {{ $root.store.username }}: <button @click="Logout">Logout</button>|
        <router-link :to="{ name: 'newRecipe' }">New_Recipe</router-link> -->

        <b-nav-item style="margin-top: 2%;">Hello {{ $root.store.username }}:</b-nav-item>

        <b-nav-item-dropdown id="dropdown-1" text="Personal" class="m-md-2">
          <b-dropdown-item><router-link :to="{ name: 'favoritesPage' }">Favorites</router-link></b-dropdown-item>
          <b-dropdown-item><router-link :to="{ name: 'privatePage' }">Private</router-link></b-dropdown-item>
          <b-dropdown-item><router-link :to="{ name: 'la_FamiliaPage' }">Familia</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
       
        <b-nav-item><b-button variant="outline-info" class="mb-2" @click="Logout">
        <b-icon icon="power" aria-hidden="true"></b-icon> Logout
        </b-button></b-nav-item>


      </b-navbar-nav>
    </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background-image:url(./assets/BackGroundImage.jpg);
  background-attachment: fixed;
  background-size: cover;
}

#nav {
  padding: 0px;
  color: #b5d4f3;
}

#nav a {
  font-weight: bold;
  color: #b5d4f3;
}

#nav a.router-link-exact-active {
  color: #b5d4f3;
}
</style>
