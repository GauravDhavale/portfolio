(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/DataScience.60244434.png"},21:function(e,t,a){e.exports=a.p+"static/media/machineLearning.69f1e090.png"},22:function(e,t,a){e.exports=a.p+"static/media/otherProject.639f0fa4.jpg"},23:function(e,t,a){e.exports=a.p+"static/media/twitter_icon.512536cb.png"},24:function(e,t,a){e.exports=a.p+"static/media/linkedin_icon.56ab00e8.png"},25:function(e,t,a){e.exports=a.p+"static/media/email_icon.fd99f8e3.png"},26:function(e,t,a){e.exports=a.p+"static/media/github_icon.e2a62886.png"},27:function(e,t,a){e.exports=a.p+"static/media/Profile1.6e12319f.png"},30:function(e,t,a){e.exports=a(41)},36:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);a(31);var n=a(1),l=a.n(n),i=a(10),o=a.n(i),c=a(3),r=a(4),s=a(6),u=a(5),m=a(7),p=a(46),h=a(8),d=a(12),f=a(44),g=(a(36),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggleNavbar=a.toggleNavbar.bind(Object(d.a)(a)),a.state={collapsed:!0},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement(h.e,{className:"navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3",light:!0},l.a.createElement(h.b,null,l.a.createElement(h.f,{tag:f.a,to:"/portfolio"},"Gaurav Dhavale"),l.a.createElement(h.g,{onClick:this.toggleNavbar,className:"mr-2"}),l.a.createElement(h.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:!this.state.collapsed,navbar:!0},l.a.createElement("ul",{className:"navbar-nav flex-grow"},l.a.createElement(h.c,null,l.a.createElement(h.d,{tag:f.a,className:"text-dark",to:"/portfolio"},"Home")),l.a.createElement(h.c,null,l.a.createElement(h.d,{tag:f.a,className:"text-dark",to:"/About"},"About")),l.a.createElement(h.c,null,l.a.createElement(h.d,{tag:f.a,className:"text-dark",to:"/QnA"},"AWS-QnA-Bot")))))))}}]),t}(n.Component));g.displayName=g.name;var E=g,b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(h.b,null,this.props.children))}}]),t}(n.Component),v=a(20),y=a.n(v),j=a(21),k=a.n(j),O=a(22),w=a.n(O),x=[{id:1,title:"Data Science Projects",description:"This directory contains my academic projects for data science course",link:"https://github.com/GauravDhavale/Data-Science-Projects",image:y.a},{id:2,title:"Machine Learning Projects",description:"This directory contains my academic projects for machine learning course",link:"https://github.com/GauravDhavale/Machine-Learning",image:k.a},{id:3,title:"Other Projects",description:"This directory contains other academic as well as non academic projects",link:"https://github.com/GauravDhavale/My-Projects",image:w.a}],I=function(e){var t=e.project,a=t.title,n=t.description,i=t.link,o=t.image;return l.a.createElement("div",{style:{display:"inline-block",width:250,margin:10}},l.a.createElement("h5",null,a),l.a.createElement("img",{src:o,alt:"profile",style:{width:200,height:120}}),l.a.createElement("p",null,n),l.a.createElement("a",{href:i},"project source"))},C=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"My Projects"),x.map(function(e){return l.a.createElement(I,{key:e.id,project:e})}))},A=a(23),S=a.n(A),N=a(24),Q=a.n(N),D=a(25),P=a.n(D),R=a(26),T=a.n(R),B=[{id:1,link:"mailto: gauravdhavale@gmail.com",image:P.a},{id:2,link:"https://www.linkedin.com/in/gauravdhavale",image:Q.a},{id:3,link:"https://github.com/GauravDhavale",image:T.a},{id:4,link:"https://twitter.com/gaurav_dhavale",image:S.a}],M=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.profile,t=e.image,a=e.link;return l.a.createElement("div",{style:{display:"inline-block",width:20,margin:5}},l.a.createElement("a",{href:a},l.a.createElement("img",{style:{width:20},src:t,alt:"social-profile"})))}}]),t}(n.Component),q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Connect with me!"),B.map(function(e){return l.a.createElement(M,{key:e.id,profile:e})}))}}]),t}(n.Component),G=["I'm a Software Engineer","I'm a Chatbot and AI Enthusiastic","I love coding"],W=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={displayBio:!1,titleIndex:0,fadeIn:!0},a.toggleBio=function(){a.setState({displayBio:!a.state.displayBio})},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({fadeIn:!1})},2e3),setInterval(function(){var t=e.state.titleIndex===G.length-1?0:e.state.titleIndex+1;e.setState({titleIndex:t,fadeIn:!0}),setTimeout(function(){e.setState({fadeIn:!1})},2e3)},3e3)}},{key:"render",value:function(){console.log("process.env.PUBLIC_URL","/portfolio");var e=this.state,t=e.titleIndex,a=e.fadeIn;return l.a.createElement("div",null,l.a.createElement("h1",null,"Hello!!!"),l.a.createElement("p",null,"Welcome to my portfolio. My name is Gaurav. "),l.a.createElement("p",{className:a?"title-fade-in":"title-fade-out"}," ",G[t]),this.state.displayBio?l.a.createElement("div",null,l.a.createElement("p",null,"I'm a Microsoft certified technology specialist with 5+ years of a full stack .NET developement experience. Please Check About section for more Info."),l.a.createElement("p",null,"I'm creating this portfolio as a part of learning React"),l.a.createElement("button",{onClick:this.toggleBio},"Show less")):l.a.createElement("button",{onClick:this.toggleBio},"Show more"),l.a.createElement("hr",null),l.a.createElement(C,null),l.a.createElement("hr",null),l.a.createElement(q,null))}}]),t}(n.Component),_=a(27),H=a.n(_),L=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("img",{src:H.a,alt:"profile",className:"profile"}),l.a.createElement("p",null,"Hello!!! Thanks for visiting my portfolio."),l.a.createElement("p",null,"I have completed my master\u2019s in Management Information System with the Scholar of High Distinction in May 2018 from The University Of Texas at Dallas. I have pursued my bachelor\u2019s in Computer Engineering."),l.a.createElement("p",null,"My areas of interest are as follows: "),l.a.createElement("ul",{style:{display:"inline-block",textAlign:"left"}},l.a.createElement("li",null,"Software Development"),l.a.createElement("li",null,"ChatBot, Alexa skills"),l.a.createElement("li",null,"Data Science and Analytics")))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={displayQnAInfo:!1,QnaResponse:"",inputText:""},a.toggleInfo=function(){a.setState({displayQnAInfo:!a.state.displayQnAInfo})},a.handleChange=function(e){a.setState({inputText:e.target.value}),""===e.target.value&&a.setState({QnaResponse:""})},a.enterPressed=function(e){console.log("code",e.keyCode),13===e.keyCode&&a.fetchQnAResponse()},a.resetFields=function(){document.getElementById("txtInput").value="",a.setState({QnaResponse:""})},a.fetchQnAResponse=function(){var e="https://4ne2qam1eg.execute-api.us-east-1.amazonaws.com/prod/qna?question="+encodeURIComponent(a.state.inputText.trim());console.log(e),fetch("https://cors-anywhere.herokuapp.com/"+e).then(function(e){return e.json()}).then(function(e){return a.setState({QnaResponse:e.data})}).catch(function(e){console.log(e)})},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"In this QnA window, you can ask questions on different AWS topics. "),l.a.createElement("div",null,l.a.createElement("label",{className:"px-2"},"Question: "),l.a.createElement("input",{id:"txtInput",className:"px-5 w-50 rounded",type:"text",onKeyPress:this.enterPressed,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("button",{onClick:this.fetchQnAResponse,className:"px-3 mt-1 rounded mr-2"},"Search"),l.a.createElement("button",{onClick:this.resetFields,className:"px-3 mt-1 rounded"},"Reset")),l.a.createElement("div",{className:"mt-5"},this.state.displayQnAInfo?l.a.createElement("div",null,l.a.createElement("p",null," The internal bot will scan the AWS faq resources for the best matching question and will send the response provided for that question. It uses AI internally so that even if its not the exact wording, still it will try to check with best match question."),l.a.createElement("p",{className:"text-danger"},"Note: Currently, It can answer your questions from EC2, S3 and IAM sections only. "),l.a.createElement("p",null,"Example try What is EC2"),l.a.createElement("button",{onClick:this.toggleInfo},"Got it.")):l.a.createElement("button",{onClick:this.toggleInfo},"How it Works? ")),l.a.createElement("div",{className:"mt-5"},""!==this.state.QnaResponse?l.a.createElement("p",null,this.state.QnaResponse):l.a.createElement("p",null)))}}]),t}(n.Component),F=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(b,null,l.a.createElement(p.a,{exact:!0,path:"/portfolio",component:W}),l.a.createElement(p.a,{exact:!0,path:"/",component:W}),l.a.createElement(p.a,{path:"/About",component:L}),l.a.createElement(p.a,{path:"/QnA",component:U}))}}]),t}(n.Component),J=(a(40),a(45));o.a.render(l.a.createElement(J.a,null,l.a.createElement(F,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.728c8363.chunk.js.map