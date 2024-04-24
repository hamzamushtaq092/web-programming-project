import React from 'react'
import './Landing_page.css'
import  { useNavigate }  from 'react-router-dom'
function Landing_page() {
    let navigate = useNavigate();
  return (

    <>
    <div className="landing_page_container ">
        <div className="landing_page_logo">Logo</div>
        <div className="landing_page_left">
            <div className="landing_page_left_heading">
                <div className='landing_page_left_heading_1'>WELCOME TO</div>
                <div className='landing_page_left_heading_2'>MANAGEMENT</div>
            </div>
            <div className="landing_page_left_about">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi harum odio repudiandae distinctio perspiciatis id hic similique eius assumenda dolores necessitatibus dicta iure, aut fugiat veritatis repellat nisi non provident asperiores laborum accusantium. Amet adipisci temporibus vero quidem ex, quibusdam omnis sapiente culpa distinctio rem aut aliquam ipsum, nemo suscipit!
            </div>
            <div id='landing_page_left_button'>
                <button onClick={() => {
                navigate("/login");}}>Get Started</button>
            </div>
        </div>
        <div className="landing_page_right"></div>
    </div>
    </>
  )
}

export default Landing_page