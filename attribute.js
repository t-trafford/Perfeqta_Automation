
describe("QCModule page", function ()

{
  var list = element(by.model('vm.options.pageSize'));
  var qcmodulename = "nfs 2017";
  var textboxattr = "Cust ID"
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


    it("go to attribute screen", function () {
            element(by.linkText('Attributes')).click();
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
        expect(lastOption.getText()).toEqual(qcmodulename);
        firstOption.click();
        expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
     // expect there is no attriibute inside this
        lastOption.click();
        expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);

  });

  it("Check Attributes Can be added successfully", function () {

      element(by.linkText('Add New')).click();
      expect(browser.getCurrentUrl()).toContain("#/attributes/edit");
      var qcmoduledropdowninattr = element.all(by.options('module._id as module.title for module in vm.modules'));
      var frstoptn = qcmoduledropdowninattr.first();
      var lstoptn =  qcmoduledropdowninattr.last();
      expect(frstoptn.getText()).toEqual('-- Please Select --');
      expect(lstoptn.getText()).toEqual(qcmodulename);
      lstoptn.click();
      element(by.model("vm.attribute.title")).sendKeys(textboxattr);
      var type = element.all(by.options('item._id as item.title for item in vm.types'));
      var defaulttype = type.first();
      expect(defaulttype.getText()).toEqual('-- Please Select --');
      element(by.model('vm.type._id')).$('[value="string:57175257c74217130039948c"]').click();
      var formate = element.all(by.options('item._id as item.title for item in type.formats'));
      var defaultformate = formate.first();
      expect(defaultformate.getText()).toEqual('-- Please Select --');
     element(by.model('vm.type.format._id')).$('[value="string:123456789912345678901234"]').click();
      element(by.css('[ng-click="vm.save(vm.attribute)"]')).click();
      element(by.model("vm.textSearch")).sendKeys(textboxattr);
      expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(true);
      element(by.model("vm.textSearch")).clear();
      element(by.model("vm.textSearch")).sendKeys('euifeufhewuifheuifh');
      expect(element(by.repeater('field in vm.fields')).isPresent()).toBe(false);
      element(by.model("vm.textSearch")).clear();
});

});
