(()=>{"use strict";new class{constructor(t,e){this.collapseArea=document.querySelector("."+t),this.textForCollapse=e,this.generateCollapseHtml(),this.init()}init(){this.collapseArea.append(this.collapse)}generateCollapseHtml(){this.collapse=document.createElement("div"),this.button=document.createElement("button"),this.collapse.classList.add("collapse"),this.button.classList.add("collapse__button"),this.button.innerText="Collapse",this.button.addEventListener("click",(t=>{this.text.classList.toggle("active")})),this.text=document.createElement("p"),this.text.classList.add("collapse__text"),this.text.innerText=this.textForCollapse,this.collapse.append(this.button),this.collapse.append(this.text)}}("collapse-area","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus provident corporis amet. Hic eaque quo dicta, quibusdam optio deleniti aspernatur officiis sint minima porro rem! Ad odit ea ducimus.")})();