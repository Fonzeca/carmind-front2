
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
            state: 'input_code' as 'input_email' | 'input_code' | 'input_password' | 'success',
            email: "",
            emailError: "",
            code: "",
            codeError: "",
        };
    },
    beforeMount() {
        this.email = this.$route.query.email as string;
    },
    methods: {
        validateEmail() {
            this.emailError = '';
            if (!validators.isEmail(this.email)) {
                this.emailError = "El correo electrónico no es válido";
            }
        },
        async sendEmail() {
            this.validateEmail();
            if (this.emailError) return;
            let loader = this.$loading.show();
            try {
                await this.authStore.forgotPassword(this.email);
                this.state = 'input_code';

                // this.$router.push('/login');
            } catch (error) {
                console.error(error);
            }
            loader.hide();
        },
        validateCode() {
            this.codeError = '';
            if (!validators.isRecoverpasswordCode(this.code)) {
                this.codeError = "El codigo es de 4 digitos";
            }
        },
        async sendCodeToVerify() {
            this.validateCode();
            if (this.codeError) return;
            let loader = this.$loading.show();
            try {
                // await this.authStore.verifyCode(this.email, this.code);
                this.state = 'input_password';
                // this.$router.push('/login');
            } catch (error) {
                console.error(error);
            }
            loader.hide();
        },
    },
    computed: {
        ...mapStores(authStore)
    },
    components: { NormalInput, NormalButton, IconEye, IconEyeSlash }
})
</script>

<template>
    <div class="flex flex-col items-center justify-start h-full m-6" v-if="state === 'input_email'">
        <div class="text-3xl font-bold text-center">Recuperar contraseña</div>
        <div class="text-center">Ingresa tu correo electrónico para recuperar tu contraseña</div>
        <div class="flex flex-col items-center justify-center w-full mt-6 max-w-[300px]">
            <NormalInput v-model:value="email" @blur="validateEmail" @focus="emailError = ''" :have-error="!!emailError"
                placeholder="Correo electrónico" @keyup.enter="sendEmail">
            </NormalInput>
            <div class="flex flex-row w-full mt-1 text-red-600" v-if="emailError">
                <div class="flex-1 text-xs text-right">{{ emailError }}</div>
            </div>
            <NormalButton label="Enviar" class="mt-6" @click="sendEmail" />
        </div>
    </div>
    <div class="flex flex-col items-center justify-start h-full m-6" v-if="state === 'input_code'">
        <div class="text-3xl font-bold text-center">Recuperar contraseña</div>
        <div class="text-center">Ingresa el código que te enviamos a tu correo electrónico</div>
        <div class="flex flex-col items-center justify-center w-full mt-6 max-w-[300px]">
            <NormalInput :focus-on-mount="true" v-model:value="code" @blur="validateCode" :have-error="!!codeError"
                @focus="codeError = ''" class="max-w-[90px] text-lg" placeholder="Codigo" @keyup.enter="sendCodeToVerify">
            </NormalInput>
            <div class="flex flex-row w-full mt-1 text-red-600" v-if="codeError">
                <div class="flex-1 text-xs text-right">{{ codeError }}</div>
            </div>
            <NormalButton label="Enviar" class="mt-6" @click="sendEmail" />
        </div>
    </div>
    <div class="flex flex-col items-center justify-start h-full m-6" v-if="state === 'input_password'">
        <div class="text-3xl font-bold text-center">Recuperar contraseña</div>
        <div class="text-center">Ingresa tu nueva contraseña</div>
        <div class="flex flex-col items-center justify-center w-full mt-6 max-w-[300px]">
            <NormalInput v-model:value="email" @blur="validateEmail" placeholder="Correo electrónico"
                @keyup="handleEnter" />
            <NormalButton label="Enviar" class="mt-6" @click="sendEmail" />
        </div>
    </div>
    <div class="flex flex-col items-center justify-start h-full m-6" v-if="state === 'success'">
        <div class="text-3xl font-bold text-center">Recuperar contraseña</div>
        <div class="text-center">Se ha enviado un correo electrónico con las instrucciones para recuperar tu contraseña
        </div>
        <div class="flex flex-col items-center justify-center w-full mt-6 max-w-[300px]">
            <NormalButton label="Iniciar sesión" class="mt-6" @click="$router.push('/login')" />
    </div>
</div></template>