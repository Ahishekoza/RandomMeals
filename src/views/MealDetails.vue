<template>
  <div>
    <h3 class="text-center">{{ Meal.strMeal }}</h3>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <img :src="Meal.strMealThumb" class="w-50 h-25 mx-auto mt-2" alt="" />
      <div class="row">
        <div class="col-12 col-md-4">
          <strong class="font-bold">Category:</strong> {{ Meal.strCategory }}
        </div>
        <div class="col-12 col-md-3">
          <strong class="font-bold">Area:</strong> {{ Meal.strArea }}
        </div>
        <div class="col-12 col-md-5">
          <strong class="font-bold">Tags:</strong> {{ Meal.strTags }}
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <p>{{ Meal.strInstructions }}</p>
      <div class="row">
        <div class="col-12 col-md-6">
          <h2>Ingridents</h2>
          <!-- First Check whether the Ingredient is present or not , If only present then print -->
          <template v-for="(el, index) in Array(20)" :key="index">
            <li v-if="Meal[`strIngredient${index + 1}`]">
              {{ Meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </div>
        <div class="col-12 col-md-6">
          <h1>Measures</h1>

          <template v-for="(el, index) in Array(20)" :key="index">
            <li v-if="Meal[`strMeasure${index + 1}`]">
              {{ Meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </div>

        <div class="d-inline-block my-3">
          <YoutubeButton :href="Meal.strYoutube">Go To YouTube</YoutubeButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HTTP from "@/baseinstance";
import YoutubeButton from "@/components/YoutubeButton.vue";

export default {
  components: { YoutubeButton },
  name: "Meal Details",
  data: function () {
    return {
      Meal: "",
    };
  },

  mounted: async function () {
    await HTTP.get(`lookup.php?i=${this.$route.params.id}`).then((response) => {
      console.log(response.data.meals[0]);
      this.Meal = response.data.meals[0];
    });
  },
};
</script>
