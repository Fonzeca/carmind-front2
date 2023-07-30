<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        value: {
            type: String,
            required: true,
        },
        hideValue: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:value'],
    data() {
        return {
            innerHTMLInput: undefined as HTMLInputElement | undefined,
            input_container: undefined as HTMLDivElement | undefined,
        };
    },
    methods: {
        updateValue(event: Event) {
            this.$emit('update:value', (event.target as HTMLInputElement).value);
        },
    },
    mounted() {
        this.innerHTMLInput = this.$refs.inner_input as HTMLInputElement;
        this.input_container = this.$refs.input_container as HTMLDivElement;

        this.innerHTMLInput.onfocus = () => {
            this.input_container?.classList.add('focus-visible');
        };

        this.innerHTMLInput.onblur = () => {
            this.input_container?.classList.remove('focus-visible');
        };
    },
})
</script>

<template>
    <div class="flex flex-row p-1 h-10 w-full rounded-[5px] outline outline-gray-600
             outline-1 border-[3px] border-transparent" ref="input_container">
        <input ref="inner_input" :type="hideValue ? 'password' : 'text'" class="w-full" @input="updateValue">
        <slot>
        </slot>
    </div>
</template>

<style lang="scss" scoped>
.focus-visible {

    outline: none;

    border: double 3px transparent;
    background-image: linear-gradient(white, white),
        linear-gradient(to bottom, #89ae02, #B6E802);
    background-origin: border-box;
    background-clip: padding-box, border-box;
}

input {
    &:focus-visible {
        outline: none;
    }
}
</style>