var exec = require('child_process').exec;
// Hexo 3
hexo.on('new', function(data){
  exec("start D:\\Sublime\\sublime_text.exe " + data.path );
});
