class DateTime {
	
    /**
     * Convert a string into Date object.
     * The format of the string must be: "MMM dd, hh:mmam/pm" (e.g. Dec 23, 01:20pm).
     * @param {string} dateStr - The target string that will be convert to date
     * @return {Date} - The converted Date
     */
    async convertStringToDate(dateStr) {
        let year = new Date().getFullYear();                  // Get current year
        let month = dateStr.toString().substring(0, 3);       // Get month
        let day = dateStr.toString().substring(4, 6);         // Get day
        let hour = dateStr.toString().substring(8, 10);       // Get hour
        let minute = dateStr.toString().substring(11, 13);    // Get minute
        let dayNight = dateStr.toString().substring(13);      // Get am/pm
        let string = year + "-" + month + "-" + day + " " + hour + ":" + minute;
		
        if (dayNight == "pm") {    // Move time forward 12 hours if pm
            return new Date(new Date(string).getTime() + (12 * 60 * 60 * 1000));
        } else {
            return new Date(new Date(string).getTime());
        }
    }
	
    /**
     * Compare 2 dates and verify whether they are equal or not relatively using an offset value.
     * @param {date} date01 - The first target date to compare
     * @param {date} date02 - The second target date to compare
     * @param {number} offset - The offset value (milisecond)
     * @return {boolean} - The comparing result: true if equal, otherwise false
     */
    async checkDateEqual(date01, date02, offset = (5 * 60 * 1000)) {
        let duration = date01.getTime() - date02.getTime();
		
        if (Math.abs(duration) <= offset) {
            return true;
        } else {
            return false;
        }
    }
}

export default new DateTime();