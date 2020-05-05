import React from 'react';

const  VideoDetail = (props) =>{
    if (!props.videoSelected){
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${props.videoSelected.id.videoId}`
    return (
        <React.Fragment>
            <div className='ui embed'>
                <iframe src={videoSrc}
                        title='video player'
                ></iframe>
            </div>

      
                    <div className='ui segment'>
                    <div className='ui header'>
                        <h4>{props.videoSelected.snippet.title}</h4>
                        <p>{props.videoSelected.snippet.description}</p>
                    </div>

            </div>

        </React.Fragment>
    );
}

export default VideoDetail;