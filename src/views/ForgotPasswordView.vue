
<script lang="ts">
import NormalButton from '@/components/NormalButton.vue';
import NormalInput from '@/components/NormalInput.vue';
import IconEye from '@/components/icons/IconEye.vue';
import IconEyeSlash from '@/components/icons/IconEyeSlash.vue';
import { authStore } from '@/stores/auth';
import validators from '@/utils/validators';
import { mapStores } from 'pinia';

import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            email : ""
        };
    },
    beforeMount() {
        this.email = this.$route.query.email as string;
    },
    methods: {
        handleEnter(event: KeyboardEvent) {
            if (event.key === 'Enter') {

            }
        },
        validateEmail() {
            return validators.validateEmail;
        }
    },
    computed: {
        ...mapStores(authStore)
    },
    components: { NormalInput, NormalButton, IconEye, IconEyeSlash }
})
</script>

<template>
    <div class="flex flex-col items-center justify-start h-full m-6">
        <div class="text-3xl font-bold text-center">Recuperar contraseña</div>
        <div class="text-center">Ingresa tu correo electrónico para recuperar tu contraseña</div>
        <div class="flex flex-col items-center justify-center w-full mt-6">
            <NormalInput v-model:value="email" :getErrorFunc="validateEmail" placeholder="Correo electrónico" @keyup="handleEnter" />
            <NormalButton label="Enviar" class="mt-6" />
        </div>
    </div>
</template>