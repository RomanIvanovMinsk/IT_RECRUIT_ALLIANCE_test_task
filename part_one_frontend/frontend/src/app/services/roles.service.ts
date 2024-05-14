import { Injectable } from '@angular/core';
import Role from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  roles: Role[] = []

  constructor() { 
    this.roles = 
    [{ id: 1, Name: "admin", isEdit: false, isActive: false, isChecked: false },
     { id: 2, Name : "qa", isEdit: false, isActive: false , isChecked: false },
     { id: 3, Name: "developer", isEdit:false, isActive: false, isChecked: false },
     { id: 4, Name: "customer", isEdit:false, isActive: false, isChecked: false },
     { id: 5, Name: "customer2", isEdit:false, isActive: false, isChecked: false },
     { id: 6, Name: "delivery", isEdit:false, isActive: false, isChecked: false },
     { id: 7, Name: "delivery manager", isEdit:false, isActive: false, isChecked: false },
    ]
  }
  
  getAll(){
    return this.roles;
  }

  getById(){
  }
  
  insert(item: Role){
    this.roles.push(item);
  }
  update(item: Role){
    let oldVal = this.roles.filter(x => x.id == item.id)[0];
    oldVal.Name = item.Name;
  }
}
