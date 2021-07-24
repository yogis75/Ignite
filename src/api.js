//Base URL
const base_url = "https://api.rawg.io/api/";

//Key URL
const key_url = `key=${process.env.REACT_APP_RAWG_API}`;

//Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Getting the day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay} `;
console.log(currentDate);
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay} `;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay} `;

//Popular Games
const popular_games = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
