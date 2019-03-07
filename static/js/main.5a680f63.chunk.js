(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e){e.exports={name:"Ubadah Atta",title:"Software Developer",description:"I enjoy turning complex problems into simple, beautiful and intuitive products.Studied Full Stack web development at George Washington University and a BSc in Electrical & Electronics Engineering.  "}},function(e){e.exports=[{id:0,name:"UMMI Images",image:"img/UMMI (4).png",github:"",link:"http://ummi.io",description:"A sorting utility for user photo albums."},{id:1,name:"Clicky-Game",image:"img/9.png",github:"",link:"https://ubadahatta.github.io/Clicky-Game/",description:"A memory game with React."},{id:2,name:"Doable",image:"img/8.png",github:"",link:"https://nameless-hollows-17166.herokuapp.com/",description:"An app that allowes users to post tasks/jobs or earn extra money by doing a task."},{id:3,name:"Train Scheduler",image:"img/train.jpeg",github:"",link:"https://ubadahatta.github.io/Train-Scheduler/",description:"A plain JavaScript math game designed to reinforce a students understanding of order of operations."},{id:4,name:"Hangman",image:"img/hangman.jpeg",github:"",link:"https://ubadahatta.github.io/Word-Guess-Game/",description:"Word Guess Game"},{id:5,name:"Bamazon",image:"img/7.png",github:"",link:"https://github.com/ubadahatta/bamazon",description:"An Amazon-like storefront using MySQL."},{id:6,name:"Nasa Trivia",image:"img/6.png",github:"",link:"https://ubadahatta.github.io/NASA-Trivia/",description:"Designed using both NASA's API and the Ope Trivia API to generate space trivia questions based on NASA's photo of the day."},{id:7,name:"Friends Match",image:"img/5.png",github:"",link:"https://shrouded-cliffs-94055.herokuapp.com/",description:"Take a simple survey and get matched to a friend. "}]},function(e){e.exports=[{name:"Phone",link:"tel:+12028266383",hexicon:"./img/hexicons/phone.png",icon:"./img/icons/phone.png"},{name:"Email",link:"mailto:ubadahabbas12@gmail.com",hexicon:"./img/hexicons/email.png",icon:"./img/icons/email.png"},{name:"Address",link:"Washington, DC 20008",hexicon:"./img/hexicons/location.png",icon:"./img/icons/location.png"},{name:"Github",link:"https://github.com/ubadahatta",hexicon:"./img/hexicons/github.png",icon:"./img/icons/github.png"},{name:"LinkedIn",link:"https://www.linkedin.com/in/ubadah-atta-070173bb/",hexicon:"./img/hexicons/linkedin.png",icon:"./img/icons/linkedin.png"},{name:"Resume",link:"./img/resume.pdf",hexicon:"./img/hexicons/resume.png",icon:"./img/icons/resume.png"}]},,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(3),o=n.n(r),c=n(4),l=n(5),s=n(10),m=n(6),d=n(11);n(18);var h=function(e){return i.a.createElement("div",{className:"wrapper p-2 m-2 ".concat(e.darktheme?"darkwrapper":null)},i.a.createElement("div",{className:"container p-2 m-2  ".concat(e.darktheme?"darkcontainer":null)},i.a.createElement("div",{className:"row p-2 m-2"},i.a.createElement("div",{className:"p-2 m-2"},e.children))))};var u=function(e){return i.a.createElement("div",null,i.a.createElement("ul",null,e.info.map(function(e){return i.a.createElement("div",{className:"p-1"},i.a.createElement("a",{href:e.link},i.a.createElement("img",{alt:e.name+"link",src:e.icon,width:"28px",height:"auto"})," ",e.name))})))};n(19);var p=function(e){return i.a.createElement("li",null,i.a.createElement("div",{onClick:function(){window.location=e.link}},i.a.createElement("img",{className:e.darktheme?"inverted":null,src:e.image,alt:""}),i.a.createElement("h1",null,e.name),i.a.createElement("p",null,e.description)))};var g=n(7),k=n(8),f=n(9),b=n(1),E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={info:g,projects:k,hexlinks:f,hexlinkson:!0,darktheme:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(h,{darktheme:this.state.darktheme},i.a.createElement("div",{class:"row",id:"header"},i.a.createElement("div",{class:"col-md-8"},i.a.createElement("br",null),i.a.createElement("p",null,i.a.createElement("h1",null,i.a.createElement(b.Random,{text:this.state.info.name,paused:this.state.paused,iterations:"1",effect:"verticalFadeIn",effectChange:2,effectDirection:"up"}),i.a.createElement(b.Random,{text:this.state.info.title,paused:this.state.paused,iterations:"1",effect:"verticalFadeIn",effectChange:2,effectDirection:"up"}))),i.a.createElement("p",null,this.state.info.description)),i.a.createElement("div",{class:"col-md-4"},this.state.hexlinkson?i.a.createElement("div",null,i.a.createElement("ul",{id:"projects",class:"links"},this.state.hexlinks.map(function(t){return i.a.createElement(p,{image:t.hexicon,link:t.link,darktheme:e.state.darktheme})}))):i.a.createElement("div",null,i.a.createElement(u,{info:this.state.hexlinks})))),i.a.createElement("hr",null),i.a.createElement("div",{class:"row"}),i.a.createElement("ul",{id:"projects",className:"clr"},this.state.projects.map(function(t){return i.a.createElement(p,{image:t.image,link:t.link,name:t.name,description:t.description,darktheme:e.state.darktheme})})),i.a.createElement("div",null))}}]),t}(i.a.Component);n(20);o.a.render(i.a.createElement(E,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.5a680f63.chunk.js.map