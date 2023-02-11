<template>
    <div>
        <NavBar/>
        <router-view/>
    </div>
</template>
<script>
import NavBar from './NavBar.vue';
export default {
    name:'Default',
    components: {
        NavBar
    }
}
</script>