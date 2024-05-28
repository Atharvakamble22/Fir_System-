import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, user);
  }
  loginUser(email: string, password: string): Observable<any> {
    const loginData = {
      email: email,
      password: password,
    };
    return this.http.post<any>(`${this.baseUrl}/login`, loginData);
  }
}
