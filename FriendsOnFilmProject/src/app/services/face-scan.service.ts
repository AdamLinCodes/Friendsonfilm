import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaceScanService {
  
  constructor(private http: HttpClient) { }

  isExistingFace(word: string) {
    return this.http.post('http://localhost:8000/scanFace', word,  {responseType: 'text'});
  }
}
