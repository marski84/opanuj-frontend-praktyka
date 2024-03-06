import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';


export interface Country {
  capital: string[];
  currencies: {
    [key: string]: {
      name: string
    }
  };
  languages: {
    [key: string]: string
  };
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://restcountries.com/v3.1';

  data = signal<any>('dupa')

  constructor() {
  }

  getCountriesList() {
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all')
      .pipe(
        map(data => this.processResponse(data)),
        tap(data => this.data.set(data)),
      );
  }

  handleDataSearch(dataFilter: string, searchPhrase: string) {
    console.log(dataFilter);
    switch (dataFilter) {
      case 'Capital':
        this.http.get<Country[]>(`${this.baseUrl}/capital/${searchPhrase}`)
          .pipe(
            map(data => this.processResponse(data)),
            tap(data => this.data.set(data))
          ).subscribe()
        break;
      case 'Language':
        this.http.get<Country[]>(`${this.baseUrl}/lang/${searchPhrase}`)
          .pipe(
            map(data => this.processResponse(data)),
            tap(data => this.data.set(data))
          ).subscribe()
        break;
      case 'Country name':
        this.http.get<Country[]>(`${this.baseUrl}/name/${searchPhrase}`)
          .pipe(
            map(data => this.processResponse(data)),
            tap(data => this.data.set(data))
          ).subscribe()
        break;
      case 'Currency':
        this.http.get<Country[]>(`${this.baseUrl}/currency/${searchPhrase}`)
          .pipe(
            map(data => this.processResponse(data)),
            tap(data => this.data.set(data))
          ).subscribe()
        break;
        default:
          this.getCountriesList().subscribe();
    }
  }

  private processResponse(data: Country[]) {
    return data.map(countryData => {
      return {
        name: countryData.name.official,
        flag: countryData.flags.svg,
        currencies: countryData.currencies,
        languages: countryData.languages,
        capital: countryData.capital,
      }
    })
  }
}

