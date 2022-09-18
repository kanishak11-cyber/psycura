
import ReactAudioPlayer from 'react-audio-player';
const Audio = () => {
  return (
    <div className='w-[10vw]'>
         <ReactAudioPlayer
      src="my_audio_file.ogg"
      autoPlay
      controls
    />
    </div>
  
   
  )
}

export default Audio