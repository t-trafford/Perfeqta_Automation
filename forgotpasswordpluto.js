describe("login Check QC3.0", function ()

{

var improperusername1 = "efrerf";
var Blankusername2 = "";
var properusername3 = "admin";

  it("Check forgot password functionality with improper user", function () {
        browser.get('http://180.211.96.85/#/login');

         // to delete all cookies before login
         browser.driver.manage().deleteAllCookies();
        //element(by.linkText('Login')).click();

        // improper user name try to login
        browser.waitForAngular();
        browser.waitForAngular();
        browser.waitForAngular();
           element(by.linkText('Forgot Password')).click();
          expect(browser.getCurrentUrl()).toContain("#/forgotpassword/");
          browser.waitForAngular();
          browser.waitForAngular();
          browser.waitForAngular();
          element(by.model("vm.forgotPassword.username")).sendKeys(improperusername1);
          browser.waitForAngular();
          element(by.css('[ng-click="vm.submit(vm.forgotPassword)"]')).click();
          expect(browser.getCurrentUrl()).toContain("#/forgotpassword/");
          element(by.model("vm.forgotPassword.username")).clear();
          browser.waitForAngular();


          });

          it("Check forgot password functionality with Blank user", function () {

                  browser.waitForAngular();
                  browser.waitForAngular();
                  element(by.model("vm.forgotPassword.username")).sendKeys(Blankusername2);
                  browser.waitForAngular();
                  element(by.css('[ng-click="vm.submit(vm.forgotPassword)"]')).click();
                  expect(browser.getCurrentUrl()).toContain("#/forgotpassword/");
                  browser.waitForAngular();
                  element(by.model("vm.forgotPassword.username")).clear();
                  });


                  it("Check forgot password functionality with proper user", function () {

                          browser.waitForAngular();
                          browser.waitForAngular();
                          element(by.model("vm.forgotPassword.username")).sendKeys(properusername3);
                          browser.waitForAngular();
                          element(by.css('[ng-click="vm.submit(vm.forgotPassword)"]')).click();
                            browser.waitForAngular();
                              browser.waitForAngular();
                                browser.waitForAngular();
                          expect(element(by.linkText('Login')).isPresent()).toBe(true);
                          browser.waitForAngular();
                            browser.waitForAngular();

                          });

                          // it("Check Cancel button is working properly or not", function () {
                          //       browser.get('http://192.168.1.185/#/forgotpassword/');
                          //
                          //        // to delete all cookies before login
                          //        browser.driver.manage().deleteAllCookies();
                          //       //element(by.linkText('Login')).click();
                          //       browser.waitForAngular();
                          //       browser.waitForAngular();
                          //       element(by.buttonText("Cancel")).click();
                          //       browser.waitForAngular();
                          //       expect(browser.getCurrentUrl()).toContain("#/login");
                          //
                          //         });





});
