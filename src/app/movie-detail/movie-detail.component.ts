import { Component, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  // localhost:4200/detail/1
  @Input() movie !: Movie | null | undefined;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const param = this.route.snapshot.paramMap.get('id');
    const id = param ? +param : null;
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }
}
