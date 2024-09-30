"use client"
import { Slider } from "@/components/ui/slider"
import React, { useEffect, useRef, useState } from 'react'


const formatedElement = (numb) => {
    return numb < 10 ? `0${numb}` : numb;
}

const formattedTime = (date) => {
    const minutes = Math.floor(date / 60);
    const seconds = date % 60;
    return `${formatedElement(minutes)}:${formatedElement(seconds)}`;
}

const AudioBlock = ({src}) => {
    const [play, setPlay] = useState(false);
    const [durationToDisplay, setDurationToDisplay] = useState("00:00");
    const [currentTimeToDisplay, setCurrentTimeToDisplay] = useState("00:00");
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volumeParams, setVolumeParams] = useState(50);
    const [volume, setVolume] = useState(true);

    const audioRef = useRef();


    useEffect(() => {
        audioRef.current.load();
    }, []);

    const onSetPlay = () => {
        const audioCurrent = audioRef.current;
        if (play) {
            setPlay(false);
            audioCurrent.pause();
        } else {
            setPlay(true);
            audioCurrent.play();
        }
    };

    const handleLoadedMetadata = () => {
        const currentDuration = audioRef.current.duration;

        setDurationToDisplay(formattedTime(currentDuration.toFixed(0)));
        setDuration(currentDuration.toFixed(0));
    };

    const handleTimeUpdate = () => {
        const currentTimeAudio = audioRef.current.currentTime;
        const fixedAudioLenght = currentTimeAudio.toFixed(0);
        setCurrentTimeToDisplay(formattedTime(fixedAudioLenght));
        setCurrentTime(fixedAudioLenght);
        if(fixedAudioLenght === duration) {
            setPlay(false)
        }
    };

    const handleSliderChange = (value) => {
        const newTime = value[0];
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
        setCurrentTimeToDisplay(formattedTime(newTime));
    };

    const onSetVolume = () => {
        const audio = audioRef.current;
        if(audio.muted) {
            setVolume(true)
            audio.muted = false;
        } else {
            setVolume(false)
            audio.muted = true;
        }
    }

    

    return (
        <div className="w-full flex items-center">
            <audio
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                ref={audioRef}
                className="w-full"
                src={src}
            />
            <button onClick={onSetPlay} className="mr-3 h-[14px] w-[14px]">
                {play ? <img src="/icons/audio-pause.svg" alt="Pause" /> : <img src="/icons/audio-play.png" alt="Play" />}
            </button>
            <span className="text-xs mr-2 text-grey-dark uppercase font-normal tracking-[1.92px]">
                {currentTimeToDisplay}
            </span>

            <Slider
                className="bg-light-grey-01 hover:cursor-pointer transition"
                value={[currentTime]} 
                onValueChange={handleSliderChange}   
                max={duration}   
                step={1}        
            />
            <span className="text-xs ml-3 text-grey-dark uppercase font-normal tracking-[1.92px]">
                {durationToDisplay}
            </span>
            <button onClick={() => onSetVolume()} className="ml-2 w-4 h-4 relative">
                <img src="/icons/audio-sound.png" alt="sound" />
                {!volume && <span className="w-4 h-[1.2px] bg-primary block absolute top-[7px] -left-[2px] -rotate-45"></span>}
            </button>
            <a download href={src} className="ml-4">
                <img src="/icons/audio-download.png" alt="sound" />
            </a>
        </div>
    );
}

export default AudioBlock;
