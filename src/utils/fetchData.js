export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e62cfa865emshc0e427428b69741p1fa199jsn89beab202124",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e62cfa865emshc0e427428b69741p1fa199jsn89beab202124",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export async function fetchData(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}
