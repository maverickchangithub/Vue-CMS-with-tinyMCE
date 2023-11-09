<template>
    <div class="w-full max-w-2xl mx-auto space-y-5">
        <div class="">
            <textarea name="body" id="editor" v-model="body"></textarea>
        </div>
        <div class="prose prose-invert" v-html="codeplaceholder">
            
        </div>
    </div>
</template>
<script setup>
    
    import { nextTick, ref, onMounted } from 'vue';
    import * as editor from '../../editor';
    const body = ref('')
    const codeplaceholder = `<div class="code-toolbar"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"message"</span> placeholder<span class="token operator">=</span><span class="token string">"Enter a message"</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"sendMessage"</span><span class="token operator">&gt;</span>Send Message<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'http://localhost/path/to/backend/api.php'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></code></pre><div class="toolbar"><div class="toolbar-item">JavaScript</div><div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy">Copy</button></div></div></div>`
    nextTick(() => {
        editor.render();        
    });
    onMounted(() => {
        
    })
</script>
<style scoped>

</style>