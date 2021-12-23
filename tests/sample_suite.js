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
	    .expect(HomePage.dateInfo.visible).ok()
		.expect(HomePage.dateInfo.innerText).match(DATETIME_REGX)
		.expect(await DateTime.isDateTimeEqual(
		    await DateTime.convertStringToDateTime(
			    await HomePage.dateInfo.innerText), new Date())).ok()
		
		.expect(HomePage.locInfo.visible).ok()
		.expect(HomePage.locInfo.innerText).eql(DATA.TC01.expectedOutput.toString())
		
		.expect(HomePage.tempInfo.visible).ok()
		.expect(HomePage.tempInfo.innerText).match(TEMP_REGX)

		.takeScreenshot();
	
});