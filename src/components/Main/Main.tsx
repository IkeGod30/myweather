import React from 'react';
import { useState, useEffect } from 'react';

import './Main.css';
import Welcome from '../Welcome/Welcome';
import Date_City from '../Date_City/Date_City';
import Description from '../Description/Description';
import Temp from '../Temp/Temp';
import Temperatures from '../Temperatures/Temperatures';
import Search from '../Search/Search';
import WeatherImage from '../WeatherImage/WeatherImage';


import axios from 'axios';

interface Mydata {
    message: string;
    data: any;
    

}




// fetchData()
// const infomation = await fetchData();

// fetchData()
// const getWeather = async()=> {
//     try {
//         const weatherDataFetch = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=be69986a27fff2945a8def7bd4e36055', {
//             headers: {
//                 Accept: 'application/json'
//             }
//         });
//         const weatherDat = await weatherDataFetch.json();
//     console.log(weatherDat)
//     console.log(weatherDat.list)
//     }
//     catch(error) {
//         console.log(error)
//     }
// }
// getWeather()

const Main: React.FC = (props)=> {
    // const [dati, setdati] = useState<Mydata[]>([])

    // useEffect(()=> {
    //     async function fetchData(): Promise<Mydata[]> {
    //     const response = await axios.get<Mydata[]>('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=be69986a27fff2945a8def7bd4e36055')
    //     // setdati(response.data);
    //     return response.data;
    //     console.log(response.data);
    // }
    // fetchData();
    // }, []);
   
   
    // console.log(response.data);

//   export class TVShowAPI {
//         static async fetchPopulars() {
//            const response = await axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=be69986a27fff2945a8def7bd4e36055');
//            console.log(response.data.results);
//            return response.data.results;
    
//         }
        
//     }

    

    

    


useEffect(()=> {
    const getWeather = async()=> {
        try {
            const weatherDataFetch = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=be69986a27fff2945a8def7bd4e36055', {
                headers: {
                    Accept: 'application/json'
                }
            });
            const weatherDat = await weatherDataFetch.json();
        console.log(weatherDat)
        // console.log(weatherDat.list)
        }
        catch(error) {
            console.log(error)
        }
    }
    getWeather()
}, []);
//    getWeather()


   
  return (
    <div className='main'>
        {}
        <Welcome />
        <Search />
        <Date_City city={'Hi'}/>
        <WeatherImage />
        <Description />
        <Temp />
        <Temperatures />
      
    </div>
  )
}

export default Main;
