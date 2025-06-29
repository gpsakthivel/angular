import { Routes } from '@angular/router';
import { UserComponent } from './routing-example/admin/user/user.component';
import { PostComponent } from './routing-example/admin/post/post.component';
import { HomeComponent } from './routing-example/admin/home/home.component';

export const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'post', component: PostComponent },
    { path: '', component: HomeComponent }
];