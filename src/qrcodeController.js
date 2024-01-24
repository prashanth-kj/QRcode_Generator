import qrcode from 'qrcode';

const generateQRcode= async(req,res)=>{
        
         try {
              
             const {url}=req.body;
              
                if(url.length===0){
                     res.send("empty Data")
                }
                
                  let generateqrcodeurl=await qrcode.toDataURL(url) 
                     res.send(generateqrcodeurl)

         } catch (error) {
              console.log(error);
         }
       
}

export default {
    generateQRcode
}