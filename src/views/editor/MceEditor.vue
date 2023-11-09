<template>
    <div class="w-full max-w-2xl mx-auto space-y-5">
        <div class="">
            <textarea name="body" id="editor" v-model="body"></textarea>
        </div>
        <button class="px-5 py-2 rounded bg-sky-500 text-white hover:bg-sky-600 transition duration-200 cursor-pointer" @click="getData">
            get data!
        </button>
        <div class="prose prose-invert prose-neutral" id="code-block" v-html="body">
            
        </div>
    </div>
</template>
<script setup>
    
    import { nextTick, ref, onMounted, watch } from 'vue';
    import * as editor from '../../editor';
    import Prism from 'prismjs';
    
    import 'prismjs/components/prism-markup';
    import 'prismjs/components/prism-markup-templating';
    import 'prismjs/components/prism-javascript';
    import 'prismjs/components/prism-php';
    import 'prismjs/components/prism-swift';

    import 'prismjs/themes/prism-okaidia.css';
    const body = ref('');
    
    const getData = () => {
        Prism.highlightAll();
    }
    nextTick(() => {
        editor.render();        
    });
    onMounted(() => {
       
    })
</script>
<style scoped>
    
</style>