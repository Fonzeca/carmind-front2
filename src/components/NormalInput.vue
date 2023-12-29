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
        getErrorFunc: {
            type: Function,
            default: () => '',
        },
    },
    emits: ['update:value'],
    data() {
        return {
            innerHTMLInput: undefined as HTMLInputElement | undefined,
            input_container: undefined as HTMLDivElement | undefined,
            _errorText: '',
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
            this._errorText = "";
        };

        this.innerHTMLInput.onblur = () => {
            this.input_container?.classList.remove('focus-visible');
            this._errorText = this.getErrorFunc(this.innerHTMLInput?.value);
        };
    },
})
</script>

<template>
    <div class="flex flex-row p-1 h-10 w-full rounded-[5px] outline outline-gray-600
             outline-1 border-[3px] border-transparent" ref="input_container" :class="{'outline-red-600 outline-2' : _errorText}">
        <input ref="inner_input" :type="hideValue ? 'password' : 'text'"  :value="value" class="w-full" @input="updateValue">
        <slot>
        </slot>
    </div>
    <div class="flex flex-row w-full mt-1 text-red-600" v-if="_errorText">
        <div class="flex-1 text-xs text-right">{{ _errorText }}</div>
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