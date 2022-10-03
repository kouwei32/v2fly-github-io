import{_ as p,r as i,o as c,c as r,a as s,b as t,w as o,e as a,d as n}from"./app.31d0518d.js";const l={},u=a('<h1 id="reverse-proxy" tabindex="-1"><a class="header-anchor" href="#reverse-proxy" aria-hidden="true">#</a> Reverse Proxy</h1><p>Reverse proxy is an additional function of V2Ray which can forward server-side traffic to the client. That is, provide reverse traffic forwarding.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The Reverse Proxy was introduced in v4.0. It is still in a beta stage and may not be fully stable.</p></div><p>Reverse Proxy general working principle:</p><ul><li>Assume that there is a web server on host A, which does not have a public IP and cannot be directly accessed on the internet. There is another host B which can be accessed from the public internet. Now we need to use B as a proxy and forward traffic from B to A.</li><li>Configure an instance of V2Ray on host A, called <code>bridge</code>, and configure another instance of V2Ray on host B, called <code>portal</code>.</li><li><code>bridge</code> will actively establish a connection to <code>portal</code>. The target address of this connection can be set manually. <code>portal</code> will receive two kinds of connections: one is the connection established by <code>bridge</code>, and the other is any connection requested by a client on the public network. <code>portal</code> will automatically merge the two types of traffic, so that <code>bridge</code> can receive internet traffic.</li><li>After receiving internet traffic, <code>bridge</code> will forward it as-is to the web server on host A. This requires a proper routing configuration.</li><li><code>bridge</code> will dynamically load-balance responsively depending on traffic bandwidth.</li></ul>',5),d={class:"custom-container warning"},v=s("p",{class:"custom-container-title"},"WARNING",-1),k=n("The reverse proxy defaults to "),b=n("Mux"),m=n("-enabled, do not enable Mux again on the outbound which it uses."),q=a(`<h2 id="reverseobject" tabindex="-1"><a class="header-anchor" href="#reverseobject" aria-hidden="true">#</a> ReverseObject</h2><p><code>ReverseObject</code> corresponds to the <code>reverse</code> item in the configuration file.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;bridges&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bridge&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.v2fly.org&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;portals&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.v2fly.org&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>bridges</code>: [<a href="#bridgeobject">BridgeObject</a>]</p></blockquote><p>An array, where each item represents a <code>bridge</code>, which is a <a href="#bridgeobject">BridgeObject</a>.</p><blockquote><p><code>portals</code>: [<a href="#portalobject">PortalObject</a>]</p></blockquote><p>An array, where each item represents a <code>portal</code>, which is a <a href="#bridgeobject">PortalObject</a>.</p><h2 id="bridgeobject" tabindex="-1"><a class="header-anchor" href="#bridgeobject" aria-hidden="true">#</a> BridgeObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bridge&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.v2fly.org&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>tag</code>: string</p></blockquote>`,10),g=n("A routing label of the "),h=s("code",null,"bridge",-1),f=n(", applied to all connections sent by "),y=s("code",null,"bridge",-1),_=n(", which can be used for "),w=n("routing"),j=n("."),x=a(`<blockquote><p><code>domain</code>: string</p></blockquote><p>A domain name. The connection established by <code>bridge</code> to <code>portal</code> will utilize this domain name. This domain name is only used for routing between the <code>bridge</code> and <code>portal</code>, and need not actually exist.</p><h2 id="portalobject" tabindex="-1"><a class="header-anchor" href="#portalobject" aria-hidden="true">#</a> PortalObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.v2fly.org&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>tag</code>: string</p></blockquote>`,5),T=n("A routing label of the "),R=s("code",null,"portal",-1),A=n(". In "),P=n("routing"),B=n(", use "),I=s("code",null,"outboundTag",-1),O=n(" to forward traffic to this "),V=s("code",null,"portal",-1),N=n("."),C=a(`<blockquote><p><code>domain</code>: string</p></blockquote><p>A domain name. When <code>portal</code> receives traffic with this domain as the destination, <code>portal</code> treats it as traffic from <code>bridge</code>. Other traffic will be regarded as traffic to be forwarded to <code>bridge</code>. The purpose of <code>portal</code> is to correctly route and splice these two types of connections.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>A V2Ray instance can be configured as either a <code>bridge</code>, a <code>portal</code>, or both at the same time for different applications.</p></div><h2 id="example-working-configuration" tabindex="-1"><a class="header-anchor" href="#example-working-configuration" aria-hidden="true">#</a> Example: Working Configuration</h2><p><code>bridge</code> generally requires two outbounds: one for connecting to <code>portal</code>, and the other for sending actual traffic. In other words, you need to configure routing to distinguish between the two types of outbound traffic.</p><p>Reverse Proxy:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;bridges&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bridge&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.v2fly.org&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Outbound:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;out&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:80&quot;</span> <span class="token comment">// Forward all traffic to the web server</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal \u7684 IP \u5730\u5740&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
                <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;27848739-7e62-4138-9fd3-098a63964b6b&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;interconn&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Routing:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;bridge&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;full:test.v2fly.org&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;interconn&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;bridge&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;out&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>portal</code> generally requires two inbounds: one for receiving connections from <code>bridge</code>, and the other for receiving actual traffic. Again, routing needs to be configured to distinguish between the two types of traffic.</p><p>Reverse Proxy:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;portals&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.v2fly.org&quot;</span> <span class="token comment">// Must be identical to bridge domain</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Inbound:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;external&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token comment">// Bind to port 80 to receive HTTP requests</span>
    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dokodemo-door&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// For receiving bridge connections</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;interconn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;27848739-7e62-4138-9fd3-098a63964b6b&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Routing:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;external&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;interconn&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>It is recommended to start the <code>bridge</code> instance before <code>portal</code>.</p></div>`,19);function S(M,U){const e=i("RouterLink");return c(),r("div",null,[u,s("div",d,[v,s("p",null,[k,t(e,{to:"/en_US/config/mux.html"},{default:o(()=>[b]),_:1}),m])]),q,s("p",null,[g,h,f,y,_,t(e,{to:"/en_US/config/routing.html"},{default:o(()=>[w]),_:1}),j]),x,s("p",null,[T,R,A,t(e,{to:"/en_US/config/routing.html"},{default:o(()=>[P]),_:1}),B,I,O,V,N]),C])}const E=p(l,[["render",S],["__file","reverse.html.vue"]]);export{E as default};
