(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/DataScience.60244434.png"},21:function(e,t,a){e.exports=a.p+"static/media/machineLearning.69f1e090.png"},22:function(e,t,a){e.exports=a.p+"static/media/otherProject.639f0fa4.jpg"},23:function(e,t,a){e.exports=a.p+"static/media/twitter_icon.512536cb.png"},24:function(e,t,a){e.exports=a.p+"static/media/linkedin_icon.56ab00e8.png"},25:function(e,t,a){e.exports=a.p+"static/media/email_icon.fd99f8e3.png"},26:function(e,t,a){e.exports=a.p+"static/media/github_icon.e2a62886.png"},27:function(e,t,a){e.exports=a.p+"static/media/Profile1.6e12319f.png"},30:function(e,t,a){e.exports=a(41)},36:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);a(31);var n=a(1),i=a.n(n),l=a(10),r=a.n(l),c=a(3),o=a(4),s=a(6),m=a(5),u=a(7),p=a(46),h=a(8),d=a(12),f=a(44),g=(a(36),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggleNavbar=a.toggleNavbar.bind(Object(d.a)(a)),a.state={collapsed:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement(h.e,{className:"navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3",light:!0},i.a.createElement(h.b,null,i.a.createElement(h.f,{tag:f.a,to:"/"},"Gaurav Dhavale"),i.a.createElement(h.g,{onClick:this.toggleNavbar,className:"mr-2"}),i.a.createElement(h.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:!this.state.collapsed,navbar:!0},i.a.createElement("ul",{className:"navbar-nav flex-grow"},i.a.createElement(h.c,null,i.a.createElement(h.d,{tag:f.a,className:"text-dark",to:"/"},"Home")),i.a.createElement(h.c,null,i.a.createElement(h.d,{tag:f.a,className:"text-dark",to:"/About"},"About")))))))}}]),t}(n.Component));g.displayName=g.name;var b=g,v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(b,null),i.a.createElement(h.b,null,this.props.children))}}]),t}(n.Component),E=a(20),y=a.n(E),j=a(21),O=a.n(j),k=a(22),w=a.n(k),x=[{id:1,title:"Data Science Projects",description:"This directory contains my academic projects for data science course",link:"https://github.com/GauravDhavale/Data-Science-Projects",image:y.a},{id:2,title:"Machine Learning Projects",description:"This directory contains my academic projects for machine learning course",link:"https://github.com/GauravDhavale/Machine-Learning",image:O.a},{id:3,title:"Other Projects",description:"This directory contains other academic as well as non academic projects",link:"https://github.com/GauravDhavale/My-Projects",image:w.a}],I=function(e){var t=e.project,a=t.title,n=t.description,l=t.link,r=t.image;return i.a.createElement("div",{style:{display:"inline-block",width:250,margin:10}},i.a.createElement("h5",null,a),i.a.createElement("img",{src:r,alt:"profile",style:{width:200,height:120}}),i.a.createElement("p",null,n),i.a.createElement("a",{href:l},"project source"))},C=function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"My Projects"),x.map(function(e){return i.a.createElement(I,{key:e.id,project:e})}))},S=a(23),N=a.n(S),D=a(24),M=a.n(D),A=a(25),B=a.n(A),P=a(26),T=a.n(P),G=[{id:1,link:"mailto: gauravdhavale@gmail.com",image:B.a},{id:2,link:"https://www.linkedin.com/in/gauravdhavale",image:M.a},{id:3,link:"https://github.com/GauravDhavale",image:T.a},{id:4,link:"https://twitter.com/gaurav_dhavale",image:N.a}],_=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.profile,t=e.image,a=e.link;return i.a.createElement("div",{style:{display:"inline-block",width:20,margin:5}},i.a.createElement("a",{href:a},i.a.createElement("img",{style:{width:20},src:t,alt:"social-profile"})))}}]),t}(n.Component),H=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Connect with me!"),G.map(function(e){return i.a.createElement(_,{key:e.id,profile:e})}))}}]),t}(n.Component),L=["I'm a Software Engineer","I'm a Chatbot and AI Enthusiastic","I love coding"],J=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={displayBio:!1,titleIndex:0,fadeIn:!0},a.toggleBio=function(){a.setState({displayBio:!a.state.displayBio})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({fadeIn:!1})},2e3),setInterval(function(){var t=e.state.titleIndex===L.length-1?0:e.state.titleIndex+1;e.setState({titleIndex:t,fadeIn:!0}),setTimeout(function(){e.setState({fadeIn:!1})},2e3)},3e3)}},{key:"render",value:function(){var e=this.state,t=e.titleIndex,a=e.fadeIn;return i.a.createElement("div",null,i.a.createElement("h1",null,"Hello!!!"),i.a.createElement("p",null,"Welcome to my portfolio. My name is Gaurav. "),i.a.createElement("p",{className:a?"title-fade-in":"title-fade-out"}," ",L[t]),this.state.displayBio?i.a.createElement("div",null,i.a.createElement("p",null,"I'm a Microsoft certified technology specialist with 5+ years of a full stack .NET developement experience. Please Check About section for more Info."),i.a.createElement("p",null,"I'm creating this portfolio as a part of learning React"),i.a.createElement("button",{onClick:this.toggleBio},"Show less")):i.a.createElement("button",{onClick:this.toggleBio},"Show more"),i.a.createElement("hr",null),i.a.createElement(C,null),i.a.createElement("hr",null),i.a.createElement(H,null))}}]),t}(n.Component),R=a(27),U=a.n(R),W=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{src:U.a,alt:"profile",className:"profile"}),i.a.createElement("p",null,"Hello!!! Thanks for visiting my portfolio."),i.a.createElement("p",null,"I have completed my master\u2019s in Management Information System with the Scholar of High Distinction in May 2018 from The University Of Texas at Dallas. I have pursued my bachelor\u2019s in Computer Engineering."),i.a.createElement("p",null,"My areas of interest are as follows: "),i.a.createElement("ul",{style:{display:"inline-block",textAlign:"left"}},i.a.createElement("li",null,"Software Development"),i.a.createElement("li",null,"ChatBot, Alexa skills"),i.a.createElement("li",null,"Data Science and Analytics")))}}]),t}(n.Component),q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(v,null,i.a.createElement(p.a,{exact:!0,path:"/",component:J}),i.a.createElement(p.a,{path:"/About",component:W}))}}]),t}(n.Component),z=(a(40),a(45));r.a.render(i.a.createElement(z.a,null,i.a.createElement(q,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.5bbe0635.chunk.js.map