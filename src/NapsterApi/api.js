const apikey = "ZTg4OTQ0ZjQtY2UxNy00YjFlLThlZTUtMjU1MTI2MGMwMzll";
const limit = 20;

const napster_url = (genreId, page=0) => {
    page = page - 1;
    return `https://api.napster.com/v2.2/genres/${genreId}/tracks/top?limit=${limit}&offset=${page * limit}`;
};


export const getMusic = (genreId, page) => {

    const tracks = fetch(napster_url(genreId, page), {
                    "method": "GET",
                    "headers": {
                        "apikey": apikey,
                    }
                })
                .then(response => {
                    return response.json();
                }).catch(error => {
                    console.log(error);
                });

    return tracks;
};
