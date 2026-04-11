const fs = require('fs');
const src = 'C:/Users/HP/.gemini/antigravity/brain/92e64e57-e10c-44f0-804b-4ce2a444d09c/guest_tours_final_1775895748462.png';
const dest = './public/guest-tours-new.png';
fs.copyFileSync(src, dest);
console.log('Image copied successfully!');
