<template>
    <div>
        <h1 class="text-center my-2">Ingredients</h1>
        <!-- <div class=" w-75  mx-auto my-3">
            <input type="text" name="" class="w-100 rounded p-1"
            v-model="search"
            id="">
        </div> -->
        <router-link :to="{ name: 'ByIngredient' , params:{ingredient: ingredient.strIngredient} }" class="card my-2 p-2 text-decoration-none text-dark" v-for="ingredient in Ingredients" :key="ingredient.idIngredient">
            <h2 class="card-title">{{ ingredient.strIngredient }}</h2>
            <p class="card-text">{{ ingredient.strDescription }}</p>
        </router-link>
    </div>
</template>
<script>
import HTTP from '@/baseinstance'
export default {
    name: 'Ingredients',
    data () {
        return {
            search: '',
            Ingredients:[]
        }
    },
    async mounted() {
        await HTTP.get('list.php?i=list').then((response)=>{
            this.Ingredients = response.data.meals
        })
    }
    
}
</script>