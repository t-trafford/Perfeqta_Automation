describe("QCModule page", function ()

{
  var list = element(by.model('vm.options.pageSize'));
  var settitle = "petrol QC dropdown set";
  var setvalue1 = "light weight petrol";
  var setvalue2 = "heavy weight petrol";

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


    it("go to sets", function () {
        expect(element(by.linkText('Administration')).isPresent()).toBe(true)
                   browser.waitForAngular();
                  element(by.linkText('Administration')).click();
                  browser.waitForAngular();
                  expect(browser.getCurrentUrl()).toContain("#/administration/home");
                  browser.waitForAngular();
                  browser.waitForAngular();
                  element(by.linkText('Sets')).click();
                  browser.waitForAngular();
                  browser.waitForAngular();
                  expect(browser.getCurrentUrl()).toContain("#/administration/sets/list");
                  browser.waitForAngular();
                  browser.waitForAngular();
                  expect(list.$('option:checked').getText()).toEqual('10');
                  browser.waitForAngular();
                  browser.waitForAngular();
              });


              it("Add sets", function () {
                          element(by.linkText('Add New')).click();
                          browser.waitForAngular();
                          browser.waitForAngular();
                          expect(browser.getCurrentUrl()).toContain("#/administration/sets/new/edit");
                          browser.waitForAngular();
                          browser.waitForAngular();
                          element(by.model("vm.set.title")).sendKeys(settitle);
                          browser.waitForAngular();
                          browser.waitForAngular();
                          element(by.model("vm.setvalue.value")).sendKeys(setvalue1);
                          browser.waitForAngular();
                          browser.waitForAngular();
                          element(by.css('[ng-click="vm.addsetvalue(vm.setvalue.value)"]')).click();
                          browser.waitForAngular();
                          browser.waitForAngular();
                          element(by.model("vm.setvalue.value")).sendKeys(setvalue2);
                          browser.waitForAngular();
                          browser.waitForAngular();
                          element(by.css('[ng-click="vm.addsetvalue(vm.setvalue.value)"]')).click();
                          browser.waitForAngular();
                          browser.waitForAngular();
                          element(by.css('[ng-click="vm.save(vm.set)"]')).click();
                          browser.waitForAngular();
                          browser.waitForAngular();
                          browser.waitForAngular();
                          element(by.model("vm.textSearch")).sendKeys(setvalue1);
                          browser.waitForAngular();
                          expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
                          element(by.model("vm.textSearch")).clear();
                          browser.waitForAngular();
                          browser.waitForAngular();
                          browser.waitForAngular();
                          element(by.model("vm.textSearch")).sendKeys(setvalue2);
                          browser.waitForAngular();
                          expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
                          element(by.model("vm.textSearch")).clear();
                          element(by.model("vm.textSearch")).sendKeys('euifeufhewuifheuifh');
                          expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
                          element(by.model("vm.textSearch")).clear();
                          browser.waitForAngular();
                          browser.waitForAngular();


                        });


    });
