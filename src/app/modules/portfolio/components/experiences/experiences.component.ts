import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interfaces/IExperiences';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayCourses = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Node.js Developer',
        p: 'Udemy | 2021',
      },
      text: '<p>Course about Node.js and how we can use to build API and WebServices using Javascript and Typescript.</p>',
    },
    {
      summary: {
        strong: 'Nest.js',
        p: 'Udemy | 2023',
      },
      text: '<p>Course about Nest.js and how is develop APIs using that great Node.js framework.</p>',
    },
    {
      summary: {
        strong: 'Angular',
        p: 'Udemy | 2024',
      },
      text: '<p>Course about Angular, teaching about new features of Angular 17 and how we can use this framework to build our websites.</p>',
    },
  ]);
}
