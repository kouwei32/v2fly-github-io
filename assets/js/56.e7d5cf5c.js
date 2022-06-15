(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{260:function(t,e,s){"use strict";s.r(e);var a=s(0),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dns-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-server"}},[t._v("#")]),t._v(" DNS Server")]),t._v(" "),s("p",[t._v("V2Ray has a built-in DNS server, which has two main purposes: matching routing rules according to the IP resolved from a domain, and traditional DNS function—resolving the target address to connect.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Due to the complexity of DNS protocol, V2Ray only supports basic IP query function (A and AAAA records). In order to have a complete DNS experience, you may want to use a dedicated local DNS server, such as "),s("a",{attrs:{href:"https://coredns.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoreDNS"),s("OutboundLink")],1),t._v(", together with V2Ray's builtin DNS features.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("For "),s("code",[t._v("outbound")]),t._v("s using the "),s("code",[t._v("freedom")]),t._v(" protocol, the default value of "),s("code",[t._v("domainStrategy")]),t._v(" is "),s("code",[t._v("AsIs")]),t._v(", therefore the DNS settings will not be applied to this outbound by default. If necessary, it should be configured as "),s("code",[t._v("UseIP")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"supported-dns-protocols-and-routing-strategies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-dns-protocols-and-routing-strategies"}},[t._v("#")]),t._v(" Supported DNS protocols and routing strategies")]),t._v(" "),s("ul",[s("li",[t._v("DNS over "),s("strong",[t._v("UDP")]),t._v(": The query is routed to a configuration-specified outbound\n"),s("ul",[s("li",[t._v("In the form of an IP address, such as "),s("code",[t._v("8.8.8.8")])]),t._v(" "),s("li",[t._v("The query is made on port "),s("code",[t._v("53")]),t._v(" by default, but non-standard ports are supported")])])]),t._v(" "),s("li",[t._v("DNS over "),s("strong",[t._v("TCP")]),t._v(": The query is routed to a configuration-specified outbound\n"),s("ul",[s("li",[t._v("In the form of "),s("code",[t._v("tcp://host:port")]),t._v(", such as "),s("code",[t._v("tcp://8.8.8.8:53")])]),t._v(" "),s("li",[t._v("The query is made on port "),s("code",[t._v("53")]),t._v(" by default, but non-standard ports are supported")]),t._v(" "),s("li",[t._v("Available since v4.40.0")])])]),t._v(" "),s("li",[t._v("DNS over "),s("strong",[t._v("TCP local mode")]),t._v(": The query is not rerouted, but instead directly forwarded through a "),s("code",[t._v("freedom")]),t._v(" outbound\n"),s("ul",[s("li",[t._v("In the form of "),s("code",[t._v("tcp+local://host:port")]),t._v(", such as "),s("code",[t._v("tcp+local://8.8.8.8:53")])]),t._v(" "),s("li",[t._v("The query is made on port "),s("code",[t._v("53")]),t._v(" by default, but non-standard ports are supported")]),t._v(" "),s("li",[t._v("Available since v4.40.0")])])]),t._v(" "),s("li",[t._v("DNS over "),s("strong",[t._v("HTTPS")]),t._v(": The query is routed to a configuration-specified outbound\n"),s("ul",[s("li",[t._v("In the form of "),s("code",[t._v("https://host:port/dns-query")]),t._v(", such as "),s("code",[t._v("https://dns.google/dns-query")]),t._v(" or "),s("code",[t._v("https://1.1.1.1/dns-query")])]),t._v(" "),s("li",[t._v("The query is made on port "),s("code",[t._v("443")]),t._v(" by default, but non-standard ports and links are supported, such as "),s("code",[t._v("https://a.b.c.d:8443/my-dns-query")])]),t._v(" "),s("li",[t._v("Available since v4.22.0")])])]),t._v(" "),s("li",[t._v("DNS over "),s("strong",[t._v("HTTPS local mode")]),t._v(": The query is not rerouted, but instead directly forwarded through a "),s("code",[t._v("freedom")]),t._v(" outbound\n"),s("ul",[s("li",[t._v("In the form of "),s("code",[t._v("https+local://host:port/dns-query")]),t._v(", such as "),s("code",[t._v("https+local://223.5.5.5/dns-query")])]),t._v(" "),s("li",[t._v("The query is made on port "),s("code",[t._v("443")]),t._v(" by default, but non-standard ports and links are supported, such as "),s("code",[t._v("https+local://a.b.c.d:8443/my-dns-query")])]),t._v(" "),s("li",[t._v("Available since v4.22.0")])])]),t._v(" "),s("li",[t._v("DNS over "),s("strong",[t._v("QUIC local mode")]),t._v(": The query is not rerouted, but instead directly forwarded through a "),s("code",[t._v("freedom")]),t._v(" outbound\n"),s("ul",[s("li",[t._v("In the form of "),s("code",[t._v("quic+local://host")]),t._v(", such as "),s("code",[t._v("quic+local://dns.adguard.com")])]),t._v(" "),s("li",[t._v("The query is made on port "),s("code",[t._v("784")]),t._v(" by default, but non-standard ports are supported")]),t._v(" "),s("li",[t._v("As of September 20, 2021, public recursive DNS services that support the DNS over QUIC protocol include "),s("code",[t._v("dns.adguard.com")]),t._v(" and "),s("code",[t._v("dns.nextdns.io")]),t._v(" (in addition to port 784, queries can also be made on port 8853)")]),t._v(" "),s("li",[t._v("Available since v4.34.0")])])]),t._v(" "),s("li",[t._v("Special Options:\n"),s("ul",[s("li",[s("strong",[t._v("localhost")]),t._v(": Uses the DNS configuration of the server's operating system")]),t._v(" "),s("li",[s("strong",[t._v("FakeDNS")]),t._v(": Uses the built-in FakeDNS server in V2Ray. For details, see "),s("RouterLink",{attrs:{to:"/en_US/config/fakedns.html"}},[t._v("FakeDNS server")]),t._v(". Available since v4.35.0")],1)])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("When using "),s("code",[t._v("localhost")]),t._v(", the DNS requests on the local machine are not controlled by V2Ray. Additional configuration is required to forward DNS requests with V2Ray.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If you are using DNS over QUIC on a Linux device, you may need to adjust the receive buffer size. The following command sets it to 2.5 MB.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ sysctl -w net.core.rmem_max"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2500000")]),t._v("\n")])])]),s("p",[t._v("Reference: "),s("a",{attrs:{href:"https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"dns-processing-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-processing-flow"}},[t._v("#")]),t._v(" DNS Processing Flow")]),t._v(" "),s("p",[t._v("If the domain name currently being queried...")]),t._v(" "),s("ul",[s("li",[t._v('Hits a "domain name - IP" or "domain name - IP array" mapping in the '),s("code",[t._v("hosts")]),t._v(" file, the IP or IP array will be returned as the DNS resolution result.")]),t._v(" "),s("li",[t._v('Hits a "domain name - domain name" mapping in the '),s("code",[t._v("hosts")]),t._v(" file, the value of the mapping (another domain name) will be used as the new domain name currently being queried, and enter the DNS processing flow until the IP is resolved and returned, or an empty resolution is returned.")]),t._v(" "),s("li",[t._v("Does not hit the "),s("code",[t._v("hosts")]),t._v(" file, but hits the domain name list "),s("code",[t._v("domains")]),t._v(" in one or more DNS servers, the DNS server corresponding to the rule with the highest priority will be queried sequentially according to the hit rule. If the query fails or the "),s("code",[t._v("expectIPs")]),t._v(" do not match, the next DNS server will be queried; otherwise, the resolved IP will be returned. If all the DNS servers fail, the DNS component will:\n"),s("ul",[s("li",[t._v('By default, perform a "DNS fallback query": Use a DNS server which was not queried in the previous failure which has a '),s("code",[t._v("skipFallback")]),t._v(" value of "),s("code",[t._v("false")]),t._v(". If this query fails too, or if the "),s("code",[t._v("expectIPs")]),t._v(" do not match, an empty resolution will be returned; otherwise, the resolved IP will be returned.")]),t._v(" "),s("li",[t._v("If "),s("code",[t._v("disableFallback")]),t._v(" is set to "),s("code",[t._v("true")]),t._v(', no "DNS fallback query" will be performed.')])])]),t._v(" "),s("li",[t._v("Hits neither the "),s("code",[t._v("hosts")]),t._v(" file nor the domain name list "),s("code",[t._v("domains")]),t._v(" in the DNS server, then:\n"),s("ul",[s("li",[t._v('By default, use the "DNS server with '),s("code",[t._v("skipFallback")]),t._v(" set to the default value "),s("code",[t._v("false")]),t._v('" to query sequentially. If the first DNS server selected fails or the '),s("code",[t._v("expectIPs")]),t._v(" do not match, the next selected DNS server will be queried; otherwise, the resolved IP will be returned. If all selected DNS servers fail, an empty resolution will be returned.")]),t._v(" "),s("li",[t._v("If there are no DNS servers with "),s("code",[t._v("skipFallback")]),t._v(" set to the default value "),s("code",[t._v("false")]),t._v('", or if '),s("code",[t._v("disableFallback")]),t._v(" is set to "),s("code",[t._v("true")]),t._v(", the first DNS server in the DNS configuration will be used for the query. If the query fails or does not match the "),s("code",[t._v("expectIPs")]),t._v(" list, an empty resolution will be returned; otherwise, the resolved IP will be returned.")])])])]),t._v(" "),s("p",[t._v("The DNS processing flowchart is as follows:")]),t._v(" "),s("p",[s("img",{attrs:{src:"/dns_flowchart_20210418.svg",alt:"DNS resolution process"}})]),t._v(" "),s("h2",{attrs:{id:"dnsobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dnsobject"}},[t._v("#")]),t._v(" DnsObject")]),t._v(" "),s("p",[s("code",[t._v("DnsObject")]),t._v(" corresponds to the "),s("code",[t._v("dns")]),t._v(" parameter of the configuration file.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hosts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"baidu.com"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"example.com"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"::1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proxy.example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.2"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dns.google"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8.8.8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"proxy.example.com"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"geosite:test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"another-proxy.example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"geosite:category-ads-all"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"::1"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://dns.google/dns-query"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"223.5.5.5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5353")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientIp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5.6.7.8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"skipFallback"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain:baidu.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geosite:cn"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expectIPs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip:cn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext:customizedGeoIPFile.dat:cn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext-ip:customizedGeoIPFile.dat:cn"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fakedns"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain:v2fly.org"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geosite:geolocation-!cn"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://1.1.1.1/dns-query"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain:v2fly.org"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geosite:geolocation-!cn"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expectIPs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip:!cn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext:customizedGeoIPFile.dat:!cn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext-ip:customizedGeoIPFile.dat:!cn"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientIp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.2.3.4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"queryStrategy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UseIPv4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"disableCache"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"disableFallback"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dns_inbound"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("hosts")]),t._v(": map{string: address} | map{string: [address]}")])]),t._v(" "),s("p",[t._v("Lists configured hosts mappings. Supports mapping a domain to an address one-to-one, or mapping a domain to several addresses in an array (v4.37.3+), where the address can be IP or another domain name.")]),t._v(" "),s("p",[t._v("When parsing a domain name, and the domain name matches an item in this list of mappings, if the address of this item is an IP, the returned result is the IP of this item, and no subsequent DNS parsing will be performed; if the address of this item is a domain name, the domain name will be used for subsequent DNS parsing, superseding the original domain name.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("If multiple IPs and domain names are set for the same address at the same time, only the first one will be returned, and the remaining IPs and domain names will be ignored.")])]),t._v(" "),s("p",[t._v("The format of the domain name has the following forms:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("String")]),t._v(": This pattern takes effect when this domain name completely matches the target domain name. For example, "),s("code",[t._v("v2ray.com")]),t._v(" matches "),s("code",[t._v("v2ray.com")]),t._v(" but not "),s("code",[t._v("www.v2ray.com")]),t._v(".")]),t._v(" "),s("li",[s("strong",[t._v("Regular Expression")]),t._v(": Starts with "),s("code",[t._v("regexp:")]),t._v(", followed by a regular expression. This pattern takes effect when this regular expression matches the target domain name. For example, "),s("code",[t._v("regexp:\\.goo.*\\.com$")]),t._v(" matches "),s("code",[t._v("www.google.com")]),t._v(", "),s("code",[t._v("fonts.googleapis.com")]),t._v(", but not "),s("code",[t._v("google.com")]),t._v(".")]),t._v(" "),s("li",[s("strong",[t._v("Subdomain (recommended)")]),t._v(": Starts with "),s("code",[t._v("domain:")]),t._v(", followed by a domain name. This pattern takes effect when this domain name is the target domain name or its subdomain. For example, "),s("code",[t._v("domain:v2ray.com")]),t._v(" matches "),s("code",[t._v("www.v2ray.com")]),t._v(", "),s("code",[t._v("v2ray.com")]),t._v(", but not "),s("code",[t._v("xv2ray.com")]),t._v(".")]),t._v(" "),s("li",[s("strong",[t._v("Substring")]),t._v(": Starts with "),s("code",[t._v("keyword:")]),t._v(", followed by a string. This pattern takes effect when this string matches any part of the target domain name. For example, "),s("code",[t._v("keyword:sina.com")]),t._v(" can match "),s("code",[t._v("sina.com")]),t._v(", "),s("code",[t._v("sina.com.cn")]),t._v(", "),s("code",[t._v("www.sina.com")]),t._v(" and "),s("code",[t._v("www.sina.company")]),t._v(", but not "),s("code",[t._v("sina.cn")]),t._v(".")]),t._v(" "),s("li",[s("strong",[t._v("Predefined domain name list")]),t._v(": Starts with "),s("code",[t._v("geosite:")]),t._v(", followed by a name, such as "),s("code",[t._v("geosite:google")]),t._v(" or "),s("code",[t._v("geosite:cn")]),t._v(". For a list of names and domain names, see "),s("RouterLink",{attrs:{to:"/en_US/config/routing.html#TODO"}},[t._v("Predefined Domain Name List")]),t._v(".")],1)]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("servers")]),t._v(": [string | "),s("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v(" ]")])]),t._v(" "),s("p",[t._v("List of DNS servers to use. Two forms are accepted: direct DNS server address (string) and "),s("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v(".")]),t._v(" "),s("p",[t._v("For details, see [Supported DNS Protocols and Routing Policies](#Supported-DNS protocols and routing strategies)")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("clientIp")]),t._v(": string")])]),t._v(" "),s("p",[t._v("The IP address of the current network. Used to notify the DNS server of the client's geographical location when querying. (cannot be a private IP address)")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("This feature requires the DNS server to support EDNS Client Subnet (RFC7871).")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("queryStrategy")]),t._v(': "UseIP" | "UseIPv4" | "UseIPv6"')])]),t._v(" "),s("p",[t._v("(Since v4.37.0) The Internet Protocol version used for DNS queries. The default value is "),s("code",[t._v("UseIP")]),t._v(", which means that DNS queries for both A and AAAA records of the domain name at the same time. "),s("code",[t._v("UseIPv4")]),t._v(" and "),s("code",[t._v("UseIPv6")]),t._v(" will query only the A record or the AAAA record, respectively.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("It is recommended that users who do not have IPv6 access to use "),s("code",[t._v("UseIPv4")]),t._v(". This option has the same priority as the "),s("code",[t._v("domainStrategy")]),t._v(" option in the "),s("code",[t._v("outbound")]),t._v(" of the "),s("code",[t._v("freedom")]),t._v(" protocol. It is recommended to set "),s("code",[t._v("domainStrategy")]),t._v(" at the same time.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If this is set to "),s("code",[t._v("UseIPv4")]),t._v(", but the "),s("code",[t._v("domainStrategy")]),t._v(" option in the "),s("code",[t._v("outbound")]),t._v(" of the "),s("code",[t._v("freedom")]),t._v(" protocol is set to "),s("code",[t._v("UseIPv6")]),t._v(", it will cause DNS queries from "),s("code",[t._v("freedom")]),t._v(" protocol "),s("code",[t._v("outbound")]),t._v(" to be intercepted by the Go runtime, which will then cause DNS leakage; same for the reverse.")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("disableCache")]),t._v(": bool")])]),t._v(" "),s("p",[t._v("(Since v4.35.0) Disables DNS caching. The default is false (DNS cache enabled).")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("disableFallback")]),t._v(": bool")])]),t._v(" "),s("p",[t._v("(Since v4.37.2) Disables DNS fallback queries. The default is false (DNS fallback enabled). For details, see [DNS Processing Flow](#DNS Processing Flow).")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If this option is set to "),s("code",[t._v("true")]),t._v(", the "),s("code",[t._v("skipFallback")]),t._v(" in "),s("a",{attrs:{href:"#ServerObject"}},[t._v("ServerObject")]),t._v(" will not take effect.")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("disableFallbackIfMatch")]),t._v(": bool")])]),t._v(" "),s("p",[t._v("(Since v4.40.2) Disables DNS fallback queries when a priority matching domain name list in the DNS server is hit.")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),s("p",[t._v("(Since v4.13) All query traffic sent by this DNS, except for "),s("code",[t._v("localhost")]),t._v(" and "),s("code",[t._v("DOHL_")]),t._v(" mode, will be tagged with this tag, which can be matched by "),s("code",[t._v("inboundTag")]),t._v(" in routing.")]),t._v(" "),s("h2",{attrs:{id:"serverobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serverobject"}},[t._v("#")]),t._v(" ServerObject")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"223.5.5.5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5353")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientIp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5.6.7.8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"skipFallback"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domains"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"domain:baidu.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geosite:cn"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expectIPs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip:cn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext:customizedGeoIPFile.dat:cn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext-ip:customizedGeoIPFile.dat:cn"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("address")]),t._v(": string")])]),t._v(" "),s("p",[t._v("The DNS server address, such as "),s("code",[t._v("8.8.8.8")]),t._v(", "),s("code",[t._v("tcp+local://8.8.8.8:53")]),t._v(", or "),s("code",[t._v("https://dns.google/dns-query")]),t._v(". See "),s("a",{attrs:{href:"#Supported-DNS-protocols-and-routing-strategies"}},[t._v("Supported DNS Protocols and Routing Strategies")]),t._v(" for details.")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("port")]),t._v(": number")])]),t._v(" "),s("p",[t._v("The DNS server port, by default "),s("code",[t._v("53")]),t._v(". It is ignored when DOH, DOHL, or DOQL mode is used; In those cases non-standard ports should be specified in the URL.")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("clientIp")]),t._v(": string")])]),t._v(" "),s("p",[t._v("The IP address of the current network. Used to notify the DNS server of the client's geographical location when querying. (cannot be a private IP address) The priority of "),s("code",[t._v("clientIp")]),t._v(" here is higher than that of the outer configuration of "),s("code",[t._v("clientIp")]),t._v(", which can be used to obtain the same domain name resolution result in different regions from the same DNS server using a different "),s("code",[t._v("clientIp")]),t._v(". (4.34.0+)")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("This feature requires the DNS server to support EDNS Client Subnet (RFC7871).")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("skipFallback")]),t._v(": bool")])]),t._v(" "),s("p",[t._v("(Since v4.37.2) Whether to skip this DNS during DNS fallback queries. The default is false (DNS fallback enabled). See "),s("a",{attrs:{href:"#DNS-Processing-Flow"}},[t._v("DNS Processing Flow")]),t._v(" for details.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("This option can be used to prevent DNS leaks during DNS fallback queries for "),s("code",[t._v("A")]),t._v(" and "),s("code",[t._v("AAAA")]),t._v(" records.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If "),s("code",[t._v("disableFallback")]),t._v(" in "),s("a",{attrs:{href:"#dnsobject"}},[t._v("DnsObject")]),t._v(" is set to "),s("code",[t._v("true")]),t._v(", this option will be ignored.")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("domains")]),t._v(": [string]")])]),t._v(" "),s("p",[t._v("A list of domain names. Queries for domain names in this list will prioritize using this server. The domain name format is the same as that in "),s("RouterLink",{attrs:{to:"/en_US/config/routing.html#RuleObject"}},[t._v("Routing Configuration")]),t._v(".")],1),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("expectIPs")]),t._v(":[string]")])]),t._v(" "),s("p",[t._v("(Since v4.22.0) A list of IP ranges, with the same format as "),s("RouterLink",{attrs:{to:"/en_US/config/routing.html#RuleObject"}},[t._v("Routing Configuration")]),t._v(".")],1),t._v(" "),s("p",[t._v("When this item is configured, V2Ray's DNS module will verify that the returned IP is within the specified range, and only return the address that meets the expectIPs list. If this item is not configured, the IP address will be returned as-is.")])])}),[],!1,null,null,null);e.default=o.exports}}]);