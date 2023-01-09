const getComicData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

const postComicData = async (data) => {
  const url = "https://comic-can.herokuapp.com/api/v1/comicData";

  if (data.image_path) {
    data.verified = "true";
  } else {
    data.image_path =
      "https://www.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584341.jpg";
  }

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};

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


export { getComicData, postComicData, putComicData, deleteComic }