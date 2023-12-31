import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/newRecipe",
    name: "newRecipe",
    component: () => import("./pages/NewRecipePage"),
  },
  {
    path: "/favoritesPage",
    name: "favoritesPage",
    component: () => import("./pages/FavoritesPage"),
  },
  {
    path: "/privatePage",
    name: "privatePage",
    component: () => import("./pages/PrivatePage"),
  },
  {
    path: "/la_FamiliaPage",
    name: "la_FamiliaPage",
    component: () => import("./pages/La_FamiliaPage"),
  },
  
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
