<template>
  <div class="d-flex flex-column mt-5 align-items-center">
  <MealItem :searchedMeals="meals" />
  </div>
</template>

<script>
import HTTP from '../baseinstance'
import MealItem from './MealItem.vue';
export default {
    name: "HelloWorld",
    data(){
      return{
        meals:[]
      }
    },
    mounted: async function () {
      // --We will display only 10 food items on the main page
      for (let i = 0; i < 10; i++) {
      await HTTP.get(`random.php`).then((response) =>{
        this.meals.push(response.data.meals[0])
      })
  }
},
    components: { MealItem }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
