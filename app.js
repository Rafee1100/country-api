fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data))

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries')
    // for(let i=0;i<countries.length ;i++){
    //     const country =countries[i];
    countries.forEach(country =>{
        const countryDiv = document.createElement('div')
        countryDiv.className = 'country';
        const countryInfo = `
        <h3 class='country-name'>${country.name}</h3>
        <p>${country.capital}</p>
        <img src="${country.flag}" width='50px' height='50px'>
        <br><br>
        <button> Details</button>
        `
        countryDiv.innerHTML = countryInfo
    
        countriesDiv.appendChild(countryDiv)
    
    });
}
       