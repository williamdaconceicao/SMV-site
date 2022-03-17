import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

/* SmtpJS.com - v3.0.0 */
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public form: FormGroup = this.initForm();

  public get object(): FormControl {
    return this.form.get('object') as FormControl
  }

  public get message(): FormControl {
    return this.form.get('message') as FormControl
  }

  public onSubmit(){
    window.open(`mailto:societemusicaledevichy@gmail.com?subject=${this.object.value}&body=${this.message.value}`);
  }

  private initForm() {
    return new FormGroup({
      object: new FormControl(''),
      message: new FormControl(''),
    });
  }
}
