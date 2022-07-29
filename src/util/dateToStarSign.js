// Aquarius Dates: January 21-February 18
// Pisces Dates: February 19-March 20
// Aries Dates: March 21-April 19.
// Taurus Dates: April 20-May 20.
// Gemini Dates: May 21-June 20.
// Cancer Dates: June 21-July 22.
// Leo Dates: July 23-August 22.
// Virgo Dates: August 23-September 22.
// Libra Dates: September 23-October 22.
// Scorpio Dates: October 23-November 21.
// Sagittarius Dates: November 22-December 21
// Capricorn Dates: December 21-January 20

export const dateToStarSign = (date) => {
  if (date === undefined) return undefined;
  const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
  const signs = [
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
  ];
  let month = date.getMonth();
  let day = date.getDate();
  if (month === 0 && day <= 20) {
    month = 11;
  } else if (day < days[month]) {
    month--;
  }
  return signs[month];
};
