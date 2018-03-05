import template from './app.html';


class AppController {
    constructor() {
        'ngInject';
        console.log('app');
        
    }
}

let AppComponent = {
    template: template,
    controller: AppController,
    name: 'app'
};

export default AppComponent;
