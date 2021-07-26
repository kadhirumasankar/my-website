(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e){e.exports=[{key:1,size:"small",title:"Freshman Year",date:"Fall 2017 - Spring 2018",language:["UT Austin","#bb5826"],imageUrl:"https://i.imgur.com/8onyBu4.jpg",additionalText:"Classes taken:",details:["Differential Equations with Linear Algebra","Statics","Engineering Design Graphics","Sequences, Series and Multivariable Calculus","Intro to Computer Programming","Principles of Chemistry I"]},{key:2,size:"small",title:"Sophomore Year",date:"Fall 2018 - Spring 2019",language:["UT Austin","#bb5826"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Texas_Longhorns_logo.svg/1280px-Texas_Longhorns_logo.svg.png",additionalText:"Classes taken:",details:["Spacecraft Dynamics","Low-Speed Aerodynamics","Mechanics of Solids","Vector Calculus","Dynamics","Thermodynamics","Engineering Computation","Foundations of Accounting","Engineering Communication"]},{key:3,size:"normal",title:"ColorCube Class for UAVA",date:"Spring 2019",language:["Python","#fbbd08"],githubUrl:"https://github.com/uavaustin/target-finder/blob/master/target_finder/color_cube.py",imageUrl:"https://uavaustin.org/assets/img/uava_logo_two_tone_dark.png",details:["Improved accuracy of the color classification component of our competition plane","Used HSV instead of RBG color model to make a 3-D coordinate system","Created cubes for various colors and checked whether input color was contained in cubes"],expandedDetails:"I joined the image recognition team of the Unmanned Aerial Vehicle Austin team in the Spring of 2019 to increase my proficiency with Python. Prior to the this, our software used the distance formula to classify colors. This made the color classification system because, for instance, it would classify both pink and purple as red because they were equidistant from \"true\" red, even though they were neither red. I improved this by converting input colors to the HSV system, and setting up a 3-D coordinate system with Hue, Saturation, and Vibrance on the axes. I then made 'Color Cubes' which were areas in the 3-D coordinate space which corresponded to different colors."},{key:4,size:"normal",title:"This website",date:"Summer 2019",language:["ReactJS","#00d8ff"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",githubUrl:"https://github.com/kadhirumasankar/kadhirumasankar.github.io",details:["Made entirely from scratch using ReactJS","Implemented SCSS in some places","Extensively used Grid and Flexbox"],expandedDetails:"I stayed in Austin over the summer to help the Texas Rocket Engineering Lab with some work, and since I had recently learned React, I wanted to use that knowledge to make a website to showcase my projects. I also learned Grid and Flexbox to help me design the website."},{key:5,size:"normal",title:"Parachute Drift Model for TREL",date:"Fall 2019",language:["MATLAB","#842613"],imageUrl:"https://i.imgur.com/Auw8L43.png",githubUrl:"https://gist.github.com/kadhirumasankar/43e64613d691f331b2f8273c45dedbd9",details:["Used the Monte Carlo simulation to predict drift area for the Texas Rocket Engineering Lab rocket after the parachutes are deployed"],expandedDetails:"In Fall 2019, I was made the Responsible Engineer of a team tasked with making a computational model in MATLAB to predict the range that the TREL rocket would drift after its parachutes were deployed. We used the Monte Carlo simulation to approximate the unpredictable nature of the rocket due to random wind conditions. The model took atmospheric conditions into account, and the model was ensured to be versatile and work with different variable values."},{key:6,size:"normal",title:"Manual Image Rec UI for UAVA",date:"Spring 2019 - Spring 2020",language:["ReactJS","#00d8ff"],imageUrl:"https://i.imgur.com/Afkwqf3.gif",githubUrl:"https://github.com/uavaustin/manual-image-rec",details:["Using ReactJS and Semantic UI React to develop the Manual Image Recognition UI for competition"],expandedDetails:"In Spring 2019, I was tasked to use my knowledge with web development to make a manual image recognition interface that would be used at competition. I also had to learn React to make this interface. The interface would need to have an Explorer page which would show pictures taken by the flight camera, where the user could select an image, and a Classifier page where the user would be able to select targets and send them to the our automatic object classifier model and then to the competition server."},{key:7,size:"small",title:"Junior Year",date:"Fall 2019 - Spring 2020",language:["UT Austin","#bb5826"],imageUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/University_of_Texas_at_Austin_seal.svg/1200px-University_of_Texas_at_Austin_seal.svg.png",additionalText:"Classes taken:",details:["Linear Systems Analysis","Feedback Control Systems","Attitude Dynamics","Applied Orbital Mechanics","Flight Dynamics","Compressible Flow","Rocket Engineering Practicum","Electromechanical Systems","Foundations of Management","Foundations of Marketing"]},{key:8,size:"normal",title:"Autonomous Sensing & Perception - Synthetic Aperture Radar Automatic Target Recognition",date:"May 2020 - August 2020",language:["Sandia","#26abe2"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Sandia_National_Laboratories_logo.svg/1200px-Sandia_National_Laboratories_logo.svg.png",details:["Wrote code for model analysis and data augmentation for Synthetic Aperture Radar Automatic Target Recognition","Gained experience with Python, specifically 'numpy', 'pandas', and 'matplotlib' packages"],expandedDetails:"I was made part of the Synthetic Aperture Radar Automatic Target Recognition team to increase my knowledge of Convolutional Neural Networks and proficiency with Python. I added functionality to Python code that was used to analyze the performance of templates on SAR chips. I also helped data augmentation by writing functions that would randomly obscure parts of the target\u2019s mask on SAR chips."},{key:9,size:"normal",title:"Autonomy for Hypersonics - Object Tracking",date:"May 2020 - August 2020",language:["Sandia","#26abe2"],imageUrl:"https://i.imgur.com/b4bzlMW.png",details:["Created a ROS (Robot Operation System) package locate and return the coordinates of objects of interest using a depth camera and YOLOv4 (You Only Look Once object detection system)","Gained experience with ROS, Python, using Tensorflow for object detection, and working with depth images"],expandedDetails:"I was assigned to the \u201cObject Tracking\u201d design reference mission, and I created a ROS (Robot Operation System) package which implemented computer vision on a drone in simulation with an Intel RealSense depth camera. I wrote Python code to use YOLOv4 (You Only Look Once object detection system) on the image from the camera to find objects of interest, and then found the centroid of the object, superimposed the centroid on the depth image from the camera, and used this information to find the vector to the object in the inertial frame. Through this project, I gained experience with ROS, Gazebo 3D simulation environment, and YOLO (and object detection and deep learning as a whole)."},{key:10,size:"normal",title:'"From Agile Ground to Aerial Navigation: Learning from Learned Hallucination"',date:"September 2020 - May 2021",language:["Research","#6c757d"],imageUrl:"https://i.imgur.com/KArF2nm.jpg",details:["Contributed to a publication as part of the UT Autonomous Systems Group","Implemented code to control a 'Holybro PX4 Vision' drone, publish trajectories, and set up a connection to stream depth images to a ROS commander computer","Publication was accepted for presentation at IROS 2021","Gained more experience with ROS, Python, C++, and working with hardware"],expandedDetails:"I joined Dr. Ufuk Topcu's Autonomous Systems Group in September 2020, and I worked under Alexander Nettekoven and with members of the Learning Agents Research Group on this project. I was tasked with first implementing a geometric controller on a drone in simulation and writing code to publish trajectories to the drone. Afterwards, I was tasked with porting this code to a physical drone, testing it, and setting up a stream between the drone and a ROS commander desktop to relay depth images. This was my first experience with working on hardware, and I learned a lot about the differences between working in simulation and on hardware. This paper was published at IROS 2021."},{key:11,size:"small",title:"Senior Year",date:"Fall 2020 - Spring 2021",language:["UT Austin","#bb5826"],imageUrl:"https://i.imgur.com/ahQpyCu.jpg",additionalText:"Graduated with my Bachelor of Science degree in Aerospace Engineering with honors, along with a minor in Business and a certificate in Computational Science. Classes taken in my senior year:",details:["Computational Methods for Structural Analysis","Aerospace Materials Lab","Spacecraft Mission Design","Aircraft Propulsion","Foundations of Finance","Foundations of Business Law"]},{key:12,size:"small",title:"Autonomy for Hypersonics - LQR Controller",date:"October 2020 - *",language:["Sandia","#26abe2"],imageUrl:"https://autonomy.sandia.gov/_assets/images/autonomy_logo.png",details:["Creating a ROS (Robot Operation System) package to implement a Linear Quadratic Regulator controller on a drone","After getting the package to work on a quadcopter in simulation, I am currently working on implementing this on a physical hexacopter","Due to information about the project being Official Use Only, further information may be provided by contacting me officially."]}]},109:function(e,a,t){e.exports=t.p+"static/media/img1.3f18215a.png"},121:function(e,a,t){e.exports=t(241)},127:function(e,a,t){},128:function(e,a,t){},237:function(e,a,t){},238:function(e,a,t){},239:function(e,a,t){},240:function(e,a,t){},241:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(91),o=t.n(r),l=(t(126),t(127),t(17)),s=(t(128),t(7)),c=t(8),d=t(38),m=t(10),u=t(9),h=(t(64),t(243)),p=t(2),g=t(92),b=t.n(g),f=t(93),k=t.n(f),w=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleClick=function(){n.setState(function(e){return{clickCount:e.clickCount+1}}),console.log("You've clicked "+n.state.clickCount+" times"),12===n.state.clickCount&&console.log('A throwback to "Kadhir\'s Wonderful Website", the first website I made!')},n.state={clickCount:1},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"header-container"},i.a.createElement("div",null),i.a.createElement("div",{id:"header-text"},i.a.createElement("div",null,i.a.createElement("img",{id:"header-image",src:this.state.clickCount<13?b.a:k.a,alt:"Kadhir Umasankar",onClick:this.handleClick}),i.a.createElement("br",null),i.a.createElement("div",{id:"text"},"Hi, I'm\xa0",i.a.createElement("b",null,"Kadhir Umasankar"),".",i.a.createElement("br",null),i.a.createElement("div",{style:{fontSize:"90%"}},"Aerospace Engineering Master's student"," ",i.a.createElement("a",{href:"https://ae.gatech.edu/",target:"_blank",rel:"noopener noreferrer",style:{color:"#B3A369",fontWeight:"bold"}},"@GeorgiaTech"),".",i.a.createElement("br",null),"Interning"," ",i.a.createElement("a",{href:"https://www.sandia.gov/",target:"_blank",rel:"noopener noreferrer",style:{color:"#00add0",fontWeight:"bold"}},"@SandiaNationalLabs"),".",i.a.createElement("br",null))))),i.a.createElement("a",{id:"header-bottom-text",href:"#PageBody"},"Scroll to see"," ",i.a.createElement(p.a,{exact:!0,path:"/",render:function(){return i.a.createElement("span",null,"my work")}}),i.a.createElement(p.a,{path:"/about",render:function(){return i.a.createElement("span",null,"more about me")}}),i.a.createElement("br",null),i.a.createElement(h.a,{name:"caret down"})))}}]),t}(i.a.Component),y=(t(237),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("a",{id:"PageBody"}),i.a.createElement("div",{id:"navbar-grid"},i.a.createElement("div",null,i.a.createElement(l.b,{activeStyle:{color:"inherit",background:"#556070"},to:"/about",className:"navbar-link"},i.a.createElement(h.a,{name:"user",circular:!0}),"About Me")),i.a.createElement("div",null,i.a.createElement(l.b,{activeStyle:{color:"inherit",background:"#556070"},exact:!0,to:"/",className:"navbar-link"},i.a.createElement(h.a,{name:"clipboard list",circular:!0}),"My Work")),i.a.createElement("div",{className:"tooltip",href:"mailto:kadhirus99@gmail.com"},i.a.createElement("a",{className:"navbar-link",href:"mailto:kadhirus99@gmail.com"},i.a.createElement("span",{className:"navbar-link",onClick:function(){navigator.clipboard.writeText("kadhirus99@gmail.com"),console.log(e.state.emailCopied),e.setState({emailCopied:!0})},onMouseEnter:function(){e.setState({emailCopied:!1})}},i.a.createElement(h.a,{name:"mail",circular:!0}),"kadhirus99@gmail.com"),i.a.createElement("span",{className:"tooltiptext"},"Click to send me an email"))),i.a.createElement("div",{className:"tooltip"},i.a.createElement("a",{className:"navbar-link",href:"https://www.linkedin.com/in/kadhirus99/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(h.a,{name:"linkedin",circular:!0}),i.a.createElement("span",{className:"navbar-link-text"},"linkedin.com/in/kadhirus99")),i.a.createElement("span",{className:"tooltiptext"},"Click to go to my LinkedIn page")),i.a.createElement("div",{className:"tooltip"},i.a.createElement("a",{className:"navbar-link",href:"https://github.com/kadhirumasankar",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(h.a,{name:"github",circular:!0}),i.a.createElement("span",{className:"navbar-link-text"},"github.com/kadhirumasankar")),i.a.createElement("span",{className:"tooltiptext"},"Click to go to my Github page"))))}}]),t}(n.Component)),E=(t(238),t(239),t(90),t(240),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).state={isExpanded:!1,size:e.props.size},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this,a=this.props.details,t=[];a&&(t=a.map(function(e,a){return i.a.createElement("li",{key:a},e)}));var n="";this.props.language&&(n=this.props.language[1]);var r="";return r=this.props.githubUrl?"private"===this.props.githubUrl?i.a.createElement("a",{title:"The code for this project is in a private repository",className:"card-buttons",href:this.props.githubUrl,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(h.a,{disabled:!0,name:"github",size:"big"})):i.a.createElement("a",{className:"card-buttons",href:this.props.githubUrl,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(h.a,{name:"github",size:"big"})):null,"small"===this.state.size?i.a.createElement("div",{className:"card small"},i.a.createElement("div",{className:"card-header"},i.a.createElement("div",{className:"card-title"},i.a.createElement("span",{style:{fontSize:this.props.titleSize}},this.props.title)),i.a.createElement("div",{className:"card-header-details"},i.a.createElement("div",{className:"card-header-language",style:{backgroundColor:n}},this.props.language[0]))),i.a.createElement("div",{className:"card-date"},this.props.date),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"card-details"},this.props.additionalText?i.a.createElement("div",{style:{marginTop:"1em"}},this.props.additionalText):null,i.a.createElement("ul",null,t)),i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{src:this.props.imageUrl,alt:this.props.title})))):"normal"===this.state.size?i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("div",{className:"card-title"},i.a.createElement("span",{style:{fontSize:this.props.titleSize}},this.props.title)),i.a.createElement("div",{className:"card-header-details"},this.props.language?i.a.createElement("div",{className:"card-header-language",style:{backgroundColor:n}},this.props.language[0]):null,r)),this.props.date?i.a.createElement("div",{className:"card-date"},this.props.date):null,i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"card-details"},i.a.createElement("div",{className:"expanded-text"},this.props.expandedDetails?i.a.createElement("div",{style:{marginTop:"1em"}},this.props.expandedDetails):null),i.a.createElement("div",{className:"normal-text"},this.props.additionalText?i.a.createElement("div",{style:{marginTop:"1em"}},this.props.additionalText):null,i.a.createElement("ul",this.props.noBullets?{style:{listStyleType:"none",paddingLeft:0,marginLeft:0,lineHeight:"250%"}}:null,t,this.props.expandedDetails?i.a.createElement("a",{href:"javascript:void(0)",onClick:function(){e.props.expandedDetails&&e.setState({size:"large"})},style:{cursor:"pointer"}},"Read more..."):null))),this.props.imageUrl?i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{src:this.props.imageUrl,alt:this.props.title})):null)):"large"===this.state.size?i.a.createElement("div",{className:"card large"},i.a.createElement("div",{className:"card-header"},i.a.createElement("div",{className:"card-title"},i.a.createElement("span",{style:{fontSize:this.props.titleSize}},this.props.title)),i.a.createElement("div",{className:"card-header-details"},this.props.language?i.a.createElement("div",{className:"card-header-language",style:{backgroundColor:n}},this.props.language[0]):null,r)),this.props.date?i.a.createElement("div",{className:"card-date"},this.props.date):null,i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"card-details"},i.a.createElement("div",{className:"expanded-text"},this.props.expandedDetails?i.a.createElement("div",{style:{marginTop:"1em"}},this.props.expandedDetails):null,this.props.expandedDetails?i.a.createElement("a",{href:"javascript:void(0)",onClick:function(){e.props.expandedDetails&&e.setState({size:"normal"})},style:{cursor:"pointer"}},"Show less..."):null),i.a.createElement("div",{className:"normal-text"},this.props.additionalText?i.a.createElement("div",{style:{marginTop:"1em"}},this.props.additionalText):null,i.a.createElement("ul",this.props.noBullets?{style:{listStyleType:"none",paddingLeft:0,marginLeft:0,lineHeight:"250%"}}:null,t))),this.props.imageUrl?i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{src:this.props.imageUrl,alt:this.props.title})):null)):void 0}}]),t}(i.a.Component)),v=t(108),S=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"about-title"},"My Work"),i.a.createElement("div",{id:"projects"},v.map(function(e){return i.a.createElement(E,{key:e.key,size:e.size,title:e.title,titleSize:e.titleSize,date:e.date,language:e.language,imageUrl:e.imageUrl,details:e.details,githubUrl:e.githubUrl,additionalText:e.additionalText,expandedDetails:e.expandedDetails})})))}}]),t}(i.a.Component),x=t(109),C=t.n(x),A=t(242),N=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=i.a.createElement("div",null,i.a.createElement("p",null,"I\u2019m currently an incoming first-year Aerospace Engineering Master's student at the"," ",i.a.createElement("span",{style:{color:"#B3A369"}},"Georgia Institute of Technology"),". I graduated with my Bachelor of Science degree in Aerospace Engineering with honors from"," ",i.a.createElement("span",{style:{color:"#bb5826"}},"University of Texas at Austin"),", along with a minor in Business and a certificate in Computational Science."),i.a.createElement("p",null,"My interest in photography and videography, as well as my fascination with human behavior, initially drove me to work with object detection and recognition through deep learning. Through personal projects, work for student organizations, and work for the Autonomy for Hypersonics Drone Lab at"," ",i.a.createElement("span",{style:{color:"#00add0"}},"Sandia National Labs"),", I have gained more experience with Python, C++, implementing machine learning algorithms, and controls. I will soon be contributing to reinforcement learning aplications in aerospace as well."),i.a.createElement("p",null,"I made my first website from scratch when I was 9, and I\u2019ve been building on web development skills ever since. I\u2019m also interested in reinforcement learning applications in Aerospace, so you should be seeing some more projects related to that in my Work section soon."),i.a.createElement("p",null,"If you\u2019d like to chat with me, feel free to contact me through one of the channels below."));return this.props.isMobile?i.a.createElement("div",{id:"about-container"},i.a.createElement("div",{className:"about-title"},"About Me"),i.a.createElement("div",{className:"about-content"},i.a.createElement("div",{className:"about-table"},e),i.a.createElement(E,{title:"Contact Information",size:"normal",date:"Get in touch with me",details:[[i.a.createElement(h.a,{name:"mail",circular:!0})," kadhirus99@gmail.com"],[i.a.createElement(h.a,{name:"linkedin",circular:!0}),i.a.createElement("a",{href:"https://www.linkedin.com/in/kadhirus99/",target:"_blank",rel:"noopener noreferrer"}," ","/in/kadhirus99/")],[i.a.createElement(h.a,{name:"facebook",circular:!0}),i.a.createElement("a",{href:"https://www.facebook.com/kadhir1999",target:"_blank",rel:"noopener noreferrer"}," ","/kadhir1999")],[i.a.createElement(h.a,{name:"instagram",circular:!0}),i.a.createElement("a",{href:"https://www.instagram.com/_kadhir/",target:"_blank",rel:"noopener noreferrer"}," ","_kadhir")],[i.a.createElement(h.a,{name:"snapchat ghost",circular:!0})," kadhirus99"]],noBullets:!0})),i.a.createElement(A.a,null)):i.a.createElement("div",{id:"about-container"},i.a.createElement("div",{className:"about-title"},"About Me"),i.a.createElement("div",{className:"about-content"},i.a.createElement("div",{className:"about-table"},i.a.createElement("div",{style:{paddingRight:"5em"}},e),i.a.createElement("img",{id:"about-image",src:C.a,alt:"Kadhir Umasankar"})," ",i.a.createElement("br",null)),i.a.createElement(E,{title:"Contact Information",size:"normal",date:"Get in touch with me",details:[[i.a.createElement(h.a,{name:"mail",circular:!0})," kadhirus99@gmail.com"],[i.a.createElement(h.a,{name:"linkedin",circular:!0}),i.a.createElement("a",{href:"https://www.linkedin.com/in/kadhirus99/",target:"_blank",rel:"noopener noreferrer"}," ","/in/kadhirus99/")],[i.a.createElement(h.a,{name:"facebook",circular:!0}),i.a.createElement("a",{href:"https://www.facebook.com/kadhir1999",target:"_blank",rel:"noopener noreferrer"}," ","/kadhir1999")],[i.a.createElement(h.a,{name:"instagram",circular:!0}),i.a.createElement("a",{href:"https://www.instagram.com/_kadhir/",target:"_blank",rel:"noopener noreferrer"}," ","_kadhir")],[i.a.createElement(h.a,{name:"snapchat ghost",circular:!0})," kadhirus99"]],noBullets:!0})))}}]),t}(i.a.Component),I=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).handleWindowSizeChange=function(){e.setState({width:window.innerWidth})},e.state={width:window.innerWidth},e}return Object(c.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){var e=this.state.width<=1100;return e?i.a.createElement("div",{id:"page-body",name:"PageBody"},i.a.createElement(N,{isMobile:e}),i.a.createElement(S,null)):i.a.createElement("div",{id:"page-body",name:"PageBody"},i.a.createElement(p.a,{path:"/",exact:!0,component:S}),i.a.createElement(p.a,{path:"/about",component:N}))}}]),t}(i.a.Component);var T=function(){return i.a.createElement(l.a,null,i.a.createElement("div",{id:"page-container"},i.a.createElement(w,null),i.a.createElement(y,null),i.a.createElement(I,null)))};var j=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,a,t){},90:function(e,a,t){},92:function(e,a,t){e.exports=t.p+"static/media/img1.3d9a6a08.png"},93:function(e,a,t){e.exports=t.p+"static/media/kwwPicture.e571eaf7.png"}},[[121,1,2]]]);
//# sourceMappingURL=main.236e9397.chunk.js.map