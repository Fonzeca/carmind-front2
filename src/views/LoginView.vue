
<script lang="ts">
import LogoLG from '@/assets/logo/logo-lg.png';
import NormalButton from '@/components/NormalButton.vue';
import NormalInput from '@/components/NormalInput.vue';
import IconEye from '@/components/icons/IconEye.vue';
import IconEyeSlash from '@/components/icons/IconEyeSlash.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            username: "",
            password: "",
            imageUrl: LogoLG,
            showPass: false,
        };
    },
    methods: {
        login() {
            alert("Login");
        }
    },
    components: { NormalInput, NormalButton, IconEye, IconEyeSlash }
})

</script>

<template>
    <div class="flex flex-col items-center justify-center h-full">
        <img :src="imageUrl" class="max-w-[87px] max-h-[87px]" />
        <p class="mt-3 text-2xl font-bold mb-11">CarMind</p>
        <p class="text-lg mb-14">Ingresá a tu cuenta</p>
        <div class="max-w-[300px]">
            <p class="mb-1">E-mail</p>
            <NormalInput v-model:value="username" class="mb-9"></NormalInput>

            <p class="mb-1">Contraseña</p>
            <NormalInput v-model:value="password" class="mb-9" :hide-value="!showPass">
                <div class="flex flex-col justify-center h-full w-[30px] cursor-pointer select-none" @click="showPass = !showPass">
                    <IconEye v-if="!showPass"></IconEye>
                    <IconEyeSlash v-else></IconEyeSlash>
                    
                </div>
            </NormalInput>
            <NormalButton @click="login" label="Iniciar sesión"></NormalButton>
        </div>
    </div>
</template>