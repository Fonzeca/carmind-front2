<script lang="ts">
import { defineComponent } from 'vue';

interface Vehiculo {
  name: string;
  patente: string;
}

interface HeaderColumn {
  name: string;
  key: keyof Vehiculo;
}

export default defineComponent({
  data() {
    return {
      vehiculos: [
        {
          name: 'Vehiculo 1',
          patente: 'ABC123',
        }
      ] as Vehiculo[],
      headerColumns: [
        {
          name: 'Vehiculo',
          key: 'name',
        },
        {
          name: 'Patente',
          key: 'patente',
        },
        {
          name: 'Acciones',
          key: 'acciones',
        }
      ] as HeaderColumn[],
    };
  },
  methods: {
    ver_gps(vehiculo : Vehiculo) {
      console.log('Ver GPS', vehiculo);
    },
  },
})
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div class="p-3 text-xl text-bg_menu">
      Vehiculos
    </div>
    <!-- Table responsive wrapper -->
    <div class="overflow-x-auto bg-white">

      <!-- Search input -->


        <div class='max-w-md p-2 mr-0'>
          <div
            class="relative flex items-center w-full h-12 overflow-hidden bg-white border rounded-lg focus-within:shadow-lg">
            <div class="grid w-12 h-full text-gray-300 place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <input class="w-full h-full pr-2 text-sm text-gray-700 outline-none peer" type="text" id="search"
              placeholder="Search something.." />
          </div>
        </div>


      <!-- Table -->
      <table class="min-w-full text-sm text-left whitespace-nowrap">

        <!-- Table head -->
        <thead class="tracking-wider border-b-2 ">
          <tr>
            <th scope="col" class="px-6 py-2" v-for="(item, index) in headerColumns" :key="index">
              {{ item.name }}
              <!-- SORT COLUMN -->
              <!-- <a href="" class="inline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  class="w-[0.75rem] h-[0.75rem] inline ml-1 text-neutral-500"
                  fill="currentColor"
                >
                  <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                </svg>
              </a> -->

            </th>
          </tr>
        </thead>

        <!-- Table body -->
        <tbody>

          <tr class="border-b hover:bg-neutral-100" v-for="(vehiculo, index) in vehiculos" :key="index">
            <td class="px-6 py-2" v-for="(header, index) in headerColumns" :key="index">
              {{ vehiculo[header.key] }}
              <div v-if="header.name === 'Acciones'" class="flex flex-row">
                <button class="p-2 text-white bg-green-500 rounded-md" @click="ver_gps(vehiculo)">Ver GPS</button>
              </div>
            </td>
          </tr>
        </tbody>

      </table>

    </div>

  </div>
</template>
