<script lang="ts">
import { authStore } from '@/stores/auth';
import { mapStores } from 'pinia';
import { defineComponent } from 'vue';



export default defineComponent({
  data() {
    return {
      editField: false,
      name:"Alexis",
      lastname:"Fonzo",
      document:"44444444",
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
      options: {}
    };
  },
  methods: {
    async logout() {
      await this.authStore.logout();
      this.$router.push('/');
    },
    //edit profile data method
    async edit() {
    }
  },
  computed: {
    ...mapStores(authStore)
  }
})
</script>

<template>
  <!-- User data, change with real data -->
  <div class="flex flex-col h-full items-center">

    <div class="p-2">
      <h1 class="text-4xl pb-6">
        Perfil
      </h1>
      <div class="flex text-xl text-gray-500">
        Datos de la cuenta
      </div>
      <div class="max-w-4xl  bg-grey w-full rounded-lg shadow-lg">
        <div class="grid2columns">
          <p class="text-gray-600">
            Empresa
          </p>
          <p>
            Mindia
          </p>
        </div>
        <div class="grid2columns">
          <p class="text-gray-600">
            Usuario
          </p>
          <p>
            afonzo@mindia.com.ar
          </p>
        </div>
        </div>

        <div class="pt-6 pb-6">
        </div>
        
        <div class="flex text-xl text-gray-500">
          Datos personales
        </div>
        <div class="max-w-4xl  bg-grey w-full rounded-lg shadow-lg">
        <div class="grid2columns">
          <p class="text-gray-600">
            Nombre
          </p>


          <!-- edit mode enabled -->
           <div v-if="editField" >
             <input v-model="name">
             <div class="flex items-center justify-center space-x-2">
               <button type="button" @click="editField = false" class="btn rounded bg-gray-200 font-medium hover:bg-gray-300">X</button>
               <button type="button" @click="editField = false" class="btn rounded bg-blue-500 font-medium text-white hover:bg-blue-600"></button>
              </div>
            </div>


          <!-- disabled when edit mode is disabled too-->
          <input v-else disabled v-model="name">
            
        </div>
        <div class="grid2columns">
          <p class="text-gray-600">
            Apellido
          </p>
          <p>
            Fonzo
          </p>
        </div>
        <div class="grid2columns">
          <p class="text-gray-600">
            Documento
          </p>
          <p>
            44444444
          </p>
        </div>
      </div>


      <div class="flex grid p-6 place-items-center">
        <div class="px-6 my-3 whitespace-nowrap box-content text-cyan-500 hover:text-cyan-700 cursor-pointer" @click="editField = true">Edit data</div>
        <span></span>
        <div class="px-6 py-3 w-min text-white bg-red-600 rounded cursor-pointer hover:bg-red-400" @click="logout">Logout</div>
      </div>
    </div>
  </div>
</template>
