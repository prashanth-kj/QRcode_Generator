import { Card, Container,TextField,Button, CardContent, Grid} from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';


function QRCode() {
  
        const[url, setUrl]=useState('');
        const[qrImage, setQRImage]=useState('')
        
        const generateQRcode= async (e)=>{
                try {
                    e.preventDefault();
                
                    let res=await axios.post("https://qrcode-generator-etz5.onrender.com/create",{url})
    
                    console.log(res); 
                    
                    setQRImage(res.data)
                } catch (error) {
                    console.log(error);
                } 
        }

     
  return (

    <div> 
         <Container className='container'>
            <Card>
                <h1 className='title'>Generate QR code</h1>
                 <CardContent>
                        <Grid container spacing={2} className='qrgrid'>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            <TextField label="drop your Link" onChange={(e)=>setUrl(e.target.value)} value={url}/>
                            <Button className='btn'  onClick={generateQRcode}>Generate QR code</Button>
                        </Grid>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                             {
                                 url.length >0 && qrImage
                                 ?
                                 <>
                                   <a href={qrImage} download>  <img src={qrImage} alt="qrcodeimage" /></a>
                                   <p>Scan the QR Code to access &amp;&amp; Download it!</p>

                                 </>
                                 :
                                 null
                             }
                        </Grid>
                        </Grid>
                 </CardContent>
            
            </Card>
         </Container>
     </div>
  )
}

export default QRCode