import{_ as e,o,c as t,e as s}from"./app.44e1f99f.js";const n={},a=s(`<h1 id="observatory" tabindex="-1"><a class="header-anchor" href="#observatory" aria-hidden="true">#</a> Observatory</h1><p>(Since v4.38.0) The Observatory component periodically establishes connections through specified outbounds to determine their connectivity status. The results of the Observatory component can be used by other components, such as the Load Balancer and API.</p><p>By default, Observatory uses the remote server <code>api.v2fly.org</code>. Since a probe connection is made to it periodically to the V2Ray server, this function may give attackers additional information about the nature of the server if they can view its outbound network traffic. Use with caution.</p><h2 id="observatoryobject" tabindex="-1"><a class="header-anchor" href="#observatoryobject" aria-hidden="true">#</a> ObservatoryObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;subjectSelector&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token string">&quot;outbound&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>subjectSelector</code>: [string]</p></blockquote><p>An array of string patterns which are used to identify outbounds by their <code>tag</code>s. In the following outbound <code>tag</code>s: <code>[ &quot;a&quot;, &quot;ab&quot;, &quot;c&quot;, &quot;ba&quot; ]</code>, the <code>&quot;selector&quot;: [&quot;a&quot;]</code> will match tags <code>[ &quot;a&quot;, &quot;ab&quot; ]</code>.</p><p>Selected outbounds will try to connect periodically to a remote server.</p><blockquote><p><code>probeURL</code>: string</p></blockquote><p>The URL used to detect the connectivity status. The built-in address (<code>api.v2fly.org</code>) is used by default. (4.41.1+)</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The server of this destination address can infer that this server is running V2Ray with Observatory enabled. If you choose to utilize a remote server provided by a third party, their operator could potentially make decisions which are not in your best interest, such as requiring additional verification, refusing service, or terminating your account, based on this information.</p></div><blockquote><p><code>probeInterval</code>: string</p></blockquote><p>The time interval for initiating probes. The time format is a number followed by a unit, such as <code>&quot;10s&quot;</code>, <code>&quot;2h45m&quot;</code>. The supported time units are <code>ns</code>, <code>us</code>, <code>ms</code>, <code>s</code>, <code>m</code>, <code>h</code>, corresponding to nanoseconds, microseconds, milliseconds, seconds, minutes, and hours, respectively. (4.41.1+)</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The name of this configuration item was changed in v4.42.0.</p></div>`,14),i=[a];function c(r,d){return o(),t("div",null,i)}const l=e(n,[["render",c],["__file","observatory.html.vue"]]);export{l as default};
