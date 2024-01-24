import express from 'express';
import cors from 'cors';
import qrcodeRoutes from './src/qrcodeRoutes.js'
const PORT=8000;
const app= express();

  app.use(cors())
  app.use(express.json());
  
  app.use('/',qrcodeRoutes )

  app.listen(PORT,()=>console.log(`App is listing port ${PORT}`))
