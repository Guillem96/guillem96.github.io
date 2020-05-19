import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private github: GithubService) { }

  ngOnInit(): void {
    this.github.getRepositories().subscribe(console.log);
  }

}
