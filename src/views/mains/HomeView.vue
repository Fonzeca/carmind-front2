<script lang="ts">
import FooterBar from '@/components/FooterBar.vue';
import { defineComponent } from 'vue';



export default defineComponent({
  data() {
    return {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
      options: {}
    };
  },
  methods: {
  },
  components: { FooterBar }
})
</script>

<template>
  <div class="flex flex-col w-full h-full">
asd
  </div>
</template>
