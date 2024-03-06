import { Component, inject } from '@angular/core';
import { SearchComponent } from '../search-component/search.component';
import { CountriesListComponent } from '../countries-list/countries-list.component';
import { CountriesService } from '../countries.service';
import { HttpClientModule } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-app-containter',
  standalone: true,
  imports: [SearchComponent, CountriesListComponent, HttpClientModule, NgIf],
  providers: [CountriesService],
  templateUrl: './app-container.component.html',
  styleUrl: './app-container.component.css'
})
export class AppContainerComponent {
  private readonly countriesService = inject(CountriesService);
  countriesList = this.countriesService.data;

  handleSearch(event: any) {
    const {dataFilter, searchPhrase} = event;
    this.countriesService.handleDataSearch(dataFilter, searchPhrase);
  }
}
