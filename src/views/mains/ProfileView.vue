<script lang="ts">
import { authStore } from '@/stores/auth';
import { mapStores } from 'pinia';
import { defineComponent } from 'vue';
import Pencil from '@/components/icons/Pencil.vue';



export default defineComponent({
  data() {
    return {
      editName: false,
      editLastname: false,
      editDocument: false,
      name:"Alexis",
      lastname:"Fonzo",
      document:"44444444",
      editedName: "",
      editedLastname:"",
      editedDocument:"",
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
    async editNameMethod() {
      this.editName=false;
      this.name = this.editedName;
    },
    async editLastnameMethod(){
      this.editLastname=false;
      this.lastname= this.editedLastname;
    },
    async editDocumentMethod(){
      this.editDocument=false;
      this.document= this.editedDocument;
    }
  },
  computed: {
    ...mapStores(authStore)
  },
  components: {Pencil}
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
      <div class="flex flex-col max-w-4xl  bg-grey w-full rounded-lg shadow-lg">
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
           <div v-if="editName" >
             <input v-model="editedName">
             <div class="flex flex-row items-center justify-center space-x-2">
               <button type="button" @click="editName=false" class="btn rounded bg-red-500 font-medium text-white hover:bg-red-600">X</button>
               <button type="button" @click="editNameMethod()" class="btn rounded bg-green-500 font-medium text-white hover:bg-green-600">✓</button>
              </div>
            </div>


          <!-- edit mode disabled -->
          <div v-else class="flex flex-row">
            <input  disabled v-model="name">
            <div class="cursor-pointer" @click="editName = true, editedName = name"><Pencil> </Pencil></div>

          </div>
            
        </div>
        <div class="grid2columns">
          <p class="text-gray-600">
            Apellido
          </p>
            <!-- edit mode enabled -->
           <div class="flex items-center justify-between" v-if="editLastname">
             <input v-model="editedLastname">
             <div class="flex flex-row items-center justify-center space-x-2">
               <button type="button" @click="editLastname = false" class="btn rounded bg-red-500 font-medium text-white hover:bg-red-600">X</button>
               <button type="button" @click="editLastnameMethod()" class="btn rounded bg-green-500 font-medium text-white hover:bg-green-600">✓</button>
              </div>
            </div>


          <!-- edit mode disabled -->
          <div v-else class="flex flex-row">
            <input  disabled v-model="lastname">
            <div class="cursor-pointer" @click="editLastname = true, editedLastname= lastname"><Pencil> </Pencil></div>

          </div>
        </div>
        <div class="grid2columns">
          <div class="text-gray-600">
            Documento
          </div>
            <!-- edit mode enabled -->
           <div class="flex flex-row items-center justify-between" v-if="editDocument">
             <input class="flex w-[120px]" v-model="editedDocument">
             <div class="flex flex-row items-center justify-center">
               <button type="button" @click="editDocument = false" class="btn rounded font-medium text-red-500">X</button>
               <button type="button" @click="editDocumentMethod()" class="btn rounded font-medium text-green-500">✓</button>
              </div>
            </div>


          <!-- edit mode disabled -->
          <div v-else class="flex flex-row">
            <input  disabled v-model="document">
            <div class="cursor-pointer" @click="editDocument = true, editedDocument= document"><Pencil> </Pencil></div>

          </div>
        </div>
      </div>


      <div class="flex p-6 place-items-center">
        <div class="px-6 py-3 w-min text-white bg-red-600 rounded cursor-pointer hover:bg-red-400" @click="logout">Logout</div>
      </div>
    </div>
  </div>
</template>
