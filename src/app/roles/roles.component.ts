import { Component, OnInit } from '@angular/core';
import { identity } from 'rxjs';
import { sortData } from 'src/functions/dataFunctions';
import { role } from 'src/model/role';
import { user } from 'src/model/user';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  get displayRoles(): role[] {
    return sortData(this.dataService.roles.map(identity)) as role[]
  }
  fetchUsers(roleId: number): string[]{
    return this.dataService.users.filter(a => a.roles && a.roles.includes(roleId)).map(a => a.name).sort()
  }
  changeRoleName(id: number, event: any){
    this.dataService.roles[this.dataService.roles.findIndex(a => a.id == id)].name = event.target.value
  }
}
