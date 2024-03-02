import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { MenuComponent } from "./components/menu/menu.component";
import { TermsConditionsComponent } from "./components/terms-conditions/terms-conditions.component";
import { CookiesComponent } from "./components/cookies/cookies.component";
import { PrivacyPolicyComponent } from "./components/privacy-policy/privacy-policy.component";



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'menu/:menuDate', component: MenuComponent },
    { path: 'legal', component: TermsConditionsComponent },
    { path: 'cookies', component: CookiesComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainRoutes { }
