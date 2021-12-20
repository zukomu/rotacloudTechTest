import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identity, Observable } from 'rxjs';
import { user } from 'src/model/user';
import { DataService } from 'src/services/data.service';
import { role } from 'src/model/role';
import { sortData } from 'src/functions/dataFunctions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }
  get displayUsers(): user[] {
    return sortData(this.dataService.users.map(identity)) as user[]
  }
  fetchRoles(roleIds: number[]): role[] { 
    if (roleIds && roleIds.length > 0) return roleIds.map(a => this.dataService.roles.find(b => b.id == a))
    return []
  }
  changeUserName(id: number, event: any){
    this.dataService.users[this.dataService.users.findIndex(a => a.id == id)].name = event.target.value
  }
}
