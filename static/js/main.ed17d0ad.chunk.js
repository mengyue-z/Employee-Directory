(this.webpackJsonpmengyue=this.webpackJsonpmengyue||[]).push([[0],{23:function(t,e,s){},43:function(t,e,s){},44:function(t,e,s){},45:function(t,e,s){},46:function(t,e,s){},48:function(t,e,s){"use strict";s.r(e);var r=s(2),n=s(13),i=s.n(n),c=(s(23),s(0));var a=function(){return Object(c.jsxs)("div",{className:"heading",children:[Object(c.jsx)("h1",{children:"Employee Directory"}),Object(c.jsx)("p",{children:"Click on table headers to sort or use the search box to narrow your results"})]})},l=s(3),o=s(14),u=s(15),h=s(18),d=s(17),j=s(16),b=s.n(j),f=function(){return b.a.get("https://randomuser.me/api/?nat=us&results=30")};var m=function(t){return Object(c.jsx)("div",{className:"container".concat(t.fluid?"-fluid":""),children:t.children})};s(43);var O=function(t){return Object(c.jsx)("form",{className:"search-bar",children:Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{placeholder:"Search",value:t.search,onChange:t.handleInputChange})})})};s(44),s(45);var x=function(t){return Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{className:"employee-row",children:[Object(c.jsx)("th",{children:Object(c.jsx)("img",{src:t.image,className:"avatar"})}),Object(c.jsx)("th",{children:t.name}),Object(c.jsx)("th",{children:t.phone}),Object(c.jsx)("th",{children:t.email}),Object(c.jsx)("th",{children:t.dob})]})})};function p(t){return Object(c.jsx)(x,{name:t.name.first+" "+t.name.last,image:t.picture.thumbnail,phone:t.phone,email:t.email,dob:t.dob.date.slice(0,10)},t.email)}var v=function(t){return Object(c.jsxs)("table",{className:"employee-table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Image"}),Object(c.jsx)("th",{onClick:t.sortResults,children:"Name"}),Object(c.jsx)("th",{onClick:t.sortResults,children:"Phone"}),Object(c.jsx)("th",{onClick:t.sortResults,children:"Email"}),Object(c.jsx)("th",{onClick:t.sortResults,children:"DOB"})]})}),t.results.map(p)]})},C=function(t){Object(h.a)(s,t);var e=Object(d.a)(s);function s(){var t;Object(o.a)(this,s);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={search:"",results:[],filtered_results:[],sortDirection:"ASC"},t.handleInputChange=function(e){var s=e.target.value.toLowerCase(),r=t.state.results.filter((function(t){return t.name.first.toLowerCase().includes(s)||t.name.last.toLowerCase().includes(s)||t.email.toLowerCase().includes(s)||t.phone.includes(s)||t.dob.date.slice(0,10).includes(s)}));t.setState({search:s,filtered_results:r}),""==s&&t.setState({filtered_results:t.state.results})},t}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var t=this;f().then((function(e){t.setState({results:e.data.results,filtered_results:e.data.results}),console.log(e.data.results)})).catch((function(t){return console.log(t)}))}},{key:"sortHelper",value:function(t,e){return"ASC"==this.state.sortDirection?t.name.first>e.name.first?1:t.name.first===e.name.first?0:-1:"DSC"==this.state.sortDirection?t.name.first>e.name.first?-1:t.name.first===e.name.first?0:1:void 0}},{key:"sortResults",value:function(){var t,e=Object(l.a)(this.state.filtered_results);e.sort(this.sortHelper.bind(this)),"ASC"==this.state.sortDirection?t="DSC":"DSC"==this.state.sortDirection&&(t="ASC"),this.setState({filtered_results:e,sortDirection:t})}},{key:"sortResults2",value:function(){var t,e=Object(l.a)(this.state.filtered_results);e.sort(this.sortHelper.bind(this)),"ASC"==this.state.sortDirection?t="DSC":"DSC"==this.state.sortDirection&&(t="ASC"),this.setState({filtered_results:e,sortDirection:t})}},{key:"sortbyPhone",value:function(){var t,e=Object(l.a)(this.state.filtered_results);e.sort(this.sortHelper.bind(this)),"ASC"==this.state.sortDirection?t="DSC":"DSC"==this.state.sortDirection&&(t="ASC"),this.setState({filtered_results:e,sortDirection:t})}},{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(m,{style:{minHeight:"80%"},children:[Object(c.jsx)(O,{handleInputChange:this.handleInputChange}),Object(c.jsx)(v,{sortResults:this.sortResults.bind(this),results:this.state.filtered_results})]})})}}]),s}(r.Component);var D=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(a,{}),Object(c.jsx)(C,{})]})};s(46),s(47);i.a.render(Object(c.jsx)("div",{children:Object(c.jsx)(D,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.ed17d0ad.chunk.js.map