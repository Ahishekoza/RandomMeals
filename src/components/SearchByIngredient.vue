<template>
    <div>
        <h2 class="text-center my-2">Searched By Ingredients</h2>
        <MealItem :searchedMeals="searchByIngredient" :letter="1"/>
    </div>
</template>
<script>
import HTTP from '@/baseinstance'
import MealItem from './MealItem.vue';
import { mapState } from 'vuex';
export default {
    name: "SearchByIngrident",
    async mounted() {
        await HTTP.get(`filter.php?i=${this.$route.params.ingredient}`).then((response) => {
            this.$store.dispatch('setSearchedByIngredients',response.data.meals)
        });
    },
    components: { MealItem },
    computed:{
        ...mapState([
            'searchByIngredient'
        ])
    }
}
</script>