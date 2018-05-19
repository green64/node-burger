# Node-Burger
[Node Burger App](https://stark-ocean-97912.herokuapp.com/)

**Object**

With Node Burger, we're in the thick of the full stack. Say goodbye to static sites -- users can create, read, update and delete with Node Burger. In other words, CRU_ is in the house (users can't actually Delete so the D is left off).

***Technology used***

I built Node Burger with MySQL, Node, Express, Handlebars and a homemade ORM.


***Code excerpts***

The MVC framework includes: 

* **Model files**

This code snippet illustrates how the model uses the ORM to interact with the MySQL database:

```var burger = {
selectAll: function(cb) {
orm.selectAll("burgers", function(res) {
cb(res);
});
},
// The variables cols and vals are arrays.
insertOne: function(name, cb) {
orm.insertOne("burgers", [
"burger_name", "devoured"
], [
name, false
], cb);
},
updateOne: function(id, cb) {
var condition = "id=" + id;
orm.updateOne("burgers", {
devoured: true
}, condition, cb);
}
};
```

* **View files**

This snippet illustrates how Handlebars facilitates viewing Node Burger form input:

```<div class="col-md-6 text-center" class="task">
{{#each burger_data}} 
{{#if this.devoured}}
<input class="form-control" type="text" placeholder="{{this.id}} . {{this.burger_name}}" readonly> 
{{/if}} 
{{/each}}
</div>
```

* **Controller files**

The controller.js file controls the routes to and from the database and html pages, such as this POST route:

```//a POST route to go back to index
router.post("/burgers/create", function (req, res) {
//uses request object as input for burger.addBurger
burger.insertOne(req.body.burger_name, function (result) {
//wrapper for orm.js using MySQL query
//render back to index with handlebars
console.log(result);
res.redirect("/");
});
});
```
***Video walkthrough***

While I have deployed this app to Heroku, I haven't yet successfully got it working there. Until I figure out the bug, here's a video demo from my local server:

:video_camera: [Liri app walkthrough](https://youtu.be/zeJlk8wEUKA)


