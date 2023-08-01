import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './auth/pages/register/register.component';
import { UserDetailComponent } from './dashboard/pages/users/pages/user-detail/user-detail.component';
import { UsersComponent } from './dashboard/pages/users/users.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        // /dashboard/home
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'users',
        children: [
          {
            // /dashboard/users
            path: '',
            component: UsersComponent,
            data: {

            }
          },
          {
            // /dashboard/users/:id
            path: ':id',
            component: UserDetailComponent
          }
        ]
      },
      // {
      //   path: 'users',
      //   component: UsersComponent
      // },
      // {
      //   path: 'users/:id',
      //   component: UserDetailComponent
      // },
      {
        path: '**',
        redirectTo: 'home',
      }
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
 // {
    // /dashboard/home
  //  path: 'clases',
  //  component: classComponent,
  //},
  {
    // ** Se usa para decir "cualquier path que no sea ninguno de los declarados anteriormente"
    path: '**',
    redirectTo: '/dashboard',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
