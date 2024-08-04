<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    emits: ['click'],
    data() {
        return {
            innerHTMLInput: undefined as HTMLInputElement | undefined,
            input_container: undefined as HTMLDivElement | undefined,
        };
    },
    methods: {
        click() {
            this.$emit('click');
        },
    },
})
</script>

<template>
    <div class="flex flex-col items-center border max-w-[200px]">
        <img src="path_to_image" alt="Image" class="w-32 h-32 mb-4 rounded-full">
        <h3 class="text-lg font-semibold">{{ title }}</h3>
    </div>
</template>
