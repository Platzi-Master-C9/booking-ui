const BASE_URL = 'https://mocki.io/v1/04cc8dd9-1e48-4eee-8b64-a68d8d61ea60'

export const getData = async (pathName) => {
  try {
    const response = await window.fetch(BASE_URL);
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
