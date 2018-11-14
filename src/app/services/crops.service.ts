import { Injectable } from '@angular/core';
import { Crop } from '../models/crop.model';
import { Subject, throwError } from 'rxjs';
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { catchError } from 'rxjs/internal/operators/catchError';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CropsService {

  crops: Crop[] = [];
  cropsSubject = new Subject<Crop[]>();

  constructor(private httpClient: HttpClient) {
    this.getAllCrops();
  }
  
  createNewCrop(newCrop: Crop): Observable<Crop> {
    console.log("created crop");
    return this.httpClient.post<Crop>('http://localhost:1337/imagecrop/upload', newCrop, httpOptions)
     .pipe();
  }

  
  getAllCrops(): Observable<Crop[]> {
    console.log('Getting all crops images from the server.')
    return this.httpClient.get<Crop[]>('http://localhost:1337/imagecrop');
  }

  getCropById(id: number): Observable<Crop> {
    return this.httpClient.get<Crop>(`http://localhost:1337/imagecrop/${id}`, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'my-token'
      })
    });
  }

  updateCrop(updatedCrop: Crop): Observable<void> {
    return this.httpClient.put<void>(`http://localhost:1337/imagecrop/${updatedCrop.cropID}`, updatedCrop, {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })
  }

  // deleteCrop(cropID: number): Observable<void> {
  //   const url = `${this.cropsUrl}/${cropID}`;
  //   return this.httpClient.delete<void>url, httpOptions)
  //   .pipe(
  //     catchError(this.handleError('deleteCrop'))
  //   );
  // }

}