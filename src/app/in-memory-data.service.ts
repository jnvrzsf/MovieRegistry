import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 1, picture: "assets/img/1.jpg", title: 'Three Billboards Outside Ebbing, Missouri', year: 2017, director: 'Martin McDonagh', genre: 'Comedy, Crime, Drama', description: 'A mother personally challenges the local authorities to solve her daughter\'s murder when they fail to catch the culprit.'},
      { id: 2, picture: "assets/img/2.jpg", title: 'Titanic', year: 1997, director: 'James Cameron', genre: 'Drama, Romance', description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.'},
      { id: 3, picture: "assets/img/3.jpg", title: 'Forrest Gump', year: 1994, director: 'Robert Zemeckis', genre: 'Drama, Romance', description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.'},
      { id: 4, picture: "assets/img/4.jpg", title: 'Star Wars: Episode I - The Phantom Menace', year: 1999, director: 'George Lucas', genre: 'Action, Adventure, Fantasy', description: 'Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory.'},
      { id: 5, picture: "assets/img/5.jpg", title: 'The Shape of Water', year: 2017, director: 'Guillermo del Toro', genre: 'Adventure, Drama, Fantasy', description: 'At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.'},
      { id: 6, picture: "assets/img/6.jpg", title: 'The Circle: France', year: 2020, director: 'Tim Harcourt', genre: 'Game-Show, Reality-TV', description: 'Status and strategy collide in this social media competition where online players flirt, befriend and catfish their way toward 100,000 euros.'},
      { id: 7, picture: "assets/img/7.jpg", title: 'Love Is Blind', year: 2020, director: 'Chris Coelen', genre: 'Reality-TV', description: 'Singles who want to be loved for who they are, rather than what they look like, have signed up for a less conventional approach to modern dating.'},
      { id: 8, picture: "assets/img/8.jpg", title: 'Adam\'s Apples', year: 2005, director: 'Anders Thomas Jensen', genre: 'Comedy, Crime, Drama', description: 'A neo-nazi sentenced to community service at a church clashes with the blindly devotional priest.'},
      { id: 9, picture: "assets/img/9.jpg", title: 'The Circle', year: 2020, director: 'Tim Harcourt', genre: 'Game-Show, Reality-TV', description: 'Players start off isolated in an apartment, and with their online interactions as their only means of any communication. The players use a social media platform called "The Circle".'},
      { id: 10, picture: "assets/img/10.jpg", title: 'Too Hot to Handle', year: 2020, director: 'Laura Gibson', genre: 'Reality-TV', description: 'On the shores of paradise, gorgeous singles meet and mingle. But there\'s a twist. To win a $100,000 grand prize, they\'ll have to give up sex.'},
    ];
    return {movies};
  }

  // Overrides the genId method to ensure that a movie always has an id.
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 1;
  }
}