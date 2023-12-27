
RJSE_1='44 99';
VNWM_1=RJSE_1.split(/\s+/);
const buf = Buffer.allocUnsafe(VNWM_1.length);
for (let i = 0; i < VNWM_1.length; i++) {
  buf[i] =eval("0x"+VNWM_1[i].replace('0x',''));
}
console.log(VNWM_1.join(' '))
console.log(buf.toString());