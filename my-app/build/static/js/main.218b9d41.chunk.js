(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){},24:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/button.0db46020.png"},36:function(e,t,a){e.exports=a(52)},41:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),s=(a(16),a(4)),o=a(15),i=a(3),m=a(10),u=a(11),h=a(14),p=a(13),E=a(12);a(41);var d=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={user:{firstname:"",lastname:"",email:"",username:"",password:"",type:""},errors:[]},e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(u.a)(a,[{key:"addUserServer",value:function(){var e=this.props.history,t=this.state.user,a=t.firstName,n=t.lastName,r=t.email,l=t.username,c=t.password,s=t.type;console.log("".concat(a,", ").concat(n,", ").concat(r,", ").concat(l,", ").concat(c,", ").concat(s)),fetch("http://localhost:5000/users/postUser",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:l,password:c,email:r,firstName:a,lastName:n,type:s})}).then((function(t){201===t.status?(e.push("/login"),alert("User ".concat(l," was registered"))):alert("User ".concat(l," could not be registered"))})).catch((function(e){return console.log(e)}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.user,a=function(e,t,a,n,r){var l=[];return e.length<=0&&l.push("Please enter a username"),t.length<=4&&l.push("Password should be at least 5 characters long"),a.length<=0&&l.push("Please enter your first name"),n.length<=0&&l.push("Please enter your last name"),r.length<=0&&l.push("Please enter an email"),l}(t.username,t.password,t.firstname,t.lastname,t.email);a.length>0?this.setState({errors:a}):0===a.length&&(this.setState({errors:[]}),this.addUserServer(),this.setState({errors:[]}))}},{key:"render",value:function(){var e=this,t=this.state.user,a=this.state.errors;return r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:this.handleSubmit},a.map((function(e){return r.a.createElement("p",{id:"error",key:e},"Error:"," ",e)})),r.a.createElement("h5",null,"First Name"),r.a.createElement("input",{id:"firstname",type:"text",placeholder:"Enter First Name",onChange:function(a){return e.setState({user:Object(i.a)(Object(i.a)({},t),{},{firstname:a.target.value})})}}),r.a.createElement("h5",null,"Last Name"),r.a.createElement("input",{id:"lastname",type:"text",placeholder:"Enter Last Name",onChange:function(a){return e.setState({user:Object(i.a)(Object(i.a)({},t),{},{lastname:a.target.value})})}}),r.a.createElement("h5",null,"Email"),r.a.createElement("input",{id:"email",type:"email",placeholder:"Enter Email",onChange:function(a){return e.setState({user:Object(i.a)(Object(i.a)({},t),{},{email:a.target.value})})}}),r.a.createElement("h5",null,"Username"),r.a.createElement("input",{id:"username",type:"text",placeholder:"Enter Username",onChange:function(a){return e.setState({user:Object(i.a)(Object(i.a)({},t),{},{username:a.target.value})})}}),r.a.createElement("h5",null,"Password"),r.a.createElement("input",{id:"password",type:"password",placeholder:"Enter Password",onChange:function(a){return e.setState({user:Object(i.a)(Object(i.a)({},t),{},{password:a.target.value})})}}),r.a.createElement("h5",null,"Select type of User: "),r.a.createElement("label",{htmlFor:"student",className:"container"},"Student",r.a.createElement("input",{id:"student",type:"radio",value:"student",name:"type",onChange:function(a){return e.setState({user:Object(i.a)(Object(i.a)({},t),{},{type:a.target.value})})}}),r.a.createElement("span",{className:"checkmark"})),r.a.createElement("label",{htmlFor:"supporter",className:"container"},"Supporter",r.a.createElement("input",{id:"supporter",type:"radio",value:"supporter",name:"type",onChange:function(a){return e.setState({user:Object(i.a)(Object(i.a)({},t),{},{type:a.target.value})})}}),r.a.createElement("span",{className:"checkmark"})),r.a.createElement("label",{htmlFor:"coach",className:"container"},"Coach",r.a.createElement("input",{id:"coach",type:"radio",value:"coach",name:"type",onChange:function(a){return e.setState({user:Object(i.a)(Object(i.a)({},t),{},{type:a.target.value})})}}),r.a.createElement("span",{className:"checkmark"})),r.a.createElement("label",{htmlFor:"asi",className:"container"},"ASI Employee",r.a.createElement("input",{id:"asi",type:"radio",value:"asi employee",name:"type",onChange:function(a){return e.setState({user:Object(i.a)(Object(i.a)({},t),{},{type:a.target.value})})}}),r.a.createElement("span",{className:"checkmark"})),r.a.createElement("button",{type:"submit"},"Register"),r.a.createElement("p",{className:"message"},"Already registered?",r.a.createElement(s.b,{to:"/login"},"Sign In")))))}}]),a}(r.a.Component),f=Object(o.f)(d);var g=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={username:" ",password:" ",errors:[]},e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e.handlePassChange=e.handlePassChange.bind(Object(h.a)(e)),e.handleUserChange=e.handleUserChange.bind(Object(h.a)(e)),e}return Object(u.a)(a,[{key:"getUserServer",value:function(){var e=this,t=this.state.username,a=this.state.password,n=this.props.history;fetch("http://localhost:5000/users/getUser",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:a})}).then((function(t){404===t.status?alert("Failed to authenticate user"):(e.setState({username:"",password:""}),e.setState({errors:[]}),n.push("/"))})).catch((function(e){return alert(e)}))}},{key:"handlePassChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleUserChange",value:function(e){this.setState({username:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=function(e,t){var a=[];return e.length<=1&&a.push("Please enter a username"),t.length<=4&&a.push("Please enter a password"),a}(t.username,t.password);a.length>0?this.setState({errors:a}):0===a.length&&this.getUserServer()}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:this.handleSubmit},e.map((function(e){return r.a.createElement("p",{id:"error",key:e},"Error:"," ",e)})),r.a.createElement("h5",null,"Username"),r.a.createElement("input",{id:"username",placeholder:"Username",onChange:this.handleUserChange,type:"text"}),r.a.createElement("h5",null,"Password"),r.a.createElement("input",{id:"password",type:"password",placeholder:"Password",onChange:this.handlePassChange}),r.a.createElement("button",{type:"submit",onClick:this.addUser},"Sign In"),r.a.createElement("p",{className:"message"},"New User?",r.a.createElement(s.b,{to:"/register"},"Register")))))}}]),a}(r.a.Component),b=Object(o.f)(g),v=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,"CAL POLY CLUB SPORTS"))},S=function(){return r.a.createElement("div",{className:"info"},r.a.createElement("div",{id:"rectangle"}),r.a.createElement("h1",null,"TEAM OF THE WEEK"),r.a.createElement("h2",null,"WOMEN'S"," ",r.a.createElement("br",null),"RUGBY"),r.a.createElement("h3",null,"Follow them and",r.a.createElement("br",null),"come to their home",r.a.createElement("br",null),"game on Saturday",r.a.createElement("br",null),"February 8th!"),r.a.createElement("img",{src:"/PlaceHolderImage.jpg",alt:"Team of the week"}),r.a.createElement("a",{href:"https://instagram.com"},r.a.createElement("img",{src:"/instagram.png",className:"instagramIcon",alt:"Instagram"})))},y=(a(47),function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={events:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getEvents()}},{key:"getEvents",value:function(){var e=this;fetch("events/eventsBox").then((function(e){return e.json()})).then((function(t){return e.setState({events:t.data})})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this.state.events;return r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"eventbox"},r.a.createElement("h1",null,"UPCOMING EVENTS")),r.a.createElement("div",{className:"eventbox2"},r.a.createElement("img",{src:"/calendar.png",alt:"test"})),r.a.createElement("div",{className:"eventbox3"},e.map((function(e){return r.a.createElement("h2",{key:e.id},e.date," ",r.a.createElement("h3",null,e.team_name),e.location," ",e.time," ",r.a.createElement("a",{href:"#details"},"see details"),r.a.createElement("h5",null,"___________________________________________"))}))))}}]),a}(n.Component)),N=a(22),C={marginTop:"-310px",marginLeft:"55px",maxWidth:"700px"};var O=function(){return r.a.createElement("div",{style:C},r.a.createElement(N.a,{dynamicHeight:!0,showThumbs:!1,infiniteLoop:!0,showStatus:!1,autoPlay:!0,transitionTime:300,showArrows:!1},r.a.createElement("div",null,r.a.createElement("img",{width:"700",height:"455",src:"https://www.sanluisobispo.com/sports/college/cal-poly/tm6s8x/picture221492215/alternates/LANDSCAPE_768/IdahoCalPolyFootball0155",alt:"Football"})),r.a.createElement("div",null,r.a.createElement("img",{width:"700",height:"455",src:"/lacrosse.jpg",alt:"Lacrosse"})),r.a.createElement("div",null,r.a.createElement("img",{width:"700",height:"445",src:"/PlaceHolderImage.jpg",alt:"Rugby"}))))},w=function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(v,null),r.a.createElement(S,null),r.a.createElement(O,null))},_=(a(24),function(){return r.a.createElement("div",{className:"formTitle"},r.a.createElement("h3",null,"RESOURCES AND FORMS"))}),T=function(){return r.a.createElement("div",{className:"vertical-menu"},r.a.createElement("a",{href:"#general"},"GENERAL INFO"),r.a.createElement("a",{href:"#participant"},"PARTICIPANT FORMS"),r.a.createElement("a",{href:"#clubSportsCouncil"},"CLUB SPORTS COUNCIL"),r.a.createElement("a",{href:"#homeEvents"},"HOME EVENTS"),r.a.createElement("a",{href:"#awayEvents"},"AWAY EVENTS"),r.a.createElement("a",{href:"#accidents"},"ACCIDENTS & INJURIES"),r.a.createElement("a",{href:"#finResources"},"FINANCIAL RESOURCES"),r.a.createElement("a",{href:"#coaches"},"COACHES & OFFICIALS"),r.a.createElement("a",{href:"#apparel"},"APPAREL & LICENSING"))},R=function(){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement("div",{className:"forms"},r.a.createElement("h3",null,"Club Sports strives to make running your club as streamlined as possible. This page is an exellent resource for all the information and forms you need. If you have any additional questions, please contact the Club Sports Advisor."),r.a.createElement(T,null),r.a.createElement("h2",{id:"general"},"GENERAL INFO"),r.a.createElement("p",null,r.a.createElement("strong",null,"Sarah Hawkins, MA"),r.a.createElement("br",null),"Coordinator for Clubs & Organizations",r.a.createElement("br",null),"Club Sports Advisor",r.a.createElement("br",null),"shawki06@calpoly.edu",r.a.createElement("br",null),"Virtual Office / 805.242.2219",r.a.createElement("br",null),"Voicemail / 805.756.7009"),r.a.createElement("a",{href:"https://outlook.office365.com/owa/calendar/CalPolyClubSports@cpslo.onmicrosoft.com/bookings/"},"Book an Online Appointment"),r.a.createElement("h2",{id:"participant"},"PARTICIPANT FORMS"),r.a.createElement("a",{href:"https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUMlRHRVdBUEo5SjhZUVhKUko3WUlNVloyRiQlQCN0PWcu"},"Participant Release Form (PDF)"),r.a.createElement("a",{href:"https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUOEZWUzlFVkg2UVhYNTZLUEdCUEgyWjJSUSQlQCN0PWcu"},"Driver Application"),r.a.createElement("h2",{id:"clubSportsCouncil"},"CLUB SPORTS COUNCIL FORMS"),r.a.createElement("a",{href:"https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUNldFM0RDV0U1NVBUMUNNTzRCNlIzRzRTNyQlQCN0PWcu"},"Gold Stars Tracking"),r.a.createElement("a",{href:"https://content-calpoly-edu.s3.amazonaws.com/clubs/1/documents/club_sports/Club%20Sports%20Allocation%20Rubric.pdf"},"Club Sports Allocation Rubric (PDF)"),r.a.createElement("a",{href:"https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUNDhPNTlYUDJDQzFBS0JJWU9QS0RVUTUzTSQlQCN0PWcu"},"Club Sports Council Application"),r.a.createElement("h2",{id:"homeEvents"},"HOME EVENTS"),r.a.createElement("a",{href:"http://www.asi.calpoly.edu/eplans/start?js=1"},"E-Plan Request"),r.a.createElement("a",{href:"https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUQVFJQUc0VkFDNVY1WlBSVTAwVTgxOUpKTCQlQCN0PWcu"},"Home Risk Form"),r.a.createElement("a",{href:"https://content-calpoly-edu.s3.amazonaws.com/deanofstudents/1/documents/clubs-and-orgs/release-liability-multi-lines20170801.pdf"},"Guest Release of Liability (PDF)"),r.a.createElement("a",{href:"https://afd.calpoly.edu/facilities/facs/forms/supply-rental.pdf"},"Facilities Supply Rental Form (PDF)"),r.a.createElement("h2",{id:"awayEvents"},"AWAY EVENTS"),r.a.createElement("a",{href:"http://www.asi.calpoly.edu/eplans/start?js=1"},"E-Plan Request"),r.a.createElement("a",{href:"https://content-calpoly-edu.s3.amazonaws.com/clubs/1/documents/Trip_Roster.pdf"},"Trip Roster (PDF)"),r.a.createElement("a",{href:"https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUNlZLN1BTUkxFMUdHOURVQVJRU0tZQlNJVyQlQCN0PWcu"},"Travel Request Form"),r.a.createElement("h2",{id:"accidents"},"ACCIDENTS & INJURIES"),r.a.createElement("a",{href:"https://afd.calpoly.edu/risk-management/accidents-incident/nonvehicle-accident"},"Incident/Accident Report Form STD 286"),r.a.createElement("a",{href:"https://afd.calpoly.edu/risk-management/accidents-incident/vehicle-accident"},"Vehicle Accident Data Form STD 269"),r.a.createElement("a",{href:"http://fs.ncaa.org/Docs/health_safety/ConFactSheetsa.pdf"},"NCAA Concussion Fact Sheet"),r.a.createElement("h2",{id:"finResources"},"FINANCIAL RESOURCES"),r.a.createElement("a",{href:"https://adobesign.calpoly.edu/powerform/3AAABLblqZhAHhLP7IDp-eWP-ovhWk2ijp-zLW0jAHEOnunx8SYu9dJsUoHZKVbct212mFor0NpR-FugjRNtRjDvtWUYfblEp/"},"Payment Request Form"),r.a.createElement("a",{href:"https://www.asi.calpoly.edu/wp-content/uploads/2020/04/ADVISOR-MEMO.pdf"},"Advisor Memo (PDF)"),r.a.createElement("a",{href:"https://content-calpoly-edu.s3.amazonaws.com/deanofstudents/1/clubsports/files/Cal%20Poly%20Club%20Request%20for%20W-9.pdf"},"Supplemental Form for a W-9 Request (PDF)"),r.a.createElement("a",{href:"https://content-calpoly-edu.s3.amazonaws.com/advancement/1/documents/GIK_Acceptance_Form_041519.pdf"},"Gift In Kind Acceptance Form (PDF)"),r.a.createElement("h2",{id:"coaches"},"COACHES, OFFICIALS, & TRAINERS"),r.a.createElement("a",{href:"https://cpslo.sharepoint.com/sites/ClubSports/_layouts/15/guestaccess.aspx?e=OJreLc&share=EXZKVK55KlFOvkKBwaFRpe0B5_Cp5f_-jJ5bBfLsVTIDgw"},"Athletic Trainer Database"),r.a.createElement("a",{href:"https://content-calpoly-edu.s3.amazonaws.com/clubs/1/documents/club_sports/ServiceContract.pdf"},"Service Contract for Officials and Trainers (PDF)"),r.a.createElement("a",{href:"https://www.irs.gov/pub/irs-pdf/fw9.pdf"},"IRS W-9 Form (PDF)"),r.a.createElement("h2",{id:"apparel"},"APPAREL & LICENSING"),r.a.createElement("a",{href:"https://universitymarketing.calpoly.edu/wp-content/uploads/2019/08/cal-poly-approved-licensees.pdf"},"Licensed Vendors"),r.a.createElement("a",{href:"https://universitymarketing.calpoly.edu/trademark-licensing/"},"Licensing Guidelines"),r.a.createElement("a",{href:"https://universitymarketing.calpoly.edu/trademark-licensing/request-form/"},"Trademark Licensing Request Form"),r.a.createElement("a",{href:"https://universitymarketing.calpoly.edu/wp-content/uploads/2017/12/calpoly_marketing_logos.pdf"},"Athletic Mark Brand Colors (PDF)")))},P=(a(49),function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={event:{team_name:"",date:"",time:"",location:"",description:""},selectedTeam:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getEvents(),this.getTeams()}},{key:"getEvents",value:function(){var e=this;fetch("/events").then((function(e){return e.json()})).then((function(t){return e.setState({users:t.data})})).catch((function(e){return console.error(e)}))}},{key:"getTeams",value:function(){var e=this;fetch("/teams").then((function(e){return e.json()})).then((function(t){return e.setState({users:t.data})})).catch((function(e){return console.error(e)}))}},{key:"addEvent",value:function(){var e=this.state.event;fetch("/events/add?team_name=".concat(e.team_name,"\n    &date= ").concat(e.date,"\n    &time=").concat(e.time,"\n    &location=").concat(e.location,"\n    &description=").concat(e.description)).then((function(e){return e.json()})).then(this.getUsers).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this,t=this.state.event;return r.a.createElement("div",{className:"event-page"},r.a.createElement("div",{className:"form"},r.a.createElement("select",{value:"",onChange:function(t){return e.setState({selectedTeam:t.target.value})}},r.a.createElement("option",{value:t.team_name},t.team_name),r.a.createElement("option",{value:"Swim"},"Swim"),r.a.createElement("option",{value:"Triathlon"},"Triathlon"),r.a.createElement("option",{value:"Tennis"},"Tennis"),r.a.createElement("option",{value:"Women's Rugby"},"Women's Rugby")),r.a.createElement("input",{type:"date",placeholder:"Date",onChange:function(a){return e.setState({event:Object(i.a)(Object(i.a)({},t),{},{date:a.target.value})})}}),r.a.createElement("input",{type:"time",placeholder:"Time",onChange:function(a){return e.setState({event:Object(i.a)(Object(i.a)({},t),{},{time:a.target.value})})}}),r.a.createElement("input",{type:"text",placeholder:"Location",onChange:function(a){return e.setState({event:Object(i.a)(Object(i.a)({},t),{},{location:a.target.value})})}}),r.a.createElement("input",{type:"text",placeholder:"Description",onChange:function(a){return e.setState({event:Object(i.a)(Object(i.a)({},t),{},{description:a.target.value})})}}),r.a.createElement("button",{type:"submit",onClick:this.addEvent},"Add Event"),r.a.createElement("p",{className:"message"}," ",r.a.createElement(s.b,{to:"/"},"Cancel"))))}}]),a}(r.a.Component)),A=(a(50),a(30),{marginTop:"50px",marginLeft:"65px",maxWidth:"600px"});var U=function(){return r.a.createElement("div",{style:A},r.a.createElement(N.a,{dynamicHeight:!0,showThumbs:!1,infiniteLoop:!0,showStatus:!1,autoPlay:!0,transitionTime:300,showArrows:!1},r.a.createElement("div",null,r.a.createElement("img",{width:"600",height:"375",src:"https://www.sanluisobispo.com/sports/college/cal-poly/tm6s8x/picture221492215/alternates/LANDSCAPE_768/IdahoCalPolyFootball0155",alt:"Hong Kong"})),r.a.createElement("div",null,r.a.createElement("img",{width:"600",height:"375",src:"https://www.dailybulletin.com/wp-content/uploads/migration/2014/201403/SPORTS_140319431_AR_0_YZOYHTSKYTWC.jpg?w=535",alt:"Singapore"})),r.a.createElement("div",null,r.a.createElement("img",{width:"600",height:"375",src:"https://bhsuathletics.com/images/2016/11/17/Erickson_Rachel_2.jpg",alt:"Japan"}))))},I=a(33),L=a.n(I),j=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"menu2"},r.a.createElement("h1",null,"SWIM CLUB"),r.a.createElement(s.b,{to:"/login"},"FAQ"),r.a.createElement(s.b,{to:"/forms"},"FORMS"),r.a.createElement(s.b,{to:"/login"},"CONTACT"),r.a.createElement(s.b,{to:"/login"},"SCHEDULE"),r.a.createElement(s.b,{to:"/login"},"RESULTS")),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/login"})))},F=function(){return r.a.createElement("div",{className:"sportsinfo"},r.a.createElement("h1",null,"ABOUT SWIM CLUB"),r.a.createElement("h2",null,"Join one of the best collegiate swim clubs in the West Coast! Cal Poly Swim Club has over 100 members and is constantly growing. We offer high quality professional coaching that can reach swimmers of all ability. The goal of our team is to provide every member an opportunity to improve their swimming skills and achieve success at his or her level of ability, from beginner to international competitor. Come by and check us out! We are a non profit club, that is run by its elected Board of Directors which meets each month. All members are welcome at each meeting and encouraged to be involved in team activities and fundraisers."),r.a.createElement("img",{src:"web.jpg",alt:"web icon"}),r.a.createElement("img",{src:"instagram.jpg",alt:"asdf"}),r.a.createElement("img",{src:"facebook.jpg",alt:"asdf"}))},k=function(){return r.a.createElement("div",{className:"sportsinfobottom"},r.a.createElement("h1",null,"UCLA Feb 9th"),r.a.createElement("a",{href:"#results"},"see results"),r.a.createElement("h2",null,"We brought 34 swimmers to UCLA last weekend and broke 3 swim club records!"),r.a.createElement("h1",null,"UCSD Jan 24th"),r.a.createElement("a",{href:"#results"},"see results"),r.a.createElement("h2",null,"Swim Club brought 46 swimmers to UCSD on January 24th "))},D=function(){return r.a.createElement("div",{className:"follow"},r.a.createElement("img",{src:L.a,alt:"button"}),r.a.createElement("button",{type:"button",className:"dropbtn"}," ","FOLLOW"))},x=function(){return r.a.createElement("div",{className:"sportstitle"},r.a.createElement("h3",null,"CAL POLY SWIM CLUB"),r.a.createElement(F,null))},W=function(){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(x,null),r.a.createElement(D,null),r.a.createElement(k,null),r.a.createElement(U,null))},V=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{type:"button",className:"dropbtn"},"SPORTS",r.a.createElement("i",{className:"fa fa-caret-down"})),r.a.createElement("div",{className:"dropdown-content"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("h3",null,"MEN'S"),r.a.createElement("h4",null,"__________"),r.a.createElement("b",{href:"#"},"BASKETBALL"),r.a.createElement("b",{href:"#"},"LACROSSE"),r.a.createElement("b",{href:"#"},"HOCKEY"),r.a.createElement("b",{href:"#"},"RUGBY"),r.a.createElement("b",{href:"#"},"SOCCER"),r.a.createElement("b",{href:"#"},"ULTIMATE"),r.a.createElement("b",{href:"#"},"VOLLEYBALL"),r.a.createElement("b",{href:"#"},"WATER POLO")),r.a.createElement("div",{className:"column"},r.a.createElement("h3",null,"WOMEN'S "),r.a.createElement("h4",null,"__________"),r.a.createElement("b",{href:"#"},"BASKETBALL"),r.a.createElement("b",{href:"#"},"RUGBY"),r.a.createElement("b",{href:"#"},"SOCCER"),r.a.createElement("b",{href:"#"},"ULTIMATE"),r.a.createElement("b",{href:"#"},"VOLLEYBALL"),r.a.createElement("b",{href:"#"},"WATER POLO")),r.a.createElement("div",{className:"column"},r.a.createElement("h3",null,"COED"),r.a.createElement("h4",null,"__________"),r.a.createElement("b",{href:"#"},"CYCLING"),r.a.createElement("b",{href:"#"},"BOWLING"),r.a.createElement("b",{href:"#"},"DISTANCE"),r.a.createElement("b",{href:"#"},"FENCING"),r.a.createElement("b",{href:"#"},"SAILING"),r.a.createElement("b",{href:"#"},"SURF"),r.a.createElement("b",{href:"#"},"SWIM"),r.a.createElement("b",{href:"#"},"TENNIS"),r.a.createElement("b",{href:"#"},"TRIATHLON"),r.a.createElement("b",{href:"#"},"WATER SKI"))))),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/sports",component:W})))},M=(a(51),a(35)),B=a(18),K=a(34),G={marginTop:"50px",marginLeft:"230px",maxWidth:"900px"},H=function(){return r.a.createElement("div",{style:G,className:"Calendar1"},r.a.createElement(M.a,{defaultView:"dayGridMonth",plugins:[B.d,K.a],displayEventTime:"true",header:{right:"dayGridMonth,timeGridWeek",left:"today prev,next",center:"title"},events:[{title:"MENS SOCCER-fundraiser on Dexter lawn",start:"2020-06-09T14:30:00",allDay:!1,color:"#2D6041"},{title:"WOMENS RUGBY",start:"2020-06-14T17:30:00",allDay:!1,color:"#2D6041"},{title:"DISTANCE",start:"2020-06-14T18:50:00",allDay:!1,color:"#2D6041"}]}))},J=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"menu"},r.a.createElement("img",{src:"/CalPolyLogo.png",alt:"Cal Poly Logo"}),r.a.createElement("h1",null,"CLUB SPORTS HUB"),r.a.createElement(s.b,{to:"/login"},"LOGIN"),r.a.createElement(s.b,{to:"/forms"},"FORMS"),r.a.createElement(V,null),r.a.createElement(s.b,{to:"/calendar"},"CALENDAR"),r.a.createElement(s.b,{to:"/"},"HOME")),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:w}),r.a.createElement(o.a,{path:"/forms",component:R}),r.a.createElement(o.a,{exact:!0,path:"/register",component:f}),r.a.createElement(o.a,{exact:!0,path:"/newEvent",component:P}),r.a.createElement(o.a,{exact:!0,path:"/calendar",component:H}),r.a.createElement(o.a,{path:"/login"},r.a.createElement(b,null))))},Y=function(){return r.a.createElement(J,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.218b9d41.chunk.js.map