import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/shared/types/skill';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  public skills: Skill[] = [
    {
      name: 'Tensorflow',
      img: 'tf.png',
      level: 8
    },
    {
      name: 'PyTorch',
      img: 'pytorch.png',
      level: 9
    },
    {
      name: 'Scikit Learn Stack',
      img: 'sklearn.png',
      level: 9
    },
    {
      name: 'Google Cloud',
      img: 'gcp.png',
      level: 7
    },
    {
      name: 'AWS',
      img: 'aws.png',
      level: 5
    },
    {
      name:'Angular',
      img: 'angular.png',
      level: 7
    },
    {
      name:'Spring Boot',
      img: 'spring.png',
      level: 6
    },
    {
      name:'Docker',
      img: 'docker.png',
      level: 8
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.skills = this.skills.sort((a, b) => b.level - a.level);
  }

}
