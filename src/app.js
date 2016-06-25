
export class App {
  configureRouter(config, router) {
    config.title = 'Auxo Sistemas';
    config.map([
      { route: ['','framework'], name: 'framework', moduleId: './framework', nav: true, title:'Frameworks' }
    ]);

    this.router = router;
  }
}