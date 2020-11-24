const App = function() {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
}


App.prototype.generateLinks = function() {

}


let app = new App();
app.generateLinks();
console.log(app.links)
