import{_ as n,o as s,c as t,e}from"./app.44e1f99f.js";const a={},o=e(`<h1 id="http-2" tabindex="-1"><a class="header-anchor" href="#http-2" aria-hidden="true">#</a> HTTP/2</h1><p>V2Ray 3.17 \u4E2D\u52A0\u5165\u4E86\u57FA\u4E8E HTTP/2 \u7684\u4F20\u8F93\u65B9\u5F0F\u3002\u5B83\u5B8C\u6574\u6309\u7167 HTTP/2 \u6807\u51C6\u5B9E\u73B0\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5176\u5B83\u7684 HTTP \u670D\u52A1\u5668\uFF08\u5982 Nginx\uFF09\u8FDB\u884C\u4E2D\u8F6C\u3002</p><p>\u7531 HTTP/2 \u7684\u5EFA\u8BAE\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u5FC5\u987B\u540C\u65F6\u5F00\u542F TLS \u624D\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528\u8FD9\u4E2A\u4F20\u8F93\u65B9\u5F0F\u3002</p><p>V2Ray 4.20 \u4E2D\u5BF9\u670D\u52A1\u7AEF\u7684 TLS \u914D\u7F6E\u7684\u5F3A\u5236\u6761\u4EF6\u79FB\u9664\uFF0C\u4E3A\u4E86\u5728\u7279\u6B8A\u7528\u9014\u7684\u5206\u6D41\u90E8\u7F72\u73AF\u5883\u4E2D\uFF0C\u7531\u5916\u90E8\u7F51\u5173\u7EC4\u4EF6\u5B8C\u6210 TLS \u5C42\u5BF9\u8BDD\uFF0CV2Ray \u4F5C\u4E3A\u540E\u7AEF\u5E94\u7528\uFF0C\u7F51\u5173\u548C V2Ray \u95F4\u4F7F\u7528\u79F0\u4E3A <code>h2c</code> \u7684\u660E\u6587 http/2 \u8FDB\u884C\u901A\u8BAF\u3002</p><h2 id="httpobject" tabindex="-1"><a class="header-anchor" href="#httpobject" aria-hidden="true">#</a> HttpObject</h2><p><code>HttpObject</code> \u5BF9\u5E94\u4F20\u8F93\u914D\u7F6E\u7684 <code>httpSettings</code> \u9879\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;v2ray.com&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/random/path&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span><span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>host</code>: [string]</p></blockquote><p>\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u6BCF\u4E00\u4E2A\u5143\u7D20\u662F\u4E00\u4E2A\u57DF\u540D\u3002\u5BA2\u6237\u7AEF\u4F1A\u968F\u673A\u4ECE\u5217\u8868\u4E2D\u9009\u51FA\u4E00\u4E2A\u57DF\u540D\u8FDB\u884C\u901A\u4FE1\uFF0C\u670D\u52A1\u5668\u4F1A\u9A8C\u8BC1\u57DF\u540D\u662F\u5426\u5728\u5217\u8868\u4E2D\u3002</p><blockquote><p><code>path</code> string</p></blockquote><p>HTTP \u8DEF\u5F84\uFF0C\u7531 <code>/</code> \u5F00\u5934\u3002\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u5FC5\u987B\u4E00\u81F4\u3002\u53EF\u9009\u53C2\u6570\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>&quot;/&quot;</code>\u3002</p><blockquote><p><code>method</code>: string</p></blockquote><p>HTTP \u65B9\u6CD5\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>&quot;PUT&quot;</code>\u3002 (v4.39.0+)</p><blockquote><p><code>headers</code>: map{ string, [ string ]}</p></blockquote><p>HTTP \u5934\uFF0C\u4E00\u4E2A\u952E\u503C\u5BF9\uFF0C\u6BCF\u4E2A\u952E\u8868\u793A\u4E00\u4E2A HTTP \u5934\u7684\u540D\u79F0\uFF0C\u5BF9\u5E94\u7684\u503C\u662F\u4E00\u4E2A\u6570\u7EC4\u3002(v4.39.0+)</p>`,15),p=[o];function c(i,d){return s(),t("div",null,p)}const u=n(a,[["render",c],["__file","h2.html.vue"]]);export{u as default};
