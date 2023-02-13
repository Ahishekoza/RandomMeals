<template>
  <div class="container mt-5" >
    <div class="row" v-if="searchedMeals">
      <div
        class="col-12 col-md-3 px-2 shadow-lg rounded"
        v-for="meals in searchedMeals"
        :key="meals.idMeal"
      >
        <img
          :src="meals.strMealThumb"
          class="w-100 h-50 rounded object-cover"
          alt=""
          srcset=""
        />
        <h5 class="mt-5">{{ meals.strMeal }}</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dignissimos.
        </p>
        <div>
          <YoutubeButton :href="meals.strYoutube">YouTube</YoutubeButton>
          <router-link
            :to="{ name: 'MealDetails', params: { id: meals.idMeal } }"
            class="mx-5 btn btn-primary text-white"
            >View</router-link
          >
        </div>
      </div>
    </div>
    <div v-if="!searchedMeals" class="text-center">Meals Are Not Present with letter{{ letter }}</div>
  </div>
</template>
<script>
import YoutubeButton from "./YoutubeButton.vue";

export default {
  name: "MealItem",
  props: {
    searchedMeals: {
      required: true,
      type: Object,
    },
    letter:{
      type: String,
    }
  },
  components: {
    YoutubeButton,
  },
};
</script>
