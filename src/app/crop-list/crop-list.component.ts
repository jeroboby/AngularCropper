import { CropsService } from './../services/crops.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crop } from '../models/crop.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.css']
})
export class CropListComponent implements OnInit {

  crops: Crop[];
  cropsSubscription: Subscription;

  constructor(private cropsService: CropsService, private router: Router) {}

  ngOnInit() {
    this.cropsSubscription = this.cropsService.cropsSubject.subscribe(
      (crops: Crop[]) => {
        this.crops = crops;
      }
    );
  }

  onNewCrop() {
    this.router.navigate(['/crops', 'new']);
  }

  onDeleteCrop(cropID: number) {
    // this.cropsService.deleteCrop(cropID);
  }

  onViewCrop(id: number) {
    this.router.navigate(['/crops', 'view', id]);
  }

  ngOnDestroy() {
    this.cropsSubscription.unsubscribe();
  }

}
