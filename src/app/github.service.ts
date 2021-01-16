import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private BASE_URL = "https://api.github.com/graphql";
  private AUTH_HEADER = {Authorization: `token ${environment.githubToken}`};

  constructor(private http: HttpClient) { }

  public getRepositories(): Observable<any> {
    const header = {headers: new HttpHeaders(this.AUTH_HEADER)};

    const query = `
      query {
        user(login:"Guillem96") {
          pinnedItems(first: 10, types: [REPOSITORY, GIST]) {
            totalCount
            edges {
              node { 
                ... on Repository {
                  name
                  description
                  stargazerCount
                  forkCount
                  primaryLanguage {
                    name
                  }
                }
              }
            }
          }
        }
      }`;

    return this.http.post(this.BASE_URL, {query}, header).pipe(
      map(res => res['data']['user']['pinnedItems']['edges'].map(o => o.node))
    );
  }
}
