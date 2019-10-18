(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,n){},117:function(e,n,t){},118:function(e,n,t){},119:function(e,n,t){},120:function(e,n,t){},121:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(47),i=t.n(r),c=(t(55),t(48)),l=t(11),s=t(12),u=t(16),m=t(13),f=t(15),d=t(2);t(56);function h(e){return o.a.createElement("div",{className:"leftGutter"},e.children)}function v(e){return o.a.createElement("div",{className:"rightGutter"},e.children)}t(57);var k=function(e){return o.a.createElement("div",{className:"formWrapper"},e.children)};t(58);function p(e){return o.a.createElement("input",Object.assign({className:"input"},e))}function g(e){return o.a.createElement("button",Object.assign({},e,{className:"submitButton"}),e.children)}t(59);var E=function(e){return o.a.createElement("div",{className:"searchedBookWrapper"},e.children)},b=(t(60),t(14)),I=t.n(b),N=function(e){return o.a.createElement("div",{className:"bookItem"},o.a.createElement("h3",{className:"title","data-id":e.bookId},e.title),o.a.createElement(I.a,{rating:e.rating,starRatedColor:"#A6B3EA",numberOfStars:6,name:"rating",starDimension:"20px",starSpacing:"2px"}),o.a.createElement("div",null,o.a.createElement("a",{href:e.infoLink},o.a.createElement("img",{className:"bookImage",alt:"no book cover found",src:e.imageLink})),o.a.createElement("p",{className:"description"},o.a.createElement("a",{href:e.infoLink},"More information"))),o.a.createElement("p",{className:"author"},"By\xa0",e.authors.join(", ")),o.a.createElement("p",{className:"description"},e.description),o.a.createElement("button",{className:"saveBook",onClick:function(){e.handleSaveEvent(e.bookId)}},"Save"))};t(66);var w=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"savedBookWrapper"}," ",e.children))},B=(t(67),function(e){return o.a.createElement("div",{className:"bookItem"},o.a.createElement("h3",{className:"title","data-id":e.bookId,isbn:e.isbn},e.title),o.a.createElement(I.a,{rating:e.rating,starRatedColor:"#A6B3EA",numberOfStars:6,name:"rating",starDimension:"20px",starSpacing:"2px"}),o.a.createElement("div",null,o.a.createElement("a",{href:e.infoLink},o.a.createElement("img",{className:"bookImage",alt:"no book cover found",src:e.imageLink})),o.a.createElement("p",{className:"description"},o.a.createElement("a",{href:e.infoLink},"More information"))),o.a.createElement("p",{className:"author"},"By\xa0",e.authors.join(", ")),o.a.createElement("p",{className:"description"},e.description),o.a.createElement("button",{className:"buttonDelete",onClick:function(){e.handleDelete(e.bookId)}},"Remove"))}),y=t(5),L=t.n(y),j=function(){return L.a.get("/api/books")},S=function(e){return L.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&maxResults=10"))},O=function(e){return L.a.delete("/api/books/"+e)},D=function(e){return L.a.post("/api/books",e)},x=t(4),C=t.n(x),R={resetBooks:function(e){j().then(function(n){return e.setState({savedBooks:n.data,searchedBooks:[],searchTitle:""})}).catch(function(e){return console.log(e)})},loadBooks:function(e){j().then(function(n){return e.setState({savedBooks:n.data})}).catch(function(e){return console.log(e)})},handleSearchEvent:function(e){var n=e.state.searchTitle;S(n).then(function(n){var t=[];n.data.items.forEach(function(e){t.push(e)}),e.setState({searchedBooks:t})}).catch(function(e){return console.log(e)})},handleSaveEvent:function(e,n){var t;n.state.searchedBooks.filter(function(n){return n.id===e?t=n:console.log("hey, couldn't find ID")});var a={bookId:t.id,title:t.volumeInfo.title,authors:t.volumeInfo.authors?t.volumeInfo.authors:"no authors",description:t.volumeInfo.description?t.volumeInfo.description:"no description",ISBN:t.volumeInfo.industryIdentifiers?t.volumeInfo.industryIdentifiers[0].identifier:"no isbn",imageLink:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:C.a,infoLink:t.volumeInfo.previewLink?t.volumeInfo.previewLink:"",rating:t.volumeInfo.averageRating?t.volumeInfo.averageRating:"Not rated"};D(a).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},handleDelete:function(e){O(e).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})}},W=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(o)))).state={searchedBooks:[],savedBooks:[],searchTitle:""},t.handleInputChange=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(c.a)({},a,o))},t.handleSearchEvent=function(e){e.preventDefault(),R.handleSearchEvent(Object(d.a)(Object(d.a)(t)))},t.handleSaveEvent=function(e){R.handleSaveEvent(e,Object(d.a)(Object(d.a)(t)),function(){R.loadBooks(Object(d.a)(Object(d.a)(t)))})},t.handleDelete=function(e){R.handleDelete(e)},t}return Object(f.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){R.resetBooks(this)}},{key:"componentDidUpdate",value:function(){R.loadBooks(this)}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,null),o.a.createElement(E,null,o.a.createElement(k,null,o.a.createElement("form",{style:{display:"flex",flexDirection:"column"}},o.a.createElement(p,{name:"searchTitle",placeholder:"Title (required)",onChange:this.handleInputChange}),o.a.createElement(g,{onClick:this.handleSearchEvent},"Search"))),this.state.searchedBooks.map(function(n){return o.a.createElement(N,{key:n.id,bookId:n.id,title:n.volumeInfo.title?n.volumeInfo.title:"",authors:n.volumeInfo.authors?n.volumeInfo.authors:"No author(s) found",description:n.volumeInfo.description?n.volumeInfo.description:"",isbn:n.volumeInfo.industryIdentifiers?n.volumeInfo.industryIdentifiers[0].identifier:"no isbn",imageLink:n.volumeInfo.imageLinks?n.volumeInfo.imageLinks.thumbnail:C.a,infoLink:n.volumeInfo.previewLink?n.volumeInfo.previewLink:"",rating:n.volumeInfo.averageRating?n.volumeInfo.averageRating:0,handleSaveEvent:e.handleSaveEvent})})),o.a.createElement(w,null,this.state.savedBooks.map(function(n){return o.a.createElement(B,{key:n._id,bookId:n._id,title:n.title?n.title:"No title",authors:n.authors?n.authors:"No authors(s) found",description:n.description?n.description:"No description",isbn:n.isbn?n.isbn:"No isbn",imageLink:n.imageLink?n.imageLink:C.a,infoLink:n.infoLink?n.infoLink:"",rating:n.rating?n.rating:0,handleDelete:e.handleDelete})})),o.a.createElement(v,null))}}]),n}(a.Component);t(84);var T=function(e){return o.a.createElement("div",{className:"wrapper"},e.children)},A=(t(85),t(49)),M=t.n(A)()("http://localhost:8000");t(117);var F=function(e){function n(e){var t,a;return Object(l.a)(this,n),(t=Object(u.a)(this,Object(m.a)(n).call(this,e))).state={data:"no data yet"},t.book=t.state.data,console.log(e),a=function(e,n){return t.setState({bookTitle:n.title,bookLink:n.infoLink})},M.on("bookFeed",function(e){return a(null,e)}),M.emit("subscribeToBookFeed",500),t}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("p",{className:"feed"},"Most recently saved book (click to learn more!)",o.a.createElement("p",{className:"feed"},o.a.createElement("a",{href:this.state.bookLink},this.state.bookTitle),o.a.createElement("div",{className:"header-border"})))}}]),n}(a.Component);var q=function(){return o.a.createElement("div",{className:"headerWrapper"},o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"MERN Book Search")),o.a.createElement(F,null))};t(118);var G=function(){return o.a.createElement("div",{className:"subWrapper"},o.a.createElement("div",{className:"sub"},o.a.createElement("h2",{className:"sub-header-left"},"Find Books"),o.a.createElement("h2",{className:"sub-header-right"},"Saved Books")))};t(119);var J=function(){return o.a.createElement("div",{className:"footerWrapper"},o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"icons"},o.a.createElement("a",{href:"https://www.github.com/froglegg"},o.a.createElement("i",{className:"fab fa-github fa-2x",id:"git-icon"})),"\xa0\xa0\xa0\xa0\xa0",o.a.createElement("a",{href:"https://www.linkedin.com/in/hayes-crowley/"},o.a.createElement("i",{className:"fab fa-linkedin-in fa-2x",id:"git-icon"}))),o.a.createElement("p",{className:"footerText"},"MERN Books by ",o.a.createElement("a",{href:"http://hayescrowley.com/"},"Hayes Crowley"))))};t(120);var U=function(){return o.a.createElement(T,null,o.a.createElement(q,null),o.a.createElement(G,null),o.a.createElement(W,null),o.a.createElement(J,null))},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(U,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");_?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):H(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):H(e)})}}()},4:function(e,n,t){e.exports=t.p+"static/media/noBookImage.3fe9c8a1.jpg"},50:function(e,n,t){e.exports=t(121)},55:function(e,n,t){},56:function(e,n,t){},57:function(e,n,t){},58:function(e,n,t){},59:function(e,n,t){},60:function(e,n,t){},66:function(e,n,t){},67:function(e,n,t){},84:function(e,n,t){},85:function(e,n,t){}},[[50,1,2]]]);
//# sourceMappingURL=main.f7dfa4c1.chunk.js.map