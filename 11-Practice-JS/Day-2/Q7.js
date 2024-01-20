// WAP to get the extension of a filename:
const getExtension = (file) => file.slice(file.lastIndexOf("."));
console.log(getExtension("image.jpg"));
console.log(getExtension("index.html"));
console.log(getExtension("webpack.config.js"));
