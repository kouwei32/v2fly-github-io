(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{311:function(o,e,t){"use strict";t.r(e);var s=t(0),n=Object(s.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h1",{attrs:{id:"shadowsocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocks"}},[o._v("#")]),o._v(" Shadowsocks")]),o._v(" "),t("p",[t("a",{attrs:{href:"https://shadowsocks.org",target:"_blank",rel:"noopener noreferrer"}},[o._v("Shadowsocks"),t("OutboundLink")],1),o._v(" Protocol，mostly compatible with other implementations。")]),o._v(" "),t("h2",{attrs:{id:"shadowsocks-inbound"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocks-inbound"}},[o._v("#")]),o._v(" Shadowsocks Inbound")]),o._v(" "),t("ul",[t("li",[o._v("Name: "),t("code",[o._v("shadowsocks")])]),o._v(" "),t("li",[o._v("Type: Inbound Protocol")]),o._v(" "),t("li",[o._v("ID: "),t("code",[o._v("inbound.shadowsocks")])])]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("method")]),o._v(" : string")])]),o._v(" "),t("p",[o._v("Encryption method，one of [supported encryption methods](#Supported Encryption Methods) .")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("password")]),o._v(": string")])]),o._v(" "),t("p",[o._v("A recognized password for this inbound.\nShadowsocks does not mandate the length of the password, but it would be easy to crack a short password,\nthus a password of 16 characters or more is recommended.")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("networks")]),o._v(': "tcp" | "udp" | "tcp,udp"')])]),o._v(" "),t("p",[o._v("Enabled network type.\nFor example, when "),t("code",[o._v('"tcp"')]),o._v(" is specified, this inbound will only accept TCP traffic.\nThis value is "),t("code",[o._v('"tcp"')]),o._v(" by default.")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("packetEncoding")]),o._v(':  ["None" | "Packet"]')])]),o._v(" "),t("p",[o._v("UDP packet encoding method，"),t("code",[o._v("None")]),o._v(" by default。")]),o._v(" "),t("p",[o._v("When this value is "),t("code",[o._v("None")]),o._v(" , UDP connections will be split into streams based on their destination (Address and Port-Dependent Mapping)。")]),o._v(" "),t("p",[o._v("When this value is "),t("code",[o._v("Packet")]),o._v(", UDP connections from a single source connection will be encoded as UDP packet addr connection, which will be restored to its original form by a supported outbound as an Endpoint Independent Mapping UDP connection.\nThis UDP behaviour is also known as FullCone or NAT1.")]),o._v(" "),t("h2",{attrs:{id:"shadowsocks-outbound"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocks-outbound"}},[o._v("#")]),o._v(" Shadowsocks Outbound")]),o._v(" "),t("ul",[t("li",[o._v("Name: "),t("code",[o._v("shadowsocks")])]),o._v(" "),t("li",[o._v("Type: Outbound Protocol")]),o._v(" "),t("li",[o._v("ID: "),t("code",[o._v("outbound.shadowsocks")])])]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("address")]),o._v(": string")])]),o._v(" "),t("p",[o._v("The server address. Both IP and domain name is supported.")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("port")]),o._v(": number")])]),o._v(" "),t("p",[o._v("The server port number.")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("method")]),o._v(" : string")])]),o._v(" "),t("p",[o._v("Encryption method，one of [supported encryption methods](#Supported Encryption Methods) .")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("password")]),o._v(": string")])]),o._v(" "),t("p",[o._v("A password recognized by server.")]),o._v(" "),t("h2",{attrs:{id:"supported-encryption-methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-encryption-methods"}},[o._v("#")]),o._v(" Supported Encryption Methods")]),o._v(" "),t("ul",[t("li",[t("code",[o._v('"aes-256-gcm"')])]),o._v(" "),t("li",[t("code",[o._v('"aes-128-gcm"')])]),o._v(" "),t("li",[t("code",[o._v('"chacha20-poly1305"')]),o._v(" | "),t("code",[o._v('"chacha20-ietf-poly1305"')])]),o._v(" "),t("li",[t("code",[o._v('"none"')]),o._v(" | "),t("code",[o._v('"plain"')])])]),o._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[o._v("WARNING")]),o._v(" "),t("p",[o._v('In "none" unencrypted and unauthenticated mode, the server will not try to validate the password.')]),o._v(" "),t("p",[o._v("This is typically used when authentication is already completed by the transport layer, like enabling TLS encryption and WebSocket transport with a long and unpredictable path.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);