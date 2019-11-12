import BasePage from './BasePage';


class HomePage extends BasePage {
    constructor(){
    	super();
        this.logoutlink = $("#logout");
        this.url = '/';
        //this.pageLoaded = this.inDom(this.lastName);
    }
}

export default HomePage;
