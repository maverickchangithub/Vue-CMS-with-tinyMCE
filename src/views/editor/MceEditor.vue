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
    import Prism from 'prismjs'
    import 'prismjs/components/prism-javascript' // Language
    import 'prismjs/components/prism-php'
    import 'prismjs/components/prism-markup'
    import 'prismjs/components/prism-swift'
    import 'prismjs/components/prism-sql'
    // import 'prismjs/themes/prism.css'
    import 'prismjs/themes/prism-twilight.css' // Theme
    import { nextTick, ref, onMounted } from 'vue';
    import * as editor from '../../editor';
    const body = ref('')
    nextTick(() => {
        editor.render();        
    });
    onMounted(() => {
        Prism.highlightAll()
    })
</script>
<style scoped>

</style>