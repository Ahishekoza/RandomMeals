<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-success">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="{ name: 'home'}">Navbar</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto d-flex gap-2" >
            <router-link :to="{ name: 'ByName'}" class="text-decoration-none shadow-sm p-2 " style="color:white">Search Meals</router-link>
            <router-link :to="{ name: 'ByLetter'}" class="text-decoration-none shadow-sm p-2 " style="color:white">Search By Letter</router-link>
            <router-link :to="{ name: 'ByIngredient'}" class="text-decoration-none shadow-sm p-2 " style="color:white">Search By Ingredients</router-link>
          </div>
        </div>
      </div>
    </nav>
</div>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>