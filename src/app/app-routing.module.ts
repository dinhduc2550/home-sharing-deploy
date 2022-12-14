import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {PostsComponent} from "./posts/posts.component";
import {PostDetailComponent} from "./posts/post-detail/post-detail.component";
import {PostEditComponent} from "./posts/post-edit/post-edit.component";
import {PostListComponent} from "./posts/post-list/post-list.component";
import {PostResolverService} from "./posts/post-resolver.service";
import {SearchComponent} from "./search/search.component";
import {ProfileComponent} from "./profile/profile.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {HasRoleGuard} from "./guard/has-role.guard";
import {UserInfoComponent} from "./profile/user-info/user-info.component";
import {PasswordComponent} from "./profile/password/password.component";
import {HistoryBookingComponent} from "./history-booking/history-booking.component";
import {BookingComponent} from "./booking/booking.component";
import {HasRoleHostGuard} from "./guard/has-role-host.guard";
import {AccountDetailComponent} from "./admin/manager-account/account-detail/account-detail.component";
import {PaymentComponent} from "./payment/payment.component";
import {PaymentSuccessComponent} from "./payment-success/payment-success.component";


const appRoute: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'auth', children: [
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]

  },
  {path: 'booking/:id', component: BookingComponent},
  {path: 'test', component: AccountDetailComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'profile', component: ProfileComponent,
    canActivate: [HasRoleGuard], children: [
      {path: '', component: UserInfoComponent},
      {path: 'password', component: PasswordComponent},
      {path: 'history-booking', component: HistoryBookingComponent}
    ]

  },
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  {
    path: 'posts', children: [
      {path: '', component: PostsComponent},
      {path: 'post-detail/:id', component: PostDetailComponent, resolve: [PostResolverService]},

      // children:[
      //   {path: ':id',component: PostDetailComponent}
      // ]
      {path: 'post-edit', component: PostEditComponent, canActivate: [HasRoleHostGuard]},
      {path: 'post-edit/:id', component: PostEditComponent, canActivate: [HasRoleHostGuard]},

      {path: 'post-list', component: PostListComponent}

    ]
  },
  {
    path: 'hosts',
    loadChildren: () => import('./host/host-routing.module').then(m => m.HostRoutingModule)
    // {path: '', component: HostComponent},
    // {path: 'host-post-list', component: HostPostListComponent},
    // {
    //   path: 'manage-rate', children: [
    //     {path: '', component: ManageRateComponent},
    //     {path: 'rate-detail', component: RateDetailComponent}
    //   ]
    // },
    // {path: 'manage-voucher', component: ManageVoucherComponent}

  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule)
    // component:AdminComponent, children: [
    // {path: '',redirectTo:'manager-account/manager-account-host',pathMatch:'full'},
    // {path: 'manager-account',component: ManagerAccountHostComponent,children: [
    //     {path: 'manager-account-host',component: ManagerAccountHostComponent},
    //     {path: 'manager-account-customer',component: ManagerAccountCustomerComponent},
    //   ]},
    //
    //
    // ]
  },
  {path: 'search', component: SearchComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: 'payment/:id', component: PaymentComponent},
  {path: 'payment-success', component: PaymentSuccessComponent},
  {path: '**', component: ErrorPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
