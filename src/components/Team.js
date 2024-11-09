import Card1 from "./Card1";
import Card3 from "./Card3";
import Card2 from "./Card2";
import { useState } from "react";

const Team = (props) => {

    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         const square = entry.target.querySelector('.team-div');

    //         if (entry.isIntersecting) {
    //             square.classList.add('team-div-animation');
    //             return;
    //         }
    //         square.classList.remove('team-div-animation');
    //     });
    // });
    // window.onscroll = function () {
    //     let div_list = document.querySelectorAll('.team-div-wrapper')
    //     for (let i = 0; i < div_list.length; i++) {
    //         observer.observe(div_list[i]);
    //     }
    // }
    return (
        <>
            <div id="container" className="team-div-wrapper my-10">
                <div className="team-div team-div-animation h-full flex flex-col justify-center ">
                    <div className="team-decription w-full h-full pt-14">
                        <h1 className="text-center text-wrap w-full my-auto text-3xl font-bold font-sans">{props.team_name}</h1>
                        <p className="hidden md:flex mt-10 font-sans" style={{ color: "black" }}>{props.team_description}</p>
                    </div>
                    <div className="team-members  flex flex-col flex-wrap justify-center md:flex-row">
                        {props.team_members.map((members, index) => {
                            return <Card1 members={members} key={index} key_prop={index} ></Card1>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;