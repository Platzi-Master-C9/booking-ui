const getData = (api) => {
  return fetch(api)
    .then(response => response.json())
    .then(response => response)
    .catch(error => error);
}

const getAsyncData = async (api) => {
  try {
    const results = await fetch(api);
    const data = await results.json();
    return data;
  } catch (error) {
    return null;
  }
}

export { getData, getAsyncData };
