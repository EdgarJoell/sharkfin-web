import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { BrowseService } from 'src/app/service/browse.service';

@Component({
  selector: 'fin-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit, OnChanges {

  constructor(private browseService: BrowseService) { }

  movies!: Movie[];

  search!: string;

  ngOnInit(): void {
    this.browseService.getAllMovies().subscribe((res: Movie[]) => this.movies = res)
  }

  ngOnChanges(changes: SimpleChanges): void {}

  sendSearch(search: string) {
    this.browseService.searchForGroupOfMovies(search).subscribe((res: Movie[]) => this.movies = res); 
  }

}
