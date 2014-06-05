App = Ember.Application.create();
 
App.Router.map(function() {
  this.resource('articles', { path: 'articles' }, function() {
    this.route('article', { path: '/:article_id' });
  });
});
App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('articles');
  }
});
var articles = [
  {
    id: 1,
    title: 'Article 1',
    body: 'This is my first article'
  },
  {
    id: 2,
    title: 'Article 2',
    body: 'This is my secondarticle'
  },
  {
    id: 3,
    title: 'Article 3',
    body: 'This is my third article'
  }
];
 
App.ArticlesIndexRoute = Ember.Route.extend({
  model: function() {
   return articles;
  }
});
