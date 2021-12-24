import { Selector, t } from 'testcafe';

class HomePage {
    constructor () {
		// Search Section
		this.searchInput = Selector('.search input');
	    this.searchBtn = Selector('.search button');
		
		// Weather Info Section
	    this.dateInfo = Selector('.current-container > div > span');
	    this.locInfo = Selector('.current-container > div > h2');
	    this.tempInfo = Selector('.current-temp span');
	}
	
	/**
	 * Perform the searching action for a city.
	 * @param {string} city - The target city
	 * @return {void} - Nothing
	 */
	async searchCity (city) {
		await t
		    .typeText(this.searchInput, city)
		    .click(this.searchBtn)
		    .click('.search-container ul li:nth-child(1)');    // TODO: Improve this locator
	}
}

export default new HomePage();