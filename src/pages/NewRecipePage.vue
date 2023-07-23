<template>
    <div class="container">
        <!-- <b-modal
        id="modal-prevent-closing"
        ref="modal"
> -->
            <h1 class="title" style="font-style: italic; font-size: xx-large; font-weight: bolder; position: relative; margin-left: 35%; margin-top: 7%; margin-bottom: 4%; color: cadetblue;">New_Recipe</h1>
            <p style="font-style: italic; font-size: x-large; font-weight: bolder; position: relative; margin-left: 20%; margin-top: 7%; margin-bottom: 4%; color: rgb(72, 95, 95);">Welcome to the Add Recipes page!<br>
                 We can't wait to see what your culinary masterpiece is.<br>
                  Share your recipe with the world and let your culinary adventures begin!</p>
            <b-button v-b-modal.modal-prevent-closing @click="onReset" style="font-style: italic; font-size: x-large; font-weight: bolder; position: relative; margin-left: 30%; margin-bottom: 25%;color: cadetblue; background-color: rgb(134, 221, 224);" >Click for Adding New Recipe</b-button>
            <b-modal id="modal-prevent-closing" ref="modal" title="Submit Your Recipe Details"  
            @show="onReset" @hidden="onReset" @ok="handleOk" style="width: 250px; color: darkslategrey;font-style: italic;">

            <form @submit.stop.prevent="handleSubmit" @reset.stop.prevent="onReset"  >
                
                <b-form-group
                id="input-group-id"
                label-cols-sm="3"
                label="Id:" 
                label-for="id"
                style="font-style: italic; font-size: large; color: cadetblue;"
                
                >
                <b-form-input
                    id="id"
                    style="width: 300px;"
                    v-model="$v.form.id.$model"
                    :state="validateState('id')"
                ></b-form-input>
                <b-form-invalid-feedback v-if="!$v.form.id.required">
                    image is required!
                </b-form-invalid-feedback>
                <b-form-invalid-feedback v-if="!$v.form.id.numeric">
                    id must be a Number!
                </b-form-invalid-feedback>

                </b-form-group>
                
                <b-form-group
                id="input-group-image"
                label-cols-sm="3"
                label="Image:"
                label-for="image"
                style="font-style: italic; font-size: large; color: cadetblue;"
                >
                <b-form-input
                style="width: 300px;"
                    id="image"
                    v-model="$v.form.image.$model"
                    :state="validateState('image')"
                ></b-form-input>
                <b-form-invalid-feedback v-if="!$v.form.image.required">
                    image is required!
                </b-form-invalid-feedback>
                <b-form-invalid-feedback v-if="!$v.form.image.url">
                    image must  be url!
                </b-form-invalid-feedback>

                </b-form-group>
        
                <b-form-group
                    id="input-group-title"
                    label-cols-sm="3"
                    label="Title:"
                    label-for="title"
                    style="font-style: italic; font-size: large; color: cadetblue;"
                    >
                    <b-form-input
                        id="title"
                        style="width: 300px;"
                        v-model="$v.form.title.$model"
                        type="text"
                        :state="validateState('title')"
                    ></b-form-input>
                    <b-form-invalid-feedback v-if="!$v.form.title.required">
                        title is required!
                </b-form-invalid-feedback>


        
                </b-form-group>
        
        
        
                <b-form-group
                    id="input-group-readyInMinutes"
                    label-cols-sm="3"
                    label="ReadyInMinutes:"
                    label-for="readyInMinutes"
                    style="font-style: italic; font-size: large; color: cadetblue;"
                    >
                    <b-form-input
                    style="width: 300px;"
                        id="readyInMinutes"
                        v-model="$v.form.readyInMinutes.$model"
                        type="text"
                        :state="validateState('readyInMinutes')"
                    ></b-form-input>
                    <b-form-invalid-feedback v-if="!$v.form.readyInMinutes.required">
                        readyInMinutes is required!
                </b-form-invalid-feedback>
                <b-form-invalid-feedback v-if="!$v.form.readyInMinutes.numeric">
                    readyInMinutes must be Number!
                </b-form-invalid-feedback>


                </b-form-group>
        
        
        
            <!--  -->
        
        
                <b-form-group
                id="input-group-popularity"
                label-cols-sm="3"
                label="Popularity:"
                label-for="popularity"
                style="font-style: italic; font-size: large; color: cadetblue;"
                >
                <b-form-input
                    id="popularity"
                    style="width: 300px;"
                    v-model="$v.form.popularity.$model"
                    :state="validateState('popularity')"
                ></b-form-input>
                <b-form-invalid-feedback v-if="!$v.form.popularity.required">
                    popularity is required!
                </b-form-invalid-feedback>
                <b-form-invalid-feedback v-if="!$v.form.popularity.numeric">
                    popularity must to be Number!
                </b-form-invalid-feedback>

                </b-form-group>
                

                <b-form-group
                id="input-group-servings"
                label-cols-sm="3"
                label="servings:"
                label-for="servings"
                style="font-style: italic; font-size: large; color: cadetblue;"
                >
                <b-form-input
                    id="servings"
                    style="width: 300px;"
                    v-model="$v.form.popularity.$model"
                    :state="validateState('servings')"
                ></b-form-input>
                <b-form-invalid-feedback v-if="!$v.form.servings.required">
                    servings is required!
                </b-form-invalid-feedback>
                <b-form-invalid-feedback v-if="!$v.form.servings.numeric">
                    servings must to be Number!
                </b-form-invalid-feedback>

                </b-form-group>


                <b-form-group
                id="input-group-vegan"
                label-cols-sm="3"
                label="Vegan:"
                label-for="vegan"
                style="font-style: italic; font-size: large; color: cadetblue;"
                >
                <b-form-input
                    id="vegan"
                    style="width: 300px;"
                    type="vegan"
                    v-model="$v.form.vegan.$model"
                    :state="validateState('vegan')"
                ></b-form-input>
                <b-form-invalid-feedback v-if="!$v.form.vegan.required">
                    vegan is required!
                </b-form-invalid-feedback>
                </b-form-group>
        
                <b-form-group
                id="input-group-glutenFree"
                label-cols-sm="3"
                label="GlutenFree:"
                label-for="glutenFree"
                style="font-style: italic; font-size: large; color: cadetblue;"
                >
                <b-form-input
                    id="glutenFree"
                    style="width: 300px;"
                    type="txt"
                    v-model="$v.form.glutenFree.$model"
                    :state="validateState('glutenFree')"
                ></b-form-input>
                <b-form-invalid-feedback v-if="!$v.form.glutenFree.required">
                    glutenFree is required!
                </b-form-invalid-feedback>

                </b-form-group>
                <!--  -->
                <b-form-group
                    id="input-group-vegetarian"
                    label-cols-sm="3"
                    label="Vegetarian:"
                    label-for="vegetarian"
                    style="font-style: italic; font-size: large; color: cadetblue;"
                    >
                    <b-form-input
                        id="vegetarian"
                        style="width: 300px;"
                        v-model="$v.form.vegetarian.$model"
                        type="vegetarian"
                        :state="validateState('vegetarian')"
                    ></b-form-input>
                    <b-form-invalid-feedback v-if="!$v.form.vegetarian.required">
                        vegetarian is required!
                </b-form-invalid-feedback>

                </b-form-group>
        
                <b-form @submit.prevent="onAddIng" style="margin-left: 0%;">
                    <h2 style="font-size: large; color: dimgrey; font-style: italic;">Add Ingredients</h2>
                <b-form-group
                    id="input-group-name"
                    label-cols-sm="3"
                    label="Name:"
                    label-for="name"
                    style="font-style: italic; font-size: large; color: cadetblue;"
                    >
                    <b-form-input
                        id="name"
                        style="width: 300px;"
                        v-model="$v.form.name.$model"
                        type="name"
                        :state="validateState('name')"
                    ></b-form-input>
                    <b-form-invalid-feedback v-if="!$v.form.name.required">
                        name is required!
                </b-form-invalid-feedback>

                </b-form-group>
                <b-form-group
                    id="input-group-amount"
                    label-cols-sm="3"
                    label="Amount:"
                    label-for="amount"
                    style="font-style: italic; font-size: large; color: cadetblue;"
                    >
                    <b-form-input
                        id="amount"
                        style="width: 300px;"
                        v-model="$v.form.amount.$model"
                        type="amount"
                        :state="validateState('amount')"
                    ></b-form-input>
                    <b-form-invalid-feedback v-if="!$v.form.amount.required">
                        amount is required!
                </b-form-invalid-feedback>
                <b-form-invalid-feedback v-if="!$v.form.amount.numeric">
                    amount is numeric!
                </b-form-invalid-feedback>

                </b-form-group>
                <b-form-group
                    id="input-group-unit"
                    label-cols-sm="3"
                    label="Unit:"
                    label-for="unit"
                    style="font-style: italic; font-size: large; color: cadetblue;"
                    >
                    <b-form-input
                        id="unit"
                        style="width: 300px;"
                        v-model="$v.form.unit.$model"
                        type="unit"
                        :state="validateState('unit')"
                    ></b-form-input>
                    <b-form-invalid-feedback v-if="!$v.form.unit.required">
                        unit is required!
                </b-form-invalid-feedback>

                </b-form-group>

                <b-button
                type="submit"
                variant="primary"
                style="font-style: italic; margin-bottom: 0%; margin-left: 0%;"
                class="ml-5 w-75"
                
                >AddIngredient</b-button
                >

            </b-form>










        
            <!--  -->
        
                <b-button type="reset" variant="danger" style="font-style: italic; ">Reset</b-button>

            </form>

    </b-modal>
    </div>
  </template>
  
  <script>

import { BButton, BModal, VBModal } from "bootstrap-vue";
// import{b-form-checkbox}
  import {
    required,
    numeric,
    url
  } from "vuelidate/lib/validators";
  
  export default {
    name: "Registerr",
    components: {
        BButton,
        BModal,
        
    },
    directives: { 
            'b-modal': VBModal 
        },

    data() {
      return {
        form: {
            id:null,
            title: "",
            image: "",
            readyInMinutes: null,
            popularity: null,
            servings:null,
            vegetarian: null,
            vegan: null,
            glutenFree: null,
            name:"",
            amount:null,
            unit:"",
            submitError: undefined
        },
        errors: [],
        validated: false,
        ingredients:[],
        directions: [],
        status: 'not_accepted'

        
      };
    },
    mounted:{
    },

    validations: {
      form: {
        id:{
            required,
            numeric
        },

        title:{
             required
        },
        image:{
            required,
            url
        },

        readyInMinutes: {
            required,
            numeric
        },

        popularity:{
            required,
            numeric
        },

        servings:{
            required,
            numeric
        },

        vegetarian: {
            required                
        },

        vegan: {
            required,
            
        },

        glutenFree: {
            required
        },

        name: {
            required
        },

        amount: {
            required,
             numeric
        },

        unit: {
            required
        },
      }
    },

    methods: {
      validateState(param) {
        const { $dirty, $error } = this.$v.form[param];
        return $dirty ? !$error : null;
      },
      async AddRecipe() {
        try {
          const response = await this.axios.post(
            // "https://test-for-3-2.herokuapp.com/user/Register",
            this.$root.store.server_domain + "/users/addMyRecipe",
  
             {
                id:this.form.id,
                title: this.form.title,
                image: this.form.image,
                readyInMinutes: this.form.readyInMinutes,
                popularity: this.form.popularity,
                vegetarian: this.form.vegetarian,
                vegan: this.form.vegan,
                glutenFree: this.form.glutenFree,
                ingredients:this.ingredients,
                directions:  [              
                        [
                         "Boil water in a large pot."
                        ]
                                ]
            }
          );
          this.onReset();
        } catch (err) {
          console.log(err.response);
          this.form.submitError = err.response.data.message;
        }
      },
      handleOk(bvModalEvent) {
        

        bvModalEvent.preventDefault()
        this.handleSubmit()
      },

        handleSubmit() {
            this.$v.form.$touch();
       
        if (this.$v.form.$anyError) {
          return;
        }
        this.AddRecipe();
        this.$nextTick(() => {
            this.$bvModal.hide('modal-prevent-closing')
            })

        },
    onReset() {
        this.form = {
            id:null,
            title: "",
            image: "",
            readyInMinutes: null,
            popularity: null,
            vegetarian: null,
            vegan: null,
            glutenFree: null,
            name:"",
            amount:null,
            unit:"",
            servings:null
            
        };
        this.ingredients = [];
        this.directions = [];
        this.errors=[];
        validations.form.id.required=null;
        $v.form.id.$model=null;
      },
      onAddIng() {
        this.$v.form.$touch();
        if (this.$v.form.$anyError) {
          return;
        }
        this.AddIng();
      },

      async AddIng() {
        try {
            this.ingredients.push({name: this.form.name, amount:this.form.amount, unit:this.form.unit});
        } catch (err) {
          this.form.submitError = err.response.data.message;
        }
      }
  
    }
  };
  </script>
  <style>


  </style>
  







