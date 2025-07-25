import React from "react";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import { CCarousel, CCarouselItem, CCarouselCaption, CImage, CCard } from '@coreui/react'
import InitiativeCard from "../components/InitiativeCard";
import MottoCard from "../components/MottoCard";
import photo1 from '../Assets/ideate.jpg';
import photo2 from '../Assets/innovate.jpg';
import photo3 from '../Assets/implement.jpg';
import slide1 from '../Assets/IMG_2100.JPG';
import slide2 from '../Assets/IMG_2324.jpg';
import slide3 from '../Assets/IMG_2327.jpg';
import slide4 from '../Assets/IMG_2577.jpg';
import slide5 from '../Assets/DSC_6558.jpg';
import slide6 from '../Assets/DSC_2594.jpg';
import plane_img from '../Assets/paper_plane.jpg';
import background_img from '../Assets/background.jpg';
// import plane_svg from '../Assets/plane.svg';
import './Home.css';


//Poster section
import speaker1 from '../Assets/Speakers/inmoviduposter.png'
import speaker2 from '../Assets/Speakers/IPRWorkshop.jpeg'
import speaker3 from '../Assets/Speakers/Workshoponstartupfunding.jpg'
import speaker4 from '../Assets/Speakers/ECellandIIMM_ExpertLectureFlyer.png'

//speakers section 
import speakerimg1 from '../Assets/Speakers/speaker_img/mridula.jpg'
import speakerimg2 from '../Assets/Speakers/speaker_img/srihari.jpg'
import speakerimg3 from '../Assets/Speakers/speaker_img/srinivas_thub.jpeg'

const Home = () => {
    // const carouselElement = document.getElementById('carousel-example');
    // const slides = [<div className="item w-full h-96 m-10 bg-white"></div>,<div className="item w-full h-96 m-10 bg-white"></div>,<div className="item w-full h-96 m-10 bg-white"></div>,<div className="item w-full h-96 m-10 bg-white"></div>,<div className="item w-full h-96 m-10 bg-white"></div>]
    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ];
    return (
        <>

            <div className="w-100 absolute top-0 -z-10">
                <img src={background_img} className="w-100 h-[100vh] object-cover opacity-[10%]"></img>
            </div>
            <section id="intro" className="h-[90vh]">
                <div className="h-[20vh]">
                    <h1 className="text-blue-700 text-center w-[100%] absolute mt-[38vh] mb-5 text-4xl md:text-8xl font-extrabold animate-[slideinY_1s]">ENTREPRENEURSHIP CELL</h1>
                    <div className="flex justify-center animate-[slideinY_1.5s]">
                        <h1 className="text-blue-700 text-center mt-[52vh] ml-6 mb-5 text-3xl md:text-6xl font-extrabold ">IIT TIRUPATI</h1>
                        <img className="relative w-10 md:w-20 ml-10 mt-[52vh] h-fit" src={plane_img}></img>
                    </div>
                </div>
            </section>
            <div className="bg-blue-700 flex justify-center w-[100%] h-[10vh]">
                <h1 className="text-white md:mt-[2vh] mt-[3vh] absolute text-center text-2xl md:text-5xl animate-[slideinY_0.8s_ease-in]">IDEATE  |  INNOVATE  |  IMPLEMENT</h1>
            </div>
            {/* <h2 className="text-black m-5 text-3xl font-mono">ABOUT US</h2>
            <p className="text-black m-5 md:w-2/4 text-lg animate-slidein">The morning sun cast a warm glow over the sleepy town, gently coaxing its inhabitants to rise and embrace the day. Birds chirped cheerfully, their melodies weaving through the tranquil air. In the distance, the faint aroma of freshly brewed coffee wafted from a quaint café, inviting passersby to indulge in its comforting embrace. It was a moment of quiet serenity, a pause in the hustle and bustle of life, where time seemed to slow down and the simple joys of existence took center stage.</p>
            <Link to="/Team"><button class="bg-blue-800 text-white hover:scale-110 transition-transform duration-300 font-bold w-48 flex flex-row justify-between py-2 mx-5 px-4 rounded-full">
                <h1 className="text-lg h-fit  pt-1">Know More</h1><svg fill="white" className="w-fill h-10" viewBox="0 0 24 24">
                    <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd" />
                </svg>
            </button></Link> */}

            <h1 className="text-blue-700 mt-24 text-5xl text-center font-extrabold">OUR MOTTO</h1>
            <div className="flex justify-center flex-col md:flex-row">
                <div className="zoom"><MottoCard logo={photo1} title={"IDEATE"} content={"We help students to identify problems all around us to propose a solution for creating a successful enterprise"} /></div>
                <div className="zoom"> <MottoCard className="zoom" logo={photo2} title={"INNOVATE"} content={"Exposure to technology will bring in the Innovation”, that's exactly what we believe in"} /></div>
                <div className="zoom"> <MottoCard className="zoom" logo={photo3} title={"IMPLEMENT"} content={"We help students to align themselves along the entrepreneurial lines  to turn their idea into reality."} /></div>
               
               
            </div>
            <h1 className="text-blue-700 mt-24 mb-16 text-5xl text-center font-extrabold">OUR VISION</h1>
            <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between h-fit">
                <div className="md:w-2/3 w-[95%] mx-auto"> 
                    <CCarousel controls indicators>
                        <CCarouselItem>
                            <img className="h-[500px] w-full object-cover" src={slide1}/>
                        </CCarouselItem>
                        <CCarouselItem>
                        <img className="h-[500px] w-full object-cover" src={slide2}/> 
                        </CCarouselItem>
                            <CCarouselItem>
                            <img className="h-[500px] w-full object-cover" src={slide3}/>
                        </CCarouselItem>
                        <CCarouselItem>
                        <img className="h-[500px] w-full object-cover" src={slide4}/>
                        </CCarouselItem>
                        <CCarouselItem>
                        <img className="h-[500px] w-full object-cover" src={slide5}/>
                        </CCarouselItem>
                        <CCarouselItem>
                        <img className="h-[500px] w-full object-cover" src={slide6}/>
                        </CCarouselItem>
                    </CCarousel>
                </div>
                <div className="md:w-1/3 w-[95%] md:ml-10 my-4 md:my-auto bg-blue-600 rounded-2xl md:rounded-none md:rounded-r-2xl" id="vision"><p>Our vision is to enable smooth and efficient interaction between students, faculty, working professionals, aspiring and existing entrepreneurs, mentors, angel investors and venture capitalists for incubating ideas. We are a non-profit student's organization dedicated to promoting the spirit of entrepreneurship among students of IIT Tirupati and students throughout India</p></div>
            </div>

            <h1 className="text-blue-700 mt-24 text-5xl text-center font-extrabold">INITIATIVES</h1>
            <div className="animate-slidein_b">
                <CCarousel controls indicators>
                    <CCarouselItem>
                        <InitiativeCard name={"Workshop on Bussiness Model Canvas"} speaker_name={"Mridula Chettri"} speaker_title={"Founder, Inmovidu Tech Pvt. Ltd. India"} content={"She has more than 12 years of experience of working in enterprises such as IBM and startups such as NestAway and Saraplast. With this wide array of business exposure, she find it an asset to understand business at various growth stages."} image = {speaker1} speaker = {speakerimg1}></InitiativeCard>
                    </CCarouselItem>
                    <CCarouselItem>
                        <InitiativeCard name={"IPR workshop on Innovation, Invention and Creativity"} speaker_name={"Mr. Srihari S K & Dr. Yamuna A"} speaker_title={"Patent Attorney, K&S Partners, Chennai"} image = {speaker2} speaker={speakerimg2} content={"Srihari S K is a Partner of K&S Partners. He is a recipient of several awards and has over 15+ years of experience in the Intellectual Property (IP) domain."}></InitiativeCard>
                    </CCarouselItem>
                    <CCarouselItem>
                        <InitiativeCard name={"SPEAKER"} speaker_name={"Srinivas Rao Mahankali"} speaker_title={"CEO of T-Hub Hyderabad"} content={"Mahankali Srinivas Rao (MSR) is the Chief Executive Officer of T-Hub and leads its mission of driving results and collaboration for entrepreneurs’ success. An accomplished serial entrepreneur, MSR has built and scaled businesses across geographies over his 35-year stint in the IT industry."} image = {speaker3} speaker={speakerimg3}></InitiativeCard>
                    </CCarouselItem>
                </CCarousel>
            </div>


        </>
    )
}

export default Home;