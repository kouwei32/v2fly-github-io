import{_ as l,r as p,o as i,c as r,a as s,b as a,w as o,d as n,e as t}from"./app.31d0518d.js";const u={},d=s("h1",{id:"trojan",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#trojan","aria-hidden":"true"},"#"),n(" Trojan")],-1),b=s("ul",null,[s("li",null,[n("Name: "),s("code",null,"trojan")]),s("li",null,"Type: Inbound / Outbound")],-1),k={href:"https://trojan-gfw.github.io/trojan/protocol",target:"_blank",rel:"noopener noreferrer"},v=n("Trojan"),m=n(" is an inbound/outbound protocol. It is an encrypted traffic tunnel protocol disguised as TLS traffic (such as WebSocket)."),h=t(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Trojan is only designed to work in an encrypted TLS tunnel that is correctly configured.</p></div><p>Trojan&#39;s configuration is divided into two parts, <code>InboundConfigurationObject</code> and <code>OutboundConfigurationObject</code>, corresponding to the <code>settings</code> element in the inbound and outbound protocol configuration respectively.</p><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@v2fly.org&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;fallbacks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>clients</code>: [ <a href="#clientobject">ClientObject</a> ]</p></blockquote><p>An array, where each element in the array is a <a href="#ClientObject">ClientObject</a>.</p><blockquote><p><code>fallbacks</code>: [ <a href="#fallbackobject">FallbackObject</a> ]</p></blockquote><p>An array containing a series of fallback stream configurations (optional).</p><h3 id="clientobject" tabindex="-1"><a class="header-anchor" href="#clientobject" aria-hidden="true">#</a> ClientObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@v2fly.org&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>password</code>: string</p></blockquote><p>Required, any string.</p><blockquote><p><code>email</code>: string</p></blockquote><p>Email address, optional. Used to identify users.</p><blockquote><p><code>level</code>: number</p></blockquote>`,15),q=n("User level, default is "),f=s("code",null,"0",-1),g=n(". See "),_=n("Local Policy"),j=n("."),y=t(`<h3 id="fallbackobject" tabindex="-1"><a class="header-anchor" href="#fallbackobject" aria-hidden="true">#</a> FallbackObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;alpn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
    <span class="token property">&quot;xver&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Since v4.31.0, V2Ray&#39;s Trojan has full VLESS fallbacks support. The configuration is the same as normal VLESS, and future VLESS updates will also apply to the fallback.</p><p>The trigger conditions for initializing the VLESS fallback are also very similar: If the length of the first packet is <code>&lt; 58</code>, if the 57th byte is not &#39;\\r&#39; (as Trojan has no protocol version), or if authentication fails.</p>`,4),S=n("See also: "),x=n("VLESS"),w=t(`<h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
            <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@v2fly.org&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>servers</code>: [ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>An array, where each element is a <a href="#ServerObject">ServerObject</a>.</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject" aria-hidden="true">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@v2fly.org&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>Remote server address. Address can be IPv4, IPv6, or a domain name. Required.</p><blockquote><p><code>port</code>: number</p></blockquote><p>Remote server port. required.</p><blockquote><p><code>password</code>: string</p></blockquote><p>Required, any string.</p><blockquote><p><code>email</code>: string</p></blockquote><p>Email address, optional. Used to identify users.</p><blockquote><p><code>level</code>: number</p></blockquote>`,15),O=n("User level, default is "),L=s("code",null,"0",-1),T=n(". See "),C=n("Local Policy"),E=n(".");function I(V,R){const c=p("ExternalLinkIcon"),e=p("RouterLink");return i(),r("div",null,[d,b,s("p",null,[s("a",k,[v,a(c)]),m]),h,s("p",null,[q,f,g,a(e,{to:"/en_US/config/policy.html"},{default:o(()=>[_]),_:1}),j]),y,s("p",null,[S,a(e,{to:"/en_US/config/protocols/vless.html"},{default:o(()=>[x]),_:1})]),w,s("p",null,[O,L,T,a(e,{to:"/en_US/config/policy.html"},{default:o(()=>[C]),_:1}),E])])}const N=l(u,[["render",I],["__file","trojan.html.vue"]]);export{N as default};