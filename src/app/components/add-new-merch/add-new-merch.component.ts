import { Component, OnInit } from '@angular/core';
import { Merch } from 'src/app/models/merch';

@Component({
  selector: 'app-add-new-merch',
  templateUrl: './add-new-merch.component.html',
  styleUrls: ['./add-new-merch.component.css']
})
export class AddNewMerchComponent implements OnInit {

  private newMerch : Merch = new Merch();
  private merchAdded: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
