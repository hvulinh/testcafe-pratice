import { Selector, t } from 'testcafe';

class DateTime {
	
	async convertStringToDateTime(dateTimeStr) {
		let year = new Date().getFullYear();    // Get current year
		let month = dateTimeStr.toString().substring(0, 3);
		let day = dateTimeStr.toString().substring(4, 6);
		let hour = dateTimeStr.toString().substring(8, 10);
		let minute = dateTimeStr.toString().substring(11, 13);
		let dayNight = dateTimeStr.toString().substring(13);
		let string = year + "-" + month + "-" + day + " " + hour + ":" + minute;
		
		if (dayNight == "pm") {    // Move time forward 12 hours if pm
			return new Date(new Date(string).getTime() + (12 * 60 * 60 * 1000));
		} else {
		    return new Date(new Date(string).getTime());
		}
	}
	
	async isDateTimeEqual(date01, date02, offset = (1 * 60 * 1000)) {
		let duration = date01.getTime() - date02.getTime();
		
		if (Math.abs(duration) <= offset) {
			return true;
		} else {
			return false;
		}
	}
}

export default new DateTime();