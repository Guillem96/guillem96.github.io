import { Component, OnInit, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: any;
  public langColor = {
    'C': '#ea80fc',
    'Python': '#8c9eff',
    'Jupyter Notebook': '#f57f17'
  };

  constructor() { }

  ngOnInit(): void {
  }

  shortDescription(description: string, limit: number = 20): string {
    if (isNullOrUndefined(description))
      return '';
    
    const words = description.split(' ');

    if (words.length < limit)
      return description;
    
    return words.slice(0, limit).join(' ') + ' ...';
  }

}
