import{_ as i,r as c,o as r,c as l,a as n,b as s,w as o,d as e,e as a}from"./app.31d0518d.js";const p={},d=n("h1",{id:"vmess",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vmess","aria-hidden":"true"},"#"),e(" VMess")],-1),u=n("ul",null,[n("li",null,[e("Name: "),n("code",null,"vmess")]),n("li",null,"Type: Inbound / Outbound")],-1),h=e("VMess"),b=e(" is an inbound/outbound protocol. It is an encrypted tunnel, usually acting as a bridge between a V2Ray client and a server."),m=a(`<p>VMess relies on system time to function correctly. Please ensure that system UTC time deviation between the V2Ray client and server is within 90 seconds, independent of timezones. The <code>ntp</code> service can be used on Linux systems to automatically synchronize system UTC time.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Since v4.28.1, the client AlterID setting is 0 by default, which enables VMessAEAD; The server will switch accordingly, and supports connections from AEAD-enabled and non-AEAD-enabled clients simultaneously.</p><p>Since v4.35.0, backwards compatibility of VMess MD5 authentication can be disabled.</p></div><p>The configuration of VMess is divided into two parts, <code>InboundConfigurationObject</code> and <code>OutboundConfigurationObject</code>, which correspond to the <code>settings</code> element in the inbound and outbound protocol configuration respectively.</p><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">37192</span><span class="token punctuation">,</span>
            <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;27848739-7e62-4138-9fd3-098a63964b6b&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;alterId&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>vnext</code>: [ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>An array containing a series of <a href="#ServerObject">ServerObject</a>s, representing remote VMESS servers.</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject" aria-hidden="true">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">37192</span><span class="token punctuation">,</span>
    <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>Remote VMESS server address. Address can be IPv4, IPv6, or a domain name.</p><blockquote><p><code>port</code>: number</p></blockquote><p>Remote VMESS server port.</p><blockquote><p><code>users</code>: [ <a href="#userobject">UserObject</a> ]</p></blockquote><p>A set of credentials recognized by the server, in the form of <a href="#UserObject">UserObject</a>s.</p><h3 id="userobject" tabindex="-1"><a class="header-anchor" href="#userobject" aria-hidden="true">#</a> UserObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;27848739-7e62-4138-9fd3-098a63964b6b&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;alterId&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>id</code>: string</p></blockquote><p>The primary ID of the VMess user. Must be a valid UUID.</p><blockquote><p><code>alterId</code>: number</p></blockquote><p>In order to further evade deanonymization, a user can generate multiple secondary IDs based on the main ID. Only the amount of additional IDs needs to be specified here. The recommended value is 0, which enables VMessAEAD instead. If not specified, the default value is <code>0</code>. The maximum value is <code>65535</code>. This value cannot exceed the value specified by the server.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The client can force VMessAEAD to be disabled by setting the environment variable <code>V2RAY_VMESS_AEAD_DISABLED=true</code> (unrecommended, only for compatibility with servers prior to v4.28.1 <strong>and</strong> only if <code>alterId=0</code>)</p></div><blockquote><p><code>level</code>: number</p></blockquote>`,23),v=e("User level, default is "),k=n("code",null,"0",-1),q=e(". See "),f=e("Local Policy"),g=e("."),y=a(`<blockquote><p><code>security</code>: &quot;aes-128-gcm&quot; | &quot;chacha20-poly1305&quot; | &quot;auto&quot; | &quot;none&quot; | &quot;zero&quot;</p></blockquote><p>Chooses the encryption algorithm to use. the client sends data using the configured encryption method, which the server automatically recognizes and does not need to be configured for.</p><ul><li><code>&quot;aes-128-gcm&quot;</code>: Recommended for use on computers</li><li><code>&quot;chacha20-poly1305&quot;</code>: Recommended for mobile / embedded devices</li><li><code>&quot;auto&quot;</code>: Default value, automatically selects a suitable algorithm (AMD64, ARM64, or s390x architectures use <code>aes-128-gcm</code>, otherwise use <code>Chacha20-Poly1305</code>)</li><li><code>&quot;none&quot;</code>: Unencrypted</li><li><code>&quot;zero&quot;</code>: Unencrypted, message authentication disabled (Since v4.35.0)</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>auto</code> is recommended as it will allow the client to automatically switch to new, suitable algorithms for future versions of VMESS.</p><p>The <code>&quot;none&quot;</code> pseudo-algorithm only calculates and verifies the checksum data of the data packet. As the authentication checksum algorithm does not have hardware support, on some platforms the speed may even be slower than <code>&quot;aes-128-gcm&quot;</code> due to not having CPU-based hardware acceleration.</p><p>The <code>&quot;zero&quot;</code> pseudo-algorithm does not encrypt messages nor calculate checksum data, so in theory it may be faster than any other algorithms. Actual speed may vary depending on environmental factors.</p><p>It is not recommended to use the <code>&quot;none&quot;</code> or <code>&quot;zero&quot;</code> pseudo-encryption algorithms without first enabling TLS encryption on top and forcing certificate verification. If you use a content delivery network, or other intermediate services that decrypt the TLS traffic to establish connections (such as Cloudflare), it is highly unrecommended to use the <code>&quot;none&quot;</code> or <code>&quot;zero&quot;</code> pseudo-algorithms, as your provider will be able to view plaintext traffic.</p><p>Regardless of which encryption algorithm is being used, the VMess authentication headers will be protected by its own encryption and authentication protocol.</p></div><blockquote><p><code>experiments</code>: string</p></blockquote><p>Experimental flags of the VMess protocol. (Functions provided here are unstable and may be deprecated or removed at any time.) Multiple enabled experimental flags can be separated by <code>|</code> pipe characters (e.g. <code>&quot;AuthenticatedLength|NoTerminationSignal&quot;</code>).</p><p>(Since v4.41.0) <code>&quot;AuthenticatedLength&quot;</code> enables experimental data packet length authentication. This experiment requires that the client and server both have it enabled at the same time and use the same version of VMESS.</p><p>(Since v4.41.0) <code>&quot;NoTerminationSignal&quot;</code> disables sending the disconnect signal. This experiment may affect the stability of the proxied connection.</p><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;27848739-7e62-4138-9fd3-098a63964b6b&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;alterId&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@v2ray.com&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;alterId&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;detour&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DETOUR_TAG&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;disableInsecureEncryption&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>clients</code>: [ <a href="#clientobject">ClientObject</a> ]</p></blockquote><p>An array of credentials that the server recognizes, in the form of <a href="#ClientObject">ClientObject</a>s. Optional. If dynamic ports are configured, V2Ray will automatically populate users.</p><blockquote><p><code>detour</code>: <a href="#detourobject">DetourObject</a></p></blockquote><p>Configures VMESS to first route into another inbound instead, allowing routing of the tunnelled traffic (see <a href="#DetourObject">DetourObject</a>).</p><blockquote><p><code>default</code>: <a href="#defaultobject">DefaultObject</a></p></blockquote><p>The default configuration for <code>clients</code>. Optional. Only effective when used in conjunction with <code>detour</code>.</p><blockquote><p><code>disableInsecureEncryption</code>: true | false</p></blockquote><p>Whether to disable insecure encryption methods for clients. When the client specifies the following encryption methods, the server will automatically close the connection. The default value is <code>false</code>.</p><ul><li><code>&quot;none&quot;</code></li><li><code>&quot;aes-128-cfb&quot;</code></li></ul><h3 id="clientobject" tabindex="-1"><a class="header-anchor" href="#clientobject" aria-hidden="true">#</a> ClientObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;27848739-7e62-4138-9fd3-098a63964b6b&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;alterId&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@v2ray.com&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>id</code>: string</p></blockquote><p>The user ID of the VMess user. Must be a valid UUID.</p><blockquote><p><code>level</code>: number</p></blockquote>`,24),_=e("User level, default is "),j=n("code",null,"0",-1),w=e(". See "),M=e("Local Policy"),I=e("."),D=a(`<blockquote><p><code>alterId</code>: number</p></blockquote><p>In order to further evade deanonymization, a user can generate multiple secondary IDs based on the main ID. Only the amount of additional IDs needs to be specified here. The recommended value is 0, which enables VMessAEAD instead. If not specified, the default value is <code>0</code>. The maximum value is <code>65535</code>. This value cannot exceed the value specified by the server.</p><blockquote><p><code>email</code>: string</p></blockquote><p>Email address, optional. Used to identify users.</p><h3 id="detourobject" tabindex="-1"><a class="header-anchor" href="#detourobject" aria-hidden="true">#</a> DetourObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tag_to_detour&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>to</code>: string</p></blockquote>`,7),A=e("The "),T=n("code",null,"tag",-1),S=e(" of an inbound protocol. See also "),x=e("InboundObject"),V=e(". The specified "),O=n("code",null,"tag",-1),U=e(" must be an inbound VMess."),E=a(`<h3 id="defaultobject" tabindex="-1"><a class="header-anchor" href="#defaultobject" aria-hidden="true">#</a> DefaultObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;alterId&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>level</code>: number</p></blockquote>`,3),C=e("User level, default is "),R=n("code",null,"0",-1),z=e(". See "),P=e("Local Policy"),L=e("."),N=a('<blockquote><p><code>alterId</code>: number</p></blockquote><p>The default <code>alterId</code> of the dynamic port. Default value is <code>0</code>.</p><h2 id="vmess-md5-authentication-tainting-mechanism" tabindex="-1"><a class="header-anchor" href="#vmess-md5-authentication-tainting-mechanism" aria-hidden="true">#</a> VMess MD5 Authentication Tainting Mechanism</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This section concerns the deprecated MD5 Authentication protocol.</p></div><p>(Since v4.24) In order to further evade possible detection and blocking, each cached server-side VMess authentication header will include a one-time, write-only &quot;tainted&quot; flag, with the initial state being untainted. When the server detects a replay detection, or if the incoming connection fails due to other reasons, resulting in the verification data being incorrect, the request authentication data corresponding to the connection will be &quot;tainted&quot;.</p><p>&quot;Tainted&quot; authentication data cannot be used to establish a connection. When an attacker or client tries to use &quot;tainted&quot; authentication data to establish a connection, the server returns an error containing &quot;<code>invalid user</code>&quot; &quot;<code>ErrTainted</code>&quot; and closes the connection.</p><p>If the server is not affected by an active replay attack, this mechanism has no effect on normal client connections. If the server is under a replay attack, the connection may become unstable.</p><p>Malicious programs that possess a valid UUID and other connection data may use this mechanism to launch a denial of service attack against the server. Servers that are subject to such attacks can disable the server&#39;s security protection mechanism against such attacks by modifying the <code>atomic.CompareAndSwapUint32(pair.taintedFuse, 0, 1)</code> statement in the <code>func (v *TimedUserValidator) BurnTaintFuse(userHash []byte)</code> error function in the <code>proxy/vmess/validator.go</code> file to <code>atomic.CompareAndSwapUint32(pair.taintedFuse, 0, 0)</code>. Newer clients using the VMessAEAD authentication mechanism are not affected by the VMess MD5 Authentication Tainting Mechanism.</p><h2 id="vmess-md5-authentication-deprecation-mechanism" tabindex="-1"><a class="header-anchor" href="#vmess-md5-authentication-deprecation-mechanism" aria-hidden="true">#</a> VMess MD5 Authentication Deprecation Mechanism</h2><p>The VMessAEAD protocol has been peer-reviewed and integrated with corresponding modifications. The VMess MD5 Authentication deprecation mechanism is currently active.</p><p>As of January 1, 2022, servers will default to disabling MD5 Authentication support. Any clients still using MD5 Authentication will not be able to connect to a server which has disabled VMess MD5 authentication.</p><p>(Since v4.35.0) For server operators, compatibility with MD5 Authentication can be manually disabled by setting the environment variable <code>v2ray.vmess.aead.forced</code> = <code>true</code>. MD5 authentication support can be forced enabled by setting this to <code>false</code>.</p>',12);function B(F,W){const t=c("RouterLink");return r(),l("div",null,[d,u,n("p",null,[s(t,{to:"/en_US/developer/protocols/vmess.html"},{default:o(()=>[h]),_:1}),b]),m,n("p",null,[v,k,q,s(t,{to:"/en_US/config/policy.html"},{default:o(()=>[f]),_:1}),g]),y,n("p",null,[_,j,w,s(t,{to:"/en_US/config/policy.html"},{default:o(()=>[M]),_:1}),I]),D,n("p",null,[A,T,S,s(t,{to:"/en_US/config/inbounds.html#inboundobject"},{default:o(()=>[x]),_:1}),V,O,U]),E,n("p",null,[C,R,z,s(t,{to:"/en_US/config/policy.html"},{default:o(()=>[P]),_:1}),L]),N])}const H=i(p,[["render",B],["__file","vmess.html.vue"]]);export{H as default};