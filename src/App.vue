<template>
    <div>
        Home
        <div>
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