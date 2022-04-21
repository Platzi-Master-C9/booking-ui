import { getData, getAsyncData } from "../../../src/components/resultsPage/API/getData";

describe('Fetch API', () => {
	const URL = 'https://google.com';

  beforeEach(() => {
    fetch.resetMocks();
  });

  test('get data from API', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: 'Ya llegamos!' }));

    getData(URL)
      .then((response) => {
        expect(response.data).toEqual('Ya llegamos!');
      });

		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith(URL);
  });

  it('get async data from API', async () => {
		fetch.mockResponseOnce(JSON.stringify({ data: '123...' }));

		const asyncData = await getAsyncData(URL);

		expect(asyncData.data).toEqual('123...');
		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith(URL);
  });
});
