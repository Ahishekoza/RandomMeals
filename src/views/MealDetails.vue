<template>
  <div>
    <h3 class="text-center">{{ Meal.strMeal }}</h3>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <img :src="Meal.strMealThumb" class="w-25 h-25 mx-auto mt-2" alt="" />
      <div class="d-flex justify-content-between">
        <div><strong class="font-bold">Category:</strong> {{ Meal.strCategory }}</div>
        <div><strong class="font-bold">Area:</strong> {{ Meal.strArea }}</div>
        <div><strong class="font-bold">Tags:</strong> {{ Meal.strTags }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import HTTP from "@/baseinstance";

export default {
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
