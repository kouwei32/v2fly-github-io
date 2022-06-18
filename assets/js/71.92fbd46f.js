(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{275:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"socks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#socks"}},[t._v("#")]),t._v(" SOCKS")]),t._v(" "),e("ul",[e("li",[t._v("Name: "),e("code",[t._v("socks")])]),t._v(" "),e("li",[t._v("Type: Inbound / Outbound")])]),t._v(" "),e("p",[t._v("SOCKS is an inbound/outbound protocol. It is an unencrypted traffic tunnel protocol, useful for communications and proxy usage on local services. This is a standard SOCKS protocol implementation, compatible with "),e("a",{attrs:{href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("SOCKS 4"),e("OutboundLink")],1),t._v(", SOCKS 4a, and "),e("a",{attrs:{href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("SOCKS 5"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("SOCKS configuration is divided into two parts, "),e("code",[t._v("InboundConfigurationObject")]),t._v(" and "),e("code",[t._v("OutboundConfigurationObject")]),t._v(", corresponding to the "),e("code",[t._v("settings")]),t._v(" element in the inbound and outbound protocol configuration respectively.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("If you share your SOCKS5 proxy with others over an insecure network, it is recommended to use a firewall.")]),t._v(" "),e("p",[t._v("Reference: "),e("a",{attrs:{href:"https://github.com/v2fly/v2fly-github-io/issues/104",target:"_blank",rel:"noopener noreferrer"}},[t._v("SOCKS 5 Authentication Bypassed over UDP"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"outboundconfigurationobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outboundconfigurationobject"}},[t._v("#")]),t._v(" OutboundConfigurationObject")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servers"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test user"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pass"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test pass"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Note that while outbound SOCKS can be used over the open internet, the SOCKS protocol is not encrypted and is not suitable for transmission over public networks.")]),t._v(" "),e("p",[t._v("A more meaningful use of outbound SOCKS is for special cases where only a SOCKS proxy can be used to access an internal network (see "),e("code",[t._v("OutboundObject")]),t._v("'s "),e("code",[t._v("ProxySettingsObject")]),t._v(").")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("servers")]),t._v(": [ "),e("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v(" ]")])]),t._v(" "),e("p",[t._v("List of SOCKS servers, where each item is a "),e("a",{attrs:{href:"#ServerObject"}},[t._v("ServerObject")]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("version")]),t._v(': "5" | "4a" | "4"')])]),t._v(" "),e("p",[t._v("(Since v4.42.2) SOCKS protocol version.")]),t._v(" "),e("h3",{attrs:{id:"serverobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serverobject"}},[t._v("#")]),t._v(" ServerObject")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USERNAME"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pass"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PASSWORD"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("address")]),t._v(": address")])]),t._v(" "),e("p",[t._v("Remote SOCKS Server address. Required.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("port")]),t._v(": number")])]),t._v(" "),e("p",[t._v("Remote SOCKS Server port. Required.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("users")]),t._v(": [ "),e("a",{attrs:{href:"#userobject"}},[t._v("UserObject")]),t._v(" ]")])]),t._v(" "),e("p",[t._v("List of users, where each element is a user configuration. If there are any valid configuration available, the SOCKS client will use this user information for authentication; if not specified, no authentication will be performed.")]),t._v(" "),e("h3",{attrs:{id:"userobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#userobject"}},[t._v("#")]),t._v(" UserObject")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USERNAME"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pass"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PASSWORD"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("user")]),t._v(": string")])]),t._v(" "),e("p",[t._v("Remote SOCKS server Username.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("pass")]),t._v(": string")])]),t._v(" "),e("p",[t._v("Remote SOCKS server Password.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("level")]),t._v(": number")])]),t._v(" "),e("p",[t._v("User level, default value is "),e("code",[t._v("0")]),t._v(". See "),e("RouterLink",{attrs:{to:"/en_US/config/policy.html"}},[t._v("Local Policy")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"inboundconfigurationobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inboundconfigurationobject"}},[t._v("#")]),t._v(" InboundConfigurationObject")]),t._v(" "),e("p",[t._v("Note that although inbound Socks can bind to internet-facing ports, the SOCKS protocol is not encrypted and is not suitable for transmission over a public network. A more meaningful use of inbound SOCKS is to provide services for other programs on the local network or environment.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"auth"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noauth"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accounts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USERNAME"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pass"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PASSWORD"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"udp"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ip"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userLevel"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("auth")]),t._v(': "noauth" | "password"')])]),t._v(" "),e("p",[t._v("The authentication method of the SOCKS protocol, supporting "),e("code",[t._v('"noauth"')]),t._v(" (anonymous mode) and "),e("code",[t._v('"password"')]),t._v(" (user-password). The default value is "),e("code",[t._v('"noauth"')]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("accounts")]),t._v(": [ "),e("a",{attrs:{href:"#accountobject"}},[t._v("AccountObject")]),t._v(" ]")])]),t._v(" "),e("p",[t._v("An array, where each element in the array is an "),e("a",{attrs:{href:"#AccountObject"}},[t._v("AccountObject")]),t._v(". The default value is empty. This option ignored if "),e("code",[t._v("auth")]),t._v(" is not set to "),e("code",[t._v("password")]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("udp")]),t._v(": true | false")])]),t._v(" "),e("p",[t._v("Whether to enable forwarding UDP traffic. The default value is "),e("code",[t._v("false")]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("ip")]),t._v(": address")])]),t._v(" "),e("p",[t._v("SOCKS5 establishes a UDP session through the "),e("code",[t._v("UDP ASSOCIATE")]),t._v(" command. In the response to the command from the client, the server specifies the target address of the packet sent by the client.")]),t._v(" "),e("ul",[e("li",[t._v("v4.34.0 Onwards: The default value is empty, in which case the loopback IPv4/IPv6 address is used for a client connecting through the local IPv4/IPv6 loopback, and the current inbound listening address is used for a client that is not on the local machine.")]),t._v(" "),e("li",[t._v("v4.33.0 and Earlier: The default value is "),e("code",[t._v("127.0.0.1")]),t._v(".")])]),t._v(" "),e("p",[t._v("You can configure this option to make V2Ray respond with a specific address. This is optional and only required for complex configurations.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("userLevel")]),t._v(": number")])]),t._v(" "),e("p",[t._v("User level, default value is "),e("code",[t._v("0")]),t._v(". See "),e("RouterLink",{attrs:{to:"/en_US/config/policy.html"}},[t._v("Local Policy")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"accountobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accountobject"}},[t._v("#")]),t._v(" AccountObject")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"user"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USERNAME"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"pass"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PASSWORD"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("user")]),t._v(": string")])]),t._v(" "),e("p",[t._v("Local SOCKS Username.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("pass")]),t._v(": string")])]),t._v(" "),e("p",[t._v("Local SOCKS Password.")])])}),[],!1,null,null,null);s.default=r.exports}}]);