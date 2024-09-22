// import '../App.css';
import Footer from '../components/footer';
import Card3 from '../components/Card3';
import Team from '../components/Team';
// import photo1 from '../Assets/Untiteled.jpg';
// // import photo2 from '../Assets/Untiteled1.jpg';
// import photo3 from '../Assets/Untiteled2.jpg';
// // import photo4 from '../Assets/Untiteled3.jpg';
// import photo5 from '../Assets/Untiteled4.jpg';
// // import photo6 from '../Assets/Untiteled5.jpg';
// import photo7 from '../Assets/Untiteled6.jpg';
// import photo8 from '../Assets/Untiteled7.jpg';
// import photo9 from '../Assets/Untiteled8.jpg';
// import photo10 from '../Assets/Untiteled9.jpg';
// // import photo11 from '../Assets/Untiteled10.jpg';
// import photo12 from '../Assets/Untiteled11.JPG';
// import photo13 from '../Assets/Untiteled12.jpg';
// import photo14 from '../Assets/Untiteled13.jpg';
// import photo15 from '../Assets/Untiteled14.jpg';
// // import photo16 from '../Assets/Untiteled15.jpg';
// // import photo17 from '../Assets/Untiteled16.jpg';
// // import photo18 from '../Assets/Untiteled17.jpg';
// import photo19 from '../Assets/Untiteled18.jpg';
// import photo20 from '../Assets/Untiteled19.jpg';
// import photo21 from '../Assets/Untiteled20.jpg';
// import photo22 from '../Assets/Untiteled21.jpeg';
// import photo23 from '../Assets/Untiteled22.jpg';
// import photo24 from '../Assets/Untiteled23.jpg';
// import photo25 from '../Assets/Untiteled25.jpg';
// import photo26 from '../Assets/Untiteled26.jpeg';
// import photo27 from '../Assets/Untiteled27.jpg';
// import photo28 from '../Assets/Untiteled28.jpg';
// import photo29 from '../Assets/Untiteled29.jpg';
// import photo30 from '../Assets/Untiteled30.PNG';
// import photo0 from '../Assets/Untiteled0.png';
// import photo31 from '../Assets/Untiteled31.JPG';
// import photo32 from '../Assets/Untiteled32.jpg';

//heads
import divij from '../Assets/Images/Heads/divij.jpg'
import photo_yuvraj from '../Assets/Images/Heads/Yuvraj.jpg'

//events
import allu from '../Assets/Images/Events/allu.jpg'
import bhuvan from '../Assets/Images/Events/bhuvan.jpg'
import divya from '../Assets/Images/Events/divya.jpg'
import pranesh from '../Assets/Images/Events/pranesh.jpg'
import rishabh from '../Assets/Images/Events/rishabh.jpg'
import srinivas from '../Assets/Images/Events/srinivas.jpg'

//finance
import asad from '../Assets/Images/Finance/asad.jpeg'
import govind from '../Assets/Images/Finance/govind.jpg'
import Siddhant from '../Assets/Images/Finance/siddhant.jpg'
import Soham from '../Assets/Images/Finance/soham.jpg'


//Media
import amit from '../Assets/Images/Media/amit.jpg'
import devotio from '../Assets/Images/Media/devotio.jpeg'
import kevin from '../Assets/Images/Media/kevin.jpg'
import manan from '../Assets/Images/Media/manan.jpg'
import Rishikesh from '../Assets/Images/Media/rishikesh.jpg'

//PR
import divino from '../Assets/Images/PR/divino.jpeg'
import pramod from '../Assets/Images/PR/pramod.jpg'
import rishi from '../Assets/Images/PR/rishi.jpg'
import sathvika from '../Assets/Images/PR/sathvika.jpg'
import vignesh from '../Assets/Images/PR/vignesh.jpeg'


//Webops
import Jaimin from '../Assets/Images/WebOps/jaimin.jpg'
import prakash from '../Assets/Images/WebOps/prakash.jpg'
import tilak from '../Assets/Images/WebOps/tilak.jpg'

//branding
import saumya from '../Assets/Images/Branding/saumya.jpg'
import nitya from '../Assets/Images/Branding/nitya.jpeg'
import aadhya from '../Assets/Images/Branding/aadhya.jpeg'
import punith from '../Assets/Images/Branding/punith.jpg'


//Mentors
import vaibhav from '../Assets/Images/Mentors/vaibhav.jpg'
import mihir from '../Assets/Images/Mentors/mihir.jpg'

const teams = [{ Team_name: "Events and Management Team", Team_members: [{ Name: "Allu Sai Kowshik", Position: "Lead", Photo: allu }, { Name: "Bhuvan D", Position: "Core Member", Photo: bhuvan }, { Name: "P Divya Sarayu Sri", Position: "Core Member", Photo: divya }, { Name: "Rishabh Arvind Pandey", Position: "Core Member", Photo: rishabh }, { Name: "Vanama Sai Srinivas", Position: "Core Member", Photo: srinivas }, { Name: "Pranesh Vijayakumar", Position: "Core Member", Photo: pranesh }] },
{ Team_name: "Finance and Capital Team", Team_members: [{ Name: "Siddhant Chatse", Position: "Lead", Photo: Siddhant }, { Name: "Soham Bhagwat", Position: "Core Member", Photo: Soham }, { Name: "Nandagovind J V", Position: "Core Member", Photo: govind }, { Name: "Syed Asad Ali", Position: "Core Member", Photo: asad }] },
{ Team_name: "Public Relations and Outreach Team", Team_members: [{ Name: "Vignesh Kumar", Position: "Lead", Photo: vignesh }, { Name: "B. Eesa Sathvika", Position: "Core Member", Photo: sathvika }, { Name: "Rishi Ravi", Position: "Core Member", Photo: rishi }, { Name: "Divino Adorat", Position: "Core Member", Photo: divino }, { Name: "M PRAMOD", Position: "Core Member", Photo: pramod }] },
{ Team_name: "Branding and Promotions Team", Team_members: [{ Name: "Saumya Sinha", Position: "Lead", Photo: saumya}, { Name: "Nitya Srikari Kallakuri", Position: "Core Member", Photo: nitya }, { Name: "Aadhya Agrawal", Position: "Core Member", Photo: aadhya }, { Name: "Punith ", Position: "Core Member", Photo: punith }] },
{ Team_name: "Web Operations Team", Team_members: [{ Name: "Prakash Pandey", Position: "Lead", Photo: prakash }, { Name: "Tilak Reddy", Position: "Core Member", Photo: tilak }, { Name: "Viramgama Jaimin", Position: "Core Member", Photo: Jaimin }] },
{ Team_name: "Media and Engagement Team", Team_members: [{ Name: "Manan Chavda", Position: "Lead", Photo: manan }, { Name: "Kevin Prashan", Position: "Core Member", Photo: kevin }, { Name: " Devotio Adorat ", Position: "Core Member", Photo: devotio }, { Name: " Amit Jomy", Position: "Core Member", Photo: amit }, { Name: "Rishikesh Reddy ", Position: "Core Member", Photo: Rishikesh }] }];

function TeamPage() {
    return (
        <>
            <div style={{ display: 'flex', textAlign: 'center', flexDirection: 'column', margin: "5%" }}>
                <h1 className="text-blue-500 mt-8 text-5xl text-center font-extrabold">HEADS</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}><Card3 name={"Yuvraj "} position={"Head"} photo={photo_yuvraj}></Card3>
                <Card3 name={"Divij Gupta "} position={"Head"} photo={divij}></Card3></div>

                <h1 className="text-blue-500 mt-8 text-5xl text-center font-extrabold">Mentors</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}> <Card3 name={"Vaibhav "} position={"Mentor"} photo={vaibhav}></Card3>
                <Card3 name={"Mihir"} position={"Mentor"} photo={mihir}></Card3></div>

                {teams.map((team, index) => { return <Team team_name={team.Team_name} team_members={team.Team_members} key={index}></Team> })}
            </div>
        </>
    );
}

export default TeamPage;