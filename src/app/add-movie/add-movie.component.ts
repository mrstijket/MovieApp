import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { MoviesComponent } from '../movies/movies.component';
import { Location } from '@angular/common';

@Component({
  selector: 'add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})

export class AddMovieComponent {
  title = 'Add Movie';

  constructor(
    private movieService:MovieService,
    private moviesComponent:MoviesComponent,
    private location:Location
    ){}

  ngOnInit(): void {
    this.moviesComponent.getMovies();
  }
  add(name:string,imageUrl:string,description:string): void {
    this.movieService.add({
      name,
      imageUrl,
      description,
    } as Movie).subscribe(movie => {
      this.moviesComponent.movies.push(movie);
      this.location.back();
    });
  }
}
