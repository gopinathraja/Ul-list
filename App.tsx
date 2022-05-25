import * as React from 'react';
import './style.css';
var Lis = [
  {
    id: 1,
    name: 'USA',
    values: [
      {
        id: 2,
        name: 'Chevy',
        values: [
          {
            id: 3,
            name: 'Suburban',
          },
          {
            id: 4,
            name: 'Camaro',
          },
        ],
      },
      {
        id: 5,
        name: 'Ford',
      },
    ],
  },
];
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ListItem item={Lis[0]} />
    </div>
  );
}
function ListItem({ item }) {
  let children = null;
  if (item.values) {
    children = (
      <ul>
        {item.values.map((i) => (
          <ListItem item={i} key={i.id} />
        ))}
      </ul>
    );
  }

  return (
    <li>
      {item.name}
      {children}
    </li>
  );
}
