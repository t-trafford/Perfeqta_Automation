describe("QCModule page", function ()

{
  var user = "suri";
  var password ="Suri@123";
  var list = element(by.model('vm.options.pageSize'));
  var settitle = "petrol QC dropdown set";
  var questiontag = "ptrlqc"
  var que1 = "Petrol procedure type DFGH";
  var que2 = "Select Company for petrol DFGH";
  var que3 = "temp on which petrol received DFGH";
  var que4 = "petrol price in USA 2";
  var que5 = "petrol price in UAE 2";
  var que6 = "auto calculated price 2";
  var que7 = "% of price up/down"           // autocalculated
  var que8 = "density of received petrol"    // exponentiol with 10 to power 6
  var que9 = "petrol liquidity count"
  var que10 = "petrol actual density"    // autocalculated ( exponential or not)
  var que11 = "density variation"       // autocalculated que10/que7
  var que12 = "will not select this que in form"



   it("login into system", function () {
        browser.get('http://180.211.96.85/#/login');

         // to delete all cookies before login
         browser.driver.manage().deleteAllCookies();
         browser.waitForAngular();
        //element(by.linkText('Login')).click();
        element(by.model("vm.user.username")).sendKeys(user);
        element(by.model("vm.user.password")).sendKeys(password);
        element(by.css('[ng-click="vm.login(vm.user)"]')).click();

        expect(browser.getCurrentUrl()).toContain("#");
        browser.waitForAngular();
    });
    // check by default page size is 10


    it("go to Questions", function () {
        expect(element(by.linkText('Administration')).isPresent()).toBe(true)
                   browser.waitForAngular();
                  element(by.linkText('Administration')).click();
                  browser.waitForAngular();
                  expect(browser.getCurrentUrl()).toContain("#/administration/home");
                  browser.waitForAngular();
                  browser.waitForAngular();
                  element(by.linkText('Questions')).click();
                  browser.waitForAngular();
                  browser.waitForAngular();
                  expect(browser.getCurrentUrl()).toContain("#/administration/questions/list");
                  browser.waitForAngular();
                  browser.waitForAngular();
                  expect(list.$('option:checked').getText()).toEqual('10');
                  browser.waitForAngular();
                  browser.waitForAngular();
              });

              it("Add Question1", function () {
                          element(by.linkText('Add New')).click();
                          browser.waitForAngular();
                          browser.waitForAngular();
                          expect(browser.getCurrentUrl()).toContain("#/administration/questions/new/edit");
                          browser.waitForAngular();
                          browser.waitForAngular();
                          element(by.model("vm.question.title")).sendKeys(que1);
                          browser.waitForAngular();
                          browser.waitForAngular();
                          element(by.model("vm.questiontag")).sendKeys(questiontag);
                          browser.waitForAngular();
                          browser.waitForAngular();
                          element(by.css('[ng-click="vm.addQuestionTags(vm.questiontag)"]')).click();
                          browser.waitForAngular();
                          browser.waitForAngular();

                          var type = element.all(by.options('item._id as item.title for item in vm.types'));
                          var defaulttype = type.first();
                          browser.waitForAngular();
                          expect(defaulttype.getText()).toEqual('-- Please Select --');
                          element(by.model('vm.type._id')).$('[value="string:571751efc74217130039947c"]').click(); // select type as Drop down
                          browser.waitForAngular();
                          var formate = element.all(by.options('item._id as item.title for item in type.formats'));
                          var defaultformate = formate.first();
                          browser.waitForAngular();
                          expect(defaultformate.getText()).toEqual('-- Please Select --');
                          element(by.model('vm.type.format._id')).$('[value="string:122256789012345678902234"]').click(); // select formate as none
                          browser.waitForAngular();
                          browser.waitForAngular();
                          element(by.model("vm.question.validation.type")).click();
                          browser.waitForAngular();
                          browser.waitForAngular();

                          var validationsetdropdown = element.all(by.options('set as set.title for set in vm.sets track by set._id'));
                          var frstoptn = validationsetdropdown.first();
                          var lstoptn =  validationsetdropdown.last();
                          browser.waitForAngular();
                          expect(frstoptn.getText()).toEqual('--Select Existing Sets--');
                          expect(lstoptn.getText()).toEqual(settitle);
                          lstoptn.click();
                          browser.waitForAngular();
                          browser.waitForAngular();
                          browser.waitForAngular();
                          element(by.css('[ng-click="vm.save(vm.question)"]')).click();
                          browser.waitForAngular();
                          browser.waitForAngular();
                          element(by.model("vm.textSearch")).sendKeys(que1);
                          browser.waitForAngular();
                          expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
                          element(by.model("vm.textSearch")).clear();
                          browser.waitForAngular();
                          element(by.model("vm.textSearch")).sendKeys('euifeufhewuifheuifh');
                          expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
                          element(by.model("vm.textSearch")).clear();
                          browser.waitForAngular();
                          browser.waitForAngular();

                        });

                        it("Add Question2", function () {
                                    element(by.linkText('Add New')).click();
                                    browser.waitForAngular();
                                    browser.waitForAngular();
                                    expect(browser.getCurrentUrl()).toContain("#/administration/questions/new/edit");
                                    browser.waitForAngular();
                                    browser.waitForAngular();
                                    element(by.model("vm.question.title")).sendKeys(que2);
                                    browser.waitForAngular();
                                    browser.waitForAngular();
                                    element(by.model("vm.questiontag")).sendKeys(questiontag);
                                    browser.waitForAngular();
                                    browser.waitForAngular();
                                    element(by.css('[ng-click="vm.addQuestionTags(vm.questiontag)"]')).click();
                                    browser.waitForAngular();
                                    browser.waitForAngular();

                                    var type = element.all(by.options('item._id as item.title for item in vm.types'));
                                    var defaulttype = type.first();
                                    browser.waitForAngular();
                                    expect(defaulttype.getText()).toEqual('-- Please Select --');
                                    element(by.model('vm.type._id')).$('[value="string:5717521dc742171300399484"]').click(); // select type as check box
                                    browser.waitForAngular();
                                    var formate = element.all(by.options('item._id as item.title for item in type.formats'));
                                    var defaultformate = formate.first();
                                    browser.waitForAngular();
                                    expect(defaultformate.getText()).toEqual('-- Please Select --');
                                    browser.waitForAngular();
                                    browser.waitForAngular();
                                    element(by.model('vm.type.format._id')).$('[value="string:123456689012345678902284"]').click(); // select formate as none
                                    browser.waitForAngular();
                                    browser.waitForAngular();
                                    element(by.model("vm.question.validation.type")).click();
                                    browser.waitForAngular();
                                    browser.waitForAngular();

                                    var validationsetdropdown = element.all(by.options('set as set.title for set in vm.sets track by set._id'));
                                    var frstoptn = validationsetdropdown.first();
                                    var lstoptn =  validationsetdropdown.last();
                                    browser.waitForAngular();
                                    browser.waitForAngular();
                                    expect(frstoptn.getText()).toEqual('--Select Existing Sets--');
                                    lstoptn.click();
                                    browser.waitForAngular();
                                    browser.waitForAngular();
                                    element(by.model("vm.question.validation.validationSet.minimum")).sendKeys("1");
                                    browser.waitForAngular();
                                    browser.waitForAngular();
                                    browser.waitForAngular();
                                    element(by.model("vm.question.validation.validationSet.maximum")).sendKeys("2");
                                    browser.waitForAngular();
                                    browser.waitForAngular();
                                    element(by.model("vm.question.validation.validationSet.validationMessage")).sendKeys("you must need to select atleast one");
                                    browser.waitForAngular();
                                    browser.waitForAngular();
                                    element(by.css('[ng-click="vm.save(vm.question)"]')).click();
                                    browser.waitForAngular();
                                    browser.waitForAngular();
                                    element(by.model("vm.textSearch")).sendKeys(que2);
                                    browser.waitForAngular();
                                    expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
                                    element(by.model("vm.textSearch")).clear();
                                    browser.waitForAngular();
                                    browser.waitForAngular();
                                    element(by.model("vm.textSearch")).sendKeys('euifeufhewuifheuifh');
                                    expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
                                    element(by.model("vm.textSearch")).clear();
                                    browser.waitForAngular();
                                    browser.waitForAngular();

                                  });

                                  it("Add Question3", function () {
                                              element(by.linkText('Add New')).click();
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              expect(browser.getCurrentUrl()).toContain("#/administration/questions/new/edit");
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              element(by.model("vm.question.title")).sendKeys(que3);
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              element(by.model("vm.questiontag")).sendKeys(questiontag);
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              element(by.css('[ng-click="vm.addQuestionTags(vm.questiontag)"]')).click();
                                              browser.waitForAngular();
                                              browser.waitForAngular();

                                              var type = element.all(by.options('item._id as item.title for item in vm.types'));
                                              var defaulttype = type.first();
                                              browser.waitForAngular();
                                              expect(defaulttype.getText()).toEqual('-- Please Select --');
                                              element(by.model('vm.type._id')).$('[value="string:57175257c74217130039948c"]').click(); // select type as Text box
                                              browser.waitForAngular();
                                              var formate = element.all(by.options('item._id as item.title for item in type.formats'));
                                              var defaultformate = formate.first();
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              expect(defaultformate.getText()).toEqual('-- Please Select --');
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              element(by.model('vm.type.format._id')).$('[value="string:123456789012345678901235"]').click(); // select formate as number
                                              element(by.model("vm.isOptional")).sendKeys("k");
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              element(by.xpath("/html/body/div/div/ui-view/ui-view/div/form/type-selector/div/div[2]/div[2]/div[2]/control/form/div/input[1]")).click();
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              element(by.model("vm.model.Decimal")).sendKeys("2");
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              browser.waitForAngular();s
                                              element(by.xpath("/html/body/div/div/ui-view/ui-view/div/form/fieldset/div/div/fieldset[2]/input")).click();
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              element(by.model("vm.question.validation.condition.type")).click();
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              element(by.model('vm.question.validation.condition.conditionTitle')).$('[value=">"]').click(); // select formate as none
                                              element(by.model("vm.question.validation.condition.value")).sendKeys("10");
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              element(by.model("vm.question.validation.condition.validationMessage")).sendKeys("Temp should be greater than 10");
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              element(by.css('[ng-click="vm.save(vm.question)"]')).click();
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              element(by.model("vm.textSearch")).sendKeys(que3);
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
                                              element(by.model("vm.textSearch")).clear();
                                              browser.waitForAngular();
                                              browser.waitForAngular();
                                              element(by.model("vm.textSearch")).sendKeys('euifeufhewuifheuifh');
                                              expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
                                              element(by.model("vm.textSearch")).clear();
                                              browser.waitForAngular();
                                              browser.waitForAngular();

                                            });






                     it("Logout user", function () {
                                            browser.waitForAngular();
                                            browser.waitForAngular();
                                            element(by.linkText(user)).click();
                                            browser.waitForAngular();
                                            browser.waitForAngular();
                                            element(by.linkText('Logout')).click();
                                            expect(browser.getCurrentUrl()).toContain("#/login");

                                              });


});
