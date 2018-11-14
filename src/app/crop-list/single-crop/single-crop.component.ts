import { CropsService } from './../../services/crops.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crop } from '../../models/crop.model';

@Component({
  selector: 'app-single-crop',
  templateUrl: './single-crop.component.html',
  styleUrls: ['./single-crop.component.css']
})
export class SingleCropComponent implements OnInit {

  crop: Crop;

  constructor(private route: ActivatedRoute, private cropsService: CropsService,
              private router: Router) {}

  ngOnInit() {
    this.crop = new Crop('');
    const id = this.route.snapshot.params['id'];
    this.cropsService.getCropById(id);
  }

  onBack() {
    this.router.navigate(['/crops']);
  }

}

