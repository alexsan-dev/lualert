(this["webpackJsonp@weareluastudio/lualert"]=this["webpackJsonp@weareluastudio/lualert"]||[]).push([[0],{3:function(t,e,n){t.exports=n(9)},4:function(t,e,n){},9:function(t,e,n){"use strict";n.r(e);n(4);var o=n(0),i=n.n(o),r=n(2),a=n.n(r);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var c={alertContainer:{width:"100%",height:"100vh",position:"fixed",minWidth:"100%",top:"0",left:"0",zIndex:100,transition:"opacity 0.2s ease-in-out",background:"rgba(0, 0, 0, 0.6)",display:"flex",justifyContent:"center",alignItems:"center",margin:0,padding:0,boxSizing:"border-box",fontSize:"16px"},alertContent:{left:"50%",padding:"30px",width:"calc(100% - 60px)",maxWidth:"455px",transition:"transform 0.2s linear 0.2s, opacity 0.2s linear 0.2s",transitionTimingFunction:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",background:"#fff",margin:0,boxSizing:"border-box",zIndex:2,boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",borderRadius:"10px",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"},alertContent_h1:{color:"#333",fontSize:"2em",margin:0,marginBottom:"10px",boxSizing:"border-box",fontWeight:"bold"},alertContent_p:{color:"#333",lineHeight:"20px",margin:0,boxSizing:"border-box"},alertActions:{margin:0,marginTop:"20px",display:"flex",justifyContent:"flex-end",listStyle:"none",position:"relative",boxSizing:"border-box",zIndex:3},alertActions_li_button:{textTransform:"uppercase",color:"#fff",border:"none",overflow:"hidden",height:"45px",padding:"0 20px",outline:"none",boxShadow:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold",margin:0,boxSizing:"border-box"},cancelBtn:{textTransform:"uppercase",border:"none",overflow:"hidden",height:"45px",padding:"0 20px",outline:"none",borderRadius:"5px",cursor:"pointer",boxSizing:"border-box",color:"#333",background:"transparent",boxShadow:"none",fontWeight:400,margin:0},closeAlert:{opacity:"0",pointerEvents:"none"},openAlert:{opacity:"1",pointerEvents:"all"},openContent:{opacity:"1",transform:"scale(1)"},closeContent:{opacity:"0",transform:"scale(0.6)"}},d={customElements:void 0,confirmText:void 0,cancelText:void 0,confirmBtn:void 0,onConfirm:void 0,cancelBtn:void 0,onHide:void 0,fixed:void 0,type:"alert",open:!1,title:"",body:""},p=function(t){var e,n;function o(e){var n;return(n=t.call(this,e)||this).state=d,n.show=n.show.bind(l(n)),n.hide=n.hide.bind(l(n)),n.forceHide=n.forceHide.bind(l(n)),n.confirm=n.confirm.bind(l(n)),n}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var r=o.prototype;return r.show=function(t){"string"===typeof t?this.setState(s({},d,{type:"alert",title:"",body:t,open:!0})):this.setState(s({},d,t,{open:!0}))},r.hide=function(){this.state.fixed||(this.state.onHide&&this.state.onHide(),this.setState({open:!1}))},r.forceHide=function(){var t=this;this.setState({open:!1}),setTimeout((function(){t.setState(s({},d))}),300)},r.confirm=function(){this.state.onConfirm&&this.state.onConfirm(),this.hide()},r.render=function(){return i.a.createElement("div",{onClick:"window"===this.state.type?this.hide:void 0,style:this.state.open?s({},c.alertContainer,c.openAlert,{backdropFilter:this.props.blurred?"blur(3px)":"none"}):s({},c.alertContainer,c.closeAlert,{backdropFilter:this.props.blurred?"blur(3px)":"none"})},i.a.createElement("div",{style:this.state.open?s({},c.alertContent,c.openContent):s({},c.alertContent,c.closeContent)},"alert"!==this.state.type&&i.a.createElement("h1",{style:c.alertContent_h1},this.state.title),i.a.createElement("p",{style:s({},c.alertContent_p,{fontSize:"alert"===this.state.type?"1.2em":"1em"})},this.state.body),this.state.customElements,"window"!==this.state.type&&i.a.createElement("ul",{style:c.alertActions},!this.state.fixed&&"confirm"===this.state.type&&i.a.createElement("li",null,this.state.cancelBtn?i.a.createElement("div",{onClick:this.hide},this.state.cancelBtn):i.a.createElement("button",{onClick:this.hide,style:c.cancelBtn},this.state.cancelText||this.props.cancelText||"Cancel")),i.a.createElement("li",null,this.state.confirmBtn?i.a.createElement("div",{onClick:this.confirm},this.state.confirmBtn):i.a.createElement("button",{style:s({},c.alertActions_li_button,{background:"error"===this.state.type?this.props.errColor||"#ff5252":this.props.confirmColor||"#2196f3"}),onClick:this.confirm}," ",this.state.confirmText||this.props.confirmText||"Accept")))))},o}(o.PureComponent),h=function(t,e){var n=function(){return null};return function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(t,null),i.a.createElement(p,Object.assign({},e,{ref:function(t){window.Alert=(null===t||void 0===t?void 0:t.show)||n,window.hideAlert=(null===t||void 0===t?void 0:t.forceHide)||n}})))}}((function(){return i.a.createElement("button",{onClick:function(){return window.Alert("Hello world")}},"Show")}));a.a.render(i.a.createElement(h,null),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.f292e7d2.chunk.js.map