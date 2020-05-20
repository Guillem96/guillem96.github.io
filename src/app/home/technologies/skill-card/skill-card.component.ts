import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/shared/types/skill';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() public skill: Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
