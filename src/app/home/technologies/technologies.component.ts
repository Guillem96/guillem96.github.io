import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  public skills = [
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
      name: 'Google Cloud Platform',
      img: 'gcp.png',
      level: 7
    },
    {
      name: 'Amazon Web Services',
      img: 'aws.png',
      level: 5
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
