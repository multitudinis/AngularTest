import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-movie-crud',
  templateUrl: './movie-crud.component.html',
  styleUrls: ['./movie-crud.component.css']
})
export class movieCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Listagem de Filmes',
      icon: 'storefront',
      routeUrl: '/movies'
    }
  }

  ngOnInit(): void {
  }

  navigateTomovieCreate(): void {
    this.router.navigate(['/movies/create'])
  }

}
