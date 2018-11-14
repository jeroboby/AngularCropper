import { CropsService } from './../../services/crops.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Crop } from '../../models/crop.model';
import { ImageCropperComponent, CropperSettings } from "ngx-img-cropper";

@Component({
  selector: 'app-crop-form',
  templateUrl: './crop-form.component.html',
  styleUrls: ['./crop-form.component.css']
})
export class CropFormComponent implements OnInit {

  cropForm: FormGroup;
  loading: boolean = false;
  data: any;
  cropperSettings: CropperSettings;
  crops: any;

  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;
  croppedImage: any;

  

  constructor(private formBuilder: FormBuilder, private cropsService: CropsService,
    private router: Router) {

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth = 100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 300;
    this.cropperSettings.noFileInput = true;
    this.data = {};
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.cropForm = this.formBuilder.group({
      title: ['', Validators.required],
      imageCropped: null
    });
  }

  fileChangeListener($event) {
    var image:any = new Image();
    var file:File = $event.target.files[0];
    var myReader:FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent:any) {
        image.src = loadEvent.target.result;
        that.cropper.setImage(image);
    };
    myReader.readAsDataURL(file);
}

  onSaveCrop() {
    try {
      
      var myReader:FileReader = new FileReader();
      var that = this;
      
      that.cropForm.get('imageCropped').setValue({
        filename:"toto",
        filetype: "txt.png",
        value: this.cropper.image
      })
    
      const formModel = this.cropForm.value;
      this.loading = true;
      this.cropsService.createNewCrop(formModel)
      .subscribe(cropForm => this.crops.push(cropForm));
      setTimeout(() => {
        console.log(formModel);
        alert('done!');
        this.loading = false;
      }, 1000);
      this.router.navigate(['/crops']);
    } catch (ex){
      console.log("error onSave "+ ex);
    }
  }

}
