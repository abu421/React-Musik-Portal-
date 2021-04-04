import React, { useState, useRef } from "react";
import './Music.css';
import Audio from './Audio';

const Music = ({music}) => {

    const [isPlaying, setIsPlaying] = useState(false);

    // const get_image_path = (albumId) => `https://api.napster.com/imageserver/v2/albums/${albumId}/images/500x500.jpg`;

    // const audioHandler = () => {
    //     setIsPlaying(current => !current);
    // };

    // const RotateAnimationStyle = () => isPlaying? 'rotate': null;

    return (
        <div className="music_container">         
            {
                music.map(value => {
                   return (
                        <div className="single_track" key={value.id}>
                            <Audio value ={value}/>
                            <span className="overlay">{value.name}</span>
                            {/* <img className={RotateAnimationStyle()} src={get_image_path(value.albumId)} alt="album" />
                            <audio onPlay={audioHandler} onPause={audioHandler} controls>
                                <source src={value.previewURL} type="audio/mp3" />
                            </audio> */}
                        </div>
                    );
                })
            }

        </div>
    );
    
}

export default Music;