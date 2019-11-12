<h3>Protractor-Cucumber-Allure Setup Guide</h3>

<p>
<i><strong>This project demonstrates the basic protractor-cucumber framework project setup</strong></i>
</p>

---


### Features
* Crisp & Clear folder structures
* Page Object design pattern implementation
* Extensive hooks implemented for BeforeAll, After etc.
* MultiCapabalities and Test Sharding example
* Screenshots on failure feature scenarios
* Support for cucumber-html-reports

### To Get Started

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

**Note** Min node version 6.9.x

2.Chrome or Firefox browsers installed.

3.Text Editor(Optional) installed-->Sublime/Visual Studio Code.

#### Run Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt which would then install all the dependencies from package.json

```
npm install
```

* Then first step is to fire up the selenium server which could be done in many ways,  **webdriver-manager** proves very handy for this.The below command should download the **chrome & gecko driver** binaries locally for you!

```
npm run webdriver-update
``` 

* Then you should start your selenium server!
```
npm run webdriver-start
```

* Following command will launch the chrome browser and run the scripts

```
npm test
```
