
describe("QCModule page", function ()


  {
    var user = "tanay";
    var password ="Tbhatt@007";
    var list = element(by.model('vm.options.pageSize'));
    var qcmodulename = "Petrol QC Module OPIUO";  // QC module has been defined with this name
    var textboxattr1 = "Container trace OPIUO";  // Attribute Text box with none
    var textboxattr2 = "Verification dt OPIUO";  // Verification Time HH:MM formate and should be greater then
    var textboxattr4 = "vehicle number OPIUO" ;     // numbers with no decimal and  TN unit
    var textboxattr5 = "Travel Cost OPIUO";    //  Cost  in Currency with 2 decimal
    var textboxattr6 = "full vehicle pass in a day OPIUO";  // Scientific without any decimal
    var textboxattr7 = "empty vehicle come in a day OPIUO";  // Exponentioal
    var textboxattr8 = "% of Petrol Waste in a day OPIUO";  // Percetage with 4 decimal
    var textboxattr9 = "QC Type OPIUO";  // Drop down of QC Type
    var textboxattr10 = "Imported Petrol Special Detail OPIUO";  // Text area
    var textboxattr3 = "vehicle Purchase time OPIUO"; // time formate
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
    });
    // check by default page size is 10


     // go to Home page of suoer admin by clicking on logo of qc3.0

     it("go to attribute screen", function () {

             element(by.linkText('Attributes')).click();
             expect(browser.getCurrentUrl()).toContain("#/attributes/list");

       });

       it("Check page size is 10 by default", function () {
               expect(list.$('option:checked').getText()).toEqual('100');

         });

       it("Check Attribute drop down Contains please select by default", function () {

         element(by.model("vm.filter['module._id']"));
         var allOptionsqcmodule = element.all(by.options('module._id as module.title for module in vm.modules'));
         var firstOption = allOptionsqcmodule.first();
         expect(firstOption.getText()).toEqual('-- Please Select --');
      // check recently added qc module is reflecting in the qc module drop down of Attribute screen.
         var lastOption = allOptionsqcmodule.last();
         expect(lastOption.getText()).toEqual(qcmodulename);
         browser.waitForAngular();
         firstOption.click();
         browser.waitForAngular();
         browser.waitForAngular();
         expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
      // expect there is no attriibute inside this
         lastOption.click();
         browser.waitForAngular();
         expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
         browser.waitForAngular();
         browser.waitForAngular();
         browser.waitForAngular();

   });


   // add textattribute6 here
     it("Check Attribute6 Can be added successfully", function () {
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
       element(by.model("vm.attribute.title")).sendKeys(textboxattr6);
       browser.waitForAngular();
       var type = element.all(by.options('item._id as item.title for item in vm.types'));
       var defaulttype = type.first();
       expect(defaulttype.getText()).toEqual('-- Please Select --');
       element(by.model('vm.type._id')).$('[value="string:57175257c74217130039948c"]').click(); // select type as text box
       browser.waitForAngular();
       var formate = element.all(by.options('item._id as item.title for item in type.formats'));
       var defaultformate = formate.first();
       browser.waitForAngular();
       expect(defaultformate.getText()).toEqual('-- Please Select --');
       element(by.model('vm.type.format._id')).$('[value="string:123456789012345678901444"]').click(); // select formate as Exponential
       browser.waitForAngular();
       browser.waitForAngular();
       element(by.css('[ng-click="vm.save(vm.attribute)"]')).click();
       element(by.model("vm.textSearch")).sendKeys(textboxattr6);
       expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
       element(by.model("vm.textSearch")).clear();
       browser.waitForAngular();
       element(by.model("vm.textSearch")).sendKeys('euifeufhewuifheuifh');
       expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
       element(by.model("vm.textSearch")).clear();
       browser.waitForAngular();
   });

   // add textattribute7 here
     it("Check Attribute7 Can be added successfully", function () {
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
       element(by.model("vm.attribute.title")).sendKeys(textboxattr7);
       browser.waitForAngular();
       var type = element.all(by.options('item._id as item.title for item in vm.types'));
       var defaulttype = type.first();
       expect(defaulttype.getText()).toEqual('-- Please Select --');
       element(by.model('vm.type._id')).$('[value="string:57175257c74217130039948c"]').click(); // select type as text box
       browser.waitForAngular();
       var formate = element.all(by.options('item._id as item.title for item in type.formats'));
       var defaultformate = formate.first();
       browser.waitForAngular();
       expect(defaultformate.getText()).toEqual('-- Please Select --');
       element(by.model('vm.type.format._id')).$('[value="string:123456789012345678901238"]').click(); // select formate as Exponential
       browser.waitForAngular();
       element(by.model("vm.model.power")).sendKeys('0');   // 10 to power will be entered here
       element(by.css('[ng-click="vm.save(vm.attribute)"]')).click();
       element(by.model("vm.textSearch")).sendKeys(textboxattr7);
       expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
       element(by.model("vm.textSearch")).clear();
       browser.waitForAngular();
       element(by.model("vm.textSearch")).sendKeys('euifeufhewuifheuifh');
       expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
       element(by.model("vm.textSearch")).clear();
       browser.waitForAngular();
   });


                      it("Check Attribute8 Can be added successfully", function () {
                            // add textattribute8 here
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
                        element(by.model("vm.attribute.title")).sendKeys(textboxattr8);
                        browser.waitForAngular();
                        var type = element.all(by.options('item._id as item.title for item in vm.types'));
                        var defaulttype = type.first();
                        expect(defaulttype.getText()).toEqual('-- Please Select --');
                        browser.waitForAngular();
                        element(by.model('vm.type._id')).$('[value="string:57175257c74217130039948c"]').click(); // select type as text box
                        var formate = element.all(by.options('item._id as item.title for item in type.formats'));
                        var defaultformate = formate.first();
                        browser.waitForAngular();
                        expect(defaultformate.getText()).toEqual('-- Please Select --');
                        element(by.model('vm.type.format._id')).$('[value="string:123456789012345678901240"]').click(); // select formate as Exponential
                        browser.waitForAngular();
                        element(by.model("vm.isOptional")).click();   // add decimal from here
                        browser.waitForAngular();
                        element(by.model("vm.model.Decimal")).sendKeys('4');
                        browser.waitForAngular();
                        element(by.css('[ng-click="vm.save(vm.attribute)"]')).click();
                        element(by.model("vm.textSearch")).sendKeys(textboxattr8);
                        expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
                        element(by.model("vm.textSearch")).clear();
                        browser.waitForAngular();
                        element(by.model("vm.textSearch")).sendKeys('euifeufhewuifheuifh');
                        expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
                        element(by.model("vm.textSearch")).clear();
                        browser.waitForAngular();
                        browser.waitForAngular();
                        browser.waitForAngular();
                    });

                    // add textattribute9 here
                      it("Check Attribute9 Can be added successfully", function () {
                        browser.waitForAngular();
                        element(by.linkText('Add New')).click();
                        expect(browser.getCurrentUrl()).toContain("#/attributes/edit");
                        browser.waitForAngular();
                        var qcmoduledropdowninattr = element.all(by.options('module._id as module.title for module in vm.modules'));
                        var frstoptn = qcmoduledropdowninattr.first();
                        var lstoptn =  qcmoduledropdowninattr.last();
                        browser.waitForAngular();
                        expect(frstoptn.getText()).toEqual('-- Please Select --');
                        browser.waitForAngular();
                        expect(lstoptn.getText()).toEqual(qcmodulename);
                        lstoptn.click();
                        browser.waitForAngular();
                        element(by.model("vm.attribute.title")).sendKeys(textboxattr9);
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
                        element(by.css('[ng-click="vm.save(vm.attribute)"]')).click();
                        browser.waitForAngular();
                        element(by.model("vm.textSearch")).sendKeys(textboxattr9);
                        expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
                        element(by.model("vm.textSearch")).clear();
                        browser.waitForAngular();
                        element(by.model("vm.textSearch")).sendKeys('euifeufhewuifheuifh');
                        expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
                        element(by.model("vm.textSearch")).clear();
                        browser.waitForAngular();
                    });

                    // add textattribute10 here
                      it("Check Attribute10 Can be added successfully", function () {
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
                        element(by.model("vm.attribute.title")).sendKeys(textboxattr10);
                        browser.waitForAngular();
                        var type = element.all(by.options('item._id as item.title for item in vm.types'));
                        var defaulttype = type.first();
                        browser.waitForAngular();
                        expect(defaulttype.getText()).toEqual('-- Please Select --');
                        element(by.model('vm.type._id')).$('[value="string:571751efc22217130039947c"]').click(); // select type as Text Area
                        var formate = element.all(by.options('item._id as item.title for item in type.formats'));
                        var defaultformate = formate.first();
                        browser.waitForAngular();
                        expect(defaultformate.getText()).toEqual('-- Please Select --');
                        element(by.model('vm.type.format._id')).$('[value="string:129256789012345678902234"]').click(); // select formate as none
                        browser.waitForAngular();
                        element(by.css('[ng-click="vm.save(vm.attribute)"]')).click();
                        element(by.model("vm.textSearch")).sendKeys(textboxattr10);
                        expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
                        element(by.model("vm.textSearch")).clear();
                        browser.waitForAngular();
                        element(by.model("vm.textSearch")).sendKeys('euifeufhewuifheuifh');
                        browser.waitForAngular();
                        expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
                        element(by.model("vm.textSearch")).clear();
                        browser.waitForAngular();
                    });





});
