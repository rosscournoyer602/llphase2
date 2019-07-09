/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
const bios = document.getElementsByClassName('partner-bio-content');
console.log(bios.length);
bios.forEach(bio => {
  console.log(bio);
});
// document.body.on('load', () => {
//   document.body.getElementsByClassName('partner-bio-content').forEach(element => {
//     console.log(element);
//   });
// });
