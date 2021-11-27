
const fs = require('fs');
const build = 'build/';
const images = 'build/images/';
const css = 'build/css/';
const js = 'build/js/';
//const dist = '../dist/';
const _public = 'src/public';

fs.readdirSync(images).forEach(file => {
  try {
    fs.unlinkSync(images + file);
  } catch (err) {
    console.error(err)
  }
});
fs.rmdirSync(images);

fs.readdirSync(css).forEach(file => {
  try {
    fs.unlinkSync(css + file);
  } catch (err) {
    console.error(err)
  }
});
fs.rmdirSync(css);

fs.readdirSync(js).forEach(file => {
  try {
    fs.unlinkSync(js + file);
  } catch (err) {
    console.error(err)
  }
});
fs.rmdirSync(js);

fs.readdirSync(build).forEach(file => {
  try {
    fs.unlinkSync(build + file);
  } catch (err) {
    console.error(err)
  }
});

fs.mkdirSync(images);
fs.mkdirSync(css);
fs.mkdirSync(js);


fs.readdirSync(_public + "/images").forEach(file => {
  try {
    fs.copyFileSync(_public + "/images/" + file, images + file);
  } catch (err) {
    console.error(err)
  }
});

fs.readdirSync(_public + "/css").forEach(file => {
  try {
    fs.copyFileSync(_public + "/css/" + file, css + file);
  } catch (err) {
    console.error(err)
  }
});

fs.readdirSync(_public + "/js").forEach(file => {
  try {
    fs.copyFileSync(_public + "/js/" + file, js + file);
  } catch (err) {
    console.error(err)
  }
});
