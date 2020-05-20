import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public repositories: any[];

  constructor(private github: GithubService) { }

  ngOnInit(): void {
    this.github.getRepositories().subscribe(res => {
      this.repositories = res;
      this.repositories = this.repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);
    });
  }

}
