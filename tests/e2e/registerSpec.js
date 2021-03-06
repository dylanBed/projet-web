describe('inscription and login', function() {

  beforeEach(function() {
    browser.get('http://localhost:4200/login');
  });

  it('tentative de register', function() {
    var registerButton = element(by.id('btnRegister'));
    registerButton.click();
    browser.waitForAngular()

    var username = element(by.id('usernameRegister'));
    var email = element(by.id('emailRegister'));
    var password = element(by.id('passwordRegister'));
    var saveButton = element(by.id('btnSaveRegister'));

    username.sendKeys('toto');
    email.sendKeys('toto@gmail.com')
    password.sendKeys('aze');
    saveButton.click();
  });

  it('tentative de login',function(){
    var username = element(by.id('username'));
    var password = element(by.id('password'));
    var loginButton = element(by.id('btnLogin'));

    username.sendKeys('toto');
    password.sendKeys('aze');
    loginButton.click();
    browser.waitForAngular();
    expect(browser.driver.getCurrentUrl()).toMatch('/parcourir');
  });

});
