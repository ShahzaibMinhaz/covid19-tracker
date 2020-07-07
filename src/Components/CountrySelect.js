import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import './CountrySelect.css'
import CountrydataCards from './CountryDataCard'

export const CountrySelect = () =>{

    
    let [countryName,setcountryName] = useState([])
    let [CurrentCountry, setCurrentCountry] = useState("")
    const [Countrydata,setCountrydata] = useState([{}]);

    function HandleChange(country){
        setCurrentCountry(country)
    }

    

    useEffect(()=>{

        async function getCountries(){
          const response = await fetch('https://covid19.mathdro.id/api/countries')
          const data = await response.json()
          const updata = data.countries
          console.log(updata)
          const Countries = updata.map((country)=> country.name)
          setcountryName(Countries)
        }
        getCountries()

    },[])


    useEffect(() => {

        if(CurrentCountry){
            async function getCountrydata() {
                const res = await fetch(`https://covid19.mathdro.id/api/countries/${CurrentCountry}`)
                const da = await res.json()
                const data = Object.values(da)
                const Countrydata = data.map((country)=> country.value)
                const getdata={
                    Confirmed : Countrydata[0],
                    recovered : Countrydata[1],
                    deaths : Countrydata[2],
                    date : Object.values(da)[3]
                }
                setCountrydata(getdata)
            }
            getCountrydata()
        }


    }, [CurrentCountry])
    return (
        <div >
            <h1 className='h1'>Country Data</h1>
            <FormControl className = 'formcontrol'>
                <NativeSelect className="Select" defaultValue="" onChange={(event)=> HandleChange(event.target.value)} >
                    <option value="Select Country">Select Country</option>
                    {countryName.map((country,ind)=> 
                            <option key={ind} value={country}>{country}</option>
                    )}
                </NativeSelect>
            </FormControl>
            <CountrydataCards Countrydata = {Countrydata} />
        </div>
    )
}