import './intiativecard.css';


const InitiativeCard = (props) => {
    return (
        <div className="md:w-3/4 mx-auto my-10 flex flex-col md:flex-row">
            <div className="w-[550px] bg-slate-950 hidden md:flex text-white text-center border-gray-800 border rounded-3xl h-[550px]">
                <img id="speaker_poster" src = {props.image} alt ="Poster image"></img>
            </div>
            <div className="flex w-full flex-col">
                <h1 className="text-black mx-auto mt-10 text-3xl text-center font-normal">{props.name}</h1>
                <div className="w-full h-96 flex flex-row justify-center sm:mx-auto my-4 md:mx-5 md:my-10 text-center bg-black-950 text-blue">
                    <div className="w-[200px] hidden md:flex text-white h-[200px]" id="speakers_div">
                        <img id="speakers_img" src = {props.speaker} alt = "Speakers img"></img>
                    </div>
                    <div id="speaker_det">
                        <h1 id="speak_h1">{props.speaker_name}</h1>
                        <h3 id="speaker_title">{props.speaker_title}</h3>
                        <p id="speaker_content">{props.content}</p></div>
                    </div>
                    
                <button className="bg-blue-800 text-white [&>svg]:hover:translate-x-4 hover:scale-105 [&>svg]:duration-500 duration-500 font-bold w-48 flex flex-row justify-between py-2 mx-5 px-4 rounded-full">
                    <h1 className="text-lg h-fit  pt-1">More Info</h1><svg fill="white" className="w-fill h-10" viewBox="0 0 24 24">
                        <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default InitiativeCard;