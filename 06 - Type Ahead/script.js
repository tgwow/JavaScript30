const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(endpoint)
    .then(blob => blob.json())
    .then(places => cities.push(...places))

function findAnyMatch(wordToMach, cities) {
     return cities.filter(place => {
        const regex = new RegExp(wordToMach, 'gi')
        return place.city.match(regex) || place.state.match(regex)
     })
}    
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function display() {
    const matchArray = findAnyMatch(this.value, cities)
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi')
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span>${numberWithCommas(place.population)}</span>
            </li>
        `
    }).join('')
    inputSuggestions.innerHTML = html
}

const inputSearch = document.querySelector('.search')
const inputSuggestions = document.querySelector('.suggestions')

inputSearch.addEventListener('change', display)
inputSearch.addEventListener('keyup', display)
