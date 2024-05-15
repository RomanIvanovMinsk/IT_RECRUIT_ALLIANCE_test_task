import { Injectable } from '@angular/core';
import Group from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groups: Group[] = []

  constructor() { 
    this.groups = [
      { id: 1, Name: "test", isEdit: false, isActive: false, Roles: [1] },
      { id: 2, Name : "Test2", isEdit: false, isActive: false, Roles: [2]},
      { id: 3, Name: "test222", isEdit:false, isActive: false, Roles: [5,1,3]}
    ]
  }
  
  getAll(){
    return this.groups;
  }

  getById(activeGroupId: number): Group{
    return this.groups.filter(x => x.id === activeGroupId)[0];
  }

  insert(item: Group){
    this.groups.push(item);
  }

  update(item: Group){
    let oldVal = this.groups.filter(x => x.id == item.id)[0];
    oldVal.Name = item.Name;
    oldVal.Roles = item.Roles;
  }
}
