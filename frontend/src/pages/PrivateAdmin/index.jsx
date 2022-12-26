import React, { useState, useEffect } from "react";
import { Container } from "./styles";

export const PrivateAdmin = () => {
  const [searchCity, setSearchCity] = useState("");

  useEffect(() => {
    // If searchCity is 2 letters or more
    if (searchCity.length > 1) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=sampleAPIKEYhere`
      )
        .then((res) => res.json())
        .then((data) => {
          // Do what ever you want with data
        });
    }
  }, [searchCity]);

  const handleOnChange = (e) => {
    e.preventDefault()
    setSearchCity(e.target.value)
  }

  return (
    <Container>
        <form>
    <input type="text" placeholder="Search a city" onChange={(e) => handleOnChange(e)}/>
  </form>
    </Container>
  );
  
}