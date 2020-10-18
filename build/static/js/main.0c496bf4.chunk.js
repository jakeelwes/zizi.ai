(this.webpackJsonpzizi=this.webpackJsonpzizi||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),s=(a(22),a(2)),l=a(3),c=a(6),m=a(5),u=a(8),h=a.n(u),d=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).performerVideo=r.a.createRef(),n.shadowVideo=r.a.createRef(),n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.renderPlayer("primary-player",this.performerVideo,this.performerSrc(this.props),this.props.onEnded),this.renderPlayer("shadow-player",this.shadowVideo,this.shadowSrc(this.props)))}},{key:"renderPlayer",value:function(e,t,a,n){var i=this.props.zoom?"zoom":"full";return r.a.createElement("span",{className:"video-frame "+e},r.a.createElement("video",{autoPlay:this.props.playing,className:"drag-video "+i,playsInline:!0,muted:!0,ref:t,onEnded:n},r.a.createElement("source",{src:a})))}},{key:"componentDidMount",value:function(){this.performerVideo.current.currentTime=this.props.currentTime,this.shadowVideo.current.currentTime=this.props.currentTime,this.handleHls(this.performerVideo.current),this.handleHls(this.shadowVideo.current)}},{key:"componentDidUpdate",value:function(e){var t=this.performerVideo.current,a=this.shadowVideo.current;e.playing&&!this.props.playing?(t.pause(),a.pause()):!e.playing&&this.props.playing&&(t.play(),a.play()),this.props.playing&&this.sync(this.props.currentTime),this.performerSrc(e)!==this.performerSrc(this.props)&&this.reload(t),this.shadowSrc(e)!==this.shadowSrc(this.props)&&this.reload(a)}},{key:"sync",value:function(e){(this.outOfSync(this.performerVideo.current,e)||this.outOfSync(this.shadowVideo.current,e))&&(console.log("UPDATING TIME",this.performerVideo.current.currentTime,this.shadowVideo.current.currentTime,e),this.performerVideo.current.currentTime=e,this.shadowVideo.current.currentTime=e)}},{key:"outOfSync",value:function(e,t){return Math.abs(t-e.currentTime)>.2}},{key:"reload",value:function(e){e.load(),e.currentTime=this.props.currentTime,this.handleHls(e)}},{key:"performerSrc",value:function(e){return"https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/".concat(e.song.id,"-").concat(e.performer.id,"/playlist.m3u8")}},{key:"shadowSrc",value:function(e){return"https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/".concat(e.song.id,"-shadow/playlist.m3u8")}},{key:"handleHls",value:function(e){if(h.a.isSupported()&&!e.canPlayType("application/vnd.apple.mpegurl")){var t=new h.a;t.loadSource(e.querySelector("source").src),t.attachMedia(e)}}}]),a}(r.a.Component);d.defaultProps={zoom:!1,shadow:!1,playing:!1};var p=d,f=a(11),g=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).youtubeReady=function(e){n.player=e.target,n.player.seekTo(n.props.song.youtube.startTime),n.player.pauseVideo(),n.props.onReady(),n.props.timerDelegate.onTimeChanged((function(e){n.player.seekTo(n.player.getCurrentTime()+e)}))},n.updateTimer=function(){var e=n.props.song.youtube.startTime,t=n.player.getCurrentTime();n.setState({timer:t.toFixed(2)}),n.props.adjustedTimerEvent(t-e)},n.state={isLoaded:!1,timer:0},n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){e.playing&&!this.props.playing?this.pause():!e.playing&&this.props.playing&&this.play(),window.yt=this.player}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"none"}},r.a.createElement(f.a,{videoId:this.props.song.youtube.id,opts:{height:"390",width:"640",videoId:"",playsinline:"1",playerVars:{autoplay:0,autohide:1,playsinline:1,start:0}},onReady:this.youtubeReady})),this.props.hideTimer||r.a.createElement("span",{className:"timer"},this.state.timer))}},{key:"play",value:function(){var e=this.props.song.youtube.startTime;this.player.getCurrentTime()<e?this.player.seekTo(e):this.player.playVideo(),this.timerIntervalID=setInterval(this.updateTimer,1e3)}},{key:"pause",value:function(){this.player.pauseVideo(),clearInterval(this.timerIntervalID)}}]),a}(r.a.Component);function y(e){var t=e.zoom?"close":"full",a="img/curtain-bg-"+t+".jpg",n="img/curtain-side-"+t+".png";return[r.a.createElement("img",{key:"one",src:a,className:"curtain-bg ",draggable:!1}),r.a.createElement("img",{key:"two",src:n,className:"curtain-side",draggable:!1})]}g.defaultProps={playing:!1,hideTimer:!0,onReady:function(){},adjustedTimerEvent:function(){}};var b=a(52),E=a(53),w=a(54),v=a(55),k=(a(56),a(57)),S=(a(58),a(59)),T=a(60),z=a(61),C=a(62),P=a(63);function N(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(b.a,{fontSize:"inherit",onClick:e.onClick}))}function A(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(E.a,{fontSize:"inherit",onClick:e.onClick}))}function M(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(w.a,{fontSize:"inherit",onClick:e.onClick}))}function O(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(v.a,{fontSize:"inherit",onClick:e.onClick}))}function j(e){return r.a.createElement("a",{className:"zizi-icon",fontSize:"inherit",onClick:e.onClick},r.a.createElement("svg",{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeInherit",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"},r.a.createElement("path",{d:"M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z"})))}function I(e){return r.a.createElement("a",{className:"zizi-icon",onClick:e.onClick},r.a.createElement("svg",{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeInherit",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"},r.a.createElement("g",{transform:"translate(-3.6, -3.6) scale(1.3)"},r.a.createElement("path",{d:"M16.487 12a2.248 2.248 0 10.001-4.497A2.248 2.248 0 0016.487 12zm0 1.125c-1.501 0-4.499.754-4.499 2.249v.562c0 .309.253.562.562.562h7.872a.564.564 0 00.562-.562v-.562c.002-1.496-2.995-2.249-4.497-2.249zm-10.254-.859a5.674 5.674 0 01-.622.81c-.557.586-1.285.742-2.069.702-.705-.036-.701 1.057 0 1.093 1.474.075 2.516-.562 3.346-1.647a9.412 9.412 0 01-.378-.53 16.245 16.245 0 01-.277-.428zm1.423-.87l.226.351c.138-.191.286-.375.452-.547.419-.433.897-.61 1.421-.661l-.099.121c-.192.228-.224.549 0 .773.197.197.581.228.773 0 .296-.351.578-.713.873-1.065.192-.193.266-.515.028-.773l-.984-1.065c-.479-.519-1.25.256-.773.773l.128.138c-.536.038-1.053.175-1.53.485a4.1 4.1 0 00-.923.855c.054.075.107.152.16.232.085.127.168.257.248.383zm2.772 1.171a.473.473 0 00-.369-.16.58.58 0 00-.404.16c-.224.224-.192.545 0 .773l.099.121c-.524-.05-1.002-.228-1.421-.661a5.613 5.613 0 01-.628-.8c-.183-.273-.354-.554-.536-.829a5.951 5.951 0 00-.106-.154c-.815-1.169-1.834-1.894-3.29-1.894a4.55 4.55 0 00-.232.006c-.69.035-.704 1.093-.034 1.093l.034-.001a4.28 4.28 0 01.225-.006c.698 0 1.34.178 1.844.708.31.327.555.7.794 1.077.113.179.226.358.344.535.101.151.206.302.316.449.313.418.668.805 1.108 1.091.477.31.993.446 1.53.485l-.128.138c-.366.396.002.944.41.944a.489.489 0 00.363-.172l.983-1.065c.238-.258.165-.58-.028-.773-.296-.352-.578-.714-.874-1.065z"}))))}function B(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(k.a,{fontSize:"inherit",onClick:e.onClick}))}function D(e){return r.a.createElement("a",{className:"zizi-icon close"},r.a.createElement(S.a,{fontSize:"inherit",onClick:e.onClick}))}function V(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(T.a,{fontSize:"inherit",onClick:e.onClick}))}function x(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(z.a,{fontSize:"inherit",onClick:e.onClick}))}function L(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(C.a,{fontSize:"inherit",onClick:e.onClick}))}function F(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(P.a,{fontSize:"inherit",onClick:e.onClick}))}var R=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if("thumbnails"===this.props.content)return this.renderThumbnails();var e=this.props.performers[this.props.content];return this.renderAboutView(e)}},{key:"renderThumbnails",value:function(){var e=[];for(var t in this.props.performers)e.push(this.renderPerformer(this.props.performers[t]));return r.a.createElement("div",null,r.a.createElement("img",{alt:"",src:"img/pick-performer.png",draggable:"false",className:"secondary-header"}),r.a.createElement("div",{className:"performers-list"},e))}},{key:"renderPerformer",value:function(e){var t=this;return r.a.createElement("div",{className:"performer",key:e.id},r.a.createElement("a",{onClick:function(){return t.props.changePerformer(e.id)}},r.a.createElement("img",{alt:"Image of '".concat(e.name,"'"),src:"img/performers/PickerImage/".concat(e.id,".jpg"),draggable:"false"}),r.a.createElement("p",null,e.name)),r.a.createElement("p",{className:"info"},r.a.createElement("a",{onClick:function(){return t.props.showAboutView(e.id)}},"About")))}},{key:"renderAboutView",value:function(e){return r.a.createElement("div",{className:"bios"},r.a.createElement("a",{className:"backbutton",onClick:this.props.showThumbnails},"Back"),r.a.createElement("h2",null,e.name),r.a.createElement("img",{alt:"Image of '".concat(e.name,"'"),src:"img/performers/BioImage/".concat(e.id,".jpg"),draggable:"false"}),r.a.createElement("p",null,e.insta),r.a.createElement("p",null,e.bio))}}]),a}(r.a.PureComponent),H=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=[];for(var t in this.props.songs)e.push(this.renderSong(this.props.songs[t]));return r.a.createElement("div",null,r.a.createElement("img",{src:"img/pick.png",className:"secondary-header",draggable:"false"}),r.a.createElement("div",{className:"songs-list"},e))}},{key:"renderSong",value:function(e){var t=this;return r.a.createElement("div",{className:"song",key:e.id},r.a.createElement("a",{onClick:function(){return t.props.changeSong(e.id)}},r.a.createElement("img",{src:"img/album_covers/".concat(e.id,".jpg"),draggable:"false"}),r.a.createElement("p",null,r.a.createElement("span",{className:"sname"},e.name)," | ",e.artist," ",r.a.createElement("br",null),r.a.createElement("small",null,"Movement by ",r.a.createElement("b",null,r.a.createElement("span",null,this.props.performers[e.performer].name))))))}}]),a}(r.a.PureComponent),Z=function(e){var t=e.openClose?"open":"closed",a=null==e.onClose?null:r.a.createElement("div",{className:"close-button2"},r.a.createElement(D,{onClick:e.onClose}));return r.a.createElement("div",{className:"secondary-sidebar "+t},r.a.createElement("div",{className:"close-sidebar-left"},a),r.a.createElement("div",{className:"content-sidebar"},e.children))},q=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).hideMain=function(){n.setState({fullSize:!1})},n.showMain=function(){n.setState({fullSize:!0})},n.changePerformer=function(e){n.setState({showSecondaryBar:!1}),n.props.changePerformer(e)},n.showPerformers=function(){n.setState({secondaryBar:{type:"performers",content:"thumbnails"},showSecondaryBar:!n.state.showSecondaryBar})},n.showAbout=function(){n.props.switchToAbout(n.props.performer.id,n.props.song.id)},n.showAboutView=function(e){n.setState({secondaryBar:{type:"performers",content:e},showSecondaryBar:!0})},n.showThumbnails=function(){n.setState({secondaryBar:{type:"performers",content:"thumbnails"},showSecondaryBar:!0})},n.hideSecondaryBar=function(){n.setState({showSecondaryBar:!1})},n.state={fullSize:!1,showSecondaryBar:!1,secondaryBar:{type:"none"}},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.fullSize?"open":"closed";return r.a.createElement("div",null,r.a.createElement("div",{className:"zizi-sidebar "+e},this.renderMainbar(),this.renderMinibar()),this.renderSecondaryBar())}},{key:"renderMinibar",value:function(){var e=this.props.zoom?r.a.createElement(M,{onClick:this.props.onZoomOut}):r.a.createElement(O,{onClick:this.props.onZoomIn}),t=this.state.fullSize?r.a.createElement(D,{onClick:this.hideMain}):r.a.createElement(V,{onClick:this.showMain});return r.a.createElement("div",{className:"mini-sidebar button-sidebar"},r.a.createElement("div",{className:"close-button"},t),r.a.createElement("div",{className:"centered-buttons"},e,r.a.createElement(I,{onClick:this.props.newPerformer}),r.a.createElement(j,{onClick:this.showPerformers}),r.a.createElement(F,{onClick:this.props.switchToPicker})),r.a.createElement("div",{className:"dummy-spacing-div"}))}},{key:"renderMainbar",value:function(){var e=this,t=this.props.playing?r.a.createElement(A,{onClick:this.props.onPause}):r.a.createElement(N,{onClick:this.props.onPlay}),a=this.props.showData.performers[this.props.song.performer],n=this.props.performer;return r.a.createElement("div",{className:"main-sidebar"},r.a.createElement("img",{src:"img/title.png",id:"main-bar-logo",alt:"The Zizi Show",draggable:"false"}),r.a.createElement("div",{className:"main-bar-content"},r.a.createElement("div",{className:"player-controls"},t,r.a.createElement(L,{onClick:this.props.onBack10}),r.a.createElement(x,{onClick:this.props.onForward10}),r.a.createElement(B,null)),r.a.createElement("div",{className:"now-playing"},r.a.createElement("p",null,'"'.concat(this.props.song.name,'" by ').concat(this.props.song.artist)),r.a.createElement("sub",null,"Movement by ",r.a.createElement("a",{className:"inline-link",onClick:function(){return e.showAboutView(a.id)}},a.name)),r.a.createElement("sub",null,"Deepfake trained on ",r.a.createElement("a",{className:"inline-link",onClick:function(){return e.showAboutView(n.id)}},n.name))),r.a.createElement("div",{className:"about-button"},r.a.createElement("a",{onClick:this.showAbout,className:"sidebar-large-button"},"ABOUT"))),r.a.createElement("div",{className:"copyright"},r.a.createElement("sub",null,"The Zizi Project\xa9"),r.a.createElement("sub",null,r.a.createElement("a",{className:"inline-link",href:"https://jakeelwes.com"},"Jake Elwes")," 2020"),r.a.createElement("sub",null,"Part of ",r.a.createElement("a",{className:"inline-link",href:"https://newreal.cc"},"newreal.cc")),r.a.createElement("sub",null)))}},{key:"renderSecondaryBar",value:function(){return r.a.createElement(Z,{onClose:this.hideSecondaryBar,openClose:this.state.showSecondaryBar},this.renderSecondaryBarContent())}},{key:"renderSecondaryBarContent",value:function(){switch(this.state.secondaryBar.type){case"performers":return r.a.createElement(R,{changePerformer:this.changePerformer,performers:this.props.showData.performers,content:this.state.secondaryBar.content,showAboutView:this.showAboutView,showThumbnails:this.showThumbnails});case"songs":return r.a.createElement(H,{changeSong:this.props.changeSong,songs:this.props.showData.songs,performers:this.props.showData.performers});default:case"none":return r.a.createElement("div",null)}}}]),a}(r.a.Component),G=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"shiftTime",value:function(e){null!=this.callback&&this.callback(e)}},{key:"onTimeChanged",value:function(e){this.callback=e}}]),e}(),J=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).youtubeReady=function(){n.setState({isLoaded:!0,playing:!0})},n.play=function(){n.state.isLoaded&&n.setState({playing:!0})},n.pause=function(){n.state.isLoaded&&n.setState({playing:!1})},n.onTimerEvent=function(e){n.setState({currentTime:e})},n.zoomIn=function(){n.setState({zoom:!0})},n.zoomOut=function(){n.setState({zoom:!1})},n.enablePose=function(){n.setState({pose:!0})},n.disablePose=function(){n.setState({pose:!1})},n.changeSong=function(e){n.setState({song:n.props.showData.songs[e]})},n.changePerformer=function(e){n.setState({performer:n.props.showData.performers[e]})},n.newPerformer=function(){for(var e=Object.keys(n.props.showData.performers),t=e[e.length*Math.random()<<0];t===n.state.performer;)t=e[e.length*Math.random()<<0];n.setState({performer:n.props.showData.performers[t]})},n.shiftTime=function(e){n.timerDelegate.shiftTime(e),n.setState({currentTime:n.state.currentTime+e})},n.state={isLoaded:!1,playing:!1,zoom:!1,currentTime:0,song:n.props.showData.songs[n.props.song],performer:n.props.showData.performers[n.props.startingPerformer]},n.timerDelegate=new G,n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(g,{song:this.state.song,onReady:this.youtubeReady,playing:this.state.playing,hideTimer:!0,adjustedTimerEvent:this.onTimerEvent,timerDelegate:this.timerDelegate}),r.a.createElement(q,{showData:this.props.showData,song:this.state.song,performer:this.state.performer,playing:this.state.playing,zoom:this.state.zoom,onPlay:this.play,onPause:this.pause,onForward10:function(){return e.shiftTime(10)},onBack10:function(){return e.shiftTime(-10)},onZoomOut:this.zoomOut,onZoomIn:this.zoomIn,onEnablePose:this.enablePose,onDisablePose:this.disablePose,changeSong:this.changeSong,changePerformer:this.changePerformer,newPerformer:this.newPerformer,switchToPicker:this.props.switchToPicker,switchToAbout:this.props.switchToAbout}),r.a.createElement(p,{className:"primary-player",song:this.state.song,performer:this.state.performer,playing:this.state.playing,currentTime:this.state.currentTime,zoom:this.state.zoom,onEnded:this.props.switchToPicker}),r.a.createElement(y,{zoom:this.state.zoom}))}}]),a}(r.a.Component),W=(a(39),{songs:{fiveyears:{id:"fiveyears",name:"Five Years",artist:"David Bowie",performer:"ruby",youtube:{id:"IWm03wYBTbM",startTime:0}},freedom:{id:"freedom",name:"Freedom! \u201990",artist:"George Michael",performer:"mark",youtube:{id:"0-zqlgyUkd0",startTime:0}},iam:{id:"iam",name:"I Am What I Am",artist:"La Cage aux Folles",performer:"me",youtube:{id:"aB5JLA7A7No",startTime:0}},glass:{id:"glass",name:"Raise Your Glass",artist:"P!nk",performer:"lilly",youtube:{id:"XjVNlG5cZyQ",startTime:0}},nancy:{id:"nancy",name:"Nancy Boy",artist:"Placebo",performer:"ruby",youtube:{id:"PBxuq_eWW94",startTime:0}},mighty:{id:"mighty",name:"You Make Me Feel",artist:"Sylvester",performer:"chiyo",youtube:{id:"Ifr13Upytb4",startTime:0}},mylife:{id:"mylife",name:"This Is My Life",artist:"Shirley Bassey",performer:"me",youtube:{id:"9NyxQYPk1RY",startTime:0}},sweetdreams:{id:"sweetdreams",name:"Sweet Dreams (Live)",artist:"Beyonce",performer:"cara",youtube:{id:"y0xL3RH3JOo",startTime:0}}},performers:{amalgam:{id:"amalgam",name:"Zizi",insta:"@inst",bio:"test bio",n:0},bolly:{id:"bolly",name:"Bolly-Illusion ",insta:"@inst",bio:"test bio",n:1},cara:{id:"cara",name:"Cara Melle",insta:"@inst",bio:"test bio",n:2},chiyo:{id:"chiyo",name:"CHIYO",insta:"@PrinxChiyo",bio:"The Prinx of Provocation. Sexual Freedom Award's 'PERFORMER OF THE YEAR' and the first Trans finalist for Mr Gay England.",n:3},dakota:{id:"dakota",name:"Dakota",insta:"@inst",bio:"test bio",n:4},lilly:{id:"lilly",name:"Lilly SnatchDragon",insta:"@lillysnatch",bio:"Lilly SnatchDragon is an international, award - winning drag queen, burlesque artist and compere. Her approach to how the West stereotypes S.E Asian women won her 'Best Newcomer' at the London Cabaret Awards in 2015.  She has been in the Top 15 \u2018UK Burlesque Performers\u2019 since 2015, including No. 1 in 2017 and No. 3 in 2018.  Lilly is currently #5 in the world and #5 in the UK for 2019. She is also one of the founders of sell-out show \u2018LADS\u2019 and of renowned all-Asian cabaret collective \u2018The Bitten Peach\u2019. @bittenpeachuk",n:5},luke:{id:"luke",name:"Luke Slyka",insta:"@LukeSlyka",bio:"Similar to hitting randomise on a character creation screen is pretty much the aesthetic to my looks. A Clubkid Drag Thing.",n:6},mahatma:{id:"mahatma",name:"Mahatma Khandi",insta:"@mahatmakhandi",bio:"Mahatma Khandi as sweet and spicy as the curry sauce at McDonalds, Coined by her inner circle of voices in her head as the all knowing auntie that brings the 'good' potato salad to the BBQ, she thinks she\u2019s Haute couture but she\u2019s more like Haute mess. She believes in the power of equality and stupidity, to describe her in three words would be reductive (right madonna) but she\u2019s Fabuslaysian, she\u2019s Fashion, and she\u2019s hella Fanny.",n:7},mark:{id:"mark",name:"Mark Anthony",insta:"@inst",bio:"test bio",n:8},me:{id:"me",name:"Me",insta:"@inst",bio:"test bio",n:9},pussi:{id:"pussi",name:"Oedipussi Rex",insta:"@Oedipussi.rex",bio:"Oedi is a beardy drag barbarian, with acts as wildly inconsistent as the Gods themselves. When not stomping around and yelling incoherently at passing geese, he can usually be found creating mighty bits of facial hair from stuff found in a skip. Oedi also runs Phantasmaglorious- a monthly queer cabaret Gameshow at Matchstick Piehouse (Deptford)",n:10},ruby:{id:"ruby",name:"Ruby Wednesday",insta:"@inst",bio:"test bio",n:11},sister:{id:"sister",name:"Sister Sister",insta:"@inst",bio:"test bio",n:12},tete:{id:"tete",name:"Tete Bang",insta:"@inst",bio:"test bio",n:13}}}),U=a(64),K=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).updatePassword=function(e){n.setState({password:e.target.value})},n.attemptLogin=function(e){null!==e&&e.preventDefault(),"ZGVlcGZha2U="===btoa(n.state.password)?n.setState({entered:!0}):alert("Invalid password!")},n.state={entered:!1,password:""},n.video=r.a.createRef(),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.video.current&&this.handleHls(this.video.current)}},{key:"componentDidUpdate",value:function(){this.video.current&&this.handleHls(this.video.current)}},{key:"render",value:function(){return this.state.entered?r.a.createElement("div",{className:"enter-screen"},r.a.createElement("video",{className:"zizi-intro-video",onEnded:this.props.onEnter,ref:this.video,playsInline:!0,autoPlay:!0},r.a.createElement("source",{src:"https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/intro-and-host/intro/playlist.m3u8"})),r.a.createElement("button",{onClick:this.props.onEnter},"Skip Intro ",r.a.createElement(U.a,{fontSize:"inherit"}))):r.a.createElement("div",{className:"enter-screen"},r.a.createElement("a",{className:"enter",onClick:this.attemptLogin},r.a.createElement("img",{src:"img/enterButton.png"})),r.a.createElement("form",{onSubmit:this.attemptLogin},r.a.createElement("input",{className:"password",type:"password",name:"password",value:this.state.password,onChange:this.updatePassword,placeholder:"Password"})),r.a.createElement("p",{className:"password"},r.a.createElement("b",null,"BETA version"),r.a.createElement("br",null),"Works best in Chrome (desktop). ",r.a.createElement("br",null),"Known bugs on mobile."),r.a.createElement(y,null))}},{key:"handleHls",value:function(e){if(h.a.isSupported()&&!e.canPlayType("application/vnd.apple.mpegurl")){var t=new h.a;t.loadSource(e.querySelector("source").src),t.attachMedia(e)}}}]),a}(r.a.Component),Y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).showAbout=function(){n.props.switchToAbout(null,null)},n.showAboutView=function(e){n.setState({mode:{type:"performer",content:e}})},n.showThumbnails=function(){n.setState({mode:{type:"performer",content:"thumbnails"}})},n.setPerformer=function(e){n.setState({mode:{type:"song"},chosenPerformer:e})},n.setSong=function(e){n.props.switchToPlayer(n.state.chosenPerformer,e)},n.state={mode:{type:"performer",content:"thumbnails"},chosenPerformer:null,src:n.getSrc(n.props.source)},n.video=r.a.createRef(),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.handleHls(this.video.current)}},{key:"getSrc",value:function(e){var t=Math.floor(3*Math.random())+1;switch(e){default:case"enter":return"https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/intro-and-host/host-intro/playlist.m3u8";case"song-end":return"https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/intro-and-host/host".concat(t,"/playlist.m3u8")}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Z,{openClose:!0},this.renderContent(this.state.mode)),r.a.createElement("button",{className:"pickerAboutButton",onClick:this.showAbout},"About"),r.a.createElement("video",{className:"intro-video",onEnded:this.props.onEnter,autoPlay:!0,ref:this.video,playsInline:!0},r.a.createElement("source",{src:this.state.src})),r.a.createElement(y,{fade:!0}))}},{key:"renderContent",value:function(e){switch(e.type){default:case"performer":return r.a.createElement(R,{mode:"pick",changePerformer:this.setPerformer,performers:this.props.showData.performers,content:this.state.mode.content,showAboutView:this.showAboutView,showThumbnails:this.showThumbnails});case"song":return r.a.createElement(H,{songs:this.props.showData.songs,performers:this.props.showData.performers,changeSong:this.setSong})}}},{key:"handleHls",value:function(e){if(h.a.isSupported()&&!e.canPlayType("application/vnd.apple.mpegurl")){var t=new h.a;t.loadSource(e.querySelector("source").src),t.attachMedia(e)}}}]),a}(r.a.Component);function Q(e){return r.a.createElement("div",{className:"about-page"},r.a.createElement(D,{className:"close",onClick:e.onBack}),r.a.createElement("img",{src:"img/curtain-side-full.png",className:"curtain-side",draggable:"false"}),r.a.createElement("img",{src:"img/curtain-bg-full.jpg",className:"curtain-bg",draggable:"false"}),r.a.createElement("div",{className:"about"},r.a.createElement("img",{src:"img/about.png",className:"secondary-header",draggable:"false"}),r.a.createElement("img",{src:"img/About/Zizi banner.jpg",className:"banner",draggable:"false"}),r.a.createElement("h2",null,"Team"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"Jake Elwes")," - Artist"),r.a.createElement("li",null,r.a.createElement("b",null,"Me")," - Performance Director"),r.a.createElement("li",null,r.a.createElement("b",null,"Alexander Hill")," - Web & Development"),r.a.createElement("li",null,r.a.createElement("b",null,"Toby Elwes")," - Camera & Lighting"),r.a.createElement("li",null,r.a.createElement("b",null,"Charlie Baker")," - Sound Mixing")),r.a.createElement("small",null,r.a.createElement("p",{style:{textAlign:"center",marginTop:"3rem"}},r.a.createElement("i",null,"Edinburgh Futures Institute")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"Drew Hemment")," - Lead Researcher & Curator of 'The New Real'"),r.a.createElement("li",null,r.a.createElement("b",null,"Suzy Glass")," - Producer"),r.a.createElement("li",null,r.a.createElement("b",null,"Sarah Bennett")," - Researcher"),r.a.createElement("li",null,r.a.createElement("b",null,"Chris Sharratt")," - Editor"))),r.a.createElement("hr",null),r.a.createElement("i",null,r.a.createElement("p",null,'"My latest work aims to bring together two things I love, artificial intelligence, and the world of Drag performance. In an entertaining and humorous way Drag has allowed me to dig into some of the social issues built into machine learning technology.'),r.a.createElement("p",null,"Drag is a brilliant lens through which we can explore and expose the layers of technical construction and social bias inherent to AI."),r.a.createElement("p",null,"Working closely with friends from the London drag scene, in Zizi we have created a \u2018deep-fake\u2019 virtual cabaret. This deep-fake tech has enabled us to collaborate with machine learning to do drag, demonstrating how drag queens, drag kings and drag things can never be replaced by artificial intelligence."),r.a.createElement("p",null,"The Zizi Project pushes the boundaries of both drag and AI to discover what AI can teach us about drag \u2013 and what drag can teach us about AI.\u201d")),r.a.createElement("p",null,"Jake Elwes"),r.a.createElement("hr",null),r.a.createElement("h2",null,"Technical"),r.a.createElement("p",null,"Machine learning (teaching computers to learn from data), more specifically deep-fake technology, has been used to construct all the videos you see on this website. To produce a deep-fake, you start by training a neural network",r.a.createElement("sup",null,r.a.createElement("a",{href:"#",id:"ref1"},"1"))," ","on a dataset of images."),r.a.createElement("p",null,"This dataset contains the original images (video frames) of the real-life person as well as a graphic tracking the position of their skeleton, facial features, and silhouette."),r.a.createElement("p",null,"Creating deep-fakes begins with training a neural network to try to recreate the original image of this person, from only seeing their skeleton tracking (illustrated below). The neural network aims to get as close as possible to the original and does this by being given an accuracy score.",r.a.createElement("sup",null,r.a.createElement("a",{href:"#",id:"ref2"},"2"))," ","Once it has learnt to do this it can then start producing deep-fakes."),r.a.createElement("p",null,"Below you can see the iterative training process of a neural network learning how to create images of Lilly SnatchDragon:"),r.a.createElement("img",{className:"diagram",src:"img/About/diagram.gif",draggable:"false"}),r.a.createElement("p",null,"Using machine learning, this process iterates and improves until it can create new, fake faces which are indistinguishable from the real. For Zizi the method I use is called Video-to-Video Synthesis.",r.a.createElement("sup",null,r.a.createElement("a",{href:"#",id:"ref3"},"3"))),r.a.createElement("p",null,"Once the neural network has been training for, let's say, three days, it is ready to be fed new movements. Anyone can now control the deep-fake body by running skeleton tracking on a new video and then feeding these into the neural network."),r.a.createElement("p",null,"These visuals below show how new deep-fake images of Lilly SnatchDragon can be generated from the trained neural network (here with her movement controlled by Me the Drag Queen)."),r.a.createElement("img",{className:"diagram",src:"img/About/diagram-gen-close-small.gif",draggable:"false"}),r.a.createElement("img",{className:"diagram",src:"img/About/diagram-gen-full-small.gif",draggable:"false"}),r.a.createElement("p",null,"This process was repeated to create deep fakes of all 13 of our wonderful, diverse drag cast."),r.a.createElement("p",null,"The \u2018Zizi\u2019 character was created by simultaneously training on images of all of the performers. Not knowing how to differentiate between the bodies, the result is an amalgamation, a \u2018queering\u2019 of the data."),r.a.createElement("p",null,"Facial recognition algorithms (and deep fake technology) currently have a real problem recognising trans and non-binary people, as well as other marginalised identities, because they\u2019ve been trained on photos of people with cis binary identities."," ",r.a.createElement("sup",null,r.a.createElement("a",{href:"#",id:"ref4"},"4")),r.a.createElement("sup",null,r.a.createElement("a",{href:"#",id:"ref5"},"5"))),r.a.createElement("p",null,"The project poses the question whether making deep fakes using queer identities becomes a means of assimilation or inclusivity\u2026 or more a techno-activist method of dirtying and obfuscating the systems used to collect data on us."),r.a.createElement("p",null,"The Zizi project aims to critically examine these techniques using a dataset of drag performers, in the process exposing the workings of the black box which is artificial intelligence."),r.a.createElement("hr",null),r.a.createElement("h2",null,"Footnotes"),r.a.createElement("p",null,r.a.createElement("sup",{className:"footnote",id:"fn1"},"1. For more information see https://deepai.org/machine-learning-glossary-and-terms/neural-network",r.a.createElement("a",{href:"#ref1",title:"Jump back to footnote 1 in the text."},"\u21a9"))),r.a.createElement("p",null,r.a.createElement("sup",{className:"footnote",id:"fn2"},"2. an accuracy score calculated using the gradient descent learning algorithm",r.a.createElement("a",{href:"#ref2",title:"Jump back to footnote 2 in the text."},"\u21a9"))),r.a.createElement("p",null,r.a.createElement("sup",{className:"footnote",id:"fn3"},"3. Video-to-Video Synthesis is a conditional generative adversarial network (cGAN) developed by Wang et al. (Nvidia & MIT), NeurIPS, 2018. It uses OpenPose (2018) for skeleton tracking and DensePose (2018) for silhouette estimation. This technique also uses Flownet (2016) to take into account the motion in the video.",r.a.createElement("a",{href:"#ref3",title:"Jump back to footnote 3 in the text."},"\u21a9"))),r.a.createElement("p",null,r.a.createElement("sup",{className:"footnote",id:"fn4"},"4. See Hamidi, F., Scheuerman, M.K. and Branham, S.M., 2018, April. Gender recognition or gender reductionism? The social implications of embedded gender recognition systems. In\xa0Proceedings of the 2018 chi conference on human factors in computing systems\xa0(pp. 1-13).",r.a.createElement("a",{href:"#ref4",title:"Jump back to footnote 4 in the text."},"\u21a9"))),r.a.createElement("p",null,r.a.createElement("sup",{className:"footnote",id:"fn5"},"5. Excavating AI: The Politics of Images in Machine Learning Training Sets, Kate Crawford and Trevor Paglen https://www.excavating.ai/",r.a.createElement("a",{href:"#ref5",title:"Jump back to footnote 5 in the text."},"\u21a9"))),r.a.createElement("hr",null),r.a.createElement("p",null,"The Zizi Project (2019 - ongoing) is a collection of works by Jake Elwes exploring the intersection of Artificial Intelligence (A.I.) and drag performance. Drag challenges gender and explores otherness, while A.I. is often mystified as a tool and contains social bias. Zizi combines them through a deep fake, synthesised drag identity created using machine learning. The project explores what AI can teach us about drag, and what drag can teach us about A.I."),r.a.createElement("hr",null),r.a.createElement("h2",null,"'Zizi & Me' 2020"),r.a.createElement("iframe",{width:"100%",src:"https://www.youtube.com/embed/vtpVr5KVvnk",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),r.a.createElement("h2",null,"'Zizi: Queering the Dataset' 2019"),r.a.createElement("iframe",{src:"https://player.vimeo.com/video/388245510",width:"100%",frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0}),r.a.createElement("h2",null,"National Gallery X + FLUX - 2020"),r.a.createElement("iframe",{width:"100%",src:"https://www.youtube.com/embed/QOK97wutH-s",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),r.a.createElement("hr",null)))}var X=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onEnter=function(){n.setState({mode:"picker",source:"enter"})},n.switchToPlayer=function(e,t){n.setState({mode:"zizi",chosenPerformer:e,chosenSong:t})},n.switchToPicker=function(){n.setState({mode:"picker",source:"song-end"})},n.switchToAbout=function(e,t){n.setState({mode:"about",chosenPerformer:e,chosenSong:t})},n.restorePlayer=function(){null==n.state.chosenPerfomer||null==n.state.chosenSong?n.setState({mode:"picker"}):n.setState({mode:"zizi"})},n.state={mode:"intro",chosenSong:"iam",chosenPerformer:"amalgam",source:"enter"},n}return Object(l.a)(a,[{key:"render",value:function(){switch(this.state.mode){case"intro":return r.a.createElement(K,{onEnter:this.onEnter});default:case"zizi":return r.a.createElement("div",{className:"zizi"},r.a.createElement(J,{song:this.state.chosenSong,startingPerformer:this.state.chosenPerformer,showData:W,switchToPicker:this.switchToPicker,switchToAbout:this.switchToAbout}));case"picker":return r.a.createElement(Y,{showData:W,switchToPlayer:this.switchToPlayer,switchToAbout:this.switchToAbout,source:this.state.source});case"about":return r.a.createElement(Q,{onBack:this.restorePlayer})}}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.0c496bf4.chunk.js.map