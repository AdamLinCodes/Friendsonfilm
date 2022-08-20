import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICredentials } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  isExistingFace(word: string) {
    return this.http.post('http://localhost:8000/scanFace', word,  {responseType: 'text'});
  }

  getPhotos() {
    return this.http.get('http://localhost:8000/getPhotos', {responseType: 'text'});
  }

  sendCredentials(credentials: ICredentials) {
    return this.http.post('http://localhost:8000/addCredentials', JSON.stringify(credentials),  {responseType: 'text'});
  }

  checkCredentialsExist(credentials: ICredentials) {
    return this.http.post('http://localhost:8000/checkCredentialsExist', JSON.stringify(credentials),  {responseType: 'text'});
  }
}
