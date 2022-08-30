import{_ as a,r as i,o as c,c as r,a as o,b as s,w as n,e as d,d as e}from"./app.44e1f99f.js";const l={},u=d(`<h1 id="freedom" tabindex="-1"><a class="header-anchor" href="#freedom" aria-hidden="true">#</a> Freedom</h1><ul><li>Name: <code>freedom</code></li><li>Type: Outbound Protocol</li></ul><p>Freedom is an outbound protocol. It forwards any normal TCP or UDP traffic directly without modification (unless configured otherwise).</p><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:3366&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;userLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>domainStrategy</code>: &quot;AsIs&quot; | &quot;UseIP&quot; | &quot;UseIPv4&quot; | &quot;UseIPv6&quot;</p></blockquote>`,6),h=e("If the target address is a domain name, Freedom can attempt a connection directly to this domain name ("),p=o("code",null,'"AsIs"',-1),_=e("), or first resolve the domain name to an IP before establishing a connection ("),m=o("code",null,'"UseIP"',-1),f=e(", "),v=o("code",null,'"UseIPv4"',-1),b=e(" and "),q=o("code",null,'"UseIPv6" ',-1),g=e("). This will use the "),I=e("built-in DNS"),k=e(". The default value is "),P=o("code",null,'"AsIs"',-1),y=e("."),w=e("(Since v4.6) If the "),U=o("code",null,'"UseIP"',-1),S=e(" mode is enabled and the "),T=o("code",null,"sendThrough",-1),x=e(" option is specified in "),F=e("Outbound Connection Configuration"),j=e(", Freedom will automatically determine the type of Internet Protocol required based on the value of "),C=o("code",null,"sendThrough",-1),L=e(", IPv4 or IPv6."),N=d("<p>(Since v4.7) When <code>&quot;UseIPv4&quot;</code> or <code>&quot;UseIPv6&quot;</code> is enabled, Freedom will only use a corresponding IPv4 or IPv6 address. If <code>sendThrough</code> specifies a local address which does not match, the connection will fail.</p><blockquote><p><code>redirect</code>: address_port</p></blockquote><p>Freedom will force all data to be redirected to the specified remote address and/or port (instead of the address specified by the inbound protocol). The value is an address as a string: <code>&quot;127.0.0.1:80&quot;</code>, <code>&quot;:1234&quot;</code>, etc. If the address is not specified, Freedom will not modify the original target address. If the port is set to 0, such as <code>&quot;v2ray.com:0&quot;</code>, Freedom will not modify the original port.</p><blockquote><p><code>userLevel</code>: number</p></blockquote>",4),A=e("User Level. All connections will use this User level. See "),O=e("Local Policy"),V=e(".");function B(D,R){const t=i("RouterLink");return c(),r("div",null,[u,o("p",null,[h,p,_,m,f,v,b,q,g,s(t,{to:"/en_US/config/dns.html"},{default:n(()=>[I]),_:1}),k,P,y]),o("p",null,[w,U,S,T,x,s(t,{to:"/en_US/config/overview.html#outboundobject"},{default:n(()=>[F]),_:1}),j,C,L]),N,o("p",null,[A,s(t,{to:"/en_US/config/policy.html"},{default:n(()=>[O]),_:1}),V])])}const W=a(l,[["render",B],["__file","freedom.html.vue"]]);export{W as default};
