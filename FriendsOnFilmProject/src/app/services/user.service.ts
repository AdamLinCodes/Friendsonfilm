import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICredentials } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  sendCredentials(credentials: ICredentials) {
    return this.http.post('http://localhost:8000/addCredentials', JSON.stringify(credentials),  {responseType: 'text'});
  }

  checkCredentialsExist(credentials: ICredentials) {
    return this.http.post('http://localhost:8000/checkCredentialsExist', JSON.stringify(credentials),  {responseType: 'text'});
  }
}
