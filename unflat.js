function unflat(vnwm=[], vn_kp=0){
    if(vn_kp===0||vnwm.length===0){
        return vnwm
    }
    return vnwm.reduce((mb1,rn1,eqwy_1)=>{
        if(eqwy_1!==0&&(eqwy_1)%vn_kp===0){
            mb1.push([rn1])
        }else{
            mb1[(eqwy_1-eqwy_1%vn_kp)/vn_kp].push(rn1)
        }
        return mb1
    },[[]])
}
module.exports=unflat