import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication-service';


import {Router, ActivatedRoute} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    user: any = {};
    loading = false;
    returnUrl: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        if(sessionStorage.getItem('userID') != null || sessionStorage.getItem('userID') != "null"){
            console.log("slt");
            this.router.navigate(['/parcourir/albums'])
        }
        else{
            // reset login status
            this.authenticationService.logout();
            // get return url from route parameters or default to '/'
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        }
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(
                data => {
                    sessionStorage.setItem('userID', data['_id']);
                    this.router.navigate(['/parcourir/albums']);
                },
                error => {
                    console.log(error);
                    this.loading = false;
                });
    }
}
