async function getSeriesByGenre(genre) {
    const url = `https://moviesminidatabase.p.rapidapi.com/series/byGen/${genre}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '78293461c8msh0fb7516f0b530cdp1f4c99jsn5a37d56978a6',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    };
    let result;

    try {
        const response = await fetch(url, options);
        result = await response.json();
    } catch (error) {
        console.error('get series by genre error');
    }
    return result;
}

export default getSeriesByGenre;