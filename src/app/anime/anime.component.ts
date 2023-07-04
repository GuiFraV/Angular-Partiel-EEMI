import { Component, OnInit } from '@angular/core';
// Import du service ApiJikanService pour pouvoir l'utiliser dans le composant
import { ApiJikanService } from '../api-jikan.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})

export class AnimeComponent implements OnInit {
  // Création d'un tableau vide pour stocker les données de l'api
  anime: any[] = [];
  // Création d'une variable pour afficher les animes avec une note supérieure ou égale à 8
  displayHighRateOnly = false;
  // Injection du service ApiJikanService dans le constructeur
  constructor(private apiJikanService: ApiJikanService) { }
  // Appel de la méthode getAnime() du service ApiJikanService dans le ngOnInit()
  ngOnInit(): void {
    this.apiJikanService.getAnime().subscribe((data: any) => {
      console.log(data);
      this.anime = data.data;
    });
  }
  // Création d'une méthode pour afficher les animes avec une note supérieure ou égale à 8
  toggleHighRateOnly(): void {
    this.displayHighRateOnly = !this.displayHighRateOnly;
  }
  // Création d'une méthode pour afficher tous les animes
  displayAll(): void {
    this.displayHighRateOnly = false;
  }
  // Création d'un getter pour afficher les animes avec une note supérieure ou égale à 8
  get displayedAnime(): any[] {
    if (this.displayHighRateOnly) {
      return this.anime.filter(a => a.score >= 8);
    } else {
      return this.anime;
    }
  }
}

