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
        browser.get('http://180.211.96.85/#/login');

         // to delete all cookies before login
         browser.driver.manage().deleteAllCookies();
        //element(by.linkText('Login')).click();
        element(by.model("vm.user.username")).sendKeys("Deathstroke");
        element(by.model("vm.user.password")).sendKeys("Tbhatt@007");
        element(by.css('[ng-click="vm.login(vm.user)"]')).click();

        expect(browser.getCurrentUrl()).toContain("#");
        browser.waitForAngular();
    });
    // check by default page size is 10


    it("go to Attributes", function () {
        expect(element(by.linkText('Administration')).isPresent()).toBe(true)
                   browser.waitForAngular();
                  element(by.linkText('Administration')).click();
                  browser.waitForAngular();
                  expect(browser.getCurrentUrl()).toContain("#/administration/home");
                  browser.waitForAngular();
                  browser.waitForAngular();
                  element(by.linkText('Attributes')).click();
                  browser.waitForAngular();
                  browser.waitForAngular();
                  expect(browser.getCurrentUrl()).toContain("#/administration/attributes/list");
              });


    // add new qc module and check added QC module is reflecting properly
    it("check sentered Attributes are available over there", function () {
        browser.waitForAngular();
        element(by.model("vm.filter['module._id']"));
        var allOptionsqcmodule = element.all(by.options('module._id as module.title for module in vm.modules'));
        var firstOption = allOptionsqcmodule.first();
        expect(firstOption.getText()).toEqual('-- Please Select --');
     // check recently added qc module is reflecting in the qc module drop down of Attribute screen.
        var lastOption = allOptionsqcmodule.last();
        browser.waitForAngular();
        expect(lastOption.getText()).toEqual(qcmodulename);
        browser.waitForAngular();
     // expect there is no attriibute inside this
        lastOption.click();
        expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
        browser.waitForAngular();
        browser.waitForAngular();
        browser.waitForAngular();
        expect(list.$('option:checked').getText()).toEqual('10');


    });

    // Search attribute which we have added in Super admin
    it("check by search textboxattr1 we can find added attribute", function () {
      element(by.model("vm.textSearch")).sendKeys(textboxattr1);
      browser.waitForAngular();
      expect(element(by.repeater('row in vm.options.data')).isPresent()).toBe(true);
      element(by.model("vm.textSearch")).clear();
      browser.waitForAngular();
      browser.waitForAngular();

    });

    it("check by search textboxattr2 we can find added attribute", function () {
      element(by.model("vm.textSearch")).sendKeys(textboxattr2);
      browser.waitForAngular();
      expect(element(by.repeater('row in vm.options.data')).isPresent()).toBe(true);
      element(by.model("vm.textSearch")).clear();
      browser.waitForAngular();
      browser.waitForAngular();

    });

    it("check by search textboxattr3 we can find added attribute", function () {
      element(by.model("vm.textSearch")).sendKeys(textboxattr3);
      browser.waitForAngular();
      expect(element(by.repeater('row in vm.options.data')).isPresent()).toBe(true);
      element(by.model("vm.textSearch")).clear();
      browser.waitForAngular();
      browser.waitForAngular();

    });

    it("check by search textboxattr4 we can find added attribute", function () {
      element(by.model("vm.textSearch")).sendKeys(textboxattr4);
      browser.waitForAngular();
      expect(element(by.repeater('row in vm.options.data')).isPresent()).toBe(true);
      element(by.model("vm.textSearch")).clear();
      browser.waitForAngular();
      browser.waitForAngular();

    });

    it("check by search textboxattr5 we can find added attribute", function () {
      element(by.model("vm.textSearch")).sendKeys(textboxattr5);
      browser.waitForAngular();
      expect(element(by.repeater('row in vm.options.data')).isPresent()).toBe(true);
      element(by.model("vm.textSearch")).clear();
      browser.waitForAngular();
      browser.waitForAngular();

    });

    it("check by search textboxattr6 we can find added attribute", function () {
      element(by.model("vm.textSearch")).sendKeys(textboxattr6);
      browser.waitForAngular();
      expect(element(by.repeater('row in vm.options.data')).isPresent()).toBe(true);
      element(by.model("vm.textSearch")).clear();
      browser.waitForAngular();
      browser.waitForAngular();

    });

    it("check by search textboxattr7 we can find added attribute", function () {
      element(by.model("vm.textSearch")).sendKeys(textboxattr7);
      browser.waitForAngular();
      expect(element(by.repeater('row in vm.options.data')).isPresent()).toBe(true);
      element(by.model("vm.textSearch")).clear();
      browser.waitForAngular();
      browser.waitForAngular();

    });

    it("check by search textboxattr8 we can find added attribute", function () {
      element(by.model("vm.textSearch")).sendKeys(textboxattr8);
      browser.waitForAngular();
      expect(element(by.repeater('row in vm.options.data')).isPresent()).toBe(true);
      element(by.model("vm.textSearch")).clear();
      browser.waitForAngular();
      browser.waitForAngular();

    });

    it("check by search textboxattr9 we can find added attribute", function () {
      element(by.model("vm.textSearch")).sendKeys(textboxattr9);
      browser.waitForAngular();
      expect(element(by.repeater('row in vm.options.data')).isPresent()).toBe(true);
      element(by.model("vm.textSearch")).clear();
      browser.waitForAngular();
      browser.waitForAngular();

    });

    it("check by search textboxattr10 we can find added attribute", function () {
      element(by.model("vm.textSearch")).sendKeys(textboxattr10);
      browser.waitForAngular();
      expect(element(by.repeater('row in vm.options.data')).isPresent()).toBe(true);
      element(by.model("vm.textSearch")).clear();
      browser.waitForAngular();
      browser.waitForAngular();

    });




});
