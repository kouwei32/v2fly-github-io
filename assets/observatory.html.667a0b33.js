import{_ as o,o as e,c as t,e as c}from"./app.31d0518d.js";const s={},a=c(`<h1 id="observatory-\u8FDE\u63A5\u89C2\u6D4B" tabindex="-1"><a class="header-anchor" href="#observatory-\u8FDE\u63A5\u89C2\u6D4B" aria-hidden="true">#</a> Observatory \u8FDE\u63A5\u89C2\u6D4B</h1><p>\u8FDE\u63A5\u89C2\u6D4B\u7EC4\u4EF6\u901A\u8FC7\u5B9A\u65F6\u901A\u8FC7\u6307\u5B9A\u7684\u51FA\u7AD9\u8FDE\u63A5\u5EFA\u7ACB\u8FDE\u63A5\u6765\u786E\u5B9A\u51FA\u7AD9\u4EE3\u7406\u7684\u72B6\u6001\u3002 (v4.38.0+) \u8FDE\u63A5\u89C2\u6D4B\u7EC4\u4EF6\u7684\u89C2\u6D4B\u7ED3\u679C\u53EF\u4EE5\u88AB\u5176\u4ED6\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u5982\u8D1F\u8F7D\u5747\u8861\u7A0B\u5E8F\u53CAAPI\u3002</p><p>\u9ED8\u8BA4\u8FDE\u63A5 <code>api.v2fly.org</code> \u8FDB\u884C\u8FDE\u63A5\u72B6\u6001\u68C0\u6D4B\u3002\u7531\u4E8E\u63A2\u6D4B\u8FDE\u63A5\u4F1A\u5B9A\u65F6\u53D1\u51FA\uFF0C\u6B64\u529F\u80FD\u53EF\u80FD\u4F1A\u4F7F\u5904\u4E8E\u7279\u6743\u7F51\u7EDC\u8DEF\u5F84\u7684\u653B\u51FB\u8005\u83B7\u5F97\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u914C\u60C5\u4F7F\u7528\u3002</p><h2 id="observatoryobject" tabindex="-1"><a class="header-anchor" href="#observatoryobject" aria-hidden="true">#</a> ObservatoryObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;subjectSelector&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token string">&quot;outbound&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>subjectSelector</code>: [string]</p></blockquote><p>\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u5176\u4E2D\u6BCF\u4E00\u4E2A\u5B57\u7B26\u4E32\u5C06\u7528\u4E8E\u548C\u51FA\u7AD9\u534F\u8BAE\u6807\u8BC6\u7684\u524D\u7F00\u5339\u914D\u3002\u5728\u4EE5\u4E0B\u51E0\u4E2A\u51FA\u7AD9\u534F\u8BAE\u6807\u8BC6\u4E2D\uFF1A<code>[ &quot;a&quot;, &quot;ab&quot;, &quot;c&quot;, &quot;ba&quot; ]</code>\uFF0C<code>&quot;selector&quot;: [&quot;a&quot;]</code> \u5C06\u5339\u914D\u5230 <code>[ &quot;a&quot;, &quot;ab&quot; ]</code>\u3002</p><p>\u88AB\u5339\u914D\u5230\u7684\u51FA\u7AD9\u8FDE\u63A5\u5C06\u88AB\u5B9A\u65F6\u8FDE\u63A5\u4EE5\u786E\u5B9A\u662F\u5426\u53EF\u7528\u3002</p><blockquote><p><code>probeURL</code>: string</p></blockquote><p>\u7528\u4E8E\u68C0\u6D4B\u8FDE\u63A5\u72B6\u6001\u7684\u7F51\u5740\u3002\u9ED8\u8BA4\u4F1A\u4F7F\u7528\u5185\u6784\u7684\u8FDE\u63A5\u72B6\u6001\u68C0\u6D4B\u5730\u5740\u3002(4.41.1+)</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6B64\u76EE\u6807\u5730\u5740\u7684\u670D\u52A1\u5668\u53EF\u4EE5\u63A8\u65AD\u51FA\u60A8\u4F7F\u7528\u4E86\u672C\u7A0B\u5E8F\u3002\u5982\u679C\u60A8\u4F7F\u7528\u4E86\u7B2C\u4E09\u65B9\u63D0\u4F9B\u7684\u670D\u52A1\u5668\uFF0C\u8BE5\u670D\u52A1\u5668\u7684\u8FD0\u8425\u5546\u53EF\u80FD\u57FA\u4E8E\u6B64\u4FE1\u606F\u4F5C\u51FA\u4E0D\u5229\u4E8E\u60A8\u7684\u51B3\u5B9A\uFF0C\u5982\u5C55\u793A\u66F4\u591A\u9A8C\u8BC1\u7801\uFF0C\u62D2\u7EDD\u670D\u52A1\u6216\u5C01\u7981\u60A8\u7684\u5E10\u53F7\u3002</p></div><blockquote><p><code>probeInterval</code>: string</p></blockquote><p>\u53D1\u8D77\u63A2\u6D4B\u7684\u95F4\u9694\u3002\u6BCF\u7ECF\u8FC7\u8FD9\u4E2A\u65F6\u95F4\uFF0C\u5C31\u4F1A\u5BF9\u4E00\u4E2A\u670D\u52A1\u5668\u8FDB\u884C\u670D\u52A1\u5668\u72B6\u6001\u68C0\u6D4B\u3002\u65F6\u95F4\u683C\u5F0F\u4E3A\u6570\u5B57+\u5355\u4F4D\uFF0C\u6BD4\u5982<code>&quot;10s&quot;</code>, <code>&quot;2h45m&quot;</code>\uFF0C\u652F\u6301\u7684\u65F6\u95F4\u5355\u4F4D\u6709 <code>ns</code>, <code>us</code>, <code>ms</code>, <code>s</code>, <code>m</code>, <code>h</code>\uFF0C \u5206\u522B\u5BF9\u5E94\u7EB3\u79D2\u3001\u5FAE\u79D2\u3001\u6BEB\u79D2\u3001\u79D2\u3001\u5206\u3001\u65F6\u3002(4.41.1+)</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6B64\u914D\u7F6E\u9879\u76EE\u7684\u540D\u79F0\u4E8E v4.42.0 \u53D1\u751F\u4E86\u4FEE\u6539\u3002</p></div>`,14),n=[a];function d(r,u){return e(),t("div",null,n)}const p=o(s,[["render",d],["__file","observatory.html.vue"]]);export{p as default};