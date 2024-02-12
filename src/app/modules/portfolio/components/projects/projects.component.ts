import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/projects/github.svg',
      alt: 'Managment System of Mechanical Workshops Project',
      title: 'Managment System of Mechanical Workshops',
      width: '100px',
      height: '51px',
      description:
        'System to help manage the informations of some Mechanical Workshops.',
      links: [
        {
          name: 'Know the project',
          href: 'https://github.com/mathsant/Uniao_Sistemas',
        },
      ],
    },
    {
      src: 'assets/projects/github.svg',
      alt: 'IMC project with Flutter icon',
      title: 'IMC App',
      width: '100px',
      height: '51px',
      description: 'IMC App made using Flutter.',
      links: [
        {
          name: 'Know the project',
          href: 'https://github.com/mathsant/imc_flutter',
        },
      ],
    },
    {
      src: 'assets/projects/github.svg',
      alt: 'API to managment bills with Nest.js icon',
      title: 'API to managment bills with Nest.js',
      width: '100px',
      height: '51px',
      description: 'API made with Nest.js to help me manage my bills.',
      links: [
        {
          name: 'Know the project',
          href: 'https://github.com/mathsant/finances-app-nest',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: 'dialog-container-projects',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
}
