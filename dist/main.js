(()=>{"use strict";function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}new(function(){function e(t,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.collapseArea=document.querySelector("."+t),this.textForCollapse=i,this.generateCollapseHtml(),this.init()}var i,s;return i=e,(s=[{key:"init",value:function(){this.collapseArea.append(this.collapse)}},{key:"generateCollapseHtml",value:function(){var t=this;this.collapse=document.createElement("div"),this.button=document.createElement("button"),this.collapse.classList.add("collapse"),this.button.classList.add("collapse__button"),this.button.innerText="Collapse",this.button.addEventListener("click",(function(e){t.text.classList.toggle("active")})),this.text=document.createElement("p"),this.text.classList.add("collapse__text"),this.text.innerText=this.textForCollapse,this.collapse.append(this.button),this.collapse.append(this.text)}}])&&t(i.prototype,s),Object.defineProperty(i,"prototype",{writable:!1}),e}())("collapse-area","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus provident corporis amet. Hic eaque quo dicta, quibusdam optio deleniti aspernatur officiis sint minima porro rem! Ad odit ea ducimus.")})();