import { Component, OnInit } from '@angular/core';
import { Merch } from 'src/app/models/merch';
import { AddMerchService } from '../../services/add-merch.service';
import { error } from 'console';
import { UploadImageService } from '../../services/upload-image.service';


@Component({
  selector: 'app-add-new-merch',
  templateUrl: './add-new-merch.component.html',
  styleUrls: ['./add-new-merch.component.css']
})
export class AddNewMerchComponent implements OnInit {

  private newMerch : Merch = new Merch();
  private merchAdded: boolean;

  constructor(private addMerchService:AddMerchService,
              private uploadImageService:UploadImageService) { }

  onSubmit() {
    this.addMerchService.sendMerch(this.newMerch).subscribe(
      result => {
        //Check if this is the optimal way
          this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(data))._body).id)
          this.merchAdded=true;
          this.newMerch = new Merch();
      },
      err => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
