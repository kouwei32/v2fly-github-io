import{_ as d,r,o as s,c as o,a as e,b as i,d as t,e as n}from"./app.44e1f99f.js";const h={},l=e("h1",{id:"mkcp-protocol",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mkcp-protocol","aria-hidden":"true"},"#"),t(" mKCP Protocol")],-1),c=t("mKCP is a streaming transport protocol modified from the "),m={href:"https://github.com/skywind3000/kcp",target:"_blank",rel:"noopener noreferrer"},u=t("KCP"),p=t(" protocol, it can transfer any data stream in order."),f=n('<h2 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> Version</h2><p>mKCP has no version number, compatibility between versions are not guaranteed.</p><h2 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> Dependencies</h2><h3 id="base-protocol" tabindex="-1"><a class="header-anchor" href="#base-protocol" aria-hidden="true">#</a> Base Protocol</h3><p>mKCP is based on the UDP protocol, all communications use UDP.</p><h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h3>',6),b=t("fnv: "),y={href:"https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function",target:"_blank",rel:"noopener noreferrer"},g=t("FNV-1a"),_=t(" hash function "),S=e("ul",null,[e("li",null,"Input is a string with variable length;"),e("li",null,"Output is an unsigned 32-bit integer;")],-1),B=n('<h2 id="communcation-procedure" tabindex="-1"><a class="header-anchor" href="#communcation-procedure" aria-hidden="true">#</a> Communcation Procedure</h2><ol><li>mKCP splits data stream into many small packets. Each data stream has a unique identifier for classification. Each packet has the same unique indentifier with its parent data stream.</li><li>mKCP has no handshake procedure. When a packet is received, its data stream unique identifier will be used to determine whether it is a new connection or a existing connection.</li><li>Each data packet includes many segments. There are three types of segment: data, acknowledge (ACK) and ping. Each segment needs to be processed individually.</li></ol><h2 id="data-format" tabindex="-1"><a class="header-anchor" href="#data-format" aria-hidden="true">#</a> Data Format</h2><h3 id="data-packet" tabindex="-1"><a class="header-anchor" href="#data-packet" aria-hidden="true">#</a> Data Packet</h3><table><thead><tr><th>4 Bytes</th><th>2 Bytes</th><th>L Bytes</th></tr></thead><tbody><tr><td>Authentication Info A</td><td>Length L</td><td>Segments Section S</td></tr></tbody></table><p>\u5176\u4E2D\uFF1A</p><ul><li>A = fnv(S), big endian;</li><li>Segment sections may include multiple segments;</li></ul><h3 id="data-segment" tabindex="-1"><a class="header-anchor" href="#data-segment" aria-hidden="true">#</a> Data Segment</h3><table><thead><tr><th>2 Bytes</th><th>1 Bytes</th><th>1 Bytes</th><th>4 Bytes</th><th>4 Bytes</th><th>4 Bytes</th><th>2 Bytes</th><th>L Bytes</th></tr></thead><tbody><tr><td>Identifier Id</td><td>Command Cmd</td><td>Options Opt</td><td>Timestamp Ts</td><td>Serial Number Sn</td><td>Unconfirmed Serial Number Usn</td><td>Length L</td><td>Data</td></tr></tbody></table><p>Definition:</p><ul><li>Identifier Id: mKCP data stream identifier</li><li>Command Cmd: constant 0x01</li><li>Options Opt: values: <ul><li>0x00: empty</li><li>0x01: all data transfered</li></ul></li><li>Timestamp Ts: time when the packet is sent at remote\uFF0Cbig endian</li><li>Serial Number Sn: the position of the segment in the data stream, the serial number of the initial segment is 0, increase 1 on each segment afterwards</li><li>Unconfirmed Serial Number Una: smallest unconfirmed Serial Number remote host is currently sending</li></ul><h3 id="ack-segment" tabindex="-1"><a class="header-anchor" href="#ack-segment" aria-hidden="true">#</a> ACK Segment</h3><table><thead><tr><th>2 Bytes</th><th>1 Bytes</th><th>1 Bytes</th><th>4 Bytes</th><th>4 Bytes</th><th>4 Bytes</th><th>2 Bytes</th><th>L * 4 Bytes</th></tr></thead><tbody><tr><td>Identifier Id</td><td>Command Cmd</td><td>Options Opt</td><td>Window Wnd</td><td>Next Serial Number Sn</td><td>Timestamp Ts</td><td>Length L</td><td>Received Serial Numbers</td></tr></tbody></table><p>Definition:</p><ul><li>Identifier Conv: mKCP data stream identifier</li><li>Command Cmd: constant 0x00</li><li>Options Opt: same as above</li><li>Window Wnd: largest acceptable serial number of the remote host</li><li>Next Serial Number Sn: smallest serial number that remote host hasn&#39;t receive.</li><li>Timestamp Ts: timestamp of the newest segment remote host received, can be used to calculate latency</li><li>Received Serial Numbers: each with length of 4 bytes, implies that the cooresponding data of that Serial Number is received</li></ul><p>P.S.:</p><ul><li>Remote host looks forward to receive data within the range [Sn, Wnd)</li></ul><h3 id="ping-segment" tabindex="-1"><a class="header-anchor" href="#ping-segment" aria-hidden="true">#</a> Ping Segment</h3><table><thead><tr><th>2 Bytes</th><th>1 Bytes</th><th>1 Bytes</th><th>4 Bytes</th><th>4 Bytes</th><th>4 Bytes</th></tr></thead><tbody><tr><td>Identifier Conv</td><td>Command Cmd</td><td>Options Opt</td><td>Unconfirmed Serial Number Una</td><td>Next Serial Number Sn</td><td>Latency Rto</td></tr></tbody></table><p>Definition:</p><ul><li>Identifier Conv: mKCP data stream identifier</li><li>Command Cmd: values: <ul><li>0x02: connection forcibly closed by the remote host</li><li>0x03: normal ping</li></ul></li><li>Options Opt: same as above</li><li>Unconfirmed Serial Number Una: Una of the same segment</li><li>Next Serial Number Sn: Sn of the same segment</li><li>Latency Rto: latency calculated by the remote host</li></ul>',21);function C(x,k){const a=r("ExternalLinkIcon");return s(),o("div",null,[l,e("p",null,[c,e("a",m,[u,i(a)]),p]),f,e("ul",null,[e("li",null,[b,e("a",y,[g,i(a)]),_,S])]),B])}const N=d(h,[["render",C],["__file","mkcp.html.vue"]]);export{N as default};
