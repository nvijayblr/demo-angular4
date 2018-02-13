import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

	public _personalDetails:any;

	//This tells our component to treat personalDetailsChange as an input property from the parent compnent

	@Output() personalDetailsChange = new EventEmitter();

	@Output() shareDataEvent = new EventEmitter();

	@Input() 

	set personalDetails(personalDetails: any) {
		this._personalDetails = personalDetails;
		this.personalDetailsChange.emit(this._personalDetails);
	}

	get personalDetails() {
		return this._personalDetails;
	}

	constructor() { }

    shareData(_personalDetails) {
    	console.log('Sharing from personal details component....')
    	this.shareDataEvent.emit(_personalDetails);
    }

	ngOnInit() {
	}

}
