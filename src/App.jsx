
import petsnepal from './images/petsnepal.png'
import petsImg from './images/petsImg.jpg'
import cat from './images/cat.png'
import pup from './images/pup.png'
import dog from './images/dog.jpg'
import service from './images/service.jpg'
import contact from './images/contact.png'
import vax from './images/vax.jpg'

import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { HiUsers } from "react-icons/hi2";
import { IoPaw } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import './App.css'

const App = () => {
  return (<div>
    <div className="bg-[white] text-[#black] flex justify-around">
      <div>
        <img src={petsnepal} alt="Pets Nepal" className="w-[15rem] h-[7rem]" />
      </div>
      <div>
        <nav className="overflow-hidden p-5 text-[1.5rem] space-x-[5rem] mt-[1rem]">
          <a href="#home" className="">
            Home
          </a>
          <a href="#About" className="">
            About
          </a>
          <a href="#Services" className="">
            Services
          </a>
          <a href="#Blog" className="">
            Blog
          </a>

        </nav>
      </div>
    </div>
    <div className='w-[5rem] '></div>
    <main>
      <div ><h1 className='z-40 absolute text-[3rem] ml-[35rem] text-center font-Abril mt-[2rem]'>We care for your <br /> Little ones </h1><img className='w-[100%] ' src={petsImg} alt="Pets Nepal"/></div>
      <div className='' > <div><h2 className='text-center m-auto text-[4rem]'>About us </h2>
        <p className='text-[1rem] p-5 w-[50%] text-center m-auto '>Explore our comprehensive pet services, including expert veterinary care, pampering grooming sessions, and a range of offerings for your beloved companions. Tailored for their ultimate well-being!</p>
      </div>
        <div className='flex justify-center p-3 text-[1.5rem] space-x-[5rem]  text-center mt-[2.5rem]'>
          <div className='bg-[#FBF7F6] w-[14rem] rounded-tl-3xl rounded-br-3xl h-[17rem]'>
            <i className='flex justify-center '> <HiUsers className='p-2 bg-[#913832] w-[4rem] h-[3rem] mt-[2rem] text-[white] rounded-md' /></i>
            <h2 className='mt-[2rem] text-[3rem]'>200</h2><br />
            <p className='text-[#828282]'>Happy Customers</p>
          </div>
          <div className='bg-[#FBF7F6] w-[14rem] rounded-tl-3xl rounded-br-3xl h-[17rem] '>
            <i className='flex justify-center '> <IoPaw className=' p-2 bg-[#913832] w-[4rem] h-[3rem] mt-[2rem] text-[white] rounded-md' /></i>
            <h2 className='mt-[2rem] text-[3rem]'>200</h2><br />
            <p className='text-[#828282]'>Happy pets<br></br></p>
          </div>
          <div className='bg-[#FBF7F6] w-[14rem] rounded-tl-3xl rounded-br-3xl h-[17rem]]'>
            <i className='flex justify-center '> <MdRateReview className=' p-2 bg-[#913832] w-[4rem] h-[3rem] mt-[2rem] text-[white] rounded-md' /></i>
            <h2 className='mt-[2rem] text-[3rem]'>100</h2><br />
            <p className='text-[#828282]'>Customer review<br></br></p></div>

          <div className='bg-[#FBF7F6] w-[14rem] rounded-tl-3xl rounded-br-3xl h-[17rem]'>
            <i className='flex justify-center '><RiCustomerServiceFill className=' p-2 bg-[#913832] w-[4rem] h-[3rem] mt-[2rem] text-[white] rounded-md' /></i>
            <h2 className='mt-[2rem] text-[3rem]'>24/7</h2><br />
            <p className='text-[#828282]'>Customer Service</p>
          </div>
        </div>
      </div>

      {/* Hero Sectrion  */}
      {/* <div className='flex justify-center gap-1 bg-[#faf4f5]  h-[33rem] w-[100%]'>
        <div>
          <img className=' mt-[7rem]' src={cat} alt='cat' />
        </div>
        <div className=' mt-[4rem]'>
          <h2 className=' m-auto text-[3rem]'>How to take care of<br/>Your Pets </h2>
          <p className='w-[60%] mt-[2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat voluptatibus ratione doloribus quae neque cumque nam dolore!</p>
          <p className='w-[60%] mt-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae in inventore expedita et consectetur quaerat ipsa ullam, sapiente quis voluptatum reprehenderit voluptates illo illum.</p>
          <button>Discover More</button>
        </div>
        <div>
          <img className='' src={pup} />
        </div>
      </div> */}

      <div className='flex justify-center gap-10  w-[100%] bg-[#faf4f5] mt-[5rem] h-[30rem]'>
        <div className='mt-5'>
          <img src={cat} className='h-[20rem] w-[19rem] mt-[5rem]'/>
        </div>
        <div className='w-[33%] mt-[4rem]'>
          <h2 className='text-[2.7rem] font-semibold leading-tight pb-4'>How to take care of<br/>Your Pets</h2><br />
          <p className='text-[#828282]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quas dicta voluptates voluptatem corrupti fugit.</p><br />
          <p className='text-[#828282]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quas, architecto in,</p><br />
          <button className='h-[3rem] w-[10rem] bg-[#913832] text-white rounded-md'>Discover More</button>
        </div>
        <div>
        <img src={pup} className='h-[10rem] w-[14rem] mt-[14.5rem]' />
        </div>
      </div>
      <div className='flex justify-center pt-[4rem] mb-16'>
       <div className=''>
        <h1 className='text-[2.7rem] font-semibold leading-tight pb-4'>Servicing your Pet<br></br>with Style</h1>
        <p className='w-[70%]'>As a team of experienced Pet lovers and owners, we really get to know you and your pet</p>
        <ul className='list-disc leading-10 ml-4 mt-4 marker:text-#913832'>
        <li>Treatment for heart related diseases</li>
        <li>Medical Treatment for disords</li>
        <li>Treatment for Broken bones</li>
        </ul>
        <button className='h-[3rem] w-[10rem] bg-[#913832] text-white rounded-md mt-[1rem] ml-[1rem]'>Discover More</button>
       </div>
       <div>
        <img src={dog} className='h-[20rem] w-[30rem] mt-[1rem] ' ></img>
       </div>
      </div> 

       <div className='text-center w-[100%] h-[44rem] bg-[#faf4f5] mt-[05rem] '>  
       <h1 className='text-[2.7rem] font-semibold leading-tight pb-4 pt-[05rem]'>Services we offer</h1>

      <div className='flex justify-center gap-10 pt-[2rem]'>
      <div className='w-[20rem]  bg-white  rounded-tl-3xl rounded-br-3xl mt-1 h-[29.5rem]' >
          <img className=' rounded-br-3xl rounded-tl-3xl  ' src={service}></img>
          <h1 className='font-semibold p-[1rem]'>Grooming</h1>
          <p className='text-[#828282] w-[100%] justify-normal pb-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam error ratione cupiditate qui facilis optio placeat voluptatibus vel sunt atque distinctio, accusamus officia ut!</p>
          <span className='text-[#913832] text-[1.5rem]'>Learn more</span>
        </div>
        <div className='w-[20rem]  bg-white  rounded-tl-3xl rounded-br-3xl mt-1 h-[29.5rem]' >
          <img className=' rounded-br-3xl rounded-tl-3xl  ' src={vax}></img>
          <h1 className='font-semibold p-[1rem]'>Vacination</h1>
          <p className='text-[#828282] w-[100%] justify-normal pb-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam error ratione cupiditate qui facilis optio placeat voluptatibus vel sunt atque distinctio, accusamus officia ut!</p>
          <span className='text-[#913832] text-[1.5rem]'>Learn more</span>
        </div>
        <div className='w-[20rem]  bg-white  rounded-tl-3xl rounded-br-3xl mt-1 h-[29.5rem]' >
          <img className=' rounded-br-3xl rounded-tl-3xl  ' src={service}></img>
          <h1 className='font-semibold p-[1rem]'>Products</h1>
          <p className='text-[#828282] w-[100%] justify-normal pb-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam error ratione cupiditate qui facilis optio placeat voluptatibus vel sunt atque distinctio, accusamus officia ut!</p>
          <span className='text-[#913832] text-[1.5rem]'>Learn more</span>
        </div>

      </div>
      </div>  

      <div className='text-center w-[100%] h-[30rem] bg-[#white]'>
      <div className='w-[70%] h-[25rem] bg-[#faf4f5] mt-[6rem]  mx-[auto] rounded-[2rem]'>

      <div className='flex justify-center'>
         <div className='mt-[4rem]' >
          <h1 className='font-semibold text-[3rem]'>Get in Touch with Us </h1>
          <br></br>
          <p className='text-left'>The cat is a domestic speices of small canivorous mammal.<br/>It is the only domesticated speices in the Family Felidae.<br/>Contact us to get the treatment that your pet deserves</p>
          <button className='h-[3rem] w-[10rem] bg-[#913832] text-white rounded-md mt-12 mr-[2rem]'>Discover More</button>
</div>
        <div>
          <img src={contact} className='h-[22rem]'></img>
          
        </div>
        </div>

        </div>
      </div>
    </main>

    <footer className='w-[100%] h-[10em] bg-[#faf4f5] pb-0'>
    <div className='flex justify-center text-[2rem] gap-[2rem] pt-6' >
<i><FaFacebook /></i>
<i><FaTwitter /></i>
<i><FaInstagram /></i>
</div>
<p className='text-center pt-2  p-[1rem]  mt-[1rem] pb-0' > Home | About | Services | Blogs </p>

    <p className='text-center pt-2  p-[1rem]  mt-[1rem] ' >Copyright © 2024 Pet Nepal | Designed and Developed by Pranish Bista </p>

    </footer>
  </div>
  );
}

export default App;