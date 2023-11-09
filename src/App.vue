<template>
    <div class="">
        <div class="text-3xl py-10 font-semibold">
            Home
        </div>
        <div class="w-full max-w-2xl">
            <textarea name="body" id="editor"></textarea>
        </div>
    </div>
</template>
<script setup>    
    import { nextTick } from 'vue';
    import * as editor from './editor';
    nextTick(() => {
        editor.render();
    });
</script>
<style scoped>

</style>