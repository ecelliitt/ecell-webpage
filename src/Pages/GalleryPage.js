import React from "react";

import slide0 from '../Assets/Gallery/wrkshp2.jpg';
import slide1 from '../Assets/IMG_2100.JPG';
import slide2 from '../Assets/IMG_2324.jpg';
import slide3 from '../Assets/IMG_2327.jpg';
import slide4 from '../Assets/IMG_2577.jpg';
import slide5 from '../Assets/DSC_6558.jpg';
import slide6 from '../Assets/DSC_2594.jpg';

import slide7 from '../Assets/Gallery/cif.jpg';
import slide8 from '../Assets/Gallery/meeting.jpg';
import slide9 from '../Assets/Gallery/navik.jpg';
import slide10 from '../Assets/Gallery/ecellteam2324.jpeg';
import slide11 from '../Assets/Gallery/csis.jpg';
import slide12 from '../Assets/Gallery/orient.jpeg';
import slide13 from '../Assets/Gallery/workshop.jpg';

const galleryContent = [{img:slide0,name:"E-summit IIT Madras",date:new Date("2024-11-11").toDateString().slice(3,15)},{img:slide1,name:"Session on Resume building",date:new Date("2024-11-11").toDateString().slice(3,15)},{img:slide2,name:"Team Ecell IITM visits IIT Tirupati",date:new Date("2024-11-11").toDateString().slice(3,15)},{img:slide3,name:"E-auction",date:new Date("2024-11-11").toDateString().slice(3,15)},{img:slide4,name:"E-aution",date:new Date("2024-11-11").toDateString().slice(3,15)},{img:slide5,name:"E-cell IITT students at Nirmaan",date:new Date("2024-11-11").toDateString().slice(3,15)}, {img:slide6,name:"E-aution",date:new Date("2024-11-11").toDateString().slice(3,15)},{img:slide7,name:"E-cell IITT students at Nirmaan",date:new Date("2024-11-11").toDateString().slice(3,15)}, {img:slide8,name:"E-aution",date:new Date("2024-11-11").toDateString().slice(3,15)},{img:slide9,name:"E-cell IITT students at Nirmaan",date:new Date("2024-11-11").toDateString().slice(3,15)}, {img:slide10,name:"E-aution",date:new Date("2024-11-11").toDateString().slice(3,15)},{img:slide11,name:"E-cell IITT students at Nirmaan",date:new Date("2024-11-11").toDateString().slice(3,15)}, {img:slide12,name:"E-aution",date:new Date("2024-11-11").toDateString().slice(3,15)},{img:slide13,name:"E-cell IITT students at Nirmaan",date:new Date("2024-11-11").toDateString().slice(3,15)}]
function GalleryPage() {

    return (
        <>
            <h1 className="text-blue-500 mt-20  text-5xl text-center font-extrabold">Gallery</h1>
            <div className="p-5 flex justify-evenly flex-wrap w-full">
                {galleryContent.map((card,index)=>{return (<div key={index} className="md:h-[300px] shadow-2xl relative my-5 rounded-lg"><img className="md:h-[300px] object-cover rounded-lg" src={card.img}></img>
                                                        <div className="team_overlay absolute top-0 w-full h-full opacity-[0] hover:opacity-[1] hover:bg-black/[0.4] rounded-lg [&>p]:hover:animate-[slideinYsm_0.25s_ease-in]">
                                                            <p className="text-2xl text-white font-bold md:mt-[220px] ml-4 ">{card.name}</p>
                                                            <p className="text-sm text-white font-bold ml-4 ">{card.date}</p>
                                                        </div>
                                                     </div>
                )})}
            </div>                                                        
        </>
    );
}

export default GalleryPage;