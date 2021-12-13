const helpers = {
  numtoChar: function (month) {
    month = month.replace(/\//g, " ");
    var mountNum = parseInt(month.substring(0, 2));
    var months = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ];
    var dayandyear = month.substring(2);
    return months[mountNum - 1].concat(" ", dayandyear);
  },
};

export default helpers;
