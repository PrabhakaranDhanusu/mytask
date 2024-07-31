import { LightningElement } from 'lwc';

export default class CustomHighlightPanel extends LightningElement {

    textItems = ['Customer & Site Details', 'Hazard Checklist', 'General Service details', 'Service Location Details', 'Site Plan', 'Confirmation and Submit'];
    selectedText = '';
    displayNextSession = false;

    get isCustSiteSel() {
        console.log('this.selectedText 1-->' + this.selectedText);
        return this.selectedText == 'Customer & Site Details' ? true : false;
    }

    get isHazardCheckSel() {
        console.log('this.selectedText 2-->' + this.selectedText);
        return this.selectedText == 'Hazard Checklist' ? true : false;
    }

    get isGenServSel() {
        console.log('this.selectedText 3-->' + this.selectedText);
        return this.selectedText == 'General Service details' ? true : false;
    }

    get isSerLocSel() {
        console.log('this.selectedText 4-->' + this.selectedText);
        return this.selectedText == 'Service Location Details' ? true : false;
    }

    get isSitePlanSel() {
        console.log('this.selectedText 5-->' + this.selectedText);
        return this.selectedText == 'Site Plan' ? true : false;
    }

    get isConfAndSerSel() {
        console.log('this.selectedText 6-->' + this.selectedText);
        return this.selectedText == 'Confirmation and Submit' ? true : false;
    }


    connectedCallback() {
    }
    renderedCallback() {
        const ulElement = this.template.querySelector('ul');
        console.log('ulElement-->' + ulElement);

        if (ulElement) {
            ulElement.addEventListener('click', this.handleListItemClick.bind(this));
        }
    }

    handleListItemClick(event) {
        if (event.target.tagName === 'LI') {
            const dataIndex = event.target.getAttribute('data-index');
            console.log(`Item ${dataIndex} clicked`);
            this.displayNextSession = true;
            this.selectedText = dataIndex;
            console.log('this.selectedText-->' + this.selectedText);
        }
    }

    handlePrint() {
        console.log('handlePrint is selected');
    }

    handleSubmit() {
        console.log('handleSubmit is selected');
    }
}