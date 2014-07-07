(function () {
  var app = angular.module('resume', [ ]);

  var badges = [
    {
      name: 'Completed Shaping up with Angular.js',
      description: 'Awarded for the completion of Shaping Up with Angular.js',
      criteria: 'https://www.codeschool.com/users/SoldierCoder/badges/392',
      issued: new Date('2014-05-24'),
      image: 'angular_small.png',
      keyword: 'angular',
      title: 'Angular.js',
      canDemonstrate: false
    },	    
    { 
      name: 'Completed CoffeeScript',
      description: 'Awarded for the completion of CoffeeScript',
      criteria: 'https://www.codeschool.com/users/SoldierCoder/badges/34',
      issued: new Date('2013-03-27'),
      image: 'coffeescript.png',
      keyword: 'coffeescript',
      title: 'CoffeeScript',
      canDemonstrate: false
    },
    {
      name: 'Completed Real-time Web with Node.js',
      description: 'Awarded for the completion of Real-time Web with Node.js',
      criteria: 'https://www.codeschool.com/users/SoldierCoder/badges/107',
      issued: new Date('2014-06-08'),
      image: 'node.png',
      keyword: 'node',
      title: 'Real-Time Web with Node.js',
      canDemonstrate: false
    },	    
    {
      name: 'Completed Rails for Zombies 2',
      description: 'Awarded for the completion of Rails for Zombies 2',
      criteria: 'https://www.codeschool.com/users/SoldierCoder/badges/25',
      issued: new Date('2013-10-17'),
      image: 'rails_for_zombies_2.png',
      keyword: 'rails',
      title: 'Ruby on Rails',
      canDemonstrate: false
    },	    
    {
      name: 'Completed Testing with RSpec',
      description: 'Awarded for the completion of Testing with RSpec',
      criteria: 'https://www.codeschool.com/users/SoldierCoder/badges/',
      issued: new Date('2013-05-11'),
      image: 'rspec.png',
      keyword: 'rspec',
      title: 'Testing with RSpec',
      canDemonstrate: false
    },	    
    {
      name: 'Completed Rails Testing for Zombies',
      description: 'Awarded for the completion of Rails Testing for Zombies',
      criteria: 'https://www.codeschool.com/users/SoldierCoder/badges/',
      issued: new Date('2014-06-11'),
      image: 'testing.png',
      keyword: 'testing',
      title: 'Testing Rails',
      canDemonstrate: false
    }  
  ]; 
  app.controller('ResumeController', function() {
    this.items = badges;
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

}());
