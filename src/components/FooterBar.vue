<script lang="ts">
import { defineComponent } from 'vue';
import IconCar from './icons/footer-bar/IconCar.vue';
import IconRoute from './icons/footer-bar/IconRoute.vue';

export default defineComponent({
    emits: ["click"],
    data() {
        return {
          options:[
            //Vehiculos
            {
              label: "Vehiculos",
              icon: IconCar,
              route: "/"
            },
            //Rutas
            {
              label: "Rutas",
              icon: IconRoute,
              route: "/gps"
            },
          ],
          selected: 0,
        };
    },
    mounted() {
      this.selected = this.options.findIndex((item) => item.route === this.$route.path);
    },
    methods: {
      click(index: number){
        this.selected = index;
        this.$router.push(this.options[index].route);
      }
    },
    components: { IconRoute, IconCar }
})
</script>

<template>
  <div class="flex h-[64px] flex-row items-center justify-around w-full text-white bg-gris-500">
    <div class="flex flex-col items-center min-w-[60px] cursor-pointer" v-for="item,index in options" :key="item.route" @click="click(index)">
      <component :is="item.icon" class="w-[35px] h-[35px]" :is-selected="index === selected"></component>
      <span class="text-xs" :class="{'text-accent-500' : index === selected}">{{item.label}}</span>
    </div>
  </div>
</template>
