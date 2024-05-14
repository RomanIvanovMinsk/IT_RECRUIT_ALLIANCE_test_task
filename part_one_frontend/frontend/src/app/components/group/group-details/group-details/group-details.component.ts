import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { RoleService } from '../../../../services/roles.service';
import Role from '../../../../models/role';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-group-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './group-details.component.html',
  styleUrl: './group-details.component.scss'
})
export class GroupDetailsComponent {  
  @Input() set group_roles(items:number[]){
    this._group_roles = items;
    this.setUpCheckboxes();
  }

 
  _roles: Role[] = [];
  _rolesService: RoleService;
  _group_roles: number[] = [];
  constructor(rolesService: RoleService) {
    this._rolesService = rolesService;
  }
  
  ngOnInit(){
    this._roles = this._rolesService.getAll();
    this.setUpCheckboxes()      
  }

  setUpCheckboxes() {
   this._roles = this._roles.map( x => { x.isChecked = false; return x});
   this._roles = this._roles?.map(x => { 
      if(this._group_roles?.indexOf(x.id) > -1) {
        x.isChecked = true;
      }
      return x;
   })
  }
}

