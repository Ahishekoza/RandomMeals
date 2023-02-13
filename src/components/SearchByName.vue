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

    <MealItem :searchedMeals="searchedMeals"></MealItem>
  </div>
</template>
<script>
import HTTP from "@/baseinstance";
import { mapState } from "vuex";
import MealItem from "./MealItem.vue";
export default {
  name: "SearchByName",
  components: {
    MealItem,
  },
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
