<template>
  <div>
    <div class="d-flex justify-content-center mt-5">
      <input
        type="text"
        v-model="search"
        @change="searchedMeal"
        class="rounded border-2 border-gray-200 w-75 p-2"
        placeholder="Search for Meals"
      />
    </div>

    <div class="container mt-5">
      <div class="row">
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
            <a :href="meals.strYoutube" class="btn btn-danger text-white">Youtube</a>
            <router-link
              :to="{ name: 'MealDetails', params: { id: meals.idMeal } }"
              class="mx-5 btn btn-primary text-white"
              >View</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HTTP from "@/baseinstance";
import { mapState } from "vuex";
export default {
  name: "SearchByName",
  data() {
    return {
      search: "",
    };
  },

  methods: {
    searchedMeal() {
      HTTP.get(`search.php?s=${this.search}`).then((response) => {
        if (response.data.meals) {
          this.$store.dispatch("setSearchedMeals", response.data.meals);
        }
      });
    },
  },
  computed: {
    ...mapState(["searchedMeals"]),
  },
  mounted: function () {
    this.search = this.$route.params.name;
    if (this.search) {
      this.searchedMeal();
    }
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
