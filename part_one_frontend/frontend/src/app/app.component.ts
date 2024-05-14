import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GroupComponent } from './components/group/group.component';
import { GroupDetailsComponent } from './components/group/group-details/group-details/group-details.component';
import { GroupService } from './services/group.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GroupComponent, GroupDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   activeRoles: number[] = [];
   groupService: GroupService;
   /**
    *
    */
   constructor(groupService: GroupService) {
    this.groupService = groupService;
   }

   setActiveRoles(activeGroupId: number){
    this.activeRoles = this.groupService.getById(activeGroupId).Roles;
   }
}
