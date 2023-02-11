<template>
  <div class="d-flex flex-column mt-5 align-items-center">
  
   <div class="d-flex gap-2 mt-2 ">
    <router-link :to="{ name: 'ByLetter' , params: {letter} }" v-for="letter in letters" :key="letter.id" class="text-decoration-none text-dark">
    {{ letter }}
   </router-link>
   </div>
  </div>
</template>

<script>
import HTTP from '../baseinstance'
export default {
  name: 'HelloWorld',
  data () {
    return {
      letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
    }
  }
  ,
  mounted : async function () {
    await HTTP.get('list.php?i=list').then((response)=>{
      console.log(response.data);
    })
  }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
