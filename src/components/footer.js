import { Link } from 'react-router-dom';
import Logo from '../Assets/e_cell_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
    return (
        <div className="bg-blue-700 p-4 pb-0 text-white" id="footer">
            <div className='md:flex justify-between ml-0'>
                <div className='md:w-1/3 [&>a]:md:text-3xl [&>a]:text-xl [&>a]:pb-2 [&>a]:block '>
                    <form noValidate>
                        <h1 className='text-2xl md:text-xl pb-4 md:mt-1 font-extrabold'>SUBSCRIBE TO OUR NEWSLETTER</h1>
                        <input type='email' id='subscribeEmail' placeholder='EMAIL ADDRESS' className='w-[70%] bg-transparent focus:outline-none placeholder-white/[0.9] border-b-2' />
                        <p id='subscribeEmailError' className='hidden text-xs'>*Please enter a valid email id</p>
                        <button type='submit' onClick={(e) => {
                            // e.preventDefault();
                            const emailInput = document.getElementById('subscribeEmail');
                            const emailError = document.getElementById('subscribeEmailError');
                            if (!emailInput.value.includes("@")) {
                                e.preventDefault();
                                emailError.style.display = "block";
                            } else {
                                emailError.style.display = "none";
                            }
                        }} className="bg-white text-blue-700 [&>svg]:hover:translate-x-2 hover:scale-105 [&>svg]:duration-500 duration-500 font-bold w-fit flex flex-row justify-evenly py-1 my-4 pr-3 rounded-full">
                            <h1 className="text-lg mt-[0px] h-fit  pt-1 pr-2 pl-4">SUBSCRIBE</h1><svg fill="#1d4ed8" className="h-9 " viewBox="0 0 24 24">
                                <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd" />
                            </svg>
                        </button>
                    </form>


                </div>
                <div className='md:w-1/3 my-10 md:my-0 text-center '>
                    <div className='flex justify-center row'>
                        <div className='flex w-fit'>
                            <div className='relative'>
                                {/* <div className='w-20 h-20  relative bg-white rounded-full'></div> */}
                                <div className='mt-[0.75rem] md:mt-0'>
                                    <img src={Logo} className='w-24  z-10'></img>
                                </div>
                            </div>
                            <div className='w-2 rounded-sm mx-4 bg-white'></div>
                            <div>
                                <h1 className='mt-[5%] font-extrabold text-3xl'>Entrepreneurship Cell</h1>
                                <h1 className='font-extrabold text-3xl'>IIT Tirupati</h1>
                            </div>
                        </div>
                        <div className='flex justify-center mt-16 [&>img]:px-2 '>
                            <a target='_blank' href='https://www.linkedin.com/company/e-cell-iit-tirupati/'><FontAwesomeIcon className='mx-3' size='xl' icon={faLinkedin} /></a>
                            <a target='_blank' href='https://www.instagram.com/ecell_iitt/?next=%2F'><FontAwesomeIcon className='mx-3' size='xl' icon={faInstagram} /></a>
                            <a target='_blank' href='https://x.com/ecell_iitt'><FontAwesomeIcon className='mx-3' size='xl' color='black' icon={faXTwitter} /></a>
                            <a target='_blank' href='https://www.facebook.com/people/E-Cell-IIT-Tirupati/100064832861995/'><FontAwesomeIcon className='mx-3' size='xl' icon={faFacebook} /></a>

                        </div>

                    </div>
                </div >
                <div className='md:w-1/3 [&>a]:md:text-xl md:text-right [&>a]:text-xl [&>a]:pb-2 [&>a]:block '>
                    <h1 className='text-2xl md:text-3xl pb-4 font-extrabold'>Quick links</h1>
                    <Link to="/Team">Team</Link>
                    <Link to="/Events">Events</Link>
                    <Link to="/Gallery">Gallery</Link>
                    <Link to="/">TEDx</Link>
                </div>
            </div>
            <section className='flex mt-6 justify-between'>
                <div className='inline-block '>
                    <p className=''>Developed by WebOps Team | E-Cell IIT Tirupati</p>
                </div>
                <div className='inline-block text-end'>
                    <p>@ E-cell IIT Tirupati. All Rights Reserved</p>
                </div>
            </section>
        </div>

    )
}