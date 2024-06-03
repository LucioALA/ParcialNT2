<template>
  <div class="container mt-3">
    <div class="jumbotron">
      <h1>Bienvenidos a Vue CLI</h1>
      <h2>Componente Principal (App)</h2>
      <br>

      <Navbar />
      <!-- <router-view></router-view> -->
      <!-- <router-view /> -->
      <RouterView />

      <!-- <Binding />
      <Estructura />
      <Atributos />
      <Contadores />
      <Formulario /> -->

    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
/* import Binding from './componentes/Binding.vue'
import Estructura from './componentes/Estructura.vue'
import Atributos from './componentes/Atributos.vue'
import Formulario from './componentes/Formulario/index.vue'
import Contadores from './componentes/Contadores.vue' */
export default {
  name: 'App',
  components: {
    Navbar,
    /* Binding,
    Estructura,
    Atributos,
    Formulario,
    Contadores */
  }
}
</script>

<style>
  h1 {
    color: crimson;
  }
  h2 {
    color: blue;
  }
</style>
