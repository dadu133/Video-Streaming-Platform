import v1 from './images/cse.mp4'
import img1 from './images/cover2.JPG'
import img2 from './images/cover3.JPG'
import img3 from './images/cover4.JPG'
import React, { useRef } from 'react'
console.log("welcome to spotify");
//initilalize the variables
function Main() {
    const one = useRef()
    const two = useRef()
    const three = useRef()
    function playvideo(data) {
     console.log("hellc "+data);
    
    }
    return (
        <>
            <div className="container">
                <div className="song-list">
                    <h1>Best of NCV - No Copyrighted Videos</h1>
                    <div className="song-item-container">
                        <div className="song-item">
                    
                            <span className="song-name">1. CSE Video</span>
                            <video controls ref={one} width="35%" poster={img1} onPlay={playvideo(1)}>
                                <source src={v1} type="video/mp4"/>
                                Sorry, your browser doesn't support videos.
                            </video>

                        </div>
                        <div className="song-item">
                            
                            <span className="song-name">2. Tiger Video</span>
                            <video controls ref={two} width="35%" poster={img2} onPlay={playvideo(2)}>
                                <source src="./images/cse.mp4" type="video/mp4"/>
                                Sorry, your browser doesn't support videos.
                            </video>

                        </div>
                        <div className="song-item" >
                            <span className="song-name">3. Nature Video</span>
                            <video controls ref={three} width="35%" poster={img3} onPlay={playvideo(3)}>
                                <source src="./images/cse.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support videos.
                            </video>
                        </div>


                    </div>
                </div>
            </div>
            

        </>
    )
}


export default Main;