import React from 'react';
import avatarImg from '../images/avatarImg.png';
function Card() {
    return (
      <>
        <div className="card bg-white w-[385px] h-[180px] m-2 rounded-lg shadow-lg">
          <div className="top">
            <p className='p-4'>
                Thank You for your service. I am very pleased,<br />
                with the result. I have seen exponencial<br />
                growth in my business and its all thanks to your<br />
                amazing service
            </p>
                <img src={avatarImg} alt='avatar Image' className='-mt-4 rounded-full'/>
                <p className='ml-16 -mt-6'>CEO, Marketing Guru</p>
                <p className='ml-16 -mt-10 font-bold'>Emily Stones</p>
          </div>
        </div>
      </>
    );
  }
  export default Card;