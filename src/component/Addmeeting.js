import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Addmeeting() {
    const title = useRef(null);
    // const image=useRef(null);
    const date = useRef(null);
    const disc = useRef(null);
    const [submitStatus, setSubmitStatus] = useState(null);
    const navigate = useNavigate(true)
    const [loading,setLoading]=useState(false)
    function submitHandler() {
        const titleData = title.current.value;
        // const imgData = image.current.value;
        const dateData = date.current.value;
        const discData = disc.current.value;
        //creating an object
        // const TempMeetingData  = []
        const meeting = {
            title: titleData,
            // image:imgData,
            date: dateData,
            disc: discData,
        }
        // TempMeetingData.push(meeting)

        if (titleData != '' && dateData != '' && discData != '') {

            fetch('https://meetings-61cfc-default-rtdb.firebaseio.com/meetings.json', {
                method: 'post',
                body: JSON.stringify(meeting)
            }).then(() => {
                console.log(meeting)
                setSubmitStatus('meeting is created and your now directed to Home page')
            }).then(()=>{
                setLoading(true)
            }).then(() => {
               setTimeout(() => {
                navigate('/')
               }, 2000);
            })

        }
        else {
            setSubmitStatus('invalid title')
        }

    }

    return (
        <div className="Addmeetings-container container">
            <h2>create a new meeting </h2>
            <div className="small-addmeeting-container">
                <input placeholder="enter meeting title" ref={title} />
                {/* <input  placeholder="enter meeting image " ref={image} /> */}
                <input placeholder="enter meeting date " type={"datetime-local"} ref={date} />
                <textarea placeholder="enter meeting discription " ref={disc} />
                <button onClick={submitHandler}>Create meeting
            <div className={loading? "loadingio-spinner-rolling-atl3gjvcufj":"d-none"}><div className="ldio-clb47qbkl6"> <div></div> </div></div>
                
                 </button>
                <p className="submitStatus">{submitStatus} </p>
            </div>
            <footer>By creating new meeting you are agreeing to terms and condition of MEET.ing </footer>

        </div>
    )
}

export default Addmeeting;