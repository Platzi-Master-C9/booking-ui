const BASE_URL = 'https://624c7e76d71863d7a80bb010.mockapi.io/places/'

export const getData = async (pathName) => {
  try {
    const response = await window.fetch(BASE_URL+pathName);
    console.log(response)
    if (!response.ok) {
      return { error: `Http status ${response.status}`};
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error.message }
  }
}
