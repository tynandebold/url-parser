(this["webpackJsonpurl-parser"]=this["webpackJsonpurl-parser"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);n(2);var r=n(0),a=n.n(r),l=n(4),s=n.n(l),u=n(1),o=n(5),c=(n(12),function(e){var t=e.updateInput,n=e.url;return a.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},a.a.createElement("div",{className:"input-wrapper"},a.a.createElement("input",{className:"searchBox",onChange:t,placeholder:"Enter a URL",type:"text",value:n})))});function i(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],s=Object(r.useState)(null),i=Object(u.a)(s,2),p=i[0],m=i[1],h=Object(r.useState)(""),d=Object(u.a)(h,2),f=d[0],g=d[1];return Object(r.useEffect)((function(){return 0===f.length?(m(null),void l("")):/^(ftp|http|https):\/\/[^ "]+$/.test(f)?(l(""),void m(o(f,!0))):(l("Please enter a valid URL."),void m(null))}),[f]),a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"URL Parser"),a.a.createElement("h3",null,"Working on parsing a URL? Using something like"," ",a.a.createElement("a",{href:"https://www.npmjs.com/package/url-parse",tabIndex:-1,target:"_blank",rel:"noopener noreferrer"},"this")," ","or"," ",a.a.createElement("a",{href:"https://nodejs.org/docs/latest/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost",tabIndex:-1,target:"_blank",rel:"noopener noreferrer"},"this"),"? Sometimes it's nice to see what's returned in your URL object. Use this simple tool to do just that."),a.a.createElement(c,{url:f,updateInput:function(e){g(e.target.value)}}),n,p?a.a.createElement("pre",null,JSON.stringify(p,void 0,2)):null)}s.a.render(a.a.createElement(i,null),document.getElementById("root"))},2:function(e,t,n){},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.c419f06a.chunk.js.map