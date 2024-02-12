import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interfaces/IKnowledge';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledges = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/graphql.svg',
      alt: 'GraphQL icon',
    },
    {
      src: 'assets/icons/knowledge/node.svg',
      alt: 'Node.js icon',
    },
    {
      src: 'assets/icons/knowledge/kafka.svg',
      alt: 'Apache Kafka icon',
    },
    {
      src: 'assets/icons/knowledge/mongodb.svg',
      alt: 'MongoDB icon',
    },
    {
      src: 'assets/icons/knowledge/nestjs.svg',
      alt: 'Nestjs icon',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Angular icon',
    },
    {
      src: 'assets/icons/knowledge/sonar.svg',
      alt: 'Sonar icon',
    },
    {
      src: 'assets/icons/knowledge/mysql.svg',
      alt: 'MySQL icon',
    },
    {
      src: 'assets/icons/knowledge/knex-js.svg',
      alt: 'Knex.js icon',
    },
  ]);
}
