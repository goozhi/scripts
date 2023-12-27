var AFOA=require('./AFOA_UJ')
function PSW27_009(RJSE_KP){
        var K1,K2,K3,K4;
        unsigned char a,b,c,d;
        unsigned char S1,S2,S3,S4;
       var VNWM_1 = RJSE_KP.split(/\s+/);
          K1=VNWM_1[0];
          K2=VNWM_1[1];
          K3=VNWM_1[2];
          K4=VNWM_1[3];
          
        if((AFOA.TRGGUYUY_2(K1+"&0xFF")==0xFF) && (AFOA.TRGGUYUY_2(K2+"&0xFF")==0xFF) && (AFOA.TRGGUYUY_2(K3+"&0xFF")==0xFF) && (AFOA.TRGGUYUY_2(K4+"&0xFF")==0xFF)){
            frmPsw[enum_LdtReceiveLenLow+3]=0x34;//Ä¬ÈÏÍ¨¹ý
            JM_saveBytesToComBuf(frmPsw,0);
            return 1;
        }    
        else{
            
        if((AFOA.TRGGUYUY_2(K4+"&0x01")==0) && (AFOA.TRGGUYUY_2(K4+"&0x10")==0)) a=0;
            else a=0x10;
        if((AFOA.TRGGUYUY_2(K4+"&0x02")==0) && (AFOA.TRGGUYUY_2(K4+"&0x20")==0)) b=0;
            else b=0x20;
        if((AFOA.TRGGUYUY_2(K4+"&0x04")!=0) && (AFOA.TRGGUYUY_2(K4+"&0x40")!=0)) c=0x40;
            else c=0;
        if((AFOA.TRGGUYUY_2(K4+"&0x08")!=0) && (AFOA.TRGGUYUY_2(K4+"&0x80")!=0)) d=0x80;
            else d=0;
            
    
        S4=(AFOA.TRGGUYUY_2(K3+"^0x14")&0x0f)+((AFOA.TRGGUYUY_2(K1+"<<4)^"0x14)&0xf0);
        S3=(AFOA.TRGGUYUY_2(K2+"^0x97")&0xf0)+((AFOA.TRGGUYUY_2(K3+">>4)^"0x97)&0x0f);
        S2=(AFOA.TRGGUYUY_2((AFOA.TRGGUYUY_2(K1+">>4^0x24"))+"&0x0f")+AFOA.TRGGUYUY_2((AFOA.TRGGUYUY_2((AFOA.TRGGUYUY_2(K2+"<<4")+"^0x24")+"&0xf0");
        S1=0xc0^a^b^c^d;
       //00 ff ff 00   c0 d4 68 1b
    
         sprintf(str,"27 02 %02x %02x %02x %02x",S1,S2,S3,S4);
    
         strToFrame(str,frmPsw);
         sendToVCI(frmPsw);
         return 1;
            
       }
      }
     
}
module.exports=PSW27_009;