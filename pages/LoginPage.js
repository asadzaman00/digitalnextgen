import BasePage from './BasePage';


class LoginPage extends BasePage {
    constructor(){
    	super();
        this.loginBtn = $("#loginbtn");
        this.registerLink = $("#registerbtn");
        this.userName = $('#username');
        this.password = $("#password");

        this.registerSuccess = $(".alert-sucess");

        this.url = '/login';
        //this.pageLoaded = this.inDom(this.lastName);

    }
}

export default LoginPage;
