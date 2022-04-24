const getData = async (quantity) => {
  const fakeUrl = `https://fakerapi.it/api/v1/custom?_quantity=${quantity}&uuid=uuid&image=image&city=city&country=country&description=text`;

  try {
    const results = await fetch(fakeUrl);
    const data = await results.json();
    return data;
  } catch (error) {
    return 'Error: There was an error communicating with DB.';
  }
}

export { getData };
