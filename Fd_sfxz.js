function Fd_sfxz(){
    const neig = {
        vn_fd: 7
    }
    this.rzvo=(neig_kp={})=>{
        Object.assign(neig, neig_kp)
        return this
    }
    this.get_vnwm_sfxz_dyvy=()=>{
        const {vn_fd}=neig
        return new Array(vn_fd).fill(1).map((rn1,eqwy)=>Math.floor(0xffffff/(vn_fd)*eqwy).toString(16).padStart(6,"0"))
    }
    this.get_all=this.get_vnwm_sfxz_dyvy
    this.w_sf=(rj_color)=>{
    if(!/^[\da-fA-F]+$/.test(rj_color)){
        throw new Error("csrf-color dyvy aoao w non vnzt-"+rj_color)
    }
const diwr_sfxz = rj_color.match(/(..)(..)(..)/)
const vnwm_vn_sfxz = new Array(3).fill(1).map((rn1,eqwy)=>Number("0x"+diwr_sfxz[eqwy+1]))
return vnwm_vn_sfxz.reduce((rn1,rn2)=>rn1+rn2)/3<130?true:false
}
    this.get=(fo)=>this.get_vnwm_sfxz_dyvy()[fo]
}
module.exports=Fd_sfxz