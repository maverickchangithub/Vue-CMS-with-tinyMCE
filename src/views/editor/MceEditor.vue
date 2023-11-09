<template>
    <div class="w-full max-w-2xl mx-auto space-y-5">
        <div class="">
            <textarea name="body" id="editor" v-model="body"></textarea>
        </div>
        <div class="prose" v-html="body">
            
        </div>
    </div>
</template>
<script setup>
    
    import { nextTick, ref, onMounted } from 'vue';
    import * as editor from '../../editor';
    const body = ref('')
    nextTick(() => {
        editor.render();        
    });
    onMounted(() => {
        
    })
</script>
<style scoped>

</style>