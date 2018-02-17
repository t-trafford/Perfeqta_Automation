
describe("QCModule page", function ()

{
  var user = "tanay";
  var password ="Tbhatt@007";
  var list = element(by.model('vm.options.pageSize'));
  var qcmodulename = "Petrol QC Module DEFGH";  // QC module has been defined with this name
  var textboxattr1 = "Container trace DEFGH";  // Attribute Text box with none
  var textboxattr2 = "Verification dt DEFGH";  // Verification Time HH:MM formate and should be greater then
  var textboxattr4 = "vehicle number DEFGH" ;     // numbers with no decimal and  TN unit
  var textboxattr5 = "Travel Cost DEFGH";    //  Cost  in Currency with 2 decimal
  var textboxattr6 = "full vehicle pass in a day DEFGH";  // Scientific without any decimal
  var textboxattr7 = "empty vehicle come in a day DEFGH";  // Exponentioal
  var textboxattr8 = "% of Petrol Waste in a day DEFGH";  // Percetage with 4 decimal
  var textboxattr9 = "QC Type DEFGH";  // Drop down of QC Type
  var textboxattr10 = "Imported Petrol Special Detail DEFGH";  // Text area
  var textboxattr3 = "vehicle Purchase time DEFGH"; // time formate
  var clientname = "pluto"  // client name


   it("login into system", function () {
        browser.get('http://180.211.96.85:8090/#/login');

         // to delete all cookies before login
         browser.driver.manage().deleteAllCookies();
        //element(by.linkText('Login')).click();
        element(by.model("vm.user.username")).sendKeys(user);
        element(by.model("vm.user.password")).sendKeys(password);
        element(by.css('[ng-click="vm.login(vm.user)"]')).click();

        expect(browser.getCurrentUrl()).toContain("#");
        browser.waitForAngular();
    });
    // check by default page size is 10


    it("go to QC Module", function () {
        expect(element(by.linkText('QC Module')).isPresent()).toBe(true)
                   browser.waitForAngular();
                  element(by.linkText('QC Module')).click();

                  expect(browser.getCurrentUrl()).toContain("#/modules/list");
                  browser.waitForAngular();
                  expect(list.$('option:checked').getText()).toEqual('10');
              });


    // add new qc module and check added QC module is reflecting properly
    it("check system allows to add qc module", function () {
        browser.waitForAngular();
        element(by.linkText('Add New')).click();
        browser.waitForAngular();
        expect(browser.getCurrentUrl()).toContain("#/modules/edit");
        browser.waitForAngular();
        var moduletitle = element(by.model("vm.module.title"));
        moduletitle.sendKeys(qcmodulename);
// to allows special setting
        element(by.model("vm.module.allowSpecialSettings")).click();
        browser.waitForAngular();
        element(by.css('[ng-click="vm.save(vm.module)"]')).click();

    });

    // add new qc module and check added QC module is reflecting properly
    it("check by search we can find added element", function () {
      element(by.model("vm.textSearch")).sendKeys(qcmodulename);
      browser.waitForAngular();
      expect(element(by.repeater('row in vm.options.data')).isPresent()).toBe(true);
      element(by.model("vm.textSearch")).clear();
      browser.waitForAngular();
    });

    it("For improper data search no records should get display", function () {
        element(by.model("vm.textSearch")).sendKeys("hiergheruighergihihi");
        browser.waitForAngular();
          expect(element(by.repeater('row in vm.options.data')).isPresent()).toBe(false);
          browser.waitForAngular();
    });

     // go to Home page of suoer admin by clicking on logo of qc3.0

     it("go to attribute screen", function () {
             element(by.linkText('Site Administration')).click();
             browser.waitForAngular();
             element(by.linkText('Attributes')).click();
             browser.waitForAngular();
             expect(browser.getCurrentUrl()).toContain("#/attributes/list");

       });

       it("Check page size is 10 by default", function () {
               expect(list.$('option:checked').getText()).toEqual('10');

         });

       it("Check Attribute drop down Contains please select by default", function () {

         element(by.model("vm.filter['module._id']"));
         var allOptionsqcmodule = element.all(by.options('module._id as module.title for module in vm.modules'));
         var firstOption = allOptionsqcmodule.first();
         expect(firstOption.getText()).toEqual('-- Please Select --');
      // check recently added qc module is reflecting in the qc module drop down of Attribute screen.
         var lastOption = allOptionsqcmodule.last();
         browser.waitForAngular();
         expect(lastOption.getText()).toEqual(qcmodulename);
         firstOption.click();
         expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
      // expect there is no attriibute inside this
         lastOption.click();
         expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
         browser.waitForAngular();
         browser.waitForAngular();

   });

                  // add textattribute1 over here
           it("Check Attribute1 Can be added successfully", function () {

               element(by.linkText('Add New')).click();
               expect(browser.getCurrentUrl()).toContain("#/attributes/edit");
               var qcmoduledropdowninattr = element.all(by.options('module._id as module.title for module in vm.modules'));
               var frstoptn = qcmoduledropdowninattr.first();
               var lstoptn =  qcmoduledropdowninattr.last();
               expect(frstoptn.getText()).toEqual('-- Please Select --');
               expect(lstoptn.getText()).toEqual(qcmodulename);
               lstoptn.click();
               browser.waitForAngular();
               element(by.model("vm.attribute.title")).sendKeys(textboxattr1);
               var type = element.all(by.options('item._id as item.title for item in vm.types'));
               var defaulttype = type.first();
               expect(defaulttype.getText()).toEqual('-- Please Select --');
               browser.waitForAngular();
               element(by.model('vm.type._id')).$('[value="string:57175257c74217130039948c"]').click(); // select text box
               var formate = element.all(by.options('item._id as item.title for item in type.formats'));
               var defaultformate = formate.first();
               browser.waitForAngular();
               expect(defaultformate.getText()).toEqual('-- Please Select --');
              element(by.model('vm.type.format._id')).$('[value="string:123456789912345678901234"]').click(); // select none
               element(by.css('[ng-click="vm.save(vm.attribute)"]')).click();
               element(by.model("vm.textSearch")).sendKeys(textboxattr1);
               expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
               browser.waitForAngular();
               element(by.model("vm.textSearch")).clear();
               element(by.model("vm.textSearch")).sendKeys('euifeufhewuifheuifh');
               expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
               browser.waitForAngular();
               element(by.model("vm.textSearch")).clear();
               browser.waitForAngular();
       });

                    // add textattribute2 here
                  it("Check Attribute2 Can be added successfully", function () {
                      browser.waitForAngular();
                      element(by.linkText('Add New')).click();
                      browser.waitForAngular();
                      expect(browser.getCurrentUrl()).toContain("#/attributes/edit");
                      var qcmoduledropdowninattr = element.all(by.options('module._id as module.title for module in vm.modules'));
                      var frstoptn = qcmoduledropdowninattr.first();
                      var lstoptn =  qcmoduledropdowninattr.last();
                      browser.waitForAngular();
                      expect(frstoptn.getText()).toEqual('-- Please Select --');
                      expect(lstoptn.getText()).toEqual(qcmodulename);
                      lstoptn.click();
                      browser.waitForAngular();
                      element(by.model("vm.attribute.title")).sendKeys(textboxattr2);
                      var type = element.all(by.options('item._id as item.title for item in vm.types'));
                      var defaulttype = type.first();
                      expect(defaulttype.getText()).toEqual('-- Please Select --');
                      browser.waitForAngular();
                      element(by.model('vm.type._id')).$('[value="string:57175257c74217130039948c"]').click(); // select type as text box
                      var formate = element.all(by.options('item._id as item.title for item in type.formats'));
                      var defaultformate = formate.first();
                      expect(defaultformate.getText()).toEqual('-- Please Select --');
                      browser.waitForAngular();
                      element(by.model('vm.type.format._id')).$('[value="string:123456789012345678901246"]').click(); // select formate as Date
                      element(by.model("vm.isOptional")).click();  // Click check box of Date
                      var Dateformatedrop = element.all(by.options('item._id as item.title for item in vm.type.allowItems'));
                      var frstDateformatedropoptn = Dateformatedrop.first();
                      expect(frstDateformatedropoptn.getText()).toEqual('-- Please Select --');
                      browser.waitForAngular();
                      element(by.model('vm.model.datetime')).$('[value="string:123456789012345678901249"]').click(); // select MM/DD/YYYY
                      element(by.css('[ng-click="vm.save(vm.attribute)"]')).click();
                      element(by.model("vm.textSearch")).sendKeys(textboxattr2);
                      expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
                      element(by.model("vm.textSearch")).clear();
                      browser.waitForAngular();
                      element(by.model("vm.textSearch")).sendKeys('euifeufhewuifheuifh');
                      expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
                      browser.waitForAngular();
                      element(by.model("vm.textSearch")).clear();
                      browser.waitForAngular();
              });


        // add textattribute4 here
      it("Check Attribute4 Can be added successfully", function () {
          browser.waitForAngular();
          element(by.linkText('Add New')).click();
          expect(browser.getCurrentUrl()).toContain("#/attributes/edit");
          browser.waitForAngular();
          var qcmoduledropdowninattr = element.all(by.options('module._id as module.title for module in vm.modules'));
          var frstoptn = qcmoduledropdowninattr.first();
          var lstoptn =  qcmoduledropdowninattr.last();
          browser.waitForAngular();
          expect(frstoptn.getText()).toEqual('-- Please Select --');
          expect(lstoptn.getText()).toEqual(qcmodulename);
          browser.waitForAngular();
          lstoptn.click();
          element(by.model("vm.attribute.title")).sendKeys(textboxattr4);
          browser.waitForAngular();
          var type = element.all(by.options('item._id as item.title for item in vm.types'));
          var defaulttype = type.first();
          browser.waitForAngular();
          expect(defaulttype.getText()).toEqual('-- Please Select --');
          element(by.model('vm.type._id')).$('[value="string:57175257c74217130039948c"]').click(); // select type as text box
          var formate = element.all(by.options('item._id as item.title for item in type.formats'));
          var defaultformate = formate.first();
          browser.waitForAngular();
          expect(defaultformate.getText()).toEqual('-- Please Select --');
          element(by.model('vm.type.format._id')).$('[value="string:123456789012345678901235"]').click(); // select formate as Number
          browser.waitForAngular();
          element(by.model("vm.isOptional")).click(); // Click check box of Measurement
          element(by.model("vm.model.MeasurementUnit")).sendKeys('TN');
          browser.waitForAngular();
          element(by.css('[ng-click="vm.save(vm.attribute)"]')).click();
          browser.waitForAngular();
          element(by.model("vm.textSearch")).sendKeys(textboxattr4);
          expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
          browser.waitForAngular();
          element(by.model("vm.textSearch")).clear();
          element(by.model("vm.textSearch")).sendKeys('euifeufhewuifheuifh');
          browser.waitForAngular();
          expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
          element(by.model("vm.textSearch")).clear();
          browser.waitForAngular();
  });

              // add textattribute5 here
                it("Check Attribute5 Can be added successfully", function () {

                  browser.waitForAngular();
                  browser.waitForAngular();
                  browser.waitForAngular();
                  element(by.linkText('Add New')).click();
                  expect(browser.getCurrentUrl()).toContain("#/attributes/edit");
                  var qcmoduledropdowninattr = element.all(by.options('module._id as module.title for module in vm.modules'));
                  var frstoptn = qcmoduledropdowninattr.first();
                  var lstoptn =  qcmoduledropdowninattr.last();
                  browser.waitForAngular();
                  expect(frstoptn.getText()).toEqual('-- Please Select --');
                  expect(lstoptn.getText()).toEqual(qcmodulename);
                  browser.waitForAngular();
                  browser.waitForAngular();
                  lstoptn.click();
                  element(by.model("vm.attribute.title")).sendKeys(textboxattr5);
                  var type = element.all(by.options('item._id as item.title for item in vm.types'));
                  var defaulttype = type.first();
                  browser.waitForAngular();
                  expect(defaulttype.getText()).toEqual('-- Please Select --');
                  browser.waitForAngular();
                  element(by.model('vm.type._id')).$('[value="string:57175257c74217130039948c"]').click(); // select type as text box
                  var formate = element.all(by.options('item._id as item.title for item in type.formats'));
                  browser.waitForAngular();
                  var defaultformate = formate.first();
                  expect(defaultformate.getText()).toEqual('-- Please Select --');
                  element(by.model('vm.type.format._id')).$('[value="string:123456789012345678901242"]').click(); // select formate as Currency
                  browser.waitForAngular();
                  element(by.model("vm.isOptional")).click(); // Click check box of Decimal
                  element(by.model("vm.model.Decimal")).sendKeys('2');
                  browser.waitForAngular();
                  element(by.css('[ng-click="vm.save(vm.attribute)"]')).click();
                  element(by.model("vm.textSearch")).sendKeys(textboxattr5);
                  browser.waitForAngular();
                  expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
                  element(by.model("vm.textSearch")).clear();
                  browser.waitForAngular();
                  element(by.model("vm.textSearch")).sendKeys('euifeufhewuifheuifh');
                  expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
                  element(by.model("vm.textSearch")).clear();
                  browser.waitForAngular();
              });

                     // add textattribute3 here
                             it("Check Attribute3 Can be added successfully", function () {
                                 browser.waitForAngular();
                                 element(by.linkText('Add New')).click();
                                 expect(browser.getCurrentUrl()).toContain("#/attributes/edit");
                                 browser.waitForAngular();
                                 var qcmoduledropdowninattr = element.all(by.options('module._id as module.title for module in vm.modules'));
                                 var frstoptn = qcmoduledropdowninattr.first();
                                 var lstoptn =  qcmoduledropdowninattr.last();
                                 browser.waitForAngular();
                                 expect(frstoptn.getText()).toEqual('-- Please Select --');
                                 expect(lstoptn.getText()).toEqual(qcmodulename);
                                 lstoptn.click();
                                 browser.waitForAngular();
                                 element(by.model("vm.attribute.title")).sendKeys(textboxattr3);
                                 var type = element.all(by.options('item._id as item.title for item in vm.types'));
                                 var defaulttype = type.first();
                                 expect(defaulttype.getText()).toEqual('-- Please Select --');
                                 element(by.model('vm.type._id')).$('[value="string:57175257c74217130039948c"]').click(); // select type as text box
                                 browser.waitForAngular();
                                 var formate = element.all(by.options('item._id as item.title for item in type.formats'));
                                 var defaultformate = formate.first();
                                 expect(defaultformate.getText()).toEqual('-- Please Select --');
                                 browser.waitForAngular();
                                 element(by.model('vm.type.format._id')).$('[value="string:123456789012333678901246"]').click(); // select formate as Time
                                 element(by.model("vm.isOptional")).click(); // Click check box of time
                                 browser.waitForAngular();
                                 element(by.model('vm.model.datetime')).$('[value="string:123456789012345678901258"]').click(); // select HH:MM AM/PM
                                 element(by.css('[ng-click="vm.save(vm.attribute)"]')).click();
                                 browser.waitForAngular();
                                 element(by.model("vm.textSearch")).sendKeys(textboxattr3);
                                 browser.waitForAngular();
                                 expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
                                 element(by.model("vm.textSearch")).clear();
                                 browser.waitForAngular();
                                 element(by.model("vm.textSearch")).sendKeys('euifeufhewuifheuifh');
                                 expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
                                 element(by.model("vm.textSearch")).clear();
                                 browser.waitForAngular();
                                 browser.waitForAngular();
                                 browser.waitForAngular();
                                browser.waitForAngular();
                         });


                            it("Logout user", function () {                                           browser.waitForAngular();
                              element(by.linkText(user)).click();
                              browser.waitForAngular();
                              browser.waitForAngular();
                              element(by.linkText('Logout')).click();
                              expect(browser.getCurrentUrl()).toContain("#/login");

                                });
                                    

                     // go to Site admin page and from that go to clients page





});
