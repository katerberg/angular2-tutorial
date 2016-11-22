import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Wolverine'},
      {id: 12, name: 'Professor X'},
      {id: 13, name: 'Cyclops'},
      {id: 14, name: 'Storm'},
      {id: 15, name: 'Rogue'},
      {id: 16, name: 'Gambit'},
      {id: 17, name: 'Inara Serra'},
      {id: 18, name: 'River Tamm'},
      {id: 19, name: 'Doctor Strange'},
      {id: 20, name: 'Supergirl'}
    ];

    return {heroes};
  }
}
