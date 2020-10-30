# React Select

This is a package for a single-select React component that can select one value from a given list of values.
The package is built using Create React App and 2 select examples are shown as part of the App component.

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Props](#props)
  - [Theme](#theme)

## Installation

```bash
$ yarn
$ yarn start
```

## Basic Usage of Select Component

The Select takes in 4 [props](#props):

- options which is the input options to the select component
- placeholder which is the placheholder that is displayed in the input box
- onChange function which is triggerred when a value is selected by the user
- theme which is an object wherein multiple classes can be passed in to be added to different parts of the component

In your App Component, import the Select component and use it as follows:

```jsx
import React from 'react';
import Select from '../Select';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Select
          options={[
            {
              id: 1,
              title: 'Really Long Example Input',
            },
            { id: 2, title: 'Input 1' },
            { id: 3, title: 'Input 2' },
            { id: 4, title: 'Input 3' },
            { id: 5, title: 'Input 4' },
            { id: 6, title: 'Input 5' },
          ]}
          onChange={(selected) => {
            console.log('Object example, selected value: ' + selected.title);
          }}
          placeholder="Object example"
        />
        <Select
          options={['Saransh', 'Kataria']}
          onChange={(selected) => {
            console.log('String example, selected value: ' + selected);
          }}
          placeholder="String example"
          theme={{ listItemClassnames: 'red-bg' }}
        />
      </header>
    </div>
  );
}
```

## Props

The Select takes in 4 props:

- options which is the input options to the select component
- placeholder which is the placheholder that is displayed in the input box
- onChange function which is triggerred when a value is selected by the user
- theme which is an object wherein multiple classes can be passed in to be added to different parts of the component

| Prop        |    Type    |                                                                                           Description                                                                                            |
| :---------- | :--------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| options     |  `array`   |                             The input list of options the user can select from. This can be an array of strings or an array of objects with properties id and title.                             |
| placeholder |  `string`  |                                                         The default text shown when the component is displayed and no value is selected.                                                         |
| onChange    | `function` |                                                                          Invoked every time the user selects an option                                                                           |
| theme       |  `object`  | To define your custom theme on the select component. You can specify different class names to be added to the components here and they will be overriden with the default ones in the component. |

### Theme

The theme object can have 4 key value pairs:

- selectContainerClassNames: the class names to be applied to the select container
- listItemClassnames: the class names to be applied to the list items
- inputClassNames: the class names to be applied to the input box
- optionsContainerClassNames: the class names to be applied to the options container

These can be provided in the theme object as a prop and will override default class names provided to the container. This functionality has been intentionally kept flexible enough so as to let the user add class names and style it instead of manually passing in styles and doing a lot of theme handling
