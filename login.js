describe("login Check QC3.0", function ()

{

  it("TC_01 login into system improper user name", function () {
      browser.get('http://180.211.96.85:8090/#/login');

         // to delete all cookies before login
         browser.driver.manage().deleteAllCookies();
        //element(by.linkText('Login')).click();

        // improper user name try to login
        element(by.model("vm.user.username")).sendKeys("adminnn");
        element(by.model("vm.user.password")).sendKeys("Cool-Password!1");
        element(by.css('[ng-click="vm.login(vm.user)"]')).click();
        expect(element(by.linkText('QC Module')).isPresent()).toBe(false);
        element(by.model("vm.user.username")).clear();
        element(by.model("vm.user.password")).clear();

          });
        // improper password try to login
        it("TC_02 login into system improper password", function () {
          element(by.model("vm.user.username")).sendKeys("adminnn");
          element(by.model("vm.user.password")).sendKeys("Coolll-Password!1");
          element(by.css('[ng-click="vm.login(vm.user)"]')).click();
        expect(element(by.linkText('QC Module')).isPresent()).toBe(false);
          element(by.model("vm.user.username")).clear();
            element(by.model("vm.user.password")).clear();
  });
            // try to login without entering user name
              it("TC_03 login into system withoout user name", function () {
              element(by.model("vm.user.username")).sendKeys("");
              element(by.model("vm.user.password")).sendKeys("Cool-Password!1");
              element(by.css('[ng-click="vm.login(vm.user)"]')).click();
            expect(element(by.linkText('QC Module')).isPresent()).toBe(false);
              element(by.model("vm.user.username")).clear();
                element(by.model("vm.user.password")).clear();
  });


                // try to login without password
              it("TC_04 login into system without password", function () {
                  element(by.model("vm.user.username")).sendKeys("admin");
                  element(by.model("vm.user.password")).sendKeys("");
                  element(by.css('[ng-click="vm.login(vm.user)"]')).click();
                expect(element(by.linkText('QC Module')).isPresent()).toBe(false);
                  element(by.model("vm.user.username")).clear();
                    element(by.model("vm.user.password")).clear();
  });

       // proper credential and try to login
       it("TC_05 login into system with proper credential", function () {
          element(by.model("vm.user.username")).sendKeys("adminn");
          element(by.model("vm.user.password")).sendKeys("Cool-Password!1");
          element(by.css('[ng-click="vm.login(vm.user)"]')).click();
          expect(browser.getCurrentUrl()).toContain("#");
          expect(element(by.linkText('QC Module')).isPresent()).toBe(true);
    });


});
