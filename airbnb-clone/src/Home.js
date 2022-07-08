import React from 'react';
import './Home.css'
import Cards from './Cards';

const Home = () => {
  return (
    <div>
        <div className='card_section'>
            <Cards 
            src="https://a0.muscache.com/im/pictures/miso/Hosting-50888753/original/edfc6e22-e967-44c6-b303-585c9ace772e.jpeg?im_w=720"
            title="The Knotty Pine"
            description="Root yourself in a grove of tall Pine and Cedar trees"
            price="$250/night"
            />
            <Cards 
            src="https://a0.muscache.com/im/pictures/373eddbd-c5ea-414a-8683-2065671ca4c0.jpg?im_w=720"
            title="Sweet Retreat"
            description="The Sweet Retreat is perfectly located in the heart of the Sierra Mountains"
            price="$360/night"
            />
            <Cards 
            src="https://a0.muscache.com/im/pictures/e7e72c42-3268-4e06-992b-bb75b6aa0a00.jpg?im_w=720"
            title="Prospectors Paradise "
            description="Stake your claim on this luxurious gold country retreat that will immerse you in the gold rush era!"
            price="$100/night"
            />
        </div>
        <div className='card_section'>
            <Cards 
            src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-624749665168082661/original/adbc6d89-61e5-4d80-ad3e-bfdc80c61736.jpeg?im_w=720"
            title="Lake Front"
            description="his is a large lakefront home built by us for our family"
            price="$310/night"
            />
            <Cards 
            src="https://a0.muscache.com/im/pictures/miso/Hosting-38105331/original/363acc91-a27f-4ff8-ab53-c37e123371a5.jpeg?im_w=720"
            title="Pine Mountain Lake"
            description="Pine Mountain Lake is located in a private gated community in Groveland 25 miles from Yosemite"
            price="$230/night"
            />
            <Cards 
            src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-36346364/original/9686d0df-4c34-4bd0-b163-5988cd7eab67.jpeg?im_w=720"
            title="Studio In The Pines"
            description="a few minutes from Twain Harte Lake, a 20 minute drive to magnificent Pinecrest Lake"
            price="$300/night"
            />
        </div>
    </div>
  )
}

export default Home