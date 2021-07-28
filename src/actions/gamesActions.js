import axios from "axios";
import { popularGamesUrl } from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData,
    },
  });
};
