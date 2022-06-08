const BASE_URL_MAIN = 'https://mocki.io/v1/04cc8dd9-1e48-4eee-8b64-a68d8d61ea60'
const BASE_URL_FILTER = 'https://mocki.io/v1/ae52ab8c-8435-4e34-98e3-6fbd6690a153'

export const getData = async (filter) => {
  try {
    const response = await window.fetch(filter ? BASE_URL_FILTER : BASE_URL_MAIN);
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
