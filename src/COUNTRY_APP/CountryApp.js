import React, {useState, useEffect} from "react";

import Countries from "./Countries";
// import style from './countryApp.module.css'
import Search from "./Search";

const url = "https://restcountries.com/v3.1/all";

const CountryApp = () => {
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(countries)
  
    const fetchData = async (url) => {
      setIsloading(true);
  
      try{
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
        setIsloading(false);
        setError(null);
      }catch(error){
        setIsloading(false);
        setError(error);
      }
  
    }
  
    useEffect(() => {
      fetchData(url)
    }, []);

    const handleRemoveCountry = (name) => {
      const filter = filteredCountries.filter((country) => country.name.common !== name);
      setFilteredCountries(filter);
    }

    const handleSearch = (searchValue) => {
      let value = searchValue.toLowerCase();
      const newCountries = countries.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(value)
      })
      setFilteredCountries(newCountries);
    };

    return (
      <>
        <h1>Country App</h1>
        <Search onSearch = {handleSearch}/>
        {isloading && <h2>Loading...</h2>}
        {error && <h2>{error.message}</h2>}
        {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry}/>}
      </>
    );
}

export default CountryApp;