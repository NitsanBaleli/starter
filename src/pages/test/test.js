class TestController {
    constructor() {
        'ngInject';
        console.log('test');
    }
}

let AppComponent = {
    template: `<h1>I'm test!</h1>`,
    controller: TestController,
    name: 'test'
};

export default AppComponent;
