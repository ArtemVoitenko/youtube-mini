(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),i=a(18),l=a(11),s=a(4),u=a(20),d=a(23),m={searchResults:null,playVideoInfo:null,playVideoId:null,watchedVideos:null,Intl:{locale:null}},h=Object(u.b)(Object.assign({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VIDEOS_RETURNED":return Object(d.a)({},e,{searchResults:t.payload});case"PLAY_VIDEO":return Object(d.a)({},e,{playVideoId:t.payload});case"GET_WATCHED_VIDEOS":return Object(d.a)({},e,{watchedVideos:t.payload});default:return e}}},{Intl:s.IntlReducer})),p=Object(u.c)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),g=a(6),v=a(9),f=a(12),E=a(10),y=a(13),b=a(17),_=(a(62),Object(s.withTranslate)(function(e){var t=e.removeWatchedVideo,a=e.onPlayWatchedVideo,n=e.watchedVideos,c=e.translate,o=e.activeVideo;return r.a.createElement("div",{className:"sidebar"},r.a.createElement("p",{className:"sidebar__title"},c("watchedTitle")),n?r.a.createElement("ul",{className:"watched"},Object(b.a)(n).reverse().map(function(e){return r.a.createElement("li",{key:e.id,className:"watched__item ".concat(o==e.id?"active":""),onClick:function(){a(e.id)}},r.a.createElement("img",{src:e.thumb,alt:e.title,className:"watched__thumb"}),r.a.createElement("p",{className:"watched__title"},e.title),r.a.createElement("button",{className:"watched__remove",onClick:function(a){a.stopPropagation(),t(e.id)}},c("remove")))})):r.a.createElement("p",{className:"sidebar__message"},c("watchedEmpty")))})),O=a(42),V=(a(74),function(e){var t=e.videoId;return r.a.createElement("div",{className:"video-player__wrapper"},r.a.createElement(O.a,{videoId:t,className:"video-player__iframe",containerClassName:"video-player",opts:{height:"780",width:"1280",playerVars:{autoplay:1}}}))}),w=a(27),S=a.n(w),N=a(45),j=r.a.createContext(),I=j.Provider,k=j.Consumer,C=function(){return function(e){return function(t){return r.a.createElement(k,null,function(a){return r.a.createElement(e,Object.assign({},t,{youtubeService:a}))})}}},T=(a(76),function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={query:""},a.onSearchInput=function(){var e=Object(N.a)(S.a.mark(function e(t){var n,r;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.value,a.setState({query:n}),!(n.length>3)){e.next=9;break}return e.next=5,a.getVideos(n);case 5:r=e.sent,a.props.onSearch(r),e.next=10;break;case 9:a.props.onSearch(null);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.getVideos=function(e){return a.props.youtubeService.requestVideos(e)},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.translate,t=this.state.query;return r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",className:"search__input",onChange:this.onSearchInput,onFocus:this.onSearchInput,value:t,placeholder:e("searchPlaceholder")}))}}]),t}(n.Component)),L=C()(Object(s.withTranslate)(T)),x=(a(77),Object(s.withTranslate)(function(e){var t=e.id,a=e.title,n=e.thumb,c=(e.votes,e.playVideo),o=e.translate;return r.a.createElement("div",{className:"search-item"},r.a.createElement("img",{src:n,alt:a,className:"search-item__thumb"}),r.a.createElement("p",{className:"search-item__title"},a),r.a.createElement("button",{className:"search-item__play",onClick:function(){c({id:t,thumb:n,title:a})}},o("play")))})),D=function(e){var t=e.results,a=e.playVideo;return r.a.createElement("div",{className:"search-results"},t.map(function(e){return r.a.createElement(x,{key:e.id.videoId,id:e.id.videoId,title:e.snippet.title,thumb:e.snippet.thumbnails.default.url,votes:1,playVideo:a})}))},R=(a(78),a(46)),P=a.n(R),A=function(e){var t=e.icon,a=e.iconClass;return r.a.createElement("i",{className:a},r.a.createElement("svg",{viewBox:"0 0 16 16"},r.a.createElement("use",{xlinkHref:"".concat(P.a,"#").concat(t)})))},W=(a(79),function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={dropdownVisible:!1},a.setLanguageToStorage=function(e){a.setState({dropdownVisible:!1});for(var t=e.target;!t.dataset.locale;)t=t.parentNode;var n=t.dataset.locale;localStorage.setItem("lang",JSON.stringify(n))},a.toggleLanguagesDropdown=function(){a.setState(function(e){return{dropdownVisible:!e.dropdownVisible}})},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.activeLanguage,t=this.state.dropdownVisible;return r.a.createElement("div",{className:"languages"},r.a.createElement("button",{onClick:this.toggleLanguagesDropdown,class:"languages__button ".concat(t?"active":"")},r.a.createElement(A,{iconClass:"languages__icon",icon:e}),e),r.a.createElement("div",{className:"languages__dropdown ".concat(t?"active":"")},r.a.createElement(l.b,{className:"languages__link",onClick:this.setLanguageToStorage,"data-locale":"ru",to:"/youtube-mini/ru"},r.a.createElement(A,{"data-locale":"ru",iconClass:"languages__icon",icon:"ru"})," ru"),r.a.createElement(l.b,{className:"languages__link",onClick:this.setLanguageToStorage,"data-locale":"en",to:"/youtube-mini"},r.a.createElement(A,{"data-locale":"en",iconClass:"languages__icon",icon:"en"})," en")))}}]),t}(n.Component)),J=(a(81),function(e){var t=e.onSearch,a=e.results,n=e.playVideo,c=e.activeLanguage,o=a?r.a.createElement(D,{results:a,playVideo:n}):null;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header__wrapper"},r.a.createElement("div",{className:"logo"},r.a.createElement(A,{icon:"youtube",iconClass:"logo__icon"}),"You-mini"),r.a.createElement("div",{className:"header__search"},r.a.createElement(L,{onSearch:t}),o),r.a.createElement(W,{activeLanguage:c}))))}),B=(a(82),function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).onSearch=function(e){a.props.setSearchResults(e)},a.onPlayVideo=function(e){a.props.playVideo(e.id),a.props.setSearchResults(null),a.setPlayedVideoToStorage(e)},a.setPlayedVideoToStorage=function(e){var t=a.getVideosFromStorage();if(!a.isElementExists(e,t)){if(t&&t.length>=5){var n=t.slice(1,5);a.setItemsToLocalStorage(e,n)}else t&&t.length>0?a.setItemsToLocalStorage(e,t):a.setItemsToLocalStorage(e);a.props.saveWatched(a.getVideosFromStorage())}},a.removeWatchedVideo=function(e){var t=a.getVideosFromStorage(),n=a.findVideoById(t,e),r=[].concat(Object(b.a)(t.slice(0,n)),Object(b.a)(t.slice(n+1)));localStorage.setItem("watchedVideos",JSON.stringify(r)),a.props.saveWatched(r)},a.getVideosFromStorage=function(){return JSON.parse(localStorage.getItem("watchedVideos"))},a.isElementExists=function(e,t){return!!t&&-1!=t.findIndex(function(t){return t.id===e.id})},a.setItemsToLocalStorage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];localStorage.setItem("watchedVideos",JSON.stringify([].concat(Object(b.a)(t),[e])))},a.findVideoById=function(e,t){return e.findIndex(function(e){return e.id===t})},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.saveWatched,a=e.setLocale,n=e.lang;t(this.getVideosFromStorage()),a(n)}},{key:"render",value:function(){var e=this.props,t=e.searchResults,a=e.playVideo,c=e.playVideoId,o=e.watchedVideos,i=e.lang;return r.a.createElement(n.Fragment,null,r.a.createElement(J,{results:t,playVideo:this.onPlayVideo,activeLanguage:i,onSearch:this.onSearch}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content"},r.a.createElement(_,{onPlayWatchedVideo:a,removeWatchedVideo:this.removeWatchedVideo,watchedVideos:o,activeVideo:c}),r.a.createElement(V,{videoId:c}))))}}]),t}(n.Component)),F=Object(i.connect)(function(e){var t=e.reducer;return{searchResults:t.searchResults,playVideoId:t.playVideoId,watchedVideos:t.watchedVideos}},function(e){return{setSearchResults:function(t){e({type:"VIDEOS_RETURNED",payload:t})},playVideo:function(t){e(function(e){return{type:"PLAY_VIDEO",payload:e}}(t))},saveWatched:function(t){e(function(e){return{type:"GET_WATCHED_VIDEOS",payload:e}}(t))},setLocale:function(t){e(s.IntlActions.setLocale(t))}}})(B),q=a(15),G=(a(83),function(){var e=function(e){for(var t=e.target;!t.dataset.locale;)t=t.parentNode;var a=t.dataset.locale;localStorage.setItem("lang",JSON.stringify(a))};return r.a.createElement("div",{className:"languages-block"},r.a.createElement(l.b,{className:"languages-block__link",onClick:e,"data-locale":"ru",to:"/youtube-mini/ru"},r.a.createElement(A,{"data-locale":"ru",iconClass:"languages-block__icon",icon:"ru"})," ","Russian"),r.a.createElement(l.b,{className:"languages-block__link",onClick:e,"data-locale":"en",to:"/youtube-mini"},r.a.createElement(A,{"data-locale":"en",iconClass:"languages-block__icon",icon:"en"})," ","English"))}),U=(a(84),a(85),function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).checkActiveLanguage=function(){var e=JSON.parse(localStorage.getItem("lang")),t=a.props.history;e?"ru"==e?t.push("/youtube-mini/ru"):t.push("/youtube-mini"):t.push("/youtube-mini/langs/")},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.checkActiveLanguage()}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(q.a,{exact:!0,path:"/youtube-mini/ru",render:function(){return r.a.createElement(F,{lang:"ru"})}}),r.a.createElement(q.a,{exact:!0,path:"/youtube-mini",render:function(){return r.a.createElement(F,{lang:"en"})}}),r.a.createElement(q.a,{exact:!0,path:"/youtube-mini/langs",component:G}))}}]),t}(n.Component)),X=Object(q.e)(U),H=function(){return r.a.createElement("div",{className:"error-indicator"},"Error!!!!!")},Y=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(H,null):this.props.children}}]),t}(n.Component),z=a(86),M={en:{locale:"/",messages:{searchPlaceholder:"Type at least 4 symbols to search",watchedTitle:"Watched videos",watchedEmpty:"List is empty",play:"Play",remove:"Remove",locale:"/"}},ru:{locale:"/ru",messages:{searchPlaceholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0438\u043d\u0438\u043c\u0443\u043c 4 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",watchedTitle:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0435 \u0432\u0438\u0434\u0435\u043e",watchedEmpty:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442",play:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440",remove:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",locale:"/ru"}}},K=new function e(){var t=this;Object(g.a)(this,e),this._apiSearchBase="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyCdB1wyB8GzS0At7xWSKldGm7O7oxJiNZ0&q=",this.requestVideos=function(e){return z({method:"get",url:"".concat(t._apiSearchBase).concat(e)}).then(function(e){return JSON.parse(e.request.response).items})}};o.a.render(r.a.createElement(i.Provider,{store:p},r.a.createElement(s.IntlProvider,{translations:M,locale:"en"},r.a.createElement(Y,null,r.a.createElement(I,{value:K},r.a.createElement(l.a,null,r.a.createElement(X,null)))))),document.getElementById("root"))},46:function(e,t,a){e.exports=a.p+"static/media/sprite.ebbcac6c.svg"},48:function(e,t,a){e.exports=a(103)},62:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){}},[[48,1,2]]]);