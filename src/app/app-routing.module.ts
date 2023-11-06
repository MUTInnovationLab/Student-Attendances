import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lecture',
    loadChildren: () => import('./lecture/lecture.module').then( m => m.LecturePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },{
    path: 'classes',
    loadChildren: () => import('./classes/classes.module').then( m => m.ClassesPageModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then( m => m.StudentsPageModule)
  },
  {
    path: 'qr-scan',
    loadChildren: () => import('./qr-scan/qr-scan.module').then( m => m.QrScanPageModule)
  },
  {
    path: 'qrgenerator',
    loadChildren: () => import('./qrgenerator/qrgenerator.module').then( m => m.QrgeneratorPageModule)
  },  {
    path: 'stude-scan',
    loadChildren: () => import('./stude-scan/stude-scan.module').then( m => m.StudeScanPageModule)
  },
  {
    path: 'attendies',
    loadChildren: () => import('./attendies/attendies.module').then( m => m.AttendiesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
