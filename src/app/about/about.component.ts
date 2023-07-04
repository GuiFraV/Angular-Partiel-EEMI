import { Component, OnInit } from '@angular/core';
// Import du service ApiJikanService pour pouvoir l'utiliser dans le composant
import { ApiJikanService } from '../api-jikan.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  //  Création d'une variable pour stocker les données de l'api
  anime: any;
  // Injection du service ApiJikanService dans le constructeur
  constructor(private apiJikanService: ApiJikanService) { }
  // Appel de la méthode getAnime() du service ApiJikanService dans le ngOnInit()
  ngOnInit(): void {
    this.apiJikanService.getAnime().subscribe((data: any) => {
      console.log(data);
      this.anime = data.data.find((a:any) => a.title === 'Initial D Fourth Stage');
    });
  }
}