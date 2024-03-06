import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CountriesService } from '../countries.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [
    HttpClientModule,
    NgForOf,
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  @Output() onSearchEmitted = new EventEmitter<any>();

  availableFilters = [ 'No filter', 'Capital', 'Language', 'Country name', 'Currency'];

  selectedFilter= this.availableFilters[0];
  searchPhrase: string = '';

   countriesService = inject(CountriesService);
  countriesList = toSignal(this.countriesService.getCountriesList());
  ngOnInit(): void {
    this.countriesService.getCountriesList().subscribe()
  }

  search(dataFilter: string, searchPhrase: string) {
    console.log(dataFilter, searchPhrase);
    this.onSearchEmitted.emit(
      {
        dataFilter,
        searchPhrase: searchPhrase.toLowerCase()
      }
    );

  }

}
