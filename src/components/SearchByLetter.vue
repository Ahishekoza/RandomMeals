<template>
  <div>
    <div class="d-flex gap-2 mt-2 mt-5 align-items-center justify-content-center">
      <router-link
        :to="{ name: 'ByLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter.id"
        class="text-decoration-none text-dark"
      >
        {{ letter }}
      </router-link>
    </div>
    <MealItem :searchedMeals="searchByLetter" :letter="letter"></MealItem>
  </div>
</template>
<script>
import HTTP from '@/baseinstance';
import { mapState } from "vuex";
import MealItem from './MealItem.vue';
export default {
  components: { MealItem },
  name: "MealList",
  data () {
    return {
      letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(""),
      letter:''

    }
  },


  watch: {
    
    async $route(to,from){
      // ---Letter is passed in MealItem Component so we can see which letter meal does not exist
      this.letter=this.$route.params.letter
      await HTTP.get(`search.php?f=${this.$route.params.letter}`).then((response) => {
      if(response.data){
        this.$store.dispatch('setSearchedByLetters',response.data.meals)
      }
     })
    }
    
  },


  computed: {
    ...mapState([
      "searchByLetter"
    ]),
  },
};
</script>
