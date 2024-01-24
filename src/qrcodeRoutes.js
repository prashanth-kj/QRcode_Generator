import express from 'express';
import qrcodeController from './qrcodeController.js'
const router= express.Router();

 router.post('/create', qrcodeController.generateQRcode) 
  
export default  router;