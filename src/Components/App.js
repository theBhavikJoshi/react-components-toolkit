import React, { useState } from 'react';
// import Accordion from './Accordion';
// import Search from './Search';
import Dropdown from './Dropdown';

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
];

const dropdownData = [
  {
    label: 'The Color Red',
    id: 1,
    value: 'red'
  },
  {
    label: 'The Color Green',
    id: 2,
    value: 'green'
  },
  {
    label: 'The Color Blue',
    id: 3,
    value: 'blue'
  },
  {
    label: 'The Color Yellow',
    id: 4,
    value: 'yellow'
  }
]

const App = () => {
  const [selectedOption, setSelectedOption] = useState(dropdownData[0]);
  return (
    <div>
      {/* <Accordion items={accordionData} />
      <br/> */}
      {/* <Search /> */}
      <Dropdown
        options={dropdownData}
        selected={selectedOption}
        onSelectChange={setSelectedOption}
      />
    </div>
  )
}

export default App;
