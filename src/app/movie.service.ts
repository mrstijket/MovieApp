import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiMoviesUrl = 'api/movies';

  constructor(private loggingService:LoggingService, private http:HttpClient) { }

  getMovies(): Observable<Movie[]>{
    this.loggingService.add('MovieService: listening movies');
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }

  getMovie(id): Observable<Movie>{
    this.loggingService.add(`MovieService: ${Movies[Number(id-1)].description}`);
    return this.http.get<Movie>(this.apiMoviesUrl+'/'+id);
  }
}
