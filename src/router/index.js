import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchByLetter from '../components/SearchByLetter.vue'
import SearchByName from '@/components/SearchByName.vue'
import SearchByIngredient from '@/components/SearchByIngredient.vue'
import DefaultLayout from '@/components/DefaultLayout.vue'
import MealDetailsVue from '@/views/MealDetails.vue'
import Ingredients from '@/components/Ingredients.vue'
const routes = [

  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      // ? Makes the parameter optional 
      {
        path: '/letter/:letter?',
        name: 'ByLetter',
        component: SearchByLetter
      },
      {
        path: '/Name/:name?',
        name: 'ByName',
        component: SearchByName
      },
      {
        path: '/Ingredient/:ingredient?',
        name: 'ByIngredient',
        component: SearchByIngredient
      },
      {
        path: '/mealdetails/:id',
        name: 'MealDetails',
        component: MealDetailsVue
      },
      {
        path: '/ingredients',
        name: 'Ingredients',
        component: Ingredients
      }
    
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
