import { FetchCompanyDetails } from '../fetchCompanyDetails';

describe('FetchCompanyDetails', () => {
  test('should fetch company details successfully', async () => {
    // Mock the fetch function to return a fake response
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            companyDetails: [
              {
                symbol: 'AAPL',
                name: 'Apple Inc.',
                exchange: 'NASDAQ',
              },
              {
                symbol: 'MSFT',
                name: 'Microsoft Corporation',
                exchange: 'NASDAQ',
              },
            ],
          }),
      })
    );

    // Call the function and wait for the response
    const result = await FetchCompanyDetails();

    // Check that the fetch function was called with the correct arguments
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_BACKEND_STOCK_API}company-details`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Check that the function returned the expected result
    expect(result).toEqual([
      {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        exchange: 'NASDAQ',
      },
      {
        symbol: 'MSFT',
        name: 'Microsoft Corporation',
        exchange: 'NASDAQ',
      },
    ]);
  });
});
