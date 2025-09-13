import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent{
  // First Way to hold path parameter value in this component which loaded for a dynamic route
  userId = input<string>();
  private usersService= inject(UsersService);
  userName = computed(() => this.usersService.users.find(u => u.id === this.userId())?.name);


  // Second Way to hold path parameter value in this component which loaded for a dynamic route
  // userName : string = '';
  // private usersService= inject(UsersService);
  // private activateRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);

  // ngOnInit(): void {
  //   console.log(this.activateRoute);
  //   const subscription = this.activateRoute.paramMap.subscribe({
  //     next : (paramMap) => {
  //       this.userName = this.usersService.users.find
  //       ((u) => u.id === paramMap.get('userId'))
  //       ?.name || '';
  //     }
  //   });

  //   this.destroyRef.onDestroy(()=> subscription.unsubscribe())
  // }
}
