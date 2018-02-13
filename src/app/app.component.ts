import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	public title = 'Task Demp App';
  	public task = {
  		personalDetails: {
  			name: 'Vijay',
  			age: 29,
  			sex: 'Male'
  		},
  		contactDetails:{
  			phone: '9591191405',
  			email: 'nvijay.blr@gmail.com'
  		}
  	};

}
