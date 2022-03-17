import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'presentation',
  templateUrl: './presentation.component.html',
  styleUrls: [ './presentation.component.scss']
})
export class PresentationComponent {
  /**model: Model = new Model();
  
  constructor( private profile: ProfileService, private snotify: SnotifyService) { }


  public onSubmit(f: NgForm) {

    Email.send({
    Host : ‘smtp.elasticemail.com’,
    Username : ‘udith.indrakantha@gmail.com’,
    Password : ‘**************************’,
    To : ‘udith.indrakantha@gmail.com’,
    From : `udith.indrakantha@gmail.com`,
    Subject : this.model.subject,
    Body : `
    <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${this.model.name} <br /> <b>Email: </b>${this.model.email}<br /> <b>Subject: </b>${this.model.subject}<br /> <b>Message:</b> <br /> ${this.model.message} <br><br> <b>~End of Message.~</b> `
    }).then( message => {alert(message); f.resetForm(); } );
    
  }*/
}
