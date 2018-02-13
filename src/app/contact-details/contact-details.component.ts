import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
	
	//This tells our component to treat contactDetails as an input property from the parent compnent
	@Input() contactDetails;

	public _personalDetails: any;

	constructor() { 
	}

	ngOnInit() {
		this._personalDetails = {
			name: '',
			age: ''
		}
	}
    sendData(data: any[]) {
        console.log('I am from Personal details component');
        console.log(data);
    	this._personalDetails = data;
    }
}
