//Base URL
const base_url = "https://api.rawg.io/api/";

//Key URL
const key_url = process.env.REACT_APP_RAWG_API;

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
const nextYear = currentYear + 1;
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay} `;

//Popular Games
const popular_games = `games?key=${key_url}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//Upcoming Games
const upcoming_games = `games?key=${key_url}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

//New Games
const newGames = `games?key=${key_url}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;

export const newGamesUrl = () => `${base_url}${newGames}`;

export const gameDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}?&key=${key_url}`;
