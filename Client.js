describe("QCModule page", function ()

{
  var list = element(by.model('vm.options.pageSize'));
  var qcmodulename = "Petrol QC Module DEMO";  // QC module has been defined with this name
  var textboxattr1 = "Container trace DEMO";  // Attribute Text box with none
  var textboxattr2 = "Verification dt DEMO";  // Verification Time HH:MM formate and should be greater then
  var textboxattr4 = "vehicle number DEMO" ;     // numbers with no decimal and  TN unit
  var textboxattr5 = "Travel Cost DEMO";    //  Cost  in Currency with 2 decimal
  var textboxattr6 = "full vehicle pass in a day DEMO";  // Scientific without any decimal
  var textboxattr7 = "empty vehicle come in a day DEMO";  // Exponentioal
  var textboxattr8 = "% of Petrol Waste in a day DEMO";  // Percetage with 4 decimal
  var textboxattr9 = "QC Type DEMO";  // Drop down of QC Type
  var textboxattr10 = "Imported Petrol Special Detail DEMO";  // Text area
  var textboxattr3 = "vehicle Purchase time DEMO"; // time formate
  var clientname = "pluto"  // client name


   it("login into system", function () {
      browser.get('http://180.211.96.85:8090/#/login');
         // to delete all cookies before login
         browser.driver.manage().deleteAllCookies();
        //element(by.linkText('Login')).click();
        element(by.model("vm.user.username")).sendKeys("admin");
        element(by.model("vm.user.password")).sendKeys("Cool-Password!1");
        element(by.css('[ng-click="vm.login(vm.user)"]')).click();

        expect(browser.getCurrentUrl()).toContain("#");
    });


    it("go to Site admin page and from that go to clients page", function () {
            browser.waitForAngular();
            element(by.linkText('Clients')).click();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toContain("#/clients/list");

      });

  // Search that Pluto is there in clients
        it("go to Site admin page and from that go to clients page", function () {
                browser.waitForAngular();
                element(by.model("vm.textSearch")).sendKeys(clientname);
                expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
                element(by.model("vm.textSearch")).clear();
                browser.waitForAngular();
                browser.get('http://web.super.qc3.productivet.com/#/clients/57556e91c0d38b1500762a9e/edit');
                expect(browser.getCurrentUrl()).toContain("#/clients/57556e91c0d38b1500762a9e/edit");
                var selectqcmoduleforclients = element.all(by.options('module as module.title for module in vm.filteredModules'));
                var frstoptn = selectqcmoduleforclients.first();
                var lstoptn =  selectqcmoduleforclients.last();
                browser.waitForAngular();
                expect(frstoptn.getText()).toEqual('-- Please Select --');
                expect(lstoptn.getText()).toEqual(qcmodulename);
                lstoptn.click();
                browser.waitForAngular();
                browser.waitForAngular();
                element(by.linkText('Site Administration')).click();
                browser.waitForAngular();
                browser.waitForAngular();
                // logout
                element(by.linkText('Admin')).click();
                element(by.css('[ng-click="vm.logout()"]')).click();
                browser.waitForAngular();
                expect(browser.getCurrentUrl()).toContain("#/login");





      });




});
