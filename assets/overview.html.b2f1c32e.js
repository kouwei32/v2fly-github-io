import{_ as c,r as i,o as l,c as u,a as o,b as t,w as s,d as e,e as a}from"./app.31d0518d.js";const r={},d=o("h1",{id:"configuration-file-format-draft",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#configuration-file-format-draft","aria-hidden":"true"},"#"),e(" Configuration File Format (Draft)")],-1),p={class:"custom-container tip"},h=o("p",{class:"custom-container-title"},"TIP",-1),_=e("The document for V4 version of the config can be found "),f=e("here"),b=e("."),g=a(`<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>In the V5 major release, a new configuration schema for users is introduced. This configuration format is designed to replace the previous version of configuration format. Currently this format is in the drafting phase, and may change at any time.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>To run your configure file in V5, execute <code>./v2ray run -c $configure_file_name -f jsonv5</code></p></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;router&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;services&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>log</code>: <a href="#logobject">LogObject</a></p></blockquote><p>Log collector setting. Specify the settings regarding the recording of events.</p><p>A sensible default will be provided if this entry is not set.</p>`,7),q=o("code",null,"dns",-1),v=e(": "),m=e("DnsObject"),k=o("p",null,"Built-in DNS client. Specify hostname resolution settings.",-1),y=o("p",null,"Local DNS will be used if this entry is not set.",-1),j=o("code",null,"router",-1),w=e(": "),x=e("RoutingObject"),L=o("p",null,"Routing.",-1),S=o("p",null,"All traffic will be sent to the first outbound if this entry is left empty.",-1),O=o("code",null,"inbounds",-1),N=e(": [ "),V=e("InboundObject"),D=e(" ]"),I=o("p",null,"Inbounds. Describe the listener for incoming connections.",-1),T=o("code",null,"outbounds",-1),R=e(": [ "),A=e("OutboundObject"),C=e(" ]"),U=o("p",null,"Outbounds. Describe the configuration for outgoing connections.",-1),E=o("code",null,"services",-1),F=e(": [ "),B=e("ServiceObject"),W=e(" ]"),P=a(`<p>Auxiliary Services. Define additional components.</p><p>These settings configure additional functionalities. They are not required for the essential functionality of the software. However, these settings enable advanced features that enable complex use cases.</p><h2 id="logobject" tabindex="-1"><a class="header-anchor" href="#logobject" aria-hidden="true">#</a> LogObject</h2><p><code>LogObject</code> is a json field which the configuration file uses in <code>log</code>.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;access&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;error&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>access</code>: LogSpecObject</p></blockquote><p>Access log settings.</p><blockquote><p><code>error</code>: LogSpecObject</p></blockquote><p>Error log settings.</p><h2 id="logspecobject" tabindex="-1"><a class="header-anchor" href="#logspecobject" aria-hidden="true">#</a> LogSpecObject</h2><blockquote><p><code>Type</code>: &quot;None&quot; | &quot;Console&quot; | &quot;File&quot;</p></blockquote><ul><li><code>&quot;None&quot;</code>\uFF1ALog will be discarded.</li><li><code>&quot;Console&quot;</code>\uFF1ALog will be outputed to standard output.</li><li><code>&quot;File&quot;</code>\uFF1ALog will be outputed to a file.</li></ul><blockquote><p><code>Path</code>: string</p></blockquote><p>File path of log. It should be a valid path string, such as <code>&quot;/tmp/v2ray/_error.log&quot;</code> (Linux) or <code>&quot;C:\\\\Temp\\\\v2ray\\\\_error.log&quot;</code> (Windows).</p><blockquote><p><code>Level</code>: &quot;Debug&quot; | &quot;Info&quot; | &quot;Warning&quot; | &quot;Error&quot; | &quot;None&quot;</p></blockquote><p>Level of log. Default value is <code>&quot;warning&quot;</code>\u3002</p><ul><li><code>&quot;Debug&quot;</code>\uFF1AInformation for developers. All <code>&quot;Info&quot;</code> included.</li><li><code>&quot;Info&quot;</code>\uFF1ARunning stats of V2Ray\uFF0Cno effect for the functions. All <code>&quot;Warning&quot;</code> included.</li><li><code>&quot;Warning&quot;</code>\uFF1AV2Ray may have encountered some problem, usually some external problem that does not affect V2Ray but possibly the user experience. All <code>&quot;Error&quot;</code> included.</li><li><code>&quot;Error&quot;</code>\uFF1AV2Ray encountered a problem that needs to be resolved immediately.</li><li><code>&quot;None&quot;</code>\uFF1ANothing will be printed.</li></ul>`,17);function H($,z){const n=i("RouterLink");return l(),u("div",null,[d,o("div",p,[h,o("p",null,[_,t(n,{to:"/en_US/config/overview.html"},{default:s(()=>[f]),_:1}),b])]),g,o("blockquote",null,[o("p",null,[q,v,t(n,{to:"/en_US/v5/config/dns.html"},{default:s(()=>[m]),_:1})])]),k,y,o("blockquote",null,[o("p",null,[j,w,t(n,{to:"/en_US/v5/config/router.html"},{default:s(()=>[x]),_:1})])]),L,S,o("blockquote",null,[o("p",null,[O,N,t(n,{to:"/en_US/v5/config/inbound.html"},{default:s(()=>[V]),_:1}),D])]),I,o("blockquote",null,[o("p",null,[T,R,t(n,{to:"/en_US/v5/config/outbound.html"},{default:s(()=>[A]),_:1}),C])]),U,o("blockquote",null,[o("p",null,[E,F,t(n,{to:"/en_US/v5/config/service.html"},{default:s(()=>[B]),_:1}),W])]),P])}const J=c(r,[["render",H],["__file","overview.html.vue"]]);export{J as default};