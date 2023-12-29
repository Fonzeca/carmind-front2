
<script lang="ts">
import NormalButton from '@/components/NormalButton.vue';
import NormalInput from '@/components/NormalInput.vue';
import IconEye from '@/components/icons/IconEye.vue';
import IconEyeSlash from '@/components/icons/IconEyeSlash.vue';
import { authStore } from '@/stores/auth';
import { mapStores } from 'pinia';

import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
        };
    },
    methods: {
        handleEnter(event: KeyboardEvent) {
            if (event.key === 'Enter') {
                
            }
        }
    },
    computed: {
        ...mapStores(authStore)
    },
    components: { NormalInput, NormalButton, IconEye, IconEyeSlash }
})

</script>

<template>
    <div class="flex flex-col items-center justify-center h-full">
        
    </div>
</template>