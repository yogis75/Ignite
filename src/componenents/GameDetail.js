import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
//Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";
import starHalf from "../img/star-half.png";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  //GET START
  const getStars = () => {
    const stars = [];
    // const rating = Math.floor(game.rating);
    const rating = game.rating;
    for (let i = 1; i <= 5; i++) {
      // if (i <= rating) {
      //   stars.push(<img alt="star" key={i} src={starFull}></img>);
      // } else if (i > rating && i - rating < 1) {
      //   stars.push(<img alt="star" key={i} src={starHalf}></img>);
      // } else {
      //   stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      // }
      let starShape = "";
      if (i <= rating) {
        starShape = starFull;
      } else if (i > rating && i - rating < 1) {
        starShape = starHalf;
      } else {
        starShape = starEmpty;
      }
      stars.push(<img alt="star" key={i} src={starShape}></img>);
    }
    return stars;
  };

  //GET PLATFORM IMAGES
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 5":
        return playstation;
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "Xbox Series S/X":
        return xbox;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      case "PC":
        return steam;
      default:
        return gamepad;
    }
  };
  //Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <Rating>
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </Rating>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      alt="platform"
                      src={getPlatform(data.platform.name)}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt="Background"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt="game"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  @media (max-width: 768px) {
    width: 85%;
  }

  border-radius: 1rem;
  padding: 2% 5%;
  background: white;
  position: absolute;
  left: 10%;
  z-index: 10;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 2rem;
    width: 2rem;
    display: inline;
    @media (max-width: 768px) {
      height: 0.7rem;
      width: 0.7rem;
    }
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
    @media (max-width: 768px) {
      margin-left: 1rem;
    }
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

const Rating = styled(motion.div)`
  /* @media (max-width: 768px) {
    width: 20%;
    font-size: 1rem;
    img {
      height: 0.7rem;
      width: 0.7rem;
    }
  } */
`;

export default GameDetail;
