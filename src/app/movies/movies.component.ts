import { Component, Injectable } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
    selector: 'movies', // to call <movies></movies>
    templateUrl: 'movies.component.html',
    styleUrls: ['movies.component.css']
})

@Injectable({
    providedIn:'root' 
})

export class MoviesComponent {
    title = 'Movie List';

    movies: Movie[];
    selectedMovie: Movie;

    constructor(private movieService:MovieService){}

    ngOnInit(): void {
        this.getMovies();
    }

    onSelect(movie:Movie): void {
        this.selectedMovie = movie;
    }

    getMovies():void{
        this.movieService.getMovies().subscribe(movies=> {
            this.movies=movies;
        });
    }

    delete(movie:Movie): void {
        this.movies = this.movies.filter(m => m!==movie);
        this.movieService.delete(movie).subscribe();
    }
}