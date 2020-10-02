import React, { useEffect } from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

export default function Footer({ spotify }) {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((res) => {
      console.log(res);

      dispatch({
        type: "SET_PLAYING",
        playing: res.is_playing,
      });
      dispatch({
        type: "SET_ITEM",
        item: res.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((res) => {
      dispatch({
        type: "SET_ITEM",
        item: res.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((res) => {
      dispatch({
        type: "SET_ITEM",
        item: res.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <div className="footer">
      {/* Image and song details on left of footer*/}
      <div className="footer_left">
        <img
          src={item?.album.images[0].url}
          alt={item?.name}
          className="footer_albumLogo"
        />
        {item ? (
          <div className="footer_songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer_songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      {/* Play Pause Shuffle function in center of footer*/}
      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon onClick={skipNext} className="footer_icon" />

        {playing ? (
          <PlayCircleOutlineIcon
            onCLick={handlePlayPause}
            fontSize="large"
            className="footer_icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onCLick={handlePlayPause}
            fontSize="large"
            className="footer_icon"
          />
        )}
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>

      {/* Volume Controle and playlist icon on right side of footer */}
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
