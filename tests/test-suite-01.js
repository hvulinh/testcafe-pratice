import HomePage from '../page-model/homepage';

fixture `Test Suite 01`
    .page `https://openweathermap.org/`
	
test('TC01 - Verify user can search for weather of a city', async t => {
	
	const EXPECTED_DATETIME = new Date().toLocaleDateString('en-US', { month:"short", day:"numeric" });    // e.g. Dec 19
	const EXPECTED_LOC = 'Ha Noi, VN';
	const TEMP_REGX = /^-?\d+°C$/;    // e.g. 10°C, -10°C
	
	await HomePage.searchCity('Ha Noi');
	
	await t
	    .expect(HomePage.dateInfo.innerText).contains(EXPECTED_DATETIME)
		.expect(HomePage.locInfo.innerText).eql(EXPECTED_LOC)
		.expect(HomePage.tempInfo.innerText).match(TEMP_REGX)
		.takeScreenshot();
		
});