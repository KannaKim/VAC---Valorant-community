import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './edit-post/edit-post.component';
import { MidComponent } from './mid/mid.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostingComponent } from './posting/posting.component';

const routes: Routes = [
  {path: '', component: MidComponent},
  {path: 'posting', component: PostingComponent},
  {path: 'view', component: PostViewComponent},
  {path: 'edit', component: EditPostComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
