import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PostsComponent} from "./posts.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {PostResolverService} from "./post-resolver.service";
import {PostEditComponent} from "./post-edit/post-edit.component";
import {HasRoleHostGuard} from "../guard/has-role-host.guard";
import {PostListComponent} from "./post-list/post-list.component";

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'post-detail/:id', component: PostDetailComponent, resolve: [PostResolverService]},
  {path: 'post-edit', component: PostEditComponent, canActivate: [HasRoleHostGuard]},
  {path: 'post-edit/:id', component: PostEditComponent, canActivate: [HasRoleHostGuard]},

  {path: 'post-list', component: PostListComponent}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
