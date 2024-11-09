import React from "react";
import "./Card1.css"
import photo from "../Assets/Untiteled.jpg"
const Card1 = (props) => {
    console.log(props.key_prop)
    return (
        
        <div className={"card1-container sm:mx-auto my-[3%]  md:mx-10 w-fit"} id={"key-"+props.key_prop}>
            <figure className="snip1344 w-[250px] h-[250px]"><img src={props.members.Photo} alt="profile-sample1" className="background" /><img src={props.members.Photo} alt="profile-sample1" className="profile" />
                <figcaption>
                    <h3 style={{fontSize:'large'}} className="mt-4">{props.members.Name}<span>{props.members.Position}</span></h3>
                    {/* <div className="icons"><a href={props.members.LinkedIn}><i className="ion-social-linkedin-outline"></i></a><a href={props.members.Twitter}> <i className="ion-social-twitter-outline"></i></a><a href={props.members.Instagram}> <i className="ion-social-instagram-outline"></i></a></div> */}
                </figcaption>
            </figure>
        </div>
    )
}

export default Card1;