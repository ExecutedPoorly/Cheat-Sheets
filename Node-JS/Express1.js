///////////////////// ROUTE HANDLERS /////////////////
// checkout(),  copy(),     delete(),     get(),      head(), 
// lock(),      merge(),    mkactivity(), mkcol(),    move(), 
// m-search(),  notify(),   options(),    patch(),    post(), 
// purge(),     put(),      report(),     search(),   subscribe(), 
// trace(),     unlock(),   unsubscribe()
//////////////////////////////////////////////////////

app.get("/", function (req, res) { // get http request received, result sent back.
  res.send("Hello World!");
});

app.all()//will be called in response to any HTTP method.
         //used for loading middleware functions at a particular path for all request methods.
         
         
