<template lang="html">

  <section class="src-components-tabla">
    <div class="table-responsive">
          <table class="table table-dark">
            <tr>
              <th>Nombre</th>
              <th>dni</th>
              <th>apagar</th>
              <th>pagado</th>
              
            </tr>
            <tr v-for="(persona, index) in personas" :key="index">
              <td>{{ persona.nombre }}</td>
              <td>{{ persona.dni }}</td>
              <td>{{ persona.apagar }}</td>
              <td>{{ persona.pagado }}</td>
              
            </tr>
          </table>
        </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-tabla',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .src-components-tabla {

  }
</style>
