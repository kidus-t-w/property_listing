import setup from "./src/index";

(async () => {
  const app = await setup()
  app.listen(1337, () =>{
    console.log('Server listening on port: 1337')
  })
  
})();

