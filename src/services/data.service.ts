import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from 'src/model/user';
import { role } from '../model/role'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    this.getJson(this.rolesUrl).subscribe(a => this.roles = a)
    this.getJson(this.usersUrl).subscribe(a => this.users = a)
   }
  private rolesUrl = "../assets/json files/roles.json"
  private usersUrl = "../assets/json files/users.json"
  roles: role[] = []
  users: user[] = []
  getJson(url: string): Observable<any>{
    return this.http.get(url)
  }
}
