const getComicData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

const putComicData = async (url, newComic) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComic),
  };
  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
}

const deleteComic = async (url) => {
  const requestOptions = {
    method: "DELETE",
  };
  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};


export { getComicData, putComicData, deleteComic }