import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlacementsComponent } from './placements/placements.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login/forgot-password/reset-password.component';
import { LayoutDefaultComponent } from './layout/layout-default/layout-default.component';
import { LayoutLoginComponent } from './layout/layout-login/layout-login.component';
import { RemindersComponent } from './reminders/reminders.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { RolesComponent } from './admin/roles/roles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { DischargeNoticesComponent } from './discharge-notices/discharge-notices.component';
import { NoticeDetailComponent } from './discharge-notices/notice-detail/notice-detail.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { authGuardchildGuard } from './guards/auth-guardchild.guard';
import { ThirdPartyComponent } from './_common/third-party/third-party.component';
import { StaffAdditionComponent } from './agency/staff-addition/staff-addition.component';
import { AgencyformComponent } from './agency/agencyform/agencyform.component';
import { AgencyprofileComponent } from './agency/agencyprofile/agencyprofile.component';
import { AddressComponent } from './address/address.component';
import { AgencylistComponent } from './agency/agencylist/agencylist.component';
import { PersonMainComponent } from './person/person-main/person-main.component';
import { AuthenticationService } from '../assets/services/authentication.service';
import { AuthorizedservicesComponent } from './authorizedservices/authorizedservices.component';
import { KidsComponent } from './kids/kids.component';
import { ChildPlanComponent } from './kids/components/child-plan/child-plan.component';
import { CommonAppComponent } from './kids/components/common-app/common-app.component';
import { ContactLogsComponent } from './kids/components/contact-logs/contact-logs.component';
import { DocumentsComponent } from './kids/components/documents/documents.component';
import { IndegenousChildComponent } from './kids/components/indegenous-child/indegenous-child.component';
import { SchoolFormComponent } from './kids/components/school-form/school-form.component';
import { EmptyComponent } from './kids/components/empty/empty.component';


export const routes: Routes = [
    {        
        path: 'login',
        component: LayoutLoginComponent,
        children: [
            { path: '', component: LoginComponent, title: 'TFI ONE: Login' },
            { path: 'forgot-password', component: ForgotPasswordComponent, title: 'TFI ONE: Forgot Password' },
            { path: 'reset-password', component: ResetPasswordComponent, title: 'TFI ONE: Reset Password' }
        ]
    },
    {
        path: '', 
        component: LayoutDefaultComponent,
        
        children: [
            { path: '', component:RemindersComponent, title: 'TFI ONE: Reminders' },
            { path: 'buttons', component: HomeComponent, canActivateChild: [authGuardchildGuard], title: 'TFI ONE: Buttons' },
            { path: 'placements', component:PlacementsComponent, canActivateChild: [authGuardchildGuard], title: 'TFI ONE: Placements' },
            { path: 'recruitment', component:RecruitmentComponent, canActivateChild: [authGuardchildGuard], title: 'TFI ONE: Family Recruitment' },
            { path: 'showcase', component:ShowcaseComponent, canActivateChild: [authGuardchildGuard], title: 'TFI ONE: Showcase' },
            { path: 'createperson', component:PersonMainComponent, title: 'TFIONE: Create Person'},
            { path: 'createperson/:id', component:PersonMainComponent, title: 'TFIONE: Edit Person'},
            { path: 'agency', component: AgencylistComponent, title: 'TFIONE: List of Agencies'},
            { path: 'agency/profile', component:AgencyprofileComponent, title: 'TFIONE: Agency Profile'},
            { path: 'agency/profile/:id', component:AgencyprofileComponent, title: 'TFIONE: Agency Profile'},
            { path: 'discharge-notices', component:DischargeNoticesComponent, canActivateChild: [authGuardchildGuard], title: 'TFI ONE: Discharge Notices'},
            { path: 'admin', component:AdminComponent, canActivateChild: [authGuardchildGuard], title: 'TFI ONE: Admin' },            
            { path: 'admin/user/:id', component:UserProfileComponent, canActivateChild: [authGuardchildGuard], title: 'TFI ONE: User' },
            { path: 'admin/roles', component:RolesComponent, canActivateChild: [authGuardchildGuard], title: 'TFI ONE: Roles & Permissions' },
            { path: 'kids', component:KidsComponent, title: 'Kids' },
            { path: 'kids/:id', component:KidsComponent, title: 'Kids', 
                children: [
                    { path: 'child-plan', component: ChildPlanComponent, title: 'Child Plan'  },
                    { path: 'common-app', component: CommonAppComponent, title: 'Common App' },
                    { path: 'contact-logs', component: ContactLogsComponent, title: 'Contact Logs' },
                    { path: 'child-documents', component: DocumentsComponent, title: 'Child Documents' },
                    { path: 'indegenous-child', component: IndegenousChildComponent, title: 'Indegenous Child' },
                    { path: 'school-form', component: SchoolFormComponent, title: 'School Form' },
                    { path: '**', component: EmptyComponent, title: 'No Form Selected' }
                ]
            },
            { path: 'access-denied', component: AccessDeniedComponent, canActivateChild: [authGuardchildGuard], title: 'Access denied' },
            { path: '**', component: PageNotFoundComponent, canActivateChild: [authGuardchildGuard], title: 'Page not found' }
        ]
    }
];

  