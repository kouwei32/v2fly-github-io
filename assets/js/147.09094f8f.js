(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{348:function(t,e,s){"use strict";s.r(e);var o=s(0),v=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"stream"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stream"}},[t._v("#")]),t._v(" Stream")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transport"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transportSettings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"security"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"securitySettings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("transport")]),t._v(": name of "),s("transport")],1)]),t._v(" "),s("p",[t._v("传输层协议名称。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("transportSettings")]),t._v(": settings of "),s("transport")],1)]),t._v(" "),s("p",[t._v("传输层协议设置。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("security")]),t._v(": name of "),s("security")],1)]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("securitySettings")]),t._v(": settings of "),s("security")],1)]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("socketSettings")]),t._v(": "),s("a",{attrs:{href:"#SocketConfigObject"}},[t._v("SocketConfigObject")])])]),t._v(" "),s("h2",{attrs:{id:"支持的传输流协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持的传输流协议"}},[t._v("#")]),t._v(" 支持的传输流协议")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/v5/config/stream/kcp.html"}},[t._v("mKCP")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/v5/config/stream/tcp.html"}},[t._v("TCP")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/v5/config/stream/websocket.html"}},[t._v("WebSocket")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/v5/config/stream/grpc.html"}},[t._v("gRPC")])],1)]),t._v(" "),s("h2",{attrs:{id:"tls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tls"}},[t._v("#")]),t._v(" TLS")]),t._v(" "),s("p",[t._v("security.tls")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("serverName")]),t._v(": string")])]),t._v(" "),s("p",[t._v("指定服务器端证书的域名，在连接由 IP 建立时有用。当目标连接由域名指定时，比如在 Socks 入站时接收到了域名，或者由 Sniffing 功能探测出了域名，这个域名会自动用于 "),s("code",[t._v("serverName")]),t._v("，无须手动配置。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("nextProtocol")]),t._v(" : [string]")])]),t._v(" "),s("p",[t._v("一个字符串数组，指定了 TLS 握手时指定的 ALPN 数值。默认值为 "),s("code",[t._v('["h2", "http/1.1"]')]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("disableSystemRoot")]),t._v(": true | false")])]),t._v(" "),s("p",[t._v("是否禁用操作系统自带的 CA 证书。默认值为 "),s("code",[t._v("false")]),t._v("。当值为 "),s("code",[t._v("true")]),t._v(" 时，V2Ray 只会使用 "),s("code",[t._v("certificates")]),t._v(" 中指定的证书进行 TLS 握手。当值为 "),s("code",[t._v("false")]),t._v(" 时，V2Ray 只会使用操作系统自带的 CA 证书进行 TLS 握手。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("pinnedPeerCertificateChainSha256")]),t._v(" : [string]")])]),t._v(" "),s("p",[t._v("使用 Base64 标准编码格式表示的远程服务器的证书链的SHA256散列值。在设置后，远程服务器的证书链的散列值必须为列表中的数值之一。")]),t._v(" "),s("p",[t._v("在连接因为此策略失败时，会展示此证书链散列。不建议使用这种方式获得证书链散列值，因为在这种情况下您没有机会验证此时服务器提供的证书是否为真实证书。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("certificate")]),t._v(": "),s("a",{attrs:{href:"#CertificateObject"}},[t._v("CertificateObject")])])]),t._v(" "),s("h3",{attrs:{id:"certificateobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#certificateobject"}},[t._v("#")]),t._v(" CertificateObject")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("usage")]),t._v(" : string")])]),t._v(" "),s("p",[t._v("证书用途，默认值为 "),s("code",[t._v('"ENCIPHERMENT"')]),t._v("。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('"ENCIPHERMENT"')]),t._v(": 证书用于 TLS 认证和加密。")]),t._v(" "),s("li",[s("code",[t._v('"AUTHORITY_VERIFY"')]),t._v(": 证书用于验证远端 TLS 的证书。当使用此项时，当前证书必须为 CA 证书。")]),t._v(" "),s("li",[s("code",[t._v('"AUTHORITY_VERIFY_CLIENT"')]),t._v(": 用于验证客户端身份的证书颁发机构证书。当使用此项时，当前证书必须为 CA 证书。")]),t._v(" "),s("li",[s("code",[t._v('"AUTHORITY_ISSUE"')]),t._v(": 证书用于签发其它证书。当使用此项时，当前证书必须为 CA 证书。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("当有新的客户端请求时，假设所指定的 "),s("code",[t._v("serverName")]),t._v(" 为 "),s("code",[t._v('"v2ray.com"')]),t._v("，V2Ray 会先从证书列表中寻找可用于 "),s("code",[t._v('"v2ray.com"')]),t._v(" 的证书，如果没有找到，则使用任一 "),s("code",[t._v("usage")]),t._v(" 为 "),s("code",[t._v('"issue"')]),t._v(" 的证书签发一个适用于 "),s("code",[t._v('"v2ray.com"')]),t._v(" 的证书，有效期为一小时。并将新的证书加入证书列表，以供后续使用。")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Certificate")]),t._v(": string")])]),t._v(" "),s("p",[t._v("PEM 格式的证书。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Key")]),t._v(": string")])]),t._v(" "),s("p",[t._v("PEM 格式的私钥。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("certificateFile")]),t._v(": string")])]),t._v(" "),s("p",[t._v("证书文件路径，如使用 OpenSSL 生成，后缀名为 .crt。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("keyFile")]),t._v(": string")])]),t._v(" "),s("p",[t._v("密钥文件路径，如使用 OpenSSL 生成，后缀名为 .key。目前暂不支持需要密码的 key 文件。")]),t._v(" "),s("h2",{attrs:{id:"socketconfigobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#socketconfigobject"}},[t._v("#")]),t._v(" SocketConfigObject")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mark"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tcpFastOpen"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tproxy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"off"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tcpKeepAliveInterval"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("mark")]),t._v(": number")])]),t._v(" "),s("p",[t._v("一个整数。当其值非零时，在出站连接上标记 SO_MARK。")]),t._v(" "),s("ul",[s("li",[t._v("仅适用于 Linux 系统。")]),t._v(" "),s("li",[t._v("需要 CAP_NET_ADMIN 权限。")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("tcpFastOpen")]),t._v(": true | false")])]),t._v(" "),s("p",[t._v("是否启用 "),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/TCP%E5%BF%AB%E9%80%9F%E6%89%93%E5%BC%80",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP Fast Open"),s("OutboundLink")],1),t._v("。当其值为 "),s("code",[t._v("true")]),t._v(" 时，强制开启 TFO；当其值为 "),s("code",[t._v("false")]),t._v(" 时，强制关闭 TFO；当此项不存在时，使用系统默认设置。可用于入站出站连接。")]),t._v(" "),s("ul",[s("li",[t._v("仅在以下版本（或更新版本）的操作系统中可用:\n"),s("ul",[s("li",[t._v("Windows 10 (1604)")]),t._v(" "),s("li",[t._v("Mac OS 10.11 / iOS 9")]),t._v(" "),s("li",[t._v("Linux 3.16：系统已默认开启，无需配置。")]),t._v(" "),s("li",[t._v("FreeBSD 10.3")])])])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("tcpFastOpenQueueLength")]),t._v(": number\n入站连接的 "),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/TCP%E5%BF%AB%E9%80%9F%E6%89%93%E5%BC%80",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP Fast Open"),s("OutboundLink")],1),t._v(" 队列长度，默认值为 "),s("code",[t._v("4096")]),t._v("，仅在 Linux 中可用。")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("tproxy")]),t._v(': "redirect" | "tproxy" | "off"')])]),t._v(" "),s("p",[t._v("是否开启透明代理（仅适用于 Linux）。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('"redirect"')]),t._v("：使用 Redirect 模式的透明代理。支持 TCP 和 UDP 连接。")]),t._v(" "),s("li",[s("code",[t._v('"tproxy"')]),t._v("：使用 TProxy 模式的透明代理。支持 TCP 和 UDP 连接。")]),t._v(" "),s("li",[s("code",[t._v('"off"')]),t._v("：关闭透明代理。")])]),t._v(" "),s("p",[t._v("透明代理需要 Root 或 CAP_NET_ADMIN 权限。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("当 "),s("RouterLink",{attrs:{to:"/v5/config/proxy/dokodemo.html"}},[t._v("Dokodemo-door")]),t._v(" 中指定了 "),s("code",[t._v("followRedirect")]),t._v("，且 "),s("code",[t._v("sockopt.tproxy")]),t._v(" 为空时，"),s("code",[t._v("sockopt.tproxy")]),t._v(" 的值会被设为 "),s("code",[t._v('"redirect"')]),t._v("。")],1)]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("tcpKeepAliveInterval")]),t._v(": number")])]),t._v(" "),s("p",[t._v("TCP 保持活跃的数据包的发送间隔，以秒为单位（仅适用于 Linux）。")]),t._v(" "),s("p",[t._v("0 代表保持默认值。")])])}),[],!1,null,null,null);e.default=v.exports}}]);