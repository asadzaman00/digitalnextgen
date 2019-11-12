import BasePage from './BasePage';


class RegisterPage extends BasePage {
    constructor(){
    	super();
        this.registerLink = $("#registerbtn");
        this.firstName = $("#fname");
        this.lastName = $("#lname");
        this.userName = element(by.id('uname'));
        this.password = $("#password");
        this.registerBtn = $("#register");

        this.url = '/register';
        //this.pageLoaded = this.inDom(this.registerBtn);

    }
}
export default RegisterPage;
