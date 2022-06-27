export default class Collapse {
    constructor(collapseArea, textForCollapse) {
        this.collapseArea = document.querySelector('.'+collapseArea);
        this.textForCollapse = textForCollapse;
        this.generateCollapseHtml()
        this.init();
    }
    init() {
        this.collapseArea.append(this.collapse);
    }
    generateCollapseHtml() {
        this.collapse = document.createElement('div');
        this.button = document.createElement('button');
        this.collapse.classList.add('collapse');
        this.button.classList.add('collapse__button');
        this.button.innerText = 'Collapse';
        this.button.addEventListener('click',evt=>{
            this.text.classList.toggle('active');
        });
        this.text = document.createElement('p');
        this.text.classList.add('collapse__text');
        this.text.innerText = this.textForCollapse;
        this.collapse.append(this.button);
        this.collapse.append(this.text);
    }
}