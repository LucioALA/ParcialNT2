<template lang="html">

  <section class="src-components-formulario">
    <h1>src-components-formulario Component</h1>
    
    <form novalidate @submit.prevent>

    
        <label for="nombre">nombre</label>
        <input 
          id="nombre" 
          type="text" 
          class="form-control" 
          v-model.trim="formData.nombre"
          @input="formDirty.nombre=true"
          
        >
        <div v-if="!formData.nombre && formDirty.nombre" class="alert alert-danger mt-1">
          Campo requerido
        </div>
        <label for="documento">Nº Documento</label>
        <input 
          id="documento" 
          type="number" 
          class="form-control" 
          v-model="formData.dni"
          @input="formDirty.dni=true"
          
        > <div v-if="!formData.dni && formDirty.dni" class="alert alert-danger mt-1">
          Campo requerido
        </div><label for="apagar">Total a Pagar</label>
        <input 
          id="apagar" 
          type="number" 
          class="form-control" 
          v-model="formData.apagar"
          @input="formDirty.apagar=true"
        ><div v-if="!formData.apagar && formDirty.apagar" class="alert alert-danger mt-1">
          Campo requerido
        </div>
        <label for="pagado">Total pagado</label>

        <input 
          id="pagado" 
          type="number" 
          class="form-control" 
          v-model="formData.pagado"
          @input="formDirty.pagado=true"
        >
        <div v-if="!formData.pagado && formDirty.pagado" class="alert alert-danger mt-1">
          Campo requerido
        </div>
        <button 
        class="btn btn-success my-3"  :disabled="validarBotonEnvio()" @click="agregarPersona()"
        
      >Enviar</button>
        </form>

        <div class="table-responsive">
          <table class="table table-dark">
            <tr>
              <th>Nombre</th>
              <th>dni</th>
              <th>apagar</th>
              <th>pagado</th>
              
            </tr>
            <tr v-for="(persona, index) in personas" :key="index" :class="hayDeudaColor(persona.deuda)">
              
              <td>{{ persona.nombre }}</td >
              <td>{{ persona.dni }}</td>
              <td>{{ persona.apagar }}</td>
              <td>{{ persona.pagado }}</td>
              <td>{{ persona.deuda }}</td>
              
            </tr>
          </table>
        </div>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
      formData: this.getInicialData(),
      formDirty: this.getInicialData(),
      
      personas: [ 
          
        ],
        
      
    }
    },
    methods: {

      agregarPersona() {
        const persona = { nombre: this.formData.nombre ,dni: this.formData.dni ,apagar: this.formData.apagar ,pagado: this.formData.pagado, deuda: this.calcularDeuda() }

        this.personas.push(persona)
      },
    getInicialData() {
      return {
        nombre: null,
        dni: null,
        apagar: null,
        pagado: null,
        
      }
    },
    validarBotonEnvio() {
      return (
        !this.formData.nombre ||
        this.formData.nombre.length < 3 
        
      ) || 
      (
        !this.formData.dni
      ) || 
      (
        !this.formData.apagar
      ) || 
      (
        !this.formData.pagado
      ) 
      
    },
    enviar() {
     
      const datos = {...this.formData}
      console.log(datos)

      this.formData = this.getInicialData()
      this.formDirty = this.getInicialData()
    },
    

    

    hayDeudaColor(a){

      if (a == 0) {
        return 'bg-success'; // Verde
      } else if (a>0) {
        return 'bg-danger'; // Rojo
      }
      else if (a<0) {
        return 'bg-primary'; // Azul
      }
    },
    calcularDeuda(){

return this.formData.apagar - this.formData.pagado

      
    },
    
  },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
</style>
