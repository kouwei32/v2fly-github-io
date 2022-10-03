import{_ as e,o as r,c as o,e as a}from"./app.31d0518d.js";const n={},s=a(`<h1 id="browser-forwarder-module" tabindex="-1"><a class="header-anchor" href="#browser-forwarder-module" aria-hidden="true">#</a> Browser Forwarder module</h1><p>The Browser Forwarder Module can use a front webpage to forward supported payloads.</p><h2 id="browserforwarderobject" tabindex="-1"><a class="header-anchor" href="#browserforwarderobject" aria-hidden="true">#</a> BrowserForwarderObject</h2><p>The <code>BrowserForwarderObject</code> corresponds to the <code>browserForwarder</code> item in the configuration file. (4.37.0+)</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;listenAddr&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;listenPort&quot;</span><span class="token operator">:</span> <span class="token number">8080</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>listenAddr</code>: string</p></blockquote><p>The local listening address of the browser forwarding page.</p><blockquote><p><code>listenPort</code>: number</p></blockquote><p>The local listening port of the browser forwarding page.</p><h2 id="operation" tabindex="-1"><a class="header-anchor" href="#operation" aria-hidden="true">#</a> Operation</h2><p>The browser forwarding program uses the browser&#39;s internal structure to forward the connection to the corresponding server, avoiding a direct TLS connection to the remote V2Ray server, reducing recognizable features.</p><p>During usage, a user can open a corresponding link on the webpage, which will trigger the forwarding function.</p><p>The folder for the forwarding webpages and script files should be placed in the resource folder. This content must be updated with V2Ray at the same time, and be consistent with the published content. V2Ray will not forward unrecognizable pages and scripts to the browser.</p><p>This resource data is located in the optional extra package (v2ray-extra.zip) in the binary distribution version.</p>`,14),t=[s];function i(d,c){return r(),o("div",null,t)}const l=e(n,[["render",i],["__file","browserforwarder.html.vue"]]);export{l as default};