import{_ as a,r,o as s,c as l,a as e,b as o,w as c,d as t}from"./app.44e1f99f.js";const d={},h=e("h1",{id:"working-mechanism",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#working-mechanism","aria-hidden":"true"},"#"),t(" Working Mechanism")],-1),u=e("h2",{id:"single-server-mode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#single-server-mode","aria-hidden":"true"},"#"),t(" Single server mode")],-1),p=e("p",null,"Like other network proxy tools, you need a server configured with V2Ray, and then install and configure the V2Ray client on your device, and then you can smoothly access the Internet.",-1),m={href:"https://mermaid.live/edit#pako:eNpdj7EKwjAQQH8l3JRCo-AYQaitTg6lQqcsp7naYJNKmiIi_XdTUQe34713cPeEc68JJFw83lp2qNbKZbzMEyYWgm353ni6Y9clkW9ntmE575tGzJDd6TSYQLPMmIiu4PWqwseyLo8zLN4w_-kdN-5vE1Kw5C0aHY94KseYgtCSJQUyjhr9VYFyU-zGm8ZAO21C70E22A2UAo6hPz7cGWTwI32jwmB8yH6q6QUwM0iC",target:"_blank",rel:"noopener noreferrer"},f=e("img",{src:"https://mermaid.ink/img/pako:eNpdj7EKwjAQQH8l3JRCo-AYQaitTg6lQqcsp7naYJNKmiIi_XdTUQe34713cPeEc68JJFw83lp2qNbKZbzMEyYWgm353ni6Y9clkW9ntmE575tGzJDd6TSYQLPMmIiu4PWqwseyLo8zLN4w_-kdN-5vE1Kw5C0aHY94KseYgtCSJQUyjhr9VYFyU-zGm8ZAO21C70E22A2UAo6hPz7cGWTwI32jwmB8yH6q6QUwM0iC",alt:""},null,-1),g=e("p",null,"A V2Ray server can simultaneously support multiple devices to access using different proxy protocols. At the same time, after reasonable configuration, V2Ray can identify and distinguish between the traffic that needs a proxy and the traffic that does not require a proxy. Directly connected traffic does not require detours.",-1),_=e("h2",{id:"bridge-mode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bridge-mode","aria-hidden":"true"},"#"),t(" Bridge mode")],-1),w=e("p",null,"If you don't want to configure routing on every device, you can also set up a transit server to receive all the traffic sent by the client, and then forward the judgment in the server.",-1),k={href:"https://mermaid.live/edit#pako:eNpdj8sKwjAQRX9lmFUKxg-oINjXyoVYcJVNbKY22CaSJoiI_26sVtDdcM-Zy8wdG6sIUzw5eelgu18Js2G7PAG-5GvIWKUdXWXfJxFk7zBntm35K4QrHUft6QU3wCMr2GFXgzbgO4J5r5hQOSEb_KgV_fBy4vnXrJg2f_24wIHcILWKt96FARAYKwYSmMZRSXcWKMwjeuGipKdSaW8dpq3sR1qgDN7WN9Ng6l2gWSq0jH8PH-vxBAUaVQg",target:"_blank",rel:"noopener noreferrer"},y=e("img",{src:"https://mermaid.ink/img/pako:eNpdj8sKwjAQRX9lmFUKxg-oINjXyoVYcJVNbKY22CaSJoiI_26sVtDdcM-Zy8wdG6sIUzw5eelgu18Js2G7PAG-5GvIWKUdXWXfJxFk7zBntm35K4QrHUft6QU3wCMr2GFXgzbgO4J5r5hQOSEb_KgV_fBy4vnXrJg2f_24wIHcILWKt96FARAYKwYSmMZRSXcWKMwjeuGipKdSaW8dpq3sR1qgDN7WN9Ng6l2gWSq0jH8PH-vxBAUaVQg",alt:""},null,-1),b=e("h2",{id:"working-principle",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#working-principle","aria-hidden":"true"},"#"),t(" working principle")],-1),Q=e("p",null,"Before configuring V2Ray, let\u2019s take a look at the working principle of V2Ray. The following is a schematic diagram of the internal structure of a single V2Ray process. Multiple V2Rays are independent of each other and do not affect each other.",-1),J={href:"https://mermaid.live/edit#pako:eNptkD0LwjAQQP9KuKmFFunHFEFQ4iYO7ZolNtEGTVLSZJDS_25aFUW7Pd49Du4GaAwXgOFiWdeiQ7WmeptFUp-M1zxGabpBJCKy75hrWmHRClXGuxnIsY6nPP_JJ1csuPLfkZl2WRR2PkcfmS_JYkmWXxISUMIqJnk4aqAaIQquFUpQwAE5s1cKVI-h8x1nTuy5dMYCPrNbLxJg3pn6rhvAznrxjohk4UHqVY0PgRNhlQ",target:"_blank",rel:"noopener noreferrer"},K=e("img",{src:"https://mermaid.ink/img/pako:eNptkD0LwjAQQP9KuKmFFunHFEFQ4iYO7ZolNtEGTVLSZJDS_25aFUW7Pd49Du4GaAwXgOFiWdeiQ7WmeptFUp-M1zxGabpBJCKy75hrWmHRClXGuxnIsY6nPP_JJ1csuPLfkZl2WRR2PkcfmS_JYkmWXxISUMIqJnk4aqAaIQquFUpQwAE5s1cKVI-h8x1nTuy5dMYCPrNbLxJg3pn6rhvAznrxjohk4UHqVY0PgRNhlQ",alt:""},null,-1),W=e("ul",null,[e("li",null,[t("You need to configure at least one inbound protocol (Inbound) and one outbound protocol (Outbound) to work properly. "),e("ul",null,[e("li",null,[t("The inbound protocol is responsible for communicating with the client (such as a browser): "),e("ul",null,[e("li",null,"Inbound protocols can usually configure user authentication, such as ID and password;"),e("li",null,"After the inbound protocol receives the data, it will be handed over to the Dispatcher for distribution;")])]),e("li",null,"The outbound protocol is responsible for sending data to the server, such as V2Ray on another host.")])]),e("li",null,[t("When there are multiple outbound protocols, routing can be configured to specify that a certain type of traffic is sent by a certain outbound protocol. "),e("ul",null,[e("li",null,"When necessary, the router will query the DNS for more information to make a judgment.")])])],-1),I=t("The specific configuration format is detailed in "),Y=t("Chapter 2"),N=t(".");function v(x,A){const n=r("ExternalLinkIcon"),i=r("RouterLink");return s(),l("div",null,[h,u,p,e("p",null,[e("a",m,[f,o(n)])]),g,_,w,e("p",null,[e("a",k,[y,o(n)])]),b,Q,e("p",null,[e("a",J,[K,o(n)])]),W,e("p",null,[I,o(i,{to:"/en_US/config/overview.html"},{default:c(()=>[Y]),_:1}),N])])}const V=a(d,[["render",v],["__file","workflow.html.vue"]]);export{V as default};
