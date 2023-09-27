<template>
    <div class="flex" id="app">
        <left-menu style="width: 200px;"></left-menu>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import LeftMenu from "./components/menu.vue";

export default {
    components: {
        LeftMenu,
    },
    name: "App",
};
</script>
<style>
blockquote,
body,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
input,
li,
ol,
p,
pre,
td,
textarea,
th,
ul {
    margin: 0;
    padding: 0;
}
html,
body,
#app {
    width: 100%;
    height: 100%;
}
</style>
