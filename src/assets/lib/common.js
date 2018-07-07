// 设置网站logo
var logoUrl = require('../img/cl.jpg');
var link = document.createElement('link');
link.setAttribute('rel', 'icon');
link.setAttribute('href', logoUrl);
link.setAttribute('type', 'image/x-icon');
document.querySelector('head').appendChild(link);