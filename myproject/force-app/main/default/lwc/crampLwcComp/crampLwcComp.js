import { LightningElement } from 'lwc';

export default class CrampLwcComp extends LightningElement {

    connectedCallback() {
 
    }

    showToast(title, variant, message) {
        const event = new ShowToastEvent({
            title: title,
            variant: variant,
            message: message,
        });
        this.dispatchEvent(event);
    }


    handlePrint(){
       this.showToast('success', 'success', 'Print Clicked'); 
    }

    handleSubmit(){
        this.showToast('success', 'success', 'Submit Clicked'); 
     }
}