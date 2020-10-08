(this.webpackJsonpzizi=this.webpackJsonpzizi||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),s=a.n(i),o=(a(23),a(4)),l=a(5),c=a(7),m=a(6),u=a(9),p=a.n(u),d=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).dragVideo=r.a.createRef(),n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("video",{autoPlay:this.props.playing,className:this.props.className,playsInline:!0,muted:!0,ref:this.dragVideo},r.a.createElement("source",{src:this.renderUrl(this.props)}))}},{key:"componentDidMount",value:function(){this.dragVideo.current.currentTime=this.props.currentTime,this.handleHls()}},{key:"componentDidUpdate",value:function(e){var t=this.dragVideo.current;e.playing&&!this.props.playing?t.pause():!e.playing&&this.props.playing&&t.play(),this.props.playing&&this.sync(this.props.currentTime),this.renderUrl(e)!==this.renderUrl(this.props)&&(t.load(),t.currentTime=this.props.currentTime,this.handleHls())}},{key:"sync",value:function(e){Math.abs(e-this.dragVideo.current.currentTime)>.3&&(console.log("UPDATING TIME",this.dragVideo.current.currentTime,e),this.dragVideo.current.currentTime=e)}},{key:"renderUrl",value:function(e){return e.shadow?this.renderShadowUrl(e):this.renderActUrl(e)}},{key:"renderActUrl",value:function(e){var t=e.zoom?"close":"full",a=e.pose?"pose":e.performer.id;return"https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/".concat(e.song.id,"-").concat(a,"-").concat(t,"/playlist.m3u8")}},{key:"renderShadowUrl",value:function(e){var t=e.zoom?"close":"full";return"https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/".concat(e.song.id,"-shadow-").concat(t,"/playlist.m3u8")}},{key:"handleHls",value:function(){if(p.a.isSupported()&&!this.dragVideo.current.canPlayType("application/vnd.apple.mpegurl")){var e=new p.a;e.loadSource(this.renderUrl(this.props)),e.attachMedia(this.dragVideo.current)}}}]),a}(r.a.Component);d.defaultProps={zoom:!1,pose:!1,shadow:!1,playing:!1};var h=d,f=a(12),y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).youtubeReady=function(e){n.player=e.target,n.player.seekTo(n.props.song.youtube.startTime),n.player.pauseVideo(),n.props.onReady()},n.updateTimer=function(){var e=n.props.song.youtube.startTime,t=n.player.getCurrentTime();n.setState({timer:t.toFixed(2)}),n.props.adjustedTimerEvent(t-e)},n.state={isLoaded:!1,timer:0},n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){e.playing&&!this.props.playing?this.pause():!e.playing&&this.props.playing&&this.play(),window.yt=this.player}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"none"}},r.a.createElement(f.a,{videoId:this.props.song.youtube.id,opts:{height:"390",width:"640",videoId:"",playsinline:"1",playerVars:{autoplay:0,autohide:1,playsinline:1}},onReady:this.youtubeReady})),this.props.hideTimer||r.a.createElement("span",{className:"timer"},this.state.timer))}},{key:"play",value:function(){var e=this.props.song.youtube.startTime;this.player.getCurrentTime()<e?this.player.seekTo(e):this.player.playVideo(),this.timerIntervalID=setInterval(this.updateTimer,1e3)}},{key:"pause",value:function(){this.player.pauseVideo(),clearInterval(this.timerIntervalID)}}]),a}(r.a.Component);function g(e){var t=e.zoom?"close":"full",a="side"===e.type?".png":".jpg",n="img/curtain-"+e.type+"-"+t+a,i="curtain-"+e.type;return r.a.createElement("img",{src:n,className:i,draggable:!1})}y.defaultProps={playing:!1,hideTimer:!0,onReady:function(){},adjustedTimerEvent:function(){}};var b=a(54),E=a(55),v=a(56),w=a(57),k=a(58),z=a(59),S=a(60),C=a(61),T=a(62),N=a(63),j=a(64);function O(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(b.a,{fontSize:"inherit",onClick:e.onClick}))}function P(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(E.a,{fontSize:"inherit",onClick:e.onClick}))}function M(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(v.a,{fontSize:"inherit",onClick:e.onClick}))}function I(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(w.a,{fontSize:"inherit",onClick:e.onClick}))}function D(e){return r.a.createElement("a",{className:"zizi-icon",onClick:e.onClick},r.a.createElement("svg",{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeInherit",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"},r.a.createElement("path",{d:"M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z"})," "))}function B(e){return r.a.createElement("a",{className:"zizi-icon",onClick:e.onClick},r.a.createElement("svg",{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeInherit",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"},r.a.createElement("path",{d:"M16.487 12a2.248 2.248 0 10.001-4.497A2.248 2.248 0 0016.487 12zm0 1.125c-1.501 0-4.499.754-4.499 2.249v.562c0 .309.253.562.562.562h7.872a.564.564 0 00.562-.562v-.562c.002-1.496-2.995-2.249-4.497-2.249zm-10.254-.859a5.674 5.674 0 01-.622.81c-.557.586-1.285.742-2.069.702-.705-.036-.701 1.057 0 1.093 1.474.075 2.516-.562 3.346-1.647a9.412 9.412 0 01-.378-.53 16.245 16.245 0 01-.277-.428zm1.423-.87l.226.351c.138-.191.286-.375.452-.547.419-.433.897-.61 1.421-.661l-.099.121c-.192.228-.224.549 0 .773.197.197.581.228.773 0 .296-.351.578-.713.873-1.065.192-.193.266-.515.028-.773l-.984-1.065c-.479-.519-1.25.256-.773.773l.128.138c-.536.038-1.053.175-1.53.485a4.1 4.1 0 00-.923.855c.054.075.107.152.16.232.085.127.168.257.248.383zm2.772 1.171a.473.473 0 00-.369-.16.58.58 0 00-.404.16c-.224.224-.192.545 0 .773l.099.121c-.524-.05-1.002-.228-1.421-.661a5.613 5.613 0 01-.628-.8c-.183-.273-.354-.554-.536-.829a5.951 5.951 0 00-.106-.154c-.815-1.169-1.834-1.894-3.29-1.894a4.55 4.55 0 00-.232.006c-.69.035-.704 1.093-.034 1.093l.034-.001a4.28 4.28 0 01.225-.006c.698 0 1.34.178 1.844.708.31.327.555.7.794 1.077.113.179.226.358.344.535.101.151.206.302.316.449.313.418.668.805 1.108 1.091.477.31.993.446 1.53.485l-.128.138c-.366.396.002.944.41.944a.489.489 0 00.363-.172l.983-1.065c.238-.258.165-.58-.028-.773-.296-.352-.578-.714-.874-1.065z"})))}function A(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(k.a,{fontSize:"inherit",onClick:e.onClick}))}function V(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(z.a,{fontSize:"inherit",onClick:e.onClick}))}function Z(e){return r.a.createElement("a",{className:"zizi-icon close"},r.a.createElement(S.a,{fontSize:"inherit",onClick:e.onClick}))}function x(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(C.a,{fontSize:"inherit",onClick:e.onClick}))}function L(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(T.a,{fontSize:"inherit",onClick:e.onClick}))}function U(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(N.a,{fontSize:"inherit",onClick:e.onClick}))}function R(e){return r.a.createElement("a",{className:"zizi-icon"},r.a.createElement(j.a,{fontSize:"inherit",onClick:e.onClick}))}var H=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=[];for(var t in this.props.performers)e.push(this.renderPerformer(this.props.performers[t]));return r.a.createElement("div",null,r.a.createElement("img",{alt:"",src:"img/performers.png",draggable:"false",className:"secondary-header"}),r.a.createElement("div",{className:"performers-list"},e))}},{key:"renderPerformer",value:function(e){var t=this;return r.a.createElement("div",{className:"performer",key:e.id},r.a.createElement("a",{onClick:function(){return t.props.changePerformer(e.id)}},r.a.createElement("img",{alt:"AI generated of drag perfomer '".concat(e.name,"'"),src:"img/performers/PickerImage/".concat(e.id,".jpg"),draggable:"false"}),r.a.createElement("p",null,e.name)),r.a.createElement("small",null,r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"More Info"))))}}]),a}(r.a.PureComponent),W=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=[];for(var t in this.props.songs)e.push(this.renderSong(this.props.songs[t]));return r.a.createElement("div",null,r.a.createElement("img",{src:"img/pick.png",className:"secondary-header",draggable:"false"}),r.a.createElement("div",{className:"songs-list"},e))}},{key:"renderSong",value:function(e){var t=this;return r.a.createElement("div",{className:"song",key:e.id},r.a.createElement("a",{onClick:function(){return t.props.changeSong(e.id)}},r.a.createElement("img",{src:"img/album_covers/".concat(e.id,".jpg"),draggable:"false"}),r.a.createElement("p",null,r.a.createElement("w",null,e.name)," | ",e.artist," ",r.a.createElement("br",null),r.a.createElement("small",null,"Movement by ",r.a.createElement("a",{class:"artist"},this.props.performers[e.performer].name)))))}}]),a}(r.a.PureComponent),F=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("img",{src:"img/about.png",className:"secondary-header",draggable:"false"}),r.a.createElement("p",null,"Draft Text:"),r.a.createElement("p",null,"Drag Queens, Drag Kings, Drag Things and Artificial Intelligence... "),r.a.createElement("p",null,"How Zizi constructs it's vitural body:"),r.a.createElement("iframe",{width:"100%",src:"https://www.youtube.com/embed/vtpVr5KVvnk",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),r.a.createElement("p",null,"\u2019The Zizi Show\u2019 (2020) is a virtual online stage hosting a groundbreaking new cabaret show with a twist. Featuring (and hosted by) Zizi, a drag act that has been constructed using deep-fake technology and has learnt how to do drag by watching a diverse group of human performers. During the acts audiences are invited to switch between the different deep-fake bodies and identities that Zizi has learnt, making visible the processes used in their construction."),r.a.createElement("p",null,"Facial recognition algorithms (and deep fake technology) currently have a real problem recognising trans & queer people, as well as other marginalised identities due to the way they\u2019re built. Deep fakes are being used to create fake news of people in positions of power, or as amusing instagram filters. The Zizi project critically examines these techniques using a dataset of drag performers."),r.a.createElement("p",null,"The Zizi Project (2019 - ongoing) is a collection of works by Jake Elwes exploring the intersection of Artificial Intelligence (A.I.) and drag performance. Drag challenges gender and explores otherness, while A.I. is often mystified as a tool and contains social bias. Zizi combines them through a deep fake, synthesised drag identity created using machine learning. The project explores what AI can teach us about drag, and what drag can teach us about A.I."),r.a.createElement("p",null,"Other works as part of The Zizi Project:"),r.a.createElement("p",null,"'Zizi & I' 2020"),r.a.createElement("iframe",{width:"100%",src:"https://www.youtube.com/embed/vtpVr5KVvnk",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),r.a.createElement("p",null,"'Zizi: Queering the Dataset' 2019"),r.a.createElement("iframe",{src:"https://player.vimeo.com/video/388245510",width:"100%",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0}),r.a.createElement("iframe",{width:"100%",src:"https://www.youtube.com/embed/QOK97wutH-s",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),r.a.createElement("p",null,"Credits:",r.a.createElement("br",null),"Jake Elwes - Artist",r.a.createElement("br",null),"Alexander Hill - Web tech & development",r.a.createElement("br",null),"Toby Elwes - Camera",r.a.createElement("br",null),"Me - Performance Director"))}}]),a}(r.a.PureComponent),J=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).hideMain=function(){n.setState({fullSize:!1})},n.showMain=function(){n.setState({fullSize:!0})},n.showPerformers=function(){n.setState({secondaryBar:"performers",showSecondaryBar:!0})},n.showAbout=function(){n.setState({secondaryBar:"about",showSecondaryBar:!0})},n.showSongs=function(){n.setState({secondaryBar:"songs",showSecondaryBar:!0})},n.hideSecondaryBar=function(){n.setState({showSecondaryBar:!1})},n.state={fullSize:!1,showSecondaryBar:!1,secondaryBar:"none"},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.fullSize?"open":"closed";return r.a.createElement("div",null,r.a.createElement("div",{className:"zizi-sidebar "+e},this.renderMainbar(),this.renderMinibar()),this.renderSecondaryBar())}},{key:"renderMinibar",value:function(){var e=this,t=this.props.zoom?r.a.createElement(M,{onClick:this.props.onZoomOut}):r.a.createElement(I,{onClick:this.props.onZoomIn}),a=this.state.fullSize?r.a.createElement(Z,{onClick:this.hideMain}):r.a.createElement(x,{onClick:this.showMain});return r.a.createElement("div",{className:"mini-sidebar button-sidebar"},r.a.createElement("div",{className:"top-buttons"},a),r.a.createElement("div",{className:"centered-buttons"},t,r.a.createElement(R,null),r.a.createElement(D,{onClick:this.showPerformers}),r.a.createElement(B,{onClick:function(){return e.props.newPerformer()}})),r.a.createElement("div",{className:"dummy-spacing-div"}))}},{key:"renderMainbar",value:function(){var e=this.props.playing?r.a.createElement(P,{onClick:this.props.onPause}):r.a.createElement(O,{onClick:this.props.onPlay});return r.a.createElement("div",{className:"main-sidebar"},r.a.createElement("img",{src:"img/title.png",id:"main-bar-logo",alt:"The Zizi Show",draggable:"false"}),r.a.createElement("div",{className:"main-bar-content"},r.a.createElement("div",{className:"player-controls"},e,r.a.createElement(U,null),r.a.createElement(L,null),r.a.createElement(A,null)),r.a.createElement("div",{className:"now-playing"},r.a.createElement("p",null,'"'.concat(this.props.song.name,'" by ').concat(this.props.song.artist)),r.a.createElement("sub",null,"Movement by ",r.a.createElement("a",{className:"inline-link",href:"#strats"},this.props.showData.performers[this.props.song.performer].name)),r.a.createElement("sub",null,"Deepfake trained on ",r.a.createElement("a",{className:"inline-link",href:"#dstir"},this.props.performer.name))),r.a.createElement("div",{className:"about-button"},r.a.createElement("a",{onClick:this.showAbout,className:"sidebar-large-button"},"ABOUT"))),r.a.createElement("div",{className:"copyright"},r.a.createElement(V,{onClick:this.showSongs}),r.a.createElement("sub",null,"The Zizi Project\xa9"),r.a.createElement("sub",null,r.a.createElement("a",{className:"inline-link",href:"https://jakeelwes.com"}," Jake Elwes")," 2020"),r.a.createElement("sub",null,"Part of ",r.a.createElement("a",{className:"inline-link",href:"https://newsreal.cc"},"newsreal.cc"))))}},{key:"renderSecondaryBar",value:function(){var e=this.state.showSecondaryBar?"open":"closed";return r.a.createElement("div",{className:"secondary-sidebar "+e},r.a.createElement("div",{className:"close-sidebar-left"},r.a.createElement("div",{className:"close-button2"},r.a.createElement(Z,{onClick:this.hideSecondaryBar}))),r.a.createElement("div",{className:"content-sidebar"},this.renderSecondaryBarContent()))}},{key:"renderSecondaryBarContent",value:function(){switch(this.state.secondaryBar){case"about":return r.a.createElement(F,null);case"performers":return r.a.createElement(H,{changePerformer:this.props.changePerformer,performers:this.props.showData.performers});case"songs":return r.a.createElement(W,{changeSong:this.props.changeSong,songs:this.props.showData.songs,performers:this.props.showData.performers});default:case"none":return r.a.createElement("div",null)}}}]),a}(r.a.Component),Y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).youtubeReady=function(){n.setState({isLoaded:!0})},n.play=function(){n.state.isLoaded&&n.setState({playing:!0})},n.pause=function(){n.state.isLoaded&&n.setState({playing:!1})},n.onTimerEvent=function(e){n.setState({currentTime:e})},n.zoomIn=function(){n.setState({zoom:!0})},n.zoomOut=function(){n.setState({zoom:!1})},n.enablePose=function(){n.setState({pose:!0})},n.disablePose=function(){n.setState({pose:!1})},n.changeSong=function(e){n.setState({song:n.props.showData.songs[e]})},n.changePerformer=function(e){console.log(e,n.props.showData.performers),n.setState({performer:n.props.showData.performers[e]})},n.newPerformer=function(){var e=Object.keys(n.props.showData.performers),t=e[e.length*Math.random()<<0];console.log(t),n.setState({performer:n.props.showData.performers[t]})},n.state={isLoaded:!1,playing:!1,zoom:!1,pose:!1,currentTime:0,song:n.props.showData.songs.fiveyears,performer:n.props.showData.performers.lilly},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,{song:this.state.song,onReady:this.youtubeReady,playing:this.state.playing,hideTimer:!0,adjustedTimerEvent:this.onTimerEvent}),r.a.createElement(J,{showData:this.props.showData,song:this.state.song,performer:this.state.performer,isLoaded:this.state.isLoaded,playing:this.state.playing,zoom:this.state.zoom,onPlay:this.play,onPause:this.pause,onZoomOut:this.zoomOut,onZoomIn:this.zoomIn,onEnablePose:this.enablePose,onDisablePose:this.disablePose,changeSong:this.changeSong,changePerformer:this.changePerformer,newPerformer:this.newPerformer}),r.a.createElement(g,{zoom:this.state.zoom,type:"side"}),r.a.createElement(g,{zoom:this.state.zoom,type:"bg"}),r.a.createElement(h,{className:"primary-player",song:this.state.song,performer:this.state.performer,playing:this.state.playing,currentTime:this.state.currentTime,zoom:this.state.zoom,pose:this.state.pose,shadow:!1}),r.a.createElement(h,{className:"pose-player",song:this.state.song,performer:this.state.performer,playing:this.state.playing,currentTime:this.state.currentTime,zoom:this.state.zoom,pose:!0,shadow:!1}),r.a.createElement(h,{className:"shadow-player",song:this.state.song,performer:this.state.performer,playing:this.state.playing,currentTime:this.state.currentTime,zoom:this.state.zoom,pose:this.state.pose,shadow:!0}))}}]),a}(r.a.Component),K=(a(40),{songs:{fiveyears:{id:"fiveyears",name:"Five Years",artist:"David Bowie",performer:"ruby",youtube:{id:"IWm03wYBTbM",startTime:0}},freedom:{id:"freedom",name:"Freedom! \u201990",artist:"George Michael",performer:"mark",youtube:{id:"0-zqlgyUkd0",startTime:0}},iam:{id:"iam",name:"I Am What I Am",artist:"La Cage aux Folles",performer:"me",youtube:{id:"aB5JLA7A7No",startTime:0}},glass:{id:"glass",name:"Raise Your Glass",artist:"P!nk",performer:"lilly",youtube:{id:"XjVNlG5cZyQ",startTime:0}},nancy:{id:"nancy",name:"Nancy Boy",artist:"Placebo",performer:"ruby",youtube:{id:"PBxuq_eWW94",startTime:0}},mighty:{id:"mighty",name:"You Make Me Feel",artist:"Sylvester",performer:"chiyo",youtube:{id:"Ifr13Upytb4",startTime:0}},mylife:{id:"mylife",name:"This Is My Life",artist:"Shirley Bassey",performer:"me",youtube:{id:"9NyxQYPk1RY",startTime:0}},sweetdreams:{id:"sweetdreams",name:"Sweet Dreams (Live)",artist:"Beyonce",performer:"cara",youtube:{id:"y0xL3RH3JOo",startTime:0}}},performers:{amalgam:{id:"amalgam",name:"Zizi: Amalgam",insta:"@inst",bio:"test bio",n:0},bolly:{id:"bolly",name:"Bolly-Illusion ",insta:"@inst",bio:"test bio",n:1},cara:{id:"cara",name:"Cara Melle",insta:"@inst",bio:"test bio",n:2},chiyo:{id:"chiyo",name:"Chiyo",insta:"@inst",bio:"test bio",n:3},dakota:{id:"dakota",name:"Dakota",insta:"@inst",bio:"test bio",n:4},lilly:{id:"lilly",name:"Lilly Snatchdragon",insta:"@inst",bio:"test bio",n:5},luke:{id:"luke",name:"Luke Slyka",insta:"@inst",bio:"test bio",n:6},mahatma:{id:"mahatma",name:"Mahatma Khandi",insta:"@inst",bio:"test bio",n:7},mark:{id:"mark",name:"Mark Anthony",insta:"@inst",bio:"test bio",n:8},me:{id:"me",name:"Me",insta:"@inst",bio:"test bio",n:9},pussi:{id:"pussi",name:"Oedipussi Rex",insta:"@inst",bio:"test bio",n:10},ruby:{id:"ruby",name:"Ruby Wednesday",insta:"@inst",bio:"test bio",n:11},sister:{id:"sister",name:"Sister Sister",insta:"@inst",bio:"test bio",n:12},tete:{id:"tete",name:"Tete Bang",insta:"@inst",bio:"test bio",n:13}}});function Q(e){return r.a.createElement("div",null,r.a.createElement("a",{href:"#main",className:"enter",onClick:e.onEnter},r.a.createElement("img",{src:"img/enterButton.png"})),r.a.createElement(g,{type:"side"}),r.a.createElement(g,{type:"bg"}))}var q=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={chosenAct:null,chosenPerformer:null},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),a}(r.a.Component),G=a(16),_=(Object(G.a)({basename:"/build"}),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEnter=function(){n.setState({mode:"zizi"})},n.state={mode:"intro"},n}return Object(l.a)(a,[{key:"render",value:function(){switch(this.state.mode){case"intro":return r.a.createElement(Q,{onEnter:this.onEnter});default:case"zizi":return r.a.createElement("div",{className:"zizi"},r.a.createElement(Y,{showData:K}));case"picker":return r.a.createElement(q,null)}}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0ee74d4d.chunk.js.map