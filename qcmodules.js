
describe("QCModule page", function ()

{
  var list = element(by.model('vm.options.pageSize'));
  var qcmodulename = "I Know it'll allow to add me the same again";
  var existingqcmodulename = "I Know it'll allow to add me the same again";

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
    // check by default page size is 10


    it("go to QC Module", function () {
        expect(element(by.linkText('QC Module')).isPresent()).toBe(true)
                  element(by.linkText('QC Module')).click();

                  expect(browser.getCurrentUrl()).toContain("#/modules/list");
                  expect(list.$('option:checked').getText()).toEqual('10');
                  element(by.model('vm.options.pageSize')).$('[value="number:20"]').click();
                  element(by.model('vm.options.pageSize')).$('[value="number:50"]').click();
              });


        // check system allows to enter duplicate qc module

            // to allows special setting




            // to allows special setting





//
// QC Module Name must be unique.
// QC Module Name should be atleast 2 characters long.

    // add new qc module and check added QC module is reflecting properly
    it("check system allows to add qc module", function () {
        element(by.linkText('Add New')).click();
        expect(browser.getCurrentUrl()).toContain("#/modules/edit");
        var moduletitle = element(by.model("vm.module.title"));
        moduletitle.sendKeys(qcmodulename);
// to allows special setting
        element(by.model("vm.module.allowSpecialSettings")).click();
        element(by.css('[ng-click="vm.save(vm.module)"]')).click();

    });

    it("check system allows to add qc module", function () {
        element(by.linkText('Add New')).click();
        expect(browser.getCurrentUrl()).toContain("#/modules/edit");
        var moduletitle = element(by.model("vm.module.title"));
        moduletitle.sendKeys(existingqcmodulename);
// to allows special setting
        element(by.model("vm.module.allowSpecialSettings")).click();
        element(by.css('[ng-click="vm.save(vm.module)"]')).click();

    });

    add new qc module and check added QC module is reflecting properly
    it("check by search we can find added element", function () {
      element(by.model("vm.textSearch")).sendKeys(qcmodulename);
      expect(element(by.repeater('row in vm.options.data')).isPresent()).toBe(true);
      element(by.model("vm.textSearch")).clear();
    });

    it("For improper data search no records should get display", function () {
        element(by.model("vm.textSearch")).sendKeys("hiergheruighergihihi");
          expect(element(by.repeater('row in vm.options.data')).isPresent()).toBe(false);
          element(by.model("vm.textSearch")).clear();
    });

  });
