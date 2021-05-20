import app from './app.js';


;(async ()=>{

  const server = app.listen(app.config.PORT, () => {
      app.log.info(`PSI login server listening at port:${app.config.PORT}`)
  });

  function onSIGHUP(signal) {
    console.log(`*^!@4=> Received event: ${signal}`);

  }

  function closeGracefully(signal) {
    console.log(`*^!@4=> Received event: ${signal}`);
    server.close(async ()=>{
      process.exit();
    });
  }

  process.on('SIGHUP', onSIGHUP);
  process.on('SIGINT', closeGracefully);
  process.on('SIGTERM', closeGracefully);
})().catch(err => console.log(err.stack))