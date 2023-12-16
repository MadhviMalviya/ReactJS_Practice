import React, { useState } from 'react'
import '../style/Card.css'
import { BsCake2 } from "react-icons/bs";
import { BsCake2Fill } from "react-icons/bs";
import { nanoid } from 'nanoid';

const arr = [{
    id: nanoid(),
    name: 'Hermione Granger',
    year: 1887,
    img: 'https://th.bing.com/th/id/OIP.jPFJB4YgBdWcr5CDbvchwQHaJ4?rs=1&pid=ImgDetMain'
},
{
    id: nanoid(),
    name: 'Harry Potter',
    year: 1887,
    img: 'https://th.bing.com/th/id/OIP.9bDp43fGithLSRdOwvhj4wAAAA?w=360&h=455&rs=1&pid=ImgDetMain'
}, {
    id: nanoid(),
    name: 'Ron Wealesly',
    year: 1887,
    img: 'https://s-media-cache-ak0.pinimg.com/originals/a8/e2/3d/a8e23d2d3c11f4c396ea9b2406740fd5.jpg'
},
{
    id: nanoid(),
    name: 'Albus Dumbuldore',
    year: 1887,
    img: 'https://th.bing.com/th/id/OIP.Lro9HJYWY-9a1J1hfsW-sAHaJ4?rs=1&pid=ImgDetMain'
}]



function Card() {
    const [wishStatus, setWishStatus] = useState({});
  
    function handleWish(id) {
      setWishStatus((prevStatus) => ({
        ...prevStatus,
        [id]: !prevStatus[id],
      }));
    }
  
    return (
      <section className='birthday'>
        <div className='card'>
          <h2>Birthday Reminder</h2>
          {arr.map((bday) => (
            <div key={bday.id} className='card-content'>
              <div className='avatar-img'>
                <img className='avatar' src={bday.img} alt='img' />
              </div>
              <div className='content'>
                <h3>{bday.name}</h3>
                <p>{bday.year}</p>
              </div>
              <button className='icon' onClick={() => handleWish(bday.id)}>
                {wishStatus[bday.id] ? <BsCake2 /> : <BsCake2Fill  />}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Card;


  