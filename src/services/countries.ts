import axios from 'axios';
import { url } from '../config/config';

type CountryData = {
  country: string,
  code: string,
  vat: number
};

export const getCountries = async (filter?: string, order?: string) => {
  const filterCountries = filter ? filter.toLowerCase() : '';

  let countries: CountryData[];
  try {
    const response = await axios.get(url);

    if (response.data) countries = response.data;
    else {
      return {
        error: {
          message: 'There was an error trying to get the list of countries.'
        }
      };
    }
  } catch (error) {
    return {
      error: {
        message: 'There was an error trying to get the list of countries.'
      }
    };
  };

  if (filterCountries) {
    countries = countries.filter(data => data.country.toLowerCase().includes(filterCountries) || data.code.toLowerCase().includes(filterCountries));
  }

  if (order) {
    const sort: number = order === 'asc' ? 1 : -1;
    countries.sort((a: CountryData, b: CountryData) => (a.vat - b.vat) * sort);
  }

  return { data: { countries } };
}
