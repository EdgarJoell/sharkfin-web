import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class BrowseService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`http://localhost:8080/api/movies/all-movies/`);
  }

  searchForGroupOfMovies(titleSearch: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`http://localhost:8080/api/movies/search/${titleSearch}/`);
  }


}
