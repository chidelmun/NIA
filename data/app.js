var app = module.exports = require('appjs');

app.serveFilesFrom(__dirname + '/content');

var menubar = app.createMenu([{
  label:'&File',
  submenu:[
    {
      label:'E&xit',
      action: function(){
        window.close();
      }
    }
  ]
},

{
  label:'Project',
  submenu:[
    {
      label:'E&xit',
      action: function(){
        window.close();
      }
    }
  ]
},

{
  label:'Modules',
  submenu:[
    {
      label:'E&xit',
      action: function(){
        window.close();
      }
    }
  ]
},

{
  label:'Repports',
  submenu:[
    {
      label:'E&xit',
      action: function(){
        window.close();
      }
    }
  ]
},
{
  label:'Services',
  submenu:[
    {
      label:'E&xit',
      action: function(){
        window.close();
      }
    }
  ]
},
{
  label:'&File',
  submenu:[
    {
      label:'E&xit',
      action: function(){
        window.close();
      }
    }
  ]
},
{
  label:'Commission',
  submenu:[
    {
      label:'E&xit',
      action: function(){
        window.close();
      }
    }
  ]
},
,
{
  label:'Configurations',
  submenu:[
    {
      label:'E&xit',
      action: function(){
        window.close();
      }
    }
  ]
},
,
{
  label:'Posts',
  submenu:[
    {
      label:'E&xit',
      action: function(){
        window.close();
      }
    }
  ]
},
,
{
  label:'Stations',
  submenu:[
    {
      label:'E&xit',
      action: function(){
        window.close();
      }
    }
  ]
},{
  label:'&Window',
  submenu:[
    {
      label:'Fullscreen',
      action:function(item) {
        window.frame.fullscreen();
        console.log(item.label+" called.");
      }
    },
    {
      label:'Minimize',
      action:function(){
        window.frame.minimize();
      }
    },
    {
      label:'Maximize',
      action:function(){
        window.frame.maximize();
      }
    },{
      label:''//separator
    },{
      label:'Restore',
      action:function(){
        window.frame.restore();
      }
    }
  ]
}]);

menubar.on('select',function(item){
  console.log("menu item "+item.label+" clicked");
});

var trayMenu = app.createMenu([{
  label:'Show',
  action:function(){
    window.frame.show();
  },
},{
  label:'Minimize',
  action:function(){
    window.frame.hide();
  }
},{
  label:'Exit',
  action:function(){
    window.close();
  }
}]);

var statusIcon = app.createStatusIcon({
  icon:'./data/content/icons/32.png',
  tooltip:'AppJS Hello World',
  menu:trayMenu
});

var window = app.createWindow({
  width  : 1340,
  height : 690,
  icons  : __dirname + '/content/icons'
});

window.on('create', function(){
  console.log("Window Created");
  window.frame.show();
  window.frame.center();
  window.frame.setMenuBar(menubar);
});

window.on('ready', function(){
  console.log("Window Ready");
  window.process = process;
  window.module = module;

  function F9(e){ return e.keyIdentifier === 'F9' }
  function Command_Option_J(e){ return e.keyCode === 74 && e.metaKey && e.altKey }

  window.addEventListener('keydown', function(e){
    if (F9(e) || Command_Option_J(e)) {
      window.frame.openDevTools();
    }
  });
});

window.on('close', function(){
  console.log("Window Closed");
});
