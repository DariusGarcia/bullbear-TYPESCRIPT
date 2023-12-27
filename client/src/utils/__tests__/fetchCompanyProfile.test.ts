import { FetchCompanyProfile } from '../fetchCompanyProfile';

describe('FetchCompanyProfile', () => {
  beforeAll(() => {
    process.env.REACT_APP_BACKEND_STOCK_API = 'https://example.com/api/';
  });

  afterAll(() => {
    delete process.env.REACT_APP_BACKEND_STOCK_API;
  });

  it('fetches the company profile data', async () => {
    const mockResponse = {
      companyProfileData: { name: 'Example Inc.', symbol: 'EXM' },
    };
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    ) as jest.Mock;
    global.fetch = mockFetch;

    const result = await FetchCompanyProfile('EXM');

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      'https://example.com/api/company-profile',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stock: 'EXM' }),
      }
    );
    expect(result).toEqual(mockResponse.companyProfileData);
  });

  it('returns null on error', async () => {
    const mockFetch = jest.fn(() => Promise.reject(new Error('Network error')));
    global.fetch = mockFetch;

    const result = await FetchCompanyProfile('EXM');

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      'https://example.com/api/company-profile',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stock: 'EXM' }),
      }
    );
    expect(result).toBeNull();
  });
});
