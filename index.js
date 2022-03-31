const sharp = require('sharp');
// resize image
// sharp('img.jpg')
//     .rotate()
//     .resize(200, 200)
//     .toFile('output.jpg', (err, info) => {
//         console.log("image resize successfully");
//     })

// make your own image
sharp({
    create: {
        width: 400,
        height: 400,
        background: { r: 255, g: 0, b: 0, alpha: 0.5 },
        channels: 4
    }
}).png()
    .toFile('myImage.png', () => {
        console.log("file create successfully")
    })