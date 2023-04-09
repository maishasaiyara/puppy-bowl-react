import React, { createElement, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import Main from './components/Main.jsx';
// import './style.css';

//createRoot (document.querySelector('#root')).render (<h1>howdy</h1>);

const domNode = document.querySelector('#root');

const root = createRoot(domNode);
root.render(<Main />);
// root.render(<users />);










/* const reactH1 = react.createElement('h1', {}, 'USERS FROM REACT');

const reactUl = react.createElement('ul', {}, usersList());


function usersList(user) {
    users.map((user) => {
        const li = React.createElement('li', {}, user.name);
        return li 
    })
}
    

const reactFragment = React.createElement(React.Fragment, Fragment, {}, reactH1,reactUl)
root.render(reactFragment);





const users = [
    { name: "Koda", breed: "Husky", status: "bench" },
    { name: "Christian", breed: "beagle", status: "bench" },
    { name: "billy", breed: "beagle", status: "bench" },
    { name: "chris", breed: "pug", status: "bench" },
    { name: "abby", breed: "pug", status: "bench" },
    { name: "joe", breed: "pug", status: "bench" },
];


const vanillaRoot = document.createElement('div');
const h1 = document.createElement('h1');
h1.innerHTML = 'USERS';

vanilla.Root.appendChild(h1);

const ul = document.createElement('ul');

for (let i = 0; i < users.length; i++) {

const li = document.createElement('li');
    li.innerHTML = users[i].name;
    ul.appendChild(li);
    vanillaRoot.appendChild(ul);
}


*/


// const appElement = document.getElementById("app")
// const root = createRoot(appElement)




