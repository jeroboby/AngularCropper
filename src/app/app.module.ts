import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CropFormComponent } from './crop-list/crop-form/crop-form.component';
import { SingleCropComponent } from './crop-list/single-crop/single-crop.component';
import { CropListComponent } from './crop-list/crop-list.component';
import { ImageCropperComponent, CropperSettings } from "ngx-img-cropper";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: 'crops', component: CropListComponent },
  { path: 'crops/new', component: CropFormComponent},
  { path: 'crops/view/:id', component: SingleCropComponent },
  { path: '', redirectTo: 'crops', pathMatch: 'full' },
  { path: '**', redirectTo: 'crops' }
 
];

@NgModule({
  declarations: [
    AppComponent,
    CropFormComponent,
    SingleCropComponent,
    CropListComponent,
    HeaderComponent,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
