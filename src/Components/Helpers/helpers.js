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

  numtoChar2: function (month) {
    month = month.replace(/\//g, " ");
    let t = 0;
    month = month.replace(/ /g, (match) => (++t === 2 ? ", " : match));
    var mountNum = parseInt(month.substring(0, 2));
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var dayandyear = month.substring(2);
    return months[mountNum - 1].concat(" ", dayandyear);
  },
  injectBr: function (title) {
    let position = title.search(":");
    let titleFront = title.slice(0, position + 1);
    let titleEnd = title.slice(position + 1);
    const element = (
      <h5 className="heroTitle">
        {titleFront}
        <br />
        {titleEnd}
      </h5>
    );
    return element;
  },
};

export default helpers;
