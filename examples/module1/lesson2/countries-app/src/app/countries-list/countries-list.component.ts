import { Component, inject, Input } from '@angular/core';
import { CountryComponent } from '../country/country.component';
import { CountriesService, Country } from '../countries.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe, JsonPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CountryComponent, AsyncPipe, JsonPipe, NgForOf],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.css'
})
export class CountriesListComponent {
  @Input() countriesList: any[] = [];


}
