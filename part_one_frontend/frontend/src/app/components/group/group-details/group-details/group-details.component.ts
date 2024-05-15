import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { RoleService } from '../../../../services/roles.service';
import Role from '../../../../models/role';
import Group from '../../../../models/group';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroupService } from '../../../../services/group.service';
import { SearchComponent } from '../../../search/search/search.component';
import { FilterPipe } from '../../../../pipes/filter.pipe';

@Component({
  selector: 'app-group-details',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchComponent, FilterPipe],
  templateUrl: './group-details.component.html',
  styleUrl: './group-details.component.scss'
})
export class GroupDetailsComponent {  
  activeGroupId: number = 0;
  filterText:string = "";
  @Input() set group_roles(group: Group){
    this._group_roles = group.Roles;
    this.activeGroupId = group.id;
    this.setUpCheckboxes();
  }
 
  _roles: Role[] = [];
  _rolesService: RoleService;
  _groupService: GroupService;
  _group_roles: number[] = [];

  constructor(rolesService: RoleService, groupService: GroupService) {
    this._rolesService = rolesService;
    this._groupService = groupService;
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
  
  updateGroupRole(){
    var oldVal = this._groupService.getById(this.activeGroupId);
    oldVal.Roles = this._roles.filter(x => x.isChecked == true).map( x => x.id);
    this._groupService.update(oldVal)
  }

  doFiltering(text: string){
    this.filterText = text;
  }
}

