(this.webpackJsonplab4_frontend=this.webpackJsonplab4_frontend||[]).push([[0],{64:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),o=n.n(i),s=n(22),a=n.n(s),c=n(3),l=n(39),u=n(7),d=n(8),h=n(10),j=n(9),p=n(14),b=n.n(p),f=n(5),O=n.n(f),v=n(6),y=n.n(v),g=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsx)(b.a,{style:{marginBottom:"5%"},children:Object(r.jsxs)(O.a,{children:[Object(r.jsx)(y.a,{children:Object(r.jsx)("h3",{id:"variant",children:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442: 6148"})}),Object(r.jsx)(y.a,{children:Object(r.jsx)("h3",{id:"me",style:{float:"right"},children:"\u041a\u0443\u0437\u043d\u0435\u0446\u043e\u0432 \u0412\u043b\u0430\u0434\u0438\u0441\u043b\u0430\u0432, P3213"})})]})})}}]),n}(o.a.Component),x=n(21),m=n(23),T=n(11),k=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsx)("p",{style:{color:"red",textAlign:"center"},children:this.props.message})}}]),n}(o.a.Component);var w=Object(T.b)((function(e){return{message:e.userReducer.errorMsg}}),null)(k),R=n(17),E=Object(R.a)({forceRefresh:!0}),C="SET_LOGIN",P="SET_ERROR",I="IS_SIGNIN";function S(e){return{type:C,payload:e}}var D="ADD_POINT",z="CLEAR_POINTS",B="SET_R",L="REMOVE_R",N="SET_ERROR",F="SET_TARGET",X="SET_IS_TARGET";function M(e){return{type:D,payload:e}}function Y(e){return{type:N,payload:e}}function U(){return{type:z,payload:[]}}function V(e){return{type:X,payload:e}}var _=n(4),A=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={choice:"\u0412\u043e\u0439\u0442\u0438"},r.setType=r.setType.bind(Object(_.a)(r)),r.setType(r.state.choice),r}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:["\u0412\u043e\u0439\u0442\u0438"===this.state.choice&&Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{style:{fontSize:"20px"},children:"\u0412\u0445\u043e\u0434"}),Object(r.jsx)("span",{children:"/"}),Object(r.jsx)("span",{style:{textDecoration:"underline",fontSize:"20px"},onClick:function(){return e.setType("\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"===this.state.choice&&Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{style:{textDecoration:"underline",fontSize:"20px"},onClick:function(){return e.setType("\u0412\u043e\u0439\u0442\u0438")},children:"\u0412\u0445\u043e\u0434"}),Object(r.jsx)("span",{children:"/"}),Object(r.jsx)("span",{style:{fontSize:"20px"},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})}},{key:"setType",value:function(e){this.setState({choice:e}),this.props.isSignin(e)}}]),n}(o.a.Component),q=Object(T.b)(null,(function(e){return{isSignin:function(t){return e(function(e){return{type:I,payload:e}}(t))}}}))(A),H="http://51.145.171.188/lab4",G=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={username:"",password:""},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)(O.a,{style:{marginBottom:"5%"},children:Object(r.jsx)(y.a,{className:"d-flex justify-content-center",children:Object(r.jsx)(q,{})})}),Object(r.jsx)(O.a,{children:Object(r.jsxs)(y.a,{children:[Object(r.jsx)(O.a,{children:Object(r.jsx)(y.a,{className:"d-flex justify-content-center",style:{marginBottom:"2%"},children:Object(r.jsxs)("label",{children:[Object(r.jsx)("h5",{children:"\u041b\u043e\u0433\u0438\u043d"}),Object(r.jsx)(x.InputText,{autoComplete:"off",id:"username",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})},name:"login"})]})})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(y.a,{className:"d-flex justify-content-center",style:{marginBottom:"2%"},children:Object(r.jsxs)("label",{children:[Object(r.jsx)("h5",{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(r.jsx)(x.InputText,{type:"password",id:"password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},name:"password"})]})})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(y.a,{children:Object(r.jsx)(w,{})})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(y.a,{className:"d-flex justify-content-center",children:Object(r.jsx)(m.Button,{label:this.props.type,type:"submit",onClick:function(){return e.callServer(e.state.username,e.state.password)}})})})]})})]})}},{key:"callServer",value:function(e,t){var n=this;if(this.validate(e,t)){var r,i={login:e,password:t},o=Object.keys(i).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(i[e])})).join("&");r="\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"===this.props.type?"".concat(H,"/api/auth/signup"):"".concat(H,"/api/auth/signin"),fetch(r,{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o}).then((function(e){e.ok?(n.clearError(),n.props.setLogin(!0),localStorage.setItem("login","true"),E.push("/"),E.replace("/lab4/app")):n.showError("\u041e\u0448\u0438\u0431\u043a\u0430")})).catch((function(e){return console.log(e)}))}}},{key:"validate",value:function(e,t){var n=this.validateLogin(e),r=this.validatePassword(t);return n&&r?(this.clearError(),!0):(n?r||this.showError("\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043e\u0442 8 \u0434\u043e 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):this.showError("\u041b\u043e\u0433\u0438\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043e\u0442 4 \u0434\u043e 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),!1)}},{key:"validateLogin",value:function(e){return!(e.length<4||e.length>20)}},{key:"validatePassword",value:function(e){return!(e.length<8||e.length>20)}},{key:"showError",value:function(e){this.props.setError(e)}},{key:"clearError",value:function(){this.props.setError("")}}]),n}(o.a.Component);var J=Object(T.b)((function(e){return{type:e.userReducer.isSignin}}),(function(e){return{setError:function(t){return e(function(e){return{type:P,payload:e}}(t))},setLogin:function(t){return e(S(t))},addPoint:function(t){return e(M(t))}}}))(G),W=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(b.a,{children:[Object(r.jsx)(O.a,{children:Object(r.jsx)(g,{})}),Object(r.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(r.jsx)(J,{})})]})}}]),n}(i.Component),$=n(25),K=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={size:300},r.handleClick=r.handleClick.bind(Object(_.a)(r)),r.checkPoint=r.checkPoint.bind(Object(_.a)(r)),r.isPopadanie=r.isPopadanie.bind(Object(_.a)(r)),r.redrawDots=r.redrawDots.bind(Object(_.a)(r)),r.getPoints=r.getPoints.bind(Object(_.a)(r)),r.drawBase=r.drawBase.bind(Object(_.a)(r)),r.resize=r.resize.bind(Object(_.a)(r)),r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.drawBase(),window.addEventListener("resize",this.resize,!1),this.resize()}},{key:"resize",value:function(){var e;try{e=document.getElementById("container").offsetWidth}catch(t){return void console.log(t)}this.state.size!==e&&(e>=500?375!==this.state.size&&this.setState({size:375}):e<=450?this.setState({size:e}):e>450&&450!==this.state.size&&this.setState({size:450}))}},{key:"drawBase",value:function(){var e=this.refs.canvas.getContext("2d"),t=this.state.size;this.drawLines(t,e),this.drawTriangles(t,e),this.drawSerifs(t,e),this.drawFigures(t,e),this.showTargetDot(t,e)}},{key:"drawLines",value:function(e,t){t.lineWidth=2/450*e,t.beginPath(),t.moveTo(0,e/2),t.lineTo(e,e/2),t.moveTo(e/2,-e/2),t.lineTo(e/2,e),t.closePath(),t.stroke()}},{key:"drawTriangles",value:function(e,t){t.fillStyle="black",t.beginPath(),t.moveTo(e/2,-1),t.lineTo(e/2-10,20),t.lineTo(e/2+10,20),t.fill(),t.closePath(),t.beginPath(),t.moveTo(e+1,e/2),t.lineTo(e-20,e/2+10),t.lineTo(e-20,e/2-10),t.fill(),t.closePath()}},{key:"drawSerifs",value:function(e,t){t.beginPath(),t.moveTo(e/2-5,e/6),t.lineTo(e/2+5,e/6),t.moveTo(e/2-5,2*e/6),t.lineTo(e/2+5,2*e/6),t.moveTo(e/2-5,4*e/6),t.lineTo(e/2+5,4*e/6),t.moveTo(e/2-5,5*e/6),t.lineTo(e/2+5,5*e/6),t.moveTo(e/6,e/2-5),t.lineTo(e/6,e/2+5),t.moveTo(2*e/6,e/2-5),t.lineTo(2*e/6,e/2+5),t.moveTo(4*e/6,e/2-5),t.lineTo(4*e/6,e/2+5),t.moveTo(5*e/6,e/2-5),t.lineTo(5*e/6,e/2+5),t.closePath(),t.stroke(),t.font="20px black",t.fillText("R",e/2+12,e/6+5),t.fillText("R/2",e/2+12,2*e/6+5),t.fillText("-R/2",e/2+12,4*e/6+5),t.fillText("-R",e/2+12,5*e/6+5),t.fillText("R",5*e/6-7,e/2-12),t.fillText("R/2",4*e/6-14,e/2-12),t.fillText("-R/2",2*e/6-20,e/2-12),t.fillText("-R",e/6-11,e/2-12),t.fillText("X",e-15,e/2-12),t.fillText("Y",e/2+12,15)}},{key:"drawFigures",value:function(e,t){this.drawRectangleFigure(e,t),this.drawTriangleFigure(e,t),this.drawArcFigure(e,t)}},{key:"drawTriangleFigure",value:function(e,t){t.fillStyle="rgba(255,222,3, 0.3)",t.beginPath(),t.moveTo(e/2,e/2),t.lineTo(5*e/6,e/2),t.lineTo(e/2,5*e/6),t.fill(),t.closePath()}},{key:"drawArcFigure",value:function(e,t){t.fillStyle="rgba(255,2,102, 0.3)",t.beginPath(),t.moveTo(e/2,e/2),t.arc(e/2,e/2,e/3,Math.PI/2,Math.PI,!1),t.lineTo(e/2,5*e/6),t.lineTo(e/6,e/2),t.fill(),t.closePath()}},{key:"drawRectangleFigure",value:function(e,t){t.fillStyle="rgba(3,54,255, 0.3)",t.fillRect(e/2,e/2,e/6,2*-e/6)}},{key:"componentDidUpdate",value:function(){this.getR()>=1&&this.getR()<=5?this.redrawDots():this.props.setError("\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 R \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 [1;5]"),this.drawBase()}},{key:"shouldComponentUpdate",value:function(){return this.refs.canvas.getContext("2d").clearRect(0,0,this.state.size,this.state.size),!0}},{key:"render",value:function(){return Object(r.jsx)(y.a,{id:"container",className:"d-flex justify-content-center",children:Object(r.jsx)("canvas",{ref:"canvas",onClick:this.handleClick,width:this.state.size,height:this.state.size,children:"\u042d\u0442\u043e \u0442\u0430\u043a \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442"})})}},{key:"handleClick",value:function(e){if(this.getR()>=1&&this.getR()<=5){var t=this.getMousePosition(e),n=t.x,r=t.y,i=this.getR(),o=(n-this.state.size/2)/(this.state.size/3)*i,s=-(r-this.state.size/2)/(this.state.size/3)*i;this.checkPoint(o,s)&&this.sendPoint(o.toFixed(5),s.toFixed(5),i)}else this.showError("\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 R \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 [1;5]")}},{key:"sendPoint",value:function(e,t,n){var r=this;this.props.setXYR([e,t,n]);var i={x:e,y:t,r:n},o=Object.keys(i).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(i[e])})).join("&");fetch("".concat(H,"/api/points/newpoint"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o}).then((function(e){return r.processResponse(e)})).then((function(e){return r.addRow("resultTable",e)})).catch((function(){return r.showError("\u041e\u0448\u0438\u0431\u043a\u0430 HTTP")}))}},{key:"processResponse",value:function(e){if(e.ok)return this.clearError(),e.json();this.showError("\u041e\u0448\u0438\u0431\u043a\u0430 HTTP")}},{key:"addRow",value:function(e,t){var n=document.getElementById(e).insertRow(1),r=n.insertCell(0),i=n.insertCell(1),o=n.insertCell(2),s=n.insertCell(3),a=document.createTextNode(t.x.toFixed(1)),c=document.createTextNode(t.y.toFixed(1)),l=document.createTextNode(t.r.toFixed(1)),u=document.createTextNode(t.result?"\u041f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u0435":"\u041f\u0440\u043e\u043c\u0430\u0445");r.appendChild(a),i.appendChild(c),o.appendChild(l),s.appendChild(u)}},{key:"getMousePosition",value:function(e){var t=this.refs.canvas.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}},{key:"setDot",value:function(e,t,n){var r,i=this.refs.canvas.getContext("2d"),o=this.state.size;r=n?"rgb(3,255,16)":"rgb(255,3,3)",i.fillStyle=r,i.beginPath(),i.arc(e,t,o/60,0,2*Math.PI,!1),i.fill(),i.closePath()}},{key:"removeDots",value:function(){document.querySelectorAll(".clickDots").forEach((function(e){e.remove()}))}},{key:"getPoints",value:function(){for(var e=[],t=this.props.points,n=0;n<t.length;n++){var r=t[n][0],i=t[n][1],o=this.getR(),s={x:r/o*this.state.size/3+this.state.size/2,y:this.state.size/2-i/o*this.state.size/3,color:this.isPopadanie(r,i,o)};e.push(s)}return e}},{key:"drawAllDots",value:function(e){for(var t=0;t<e.length;t++){var n=e[t];this.setDot(n.x.toString(),n.y.toString(),n.color)}}},{key:"redrawDots",value:function(){this.drawAllDots(this.getPoints())}},{key:"checkPoint",value:function(e,t){return e>=-5&&e<=5&&t>=-5&&t<=5?(this.clearError(),!0):t<-5||t>5?(this.showError("\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 Y \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 [-5;5]"),!1):(this.showError("\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 X \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 [-5;5]"),!1)}},{key:"isPopadanie",value:function(e,t,n){return!!(this.checkSquare(e,t,n)||this.checkTriangle(e,t,n)||this.checkCircle(e,t,n))}},{key:"checkSquare",value:function(e,t,n){return e>=0&&e<=n/2&&t>=0&&t<=n}},{key:"checkTriangle",value:function(e,t,n){return e>=0&&e<=n&&t>=e-parseFloat(n)&&t<=0}},{key:"checkCircle",value:function(e,t,n){return Math.sqrt(e*e+t*t)<=n&&t<=0&&e<=0}},{key:"getR",value:function(){return this.props.rValue}},{key:"showError",value:function(e){this.props.setError(e)}},{key:"clearError",value:function(){this.props.setError("")}},{key:"showTargetDot",value:function(e,t){if(this.props.isTarget){var n=this.props.targetDot[0],r=this.props.targetDot[1],i=this.props.targetDot[2],o=n/i*this.state.size/3+this.state.size/2,s=this.state.size/2-r/i*this.state.size/3;t.fillStyle="rgb(0, 0, 0)",t.beginPath(),t.arc(o,s,e/60,0,2*Math.PI,!1),t.fill(),t.closePath()}}}]),n}(o.a.Component);var Q=Object(T.b)((function(e){return{rValue:e.pointsReducer.rValue,points:e.pointsReducer.points,isTarget:e.pointsReducer.isTarget,targetDot:e.pointsReducer.targetDot}}),(function(e){return{setError:function(t){return e(Y(t))},setXYR:function(t){return e(M(t))}}}))(K),Z=n(41),ee=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={slider:0},r.showError=r.showError.bind(Object(_.a)(r)),r.clearError=r.clearError.bind(Object(_.a)(r)),r.sendValues=r.sendValues.bind(Object(_.a)(r)),r.reset=r.reset.bind(Object(_.a)(r)),r.setR=r.setR.bind(Object(_.a)(r)),r.showDot=r.showDot.bind(Object(_.a)(r)),r}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(){this.showDot()}},{key:"render",value:function(){var e=this;return Object(r.jsxs)(b.a,{children:[Object(r.jsx)(O.a,{style:{marginBottom:"5%"},children:Object(r.jsxs)(y.a,{children:[Object(r.jsx)("h5",{children:"X"}),Object(r.jsx)(x.InputText,{style:{width:"100%"},maxLength:"5",id:"xInput",keyfilter:"num",onChange:this.showDot})]})}),Object(r.jsx)(O.a,{style:{marginBottom:"5%"},children:Object(r.jsxs)(y.a,{children:[Object(r.jsx)("span",{children:"Y: "+this.state.slider}),Object(r.jsx)(Z.Slider,{value:this.state.slider,onChange:function(t){return e.setState({slider:t.value})},min:-5,max:5})]})}),Object(r.jsx)(O.a,{style:{marginBottom:"5%"},children:Object(r.jsxs)(y.a,{children:[Object(r.jsx)("h5",{children:"R"}),Object(r.jsx)(x.InputText,{style:{width:"100%"},maxLength:"5",id:"rInput",keyfilter:"num",onChange:this.setR})]})}),Object(r.jsxs)(O.a,{children:[Object(r.jsx)(y.a,{children:Object(r.jsx)(m.Button,{label:"\u0427\u0435\u043a\u043d\u0443\u0442\u044c",type:"submit",onClick:this.sendValues})}),Object(r.jsx)(y.a,{children:Object(r.jsx)(m.Button,{label:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",style:{float:"right"},type:"reset",onClick:this.reset})})]}),Object(r.jsx)(O.a,{children:Object(r.jsx)(y.a,{style:{paddingBottom:"50px"},children:Object(r.jsx)(w,{})})})]})}},{key:"sendValues",value:function(){var e=this;if(this.validateValues()){var t=this.state.slider,n=document.getElementById("xInput").value,r=document.getElementById("rInput").value;this.props.setXYR([n,t,r]);var i={x:n,y:t,r:r},o=Object.keys(i).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(i[e])})).join("&");fetch("".concat(H,"/api/points/newpoint"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o}).then((function(t){return e.processResponse(t)})).then((function(t){return e.addRow("resultTable",t)})).catch((function(){return e.showError("\u041e\u0448\u0438\u0431\u043a\u0430 HTTP")}))}}},{key:"processResponse",value:function(e){if(e.ok)return this.clearError(),e.json();this.showError("\u041e\u0448\u0438\u0431\u043a\u0430 HTTP")}},{key:"addRow",value:function(e,t){var n=document.getElementById(e).insertRow(1),r=n.insertCell(0),i=n.insertCell(1),o=n.insertCell(2),s=n.insertCell(3),a=document.createTextNode(t.x.toFixed(1)),c=document.createTextNode(t.y.toFixed(1)),l=document.createTextNode(t.r.toFixed(1)),u=document.createTextNode(t.result?"\u041f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u0435":"\u041f\u0440\u043e\u043c\u0430\u0445");r.appendChild(a),i.appendChild(c),o.appendChild(l),s.appendChild(u)}},{key:"validateValues",value:function(){return!(!this.validateX()||!this.validateR())}},{key:"validateX",value:function(){var e=document.getElementById("xInput").value;return 0===e.length?(this.showError("\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 X"),!1):!/^-?[0-9]\d*(\.\d+)?$/.test(e)||e<-5||e>5?(this.showError("\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 X \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 [-5;5]"),!1):(this.clearError(),!0)}},{key:"validateR",value:function(){var e=document.getElementById("rInput").value;return 0===e.length?(this.showError("\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 R"),!1):!/^-?[0-9]\d*(\.\d+)?$/.test(e)||e<1||e>5?(this.showError("\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 R \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 [1;5]"),!1):(this.clearError(),!0)}},{key:"showError",value:function(e){this.props.setError(e)}},{key:"clearError",value:function(){this.props.setError("")}},{key:"reset",value:function(){document.getElementById("xInput").value="",this.setState({slider:0}),document.getElementById("rInput").value="",document.querySelector("tbody").innerHTML="<tr><tr/>",this.clearError(),fetch("".concat(H,"/api/points/droppoints"),{method:"POST",credentials:"include"}).then((function(e){return console.log(e)})).catch((function(){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0447\u0438\u0441\u0442\u043a\u0438")})),document.querySelectorAll(".clickDots").forEach((function(e){e.remove()})),this.props.removeXYR()}},{key:"setR",value:function(){var e=document.getElementById("rInput").value;this.props.setR(e),this.clearError(),this.showDot()}},{key:"showDot",value:function(){var e=this.state.slider,t=document.getElementById("xInput").value,n=document.getElementById("rInput").value;t>=-5&&t<=5&&n>=1&&n<=5&&""!==t&&""!==n?(this.props.setTarget([t,e,n]),this.props.setIsTarget(!0)):this.hideDot()}},{key:"hideDot",value:function(){this.props.setIsTarget(!1)}}]),n}(o.a.Component);var te=Object(T.b)((function(e){return{}}),(function(e){return{setError:function(t){return e(Y(t))},setR:function(t){return e(function(e){return{type:B,payload:e}}(t))},setXYR:function(t){return e(M(t))},removeXYR:function(){return e(U())},setTarget:function(t){return e({type:F,payload:t})},setIsTarget:function(t){return e(V(t))}}}))(ee),ne=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).restorePoints=r.restorePoints.bind(Object(_.a)(r)),r.getPoints=r.getPoints.bind(Object(_.a)(r)),r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getPoints()}},{key:"render",value:function(){return Object(r.jsx)(b.a,{children:Object(r.jsx)(O.a,{children:Object(r.jsx)(y.a,{children:Object(r.jsxs)("table",{id:"resultTable",className:"table table-striped",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"X"}),Object(r.jsx)("th",{children:"Y"}),Object(r.jsx)("th",{children:"R"}),Object(r.jsx)("th",{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"})]})}),Object(r.jsx)("tbody",{children:Object(r.jsx)("tr",{})})]})})})})}},{key:"getPoints",value:function(){var e=this;fetch("".concat(H,"/api/points/getpoints"),{method:"POST",credentials:"include"}).then((function(e){return e.json()})).then((function(t){e.props.clearPoints();for(var n=0;n<t.points.length;n++)e.props.addPoint([t.points[n].x,t.points[n].y,t.points[n].r])})).then((function(){return e.restorePoints()})).catch((function(e){return console.log(e)}))}},{key:"restorePoints",value:function(){for(var e=this.props.points,t=0;t<e.length;t++)this.addRow("resultTable",e[t]);this.forceUpdate(),this.props.setError("")}},{key:"addRow",value:function(e,t){var n=document.getElementById(e).insertRow(1),r=n.insertCell(0),i=n.insertCell(1),o=n.insertCell(2),s=n.insertCell(3),a=document.createTextNode(t[0].toFixed(1)),c=document.createTextNode(t[1].toFixed(1)),l=document.createTextNode(t[2].toFixed(1)),u=document.createTextNode(t.result?"\u041f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u0435":"\u041f\u0440\u043e\u043c\u0430\u0445");r.appendChild(a),i.appendChild(c),o.appendChild(l),s.appendChild(u)}}]),n}(o.a.Component);var re=Object(T.b)((function(e){return{points:e.pointsReducer.points}}),(function(e){return{setXYR:function(t){return e(M(t))},setError:function(t){return e(Y(t))},addPoint:function(t){return e(M(t))},clearPoints:function(){return e(U())}}}))(ne),ie=n(71),oe=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).logout=r.logout.bind(Object(_.a)(r)),r.processLogout=r.processLogout.bind(Object(_.a)(r)),r}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsx)(ie.a,{onClick:this.processLogout,variant:"danger",children:"\u0420\u0430\u0437\u043b\u043e\u0433\u0438\u043d\u0438\u0442\u044c\u0441\u044f"})}},{key:"logout",value:function(){fetch("".concat(H,"/api/auth/logout"),{method:"POST",credentials:"include"}).catch((function(e){return console.log(e)}))}},{key:"processLogout",value:function(){E.push("/lab4"),this.props.removeXYR(),this.props.removeR(),this.props.setLogin(!1),this.props.setError(""),this.props.setIsTarget(!1),localStorage.setItem("login","false"),this.logout()}}]),n}(o.a.Component);var se=Object(T.b)(null,(function(e){return{removeXYR:function(){return e(U())},removeR:function(){return e({type:L,payload:0})},setError:function(t){return e(Y(t))},setLogin:function(t){return e(S(t))},setIsTarget:function(t){return e(V(t))}}}))(oe),ae=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(b.a,{children:[Object(r.jsx)(O.a,{children:Object(r.jsx)(g,{})}),Object(r.jsxs)(O.a,{style:{marginBottom:"5%"},children:[Object(r.jsx)(Q,{}),Object(r.jsx)(y.a,{children:Object(r.jsx)(te,{})})]}),Object(r.jsx)(O.a,{children:Object(r.jsx)(y.a,{children:Object(r.jsx)(re,{})})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(y.a,{className:"d-flex justify-content-center",children:Object(r.jsx)(se,{})})})]})}}]),n}(o.a.Component),ce=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;Object(u.a)(this,n),r=t.call(this,e);var i=!1;return"true"===localStorage.getItem("login")&&(i=!0,r.props.setLogin(!0)),r.state={isLoggedIn:i},r}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsx)($.c,{history:E,children:Object(r.jsx)("div",{children:Object(r.jsxs)($.d,{children:[Object(r.jsx)($.b,{history:E,exact:!0,path:"/lab4",component:W}),Object(r.jsx)(le,{history:E,exact:!0,path:"/lab4/app",isLogged:this.state.isLoggedIn,component:ae}),Object(r.jsx)($.b,{path:"/",component:function(){return Object(r.jsx)("div",{children:"page not found"})}})]})})})}}]),n}(o.a.Component),le=function(e){var t=e.component,n=e.isLogged,i=Object(l.a)(e,["component","isLogged"]);return Object(r.jsx)($.b,Object(c.a)(Object(c.a)({},i),{},{render:function(e){return n?Object(r.jsx)(t,Object(c.a)({},e)):Object(r.jsx)($.a,{to:"/lab4"})}}))};var ue=Object(T.b)((function(e){return{login:e.userReducer.login}}),(function(e){return{setLogin:function(t){return e(S(t))}}}))(ce),de=n(19),he={errorMsg:"",isSignin:"\u0412\u043e\u0439\u0442\u0438",login:!1};var je=n(43),pe={errorMsg:"",rValue:0,points:[],targetDot:[],isTarget:!1};var be=Object(de.c)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(c.a)(Object(c.a)({},e),{},{errorMsg:t.payload});case I:return Object(c.a)(Object(c.a)({},e),{},{isSignin:t.payload});case C:return Object(c.a)(Object(c.a)({},e),{},{login:t.payload});default:return e}},pointsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(c.a)(Object(c.a)({},e),{},{errorMsg:t.payload});case D:return Object(c.a)(Object(c.a)({},e),{},{points:[].concat(Object(je.a)(e.points),[t.payload])});case B:return Object(c.a)(Object(c.a)({},e),{},{rValue:t.payload});case z:return Object(c.a)(Object(c.a)({},e),{},{points:t.payload});case L:return Object(c.a)(Object(c.a)({},e),{},{rValue:t.payload});case F:return Object(c.a)(Object(c.a)({},e),{},{targetDot:t.payload});case X:return Object(c.a)(Object(c.a)({},e),{},{isTarget:t.payload});default:return e}}}),fe=n(42),Oe=(n(63),n(64),n(65),n(66),n(67),Object(de.d)(be,Object(de.a)(fe.a)));a.a.render(Object(r.jsx)(T.a,{store:Oe,children:Object(r.jsx)(ue,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.a9357cb6.chunk.js.map