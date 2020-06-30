
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to Url
        await driver.get('http://olga-casuneanu.github.io');

        // Enter text "cheese" and perform keyboard action "Enter"
        await driver.findElement(By.id('addTextInput')).sendKeys('buy milk', Key.ENTER);

        let selector = By.css('#toDoList > li > input[type=text]:nth-child(2)');
        let firstResult = await driver.wait(until.elementLocated(selector), 10000);

        console.log(await firstResult.getAttribute('value'));
    }
    finally{
        driver.quit();
    }
})();