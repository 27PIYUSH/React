/*
how react renders A tag behind the scenes
type - kis type ka element h , props - object m usski properties , children 
*/

// render --> reactElement ko container m daalta h
function customrender(reactElement, Conatiner) {
  /* 
    const domElement = document.createElement(reactElement.type);  // jo humne reactelement ka type diya usske according children create hoga
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);

    Conatiner.appendChild(domElement)
    */
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  Conatiner.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const mainConatiner = document.querySelector("#root");

customrender(reactElement, mainConatiner); // render krne keliye --> mtlb reactElement ko add krega maincontainer ke andr
