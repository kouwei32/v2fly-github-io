import{_ as e,o,c as d,e as t}from"./app.31d0518d.js";const a={},c=t('<h1 id="dokodemo" tabindex="-1"><a class="header-anchor" href="#dokodemo" aria-hidden="true">#</a> Dokodemo</h1><p>Dokodemo door is an inbound data protocol. It can listen to a local port and send all data entering this port to a port of the designated server, so as to achieve the effect of port mapping.</p><h2 id="dokodemo-inbound" tabindex="-1"><a class="header-anchor" href="#dokodemo-inbound" aria-hidden="true">#</a> Dokodemo Inbound</h2><ul><li>Name: <code>blackhole</code></li><li>Type: Inbound Protocol</li><li>ID: <code>inbound.blackhole</code></li></ul><blockquote><p><code>address</code>: string</p></blockquote><p>Forward traffic to this address. It can be an IP address, like <code>&quot;1.2.3.4&quot;</code>, or a domain name, like <code>&quot;v2ray.com&quot;</code>. String type.</p><p>When <code>followRedirect</code> (see below) is <code>true</code>, <code>address</code> can be empty.</p><blockquote><p><code>port</code>: number</p></blockquote><p>Forward traffic to the specified port of the destination address, range [1, 65535], numeric type. Required parameters.</p><blockquote><p><code>networks</code>: string</p></blockquote><p>The type of network protocol that can be received. For example, when it is specified as <code>&quot;tcp&quot;</code>, any gate will only receive TCP traffic. The default value is <code>&quot;tcp&quot;</code>.</p><blockquote><p><code>followRedirect</code>: true | false</p></blockquote><p>When the value is <code>true</code>, dokodemo-door will recognize the data forwarded by iptables and forward it to the corresponding destination address.</p>',13),r=[c];function i(n,l){return o(),d("div",null,r)}const p=e(a,[["render",i],["__file","dokodemo.html.vue"]]);export{p as default};