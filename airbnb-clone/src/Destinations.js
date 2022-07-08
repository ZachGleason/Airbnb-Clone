import React from 'react';
import './Destinations.css';
import { GiWoodCabin, GiWaterfall, GiIsland, GiTreehouse, GiModernCity } from 'react-icons/gi';
import { MdBeachAccess, MdPark } from 'react-icons/md';
import Button from '@mui/material/Button';
import { BsSliders } from 'react-icons/bs';



const Destinations = () => {
  return (
    <div className='destinations'>
        <div className='cabins'>
            <button> 
                <GiWoodCabin fontSize="30px"/>
                <p>Cabins</p>
            </button>   
        </div>
        <div className='beach'>
            <button>
                <MdBeachAccess fontSize="30px"/>
                <p>Beach</p>
            </button>
        </div>
        <div className='park'>
            <button>
                <MdPark fontSize="30px"/>
                <p>National Parks</p>
            </button>
        </div>
        <div className='waterfalls'>
            <button>
                <GiWaterfall fontSize="30px"/>
                <p>Waterfalls</p>
            </button>
        </div>
        <div className='islands'>
            <button>
                <GiIsland fontSize="30px"/>
                <p>Islands</p>
            </button>
        </div>
        <div className='exotic'>
            <button>
                <GiTreehouse fontSize="30px"/>
                <p>Exotic</p>
            </button>
        </div>
        <div className='city'>
            <button>
                <GiModernCity fontSize="30px"/>
                <p>City</p>
            </button>
        </div>
        <div className='filter'>
            <BsSliders fontSize="15px"/>
            <Button variant='outlined'>Filters</Button>
        </div>
    </div>  
  )
}

export default Destinations