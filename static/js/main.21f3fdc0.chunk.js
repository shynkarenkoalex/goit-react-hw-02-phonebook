(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){t.exports=n(27)},,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(11),r=n.n(o),l=n(13),i=n(1),s=n(2),u=n(5),m=n(3),h=n(6),b=n(12),f=n.n(b),C=(n(21),function(t){var e=t.children;return c.a.createElement("div",{className:"Layout"},e)}),d=(n(22),function(t){var e=t.nameItem,n=t.numberItem,a=t.onRemove;return c.a.createElement("li",{className:"Contact-item"},c.a.createElement("p",{className:"Contact-text"},e,": ",n),c.a.createElement("section",{className:"Contact-actions"},c.a.createElement("button",{type:"button",className:"Contact-button",onClick:a},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))}),v=(n(23),function(t){var e=t.contacts,n=t.onRemoveContact;return c.a.createElement("ul",{className:"ContactList"},e.map((function(t){var e=t.id,a=t.name,o=t.number;return c.a.createElement(d,{key:e,nameItem:a,numberItem:o,onRemove:function(){return n(e)}})})))}),p=n(4),E=n(7),g=(n(24),{name:"",number:""}),y=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state=Object(E.a)({},g),n.handleChange=function(t){var e=t.target,a=e.name,c=e.value;n.setState(Object(p.a)({},a,c))},n.handleSubmit=function(t){t.preventDefault(),n.props.onAddContact(Object(E.a)({},n.state)),n.reset()},n.reset=function(){n.setState(Object(E.a)({},g))},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement("form",{className:"ContactForm",onSubmit:this.handleSubmit},c.a.createElement("label",{className:"ContactForm-label"},"Name",c.a.createElement("input",{className:"ContactForm-input",type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),c.a.createElement("label",{className:"ContactForm-label"},"Number",c.a.createElement("input",{className:"ContactForm-input",type:"text",name:"number",value:this.state.number,onChange:this.handleChange})),c.a.createElement("button",{type:"submit",className:"ContactForm-button"},"Add contact"))}}]),e}(a.Component),N=(n(25),function(t){var e=t.valueFilter,n=t.onChangeFilter;return c.a.createElement("label",{className:"Filter-label"},"Find contacts by name",c.a.createElement("input",{type:"text",className:"Filter-input",value:e,onChange:function(t){return n(t.target.value)}}))}),j=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[],filter:""},n.handleAddContact=function(t){var e=n.state.contacts.find((function(e){return e.name===t.name}));if(n.state.contacts.length>0&&e)alert("contact with name ".concat(t.name," is allready exist"));else{var a={id:f()(),name:t.name,number:t.number};n.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[a])}}))}},n.handleChangeFilter=function(t){n.setState({filter:t})},n.getVisibleContacts=function(){var t=n.state,e=t.contacts,a=t.filter;return e.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},n.handleRemoveContact=function(t){n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return c.a.createElement(C,null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(y,{onAddContact:this.handleAddContact}),c.a.createElement("h2",null,"Contacts"),e.length>1&&c.a.createElement(N,{valueFilter:n,onChangeFilter:this.handleChangeFilter}),a.length>0&&c.a.createElement(v,{contacts:a,onRemoveContact:this.handleRemoveContact}))}}]),e}(a.Component);n(26);r.a.render(c.a.createElement(j,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.21f3fdc0.chunk.js.map