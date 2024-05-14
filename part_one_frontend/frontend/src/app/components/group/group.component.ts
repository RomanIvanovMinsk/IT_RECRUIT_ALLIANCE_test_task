import { CommonModule } from '@angular/common';
import Group from '../../models/group'
import { GroupService } from '../../services/group.service';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent implements OnInit{
  @Output() groupChanged = new EventEmitter<number>()
  groups: Group[] = []
  _groupService: GroupService;

  constructor(groupService: GroupService){
    this._groupService = groupService;
  }

  ngOnInit(): void {
    console.log("inti")
    this.groups = this._groupService.getAll();
  }

  setActive(item: Group){
    this.groups = this.groups.map( x => {x.isActive = false; return x});
    item.isActive = true;
    this.groupChanged.emit(item.id)
  }

  setEdit(item : Group){
    this.groups = this.groups.map( x => {x.isEdit = false; return x});
    item.isEdit = true;
  }

  lostFocus(target: any, item: any){
    console.log(target)
    console.log(item)
    item.isEdit = false;
    this._groupService.update(item);
  }

  addNewGroup(){
    let newGroup = new Group();
    newGroup.id = this.groups.length +1;
    newGroup.Name = "New Group";
    newGroup.isEdit = false;
    newGroup.isActive = false;
    
    this._groupService.insert(newGroup)
    this.groups = this._groupService.getAll();
  }
}
