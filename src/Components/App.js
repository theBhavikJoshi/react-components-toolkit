import React from 'react';
import Accordion from './Accordion';
import Search from './Search';

const accordionData = [
  {
    'title': 'Title 1',
    'id': 1,
    'content': 'Content 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    'title': 'Title 2',
    'id': 2,
    'content': 'Content 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    'title': 'Title 3',
    'id': 3,
    'content': 'Content 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
]

const App = () => {
  return (
    <div>
      {/* <Accordion items={accordionData} />
      <br/> */}
      <Search />
    </div>
  )
}

export default App;
