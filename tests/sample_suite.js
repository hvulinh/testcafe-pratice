import HomePage from '../page_model/home_page.js';
import DateTime from '../helpers/sample_helper.js';

const DATA = require("../data/sample_data.json");

fixture `Sample Test Suite`
    .page `https://openweathermap.org/`
	
test('TC01 - Verify user can search for weather of a city', async t => {
    const DATETIME_REGX = /^[A-Z][a-z]{2} \d{2}, \d{2}:\d{2}(am|pm)$/;    // e.g. Dec 23, 01:20pm
    const TEMP_REGX = /^-?\d+°C$/;    // e.g. 10°C, -10°C
	
    await HomePage.searchCity(DATA.TC01.input);
	
    await t
        // Verify display date
        .expect(HomePage.dateInfo.visible).ok()                      // Verify visible
        .expect(HomePage.dateInfo.innerText).match(DATETIME_REGX)    // Verify display format
        .expect(await DateTime.checkDateEqual(                       // Verify display date match current date
            await DateTime.convertStringToDate(
                await HomePage.dateInfo.innerText), new Date())).ok()
		
        // Verify display location
        .expect(HomePage.locInfo.visible).ok()                               // Verify visible
        .expect(HomePage.locInfo.innerText).eql(DATA.TC01.expectedOutput)    // Verify location output
		
        // Verify display temperature
        .expect(HomePage.tempInfo.visible).ok()                  // Verify visible
        .expect(HomePage.tempInfo.innerText).match(TEMP_REGX)    // Verify display format

        .takeScreenshot();
	
});