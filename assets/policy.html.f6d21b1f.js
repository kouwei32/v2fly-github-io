import{_ as o,r as t,o as p,c,a as n,b as l,w as i,e,d as s}from"./app.44e1f99f.js";const u={},d=e(`<h1 id="policy-\u672C\u5730\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#policy-\u672C\u5730\u7B56\u7565" aria-hidden="true">#</a> Policy \u672C\u5730\u7B56\u7565</h1><p>\u672C\u5730\u7B56\u7565\u53EF\u4EE5\u914D\u7F6E\u4E00\u4E9B\u7528\u6237\u76F8\u5173\u7684\u6743\u9650\uFF0C\u6BD4\u5982\u8FDE\u63A5\u8D85\u65F6\u8BBE\u7F6E\u3002V2Ray \u5904\u7406\u7684\u6BCF\u4E00\u4E2A\u8FDE\u63A5\u90FD\u5BF9\u5E94\u4E00\u4E2A\u7528\u6237\uFF0C\u6309\u7167\u7528\u6237\u7684\u7B49\u7EA7\uFF08level\uFF09\u5E94\u7528\u4E0D\u540C\u7684\u7B56\u7565\u3002\u672C\u5730\u7B56\u7565\u53EF\u6839\u636E\u7B49\u7EA7\u7684\u4E0D\u540C\u800C\u53D8\u5316\u3002</p><h2 id="policyobject" tabindex="-1"><a class="header-anchor" href="#policyobject" aria-hidden="true">#</a> PolicyObject</h2><p><code>PolicyObject</code> \u5BF9\u5E94\u914D\u7F6E\u6587\u4EF6\u7684 <code>policy</code> \u9879\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;levels&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;handshake&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;connIdle&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
            <span class="token property">&quot;uplinkOnly&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;downlinkOnly&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;statsUserUplink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;statsUserDownlink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;bufferSize&quot;</span><span class="token operator">:</span> <span class="token number">10240</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;system&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;statsInboundUplink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;statsInboundDownlink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;statsOutboundUplink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;statsOutboundDownlink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>level</code>: map{string: <a href="#levelpolicyobject">LevelPolicyObject</a>}</p></blockquote><p>\u4E00\u7EC4\u952E\u503C\u5BF9\uFF0C\u6BCF\u4E2A\u952E\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u5F62\u5F0F\u7684\u6570\u5B57\uFF08JSON \u7684\u8981\u6C42\uFF09\uFF0C\u6BD4\u5982 <code>&quot;0&quot;</code>\u3001<code>&quot;1&quot;</code> \u7B49\uFF0C\u53CC\u5F15\u53F7\u4E0D\u80FD\u7701\u7565\uFF0C\u6B64\u6570\u5B57\u5BF9\u5E94\u7528\u6237\u7B49\u7EA7\u3002\u6BCF\u4E00\u4E2A\u503C\u662F\u4E00\u4E2A <a href="#levelpolicyobject">LevelPolicyObject</a>.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6BCF\u4E2A\u5165\u7AD9\u51FA\u7AD9\u4EE3\u7406\u73B0\u5728\u90FD\u53EF\u4EE5\u8BBE\u7F6E\u7528\u6237\u7B49\u7EA7\uFF0CV2Ray \u4F1A\u6839\u636E\u5B9E\u9645\u7684\u7528\u6237\u7B49\u7EA7\u5E94\u7528\u4E0D\u540C\u7684\u672C\u5730\u7B56\u7565\u3002</p></div><blockquote><p><code>system</code>: <a href="#systempolicyobject">SystemPolicyObject</a></p></blockquote><p>V2Ray \u7CFB\u7EDF\u7684\u7B56\u7565</p><h2 id="levelpolicyobject" tabindex="-1"><a class="header-anchor" href="#levelpolicyobject" aria-hidden="true">#</a> LevelPolicyObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;handshake&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;connIdle&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    <span class="token property">&quot;uplinkOnly&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;downlinkOnly&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;statsUserUplink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;statsUserDownlink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;bufferSize&quot;</span><span class="token operator">:</span> <span class="token number">10240</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>handshake</code>: number</p></blockquote><p>\u8FDE\u63A5\u5EFA\u7ACB\u65F6\u7684\u63E1\u624B\u65F6\u95F4\u9650\u5236\u3002\u5355\u4F4D\u4E3A\u79D2\u3002\u9ED8\u8BA4\u503C\u4E3A <code>4</code>\u3002\u5728\u5165\u7AD9\u4EE3\u7406\u5904\u7406\u4E00\u4E2A\u65B0\u8FDE\u63A5\u65F6\uFF0C\u5728\u63E1\u624B\u9636\u6BB5\uFF08\u6BD4\u5982 VMess \u8BFB\u53D6\u5934\u90E8\u6570\u636E\uFF0C\u5224\u65AD\u76EE\u6807\u670D\u52A1\u5668\u5730\u5740\uFF09\uFF0C\u5982\u679C\u4F7F\u7528\u7684\u65F6\u95F4\u8D85\u8FC7\u8FD9\u4E2A\u65F6\u95F4\uFF0C\u5219\u4E2D\u65AD\u8BE5\u8FDE\u63A5\u3002</p><blockquote><p><code>connIdle</code>: number</p></blockquote><p>\u8FDE\u63A5\u7A7A\u95F2\u7684\u65F6\u95F4\u9650\u5236\u3002\u5355\u4F4D\u4E3A\u79D2\u3002\u9ED8\u8BA4\u503C\u4E3A <code>300</code>\u3002\u5728\u5165\u7AD9\u51FA\u7AD9\u4EE3\u7406\u5904\u7406\u4E00\u4E2A\u8FDE\u63A5\u65F6\uFF0C\u5982\u679C\u5728 <code>connIdle</code> \u65F6\u95F4\u5185\uFF0C\u6CA1\u6709\u4EFB\u4F55\u6570\u636E\u88AB\u4F20\u8F93\uFF08\u5305\u62EC\u4E0A\u884C\u548C\u4E0B\u884C\u6570\u636E\uFF09\uFF0C\u5219\u4E2D\u65AD\u8BE5\u8FDE\u63A5\u3002</p><blockquote><p><code>uplinkOnly</code>: number</p></blockquote><p>\u5F53\u8FDE\u63A5\u4E0B\u884C\u7EBF\u8DEF\u5173\u95ED\u540E\u7684\u65F6\u95F4\u9650\u5236\u3002\u5355\u4F4D\u4E3A\u79D2\u3002\u9ED8\u8BA4\u503C\u4E3A <code>2</code>\u3002\u5F53\u670D\u52A1\u5668\uFF08\u5982\u8FDC\u7AEF\u7F51\u7AD9\uFF09\u5173\u95ED\u4E0B\u884C\u8FDE\u63A5\u65F6\uFF0C\u51FA\u7AD9\u4EE3\u7406\u4F1A\u5728\u7B49\u5F85 <code>uplinkOnly</code> \u65F6\u95F4\u540E\u4E2D\u65AD\u8FDE\u63A5\u3002</p><blockquote><p><code>downlinkOnly</code>: number</p></blockquote><p>\u5F53\u8FDE\u63A5\u4E0A\u884C\u7EBF\u8DEF\u5173\u95ED\u540E\u7684\u65F6\u95F4\u9650\u5236\u3002\u5355\u4F4D\u4E3A\u79D2\u3002\u9ED8\u8BA4\u503C\u4E3A <code>5</code>\u3002\u5F53\u5BA2\u6237\u7AEF\uFF08\u5982\u6D4F\u89C8\u5668\uFF09\u5173\u95ED\u4E0A\u884C\u8FDE\u63A5\u65F6\uFF0C\u5165\u7AD9\u4EE3\u7406\u4F1A\u5728\u7B49\u5F85 <code>downlinkOnly</code> \u65F6\u95F4\u540E\u4E2D\u65AD\u8FDE\u63A5\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5728 HTTP \u6D4F\u89C8\u7684\u573A\u666F\u4E2D\uFF0C\u53EF\u4EE5\u5C06 <code>uplinkOnly</code> \u548C <code>downlinkOnly</code> \u8BBE\u4E3A <code>0</code>\uFF0C\u4EE5\u63D0\u9AD8\u8FDE\u63A5\u5173\u95ED\u7684\u6548\u7387\u3002</p></div><blockquote><p><code>statsUserUplink</code>: true | false</p></blockquote><p>\u5F53\u503C\u4E3A <code>true</code> \u65F6\uFF0C\u5F00\u542F\u5F53\u524D\u7B49\u7EA7\u7684\u6240\u6709\u7528\u6237\u7684\u4E0A\u884C\u6D41\u91CF\u7EDF\u8BA1\u3002</p><blockquote><p><code>statsUserDownlink</code>: true | false</p></blockquote><p>\u5F53\u503C\u4E3A <code>true</code> \u65F6\uFF0C\u5F00\u542F\u5F53\u524D\u7B49\u7EA7\u7684\u6240\u6709\u7528\u6237\u7684\u4E0B\u884C\u6D41\u91CF\u7EDF\u8BA1\u3002</p><blockquote><p><code>bufferSize</code>: number</p></blockquote><p>\u6BCF\u4E2A\u8FDE\u63A5\u7684\u5185\u90E8\u7F13\u5B58\u5927\u5C0F\u3002\u5355\u4F4D\u4E3A kB\u3002\u5F53\u503C\u4E3A <code>0</code> \u65F6\uFF0C\u5185\u90E8\u7F13\u5B58\u88AB\u7981\u7528\u3002</p><p>\u9ED8\u8BA4\u503C (V2Ray 4.4+):</p><ul><li>\u5728 ARM\u3001MIPS\u3001MIPSLE \u5E73\u53F0\u4E0A\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>0</code>\u3002</li><li>\u5728 ARM64\u3001MIPS64\u3001MIPS64LE \u5E73\u53F0\u4E0A\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>4</code>\u3002</li><li>\u5728\u5176\u5B83\u5E73\u53F0\u4E0A\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>512</code>\u3002</li></ul><p>\u9ED8\u8BA4\u503C (V2Ray 4.3-):</p><ul><li>\u5728 ARM\u3001MIPS\u3001MIPSLE\u3001ARM64\u3001MIPS64\u3001MIPS64LE \u5E73\u53F0\u4E0A\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>16</code>\u3002</li><li>\u5728\u5176\u5B83\u5E73\u53F0\u4E0A\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>2048</code>\u3002</li></ul>`,31),r={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"TIP",-1),b=n("code",null,"bufferSize",-1),v=s(" \u9009\u9879\u4F1A\u8986\u76D6 "),m=s("\u73AF\u5883\u53D8\u91CF"),q=s("\u4E2D "),y=n("code",null,"v2ray.ray.buffer.size",-1),h=s(" \u7684\u8BBE\u5B9A\u3002"),f=e(`<h2 id="systempolicyobject" tabindex="-1"><a class="header-anchor" href="#systempolicyobject" aria-hidden="true">#</a> SystemPolicyObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;statsInboundUplink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;statsInboundDownlink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;statsOutboundUplink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;statsOutboundDownlink&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>statsInboundUplink</code>: true | false</p></blockquote><p>\u5F53\u503C\u4E3A <code>true</code> \u65F6\uFF0C\u5F00\u542F\u6240\u6709\u5165\u7AD9\u4EE3\u7406\u7684\u4E0A\u884C\u6D41\u91CF\u7EDF\u8BA1\u3002</p><blockquote><p><code>statsInboundDownlink</code>: true | false</p></blockquote><p>\u5F53\u503C\u4E3A <code>true</code> \u65F6\uFF0C\u5F00\u542F\u6240\u6709\u5165\u7AD9\u4EE3\u7406\u7684\u4E0B\u884C\u6D41\u91CF\u7EDF\u8BA1\u3002</p><blockquote><p><code>statsOutboundUplink</code>: true | false</p></blockquote><p>\uFF08 V2Ray 4.26.0+ \uFF09\u5F53\u503C\u4E3A <code>true</code> \u65F6\uFF0C\u5F00\u542F\u6240\u6709\u51FA\u7AD9\u4EE3\u7406\u7684\u4E0A\u884C\u6D41\u91CF\u7EDF\u8BA1\u3002</p><blockquote><p><code>statsOutboundDownlink</code>: true | false</p></blockquote><p>\uFF08 V2Ray 4.26.0+ \uFF09 \u5F53\u503C\u4E3A <code>true</code> \u65F6\uFF0C\u5F00\u542F\u6240\u6709\u51FA\u7AD9\u4EE3\u7406\u7684\u4E0B\u884C\u6D41\u91CF\u7EDF\u8BA1\u3002</p>`,10);function _(j,O){const a=t("RouterLink");return p(),c("div",null,[d,n("div",r,[k,n("p",null,[b,v,l(a,{to:"/config/env.html#%E6%AF%8F%E4%B8%AA%E8%BF%9E%E6%8E%A5%E7%9A%84%E7%BC%93%E5%AD%98%E5%A4%A7%E5%B0%8F"},{default:i(()=>[m]),_:1}),q,y,h])]),f])}const P=o(u,[["render",_],["__file","policy.html.vue"]]);export{P as default};
