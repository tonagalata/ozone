import React from "react";
import './component.css'
// import Timeline from 'timeline-editor-react';
import Song from '../audio/file_example_WAV_10MG.wav' 
// import WaveformPlaylist from 'waveform-playlist';
import Waveform from "./Waveform";
// import PlayList from "./PlayList";

// const tracks = [
//     {
//       id: 0,
//       url:
//         "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
//     },
//     {
//       id: 1,
//       url:
//         "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3"
//     }
//   ];

const TimelineComponent = (...props) => {
    // const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
    return ( 
        <>
            <div className='timeline'>
                <button type="button" class="btn-pause btn btn-outline-warning" title="Pause">
                    <i class="fas fa-pause"></i>
                </button>
                <button type="button" class="btn-play btn btn-outline-success" title="Play">
                    <i class="fas fa-play"></i>
                </button>
                <button type="button" class="btn-stop btn btn-outline-danger" title="Stop">
                    <i class="fas fa-stop"></i>
                </button>
                <button type="button" class="btn-rewind btn btn-outline-success" title="Rewind">
                    <i class="fas fa-fast-backward"></i>
                </button>
                <button type="button" class="btn-fast-forward btn btn-outline-success" title="Fast forward">
                    <i class="fas fa-fast-forward"></i>
                </button>
                <div>
                    <Waveform url={Song} />
                    {/* <PlayList
                        tracks={tracks}
                        selectedTrack={selectedTrack}
                        setSelectedTrack={setSelectedTrack}
                    /> */}
                    {/* <h1>TimelineComponent</h1> */}
                    {/* <Timeline layers={layers} frames={frames} onUpdateFrames={onUpdateFrames} /> */}
                </div>
                
            </div>
            
        </>
    );
}
 
export default TimelineComponent;