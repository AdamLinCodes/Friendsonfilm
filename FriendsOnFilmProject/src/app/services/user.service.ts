import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:8000/testing', {responseType: 'text'});
  }

  isExistingUser(word: string) {
    return this.http.post('http://localhost:8000/facecheck', word,  {responseType: 'text'});
  }

  getPhotos() {
    return this.http.get('http://localhost:8000/retrievePhotos', {responseType: 'text'});
  }
}
