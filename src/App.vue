<template>
  <div id="app">
    <pagina-header></pagina-header>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import PaginaHeader from "@/components/PaginaHeader.vue"

export default {
  components: {
    PaginaHeader,
  }
}

</script>

<style>
body {
  margin: 0px;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color: #234;

}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

a.router-link-exact-active {
  color: #4b8
}

img { 
  max-width: 100%;
  
}

.conteudo {
  display: grid;
  grid-template-columns: 3fr minmax(200px, 300px);
  grid-gap: 30px;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active {
  transition: all 0.5s;
}

@media screen and (max-width: 500px) {
  .conteudo {
  display: block; 
  }
}
</style>
