# breed-react-component

I like to put my React components in their own directories together with their stylesheet, export
file, tests, Storybooks, etc., but I found myself writing boilerplate for this over and over again.

This utility program creates a directory, e.g. `MyComponent` with the following files:

**MyComponent.js**

```
import React from 'react';

import './MyComponent.scss';

const MyComponent = () => <div styleName="myComponent">[MyComponent]</div>;

export default MyComponent;
```

**MyComponent.scss**

```
.myComponent {

}
```

**index.js**

```
import MyComponent from './MyComponent';

export default MyComponent;
```

## Installation

```
npm install -g breed-react-component
```

## Usage

Just run `breed MyComponent` where you want to create the component. By default, the component files and directory will have the same name as the component. You can customize this by providing a `path` argument, e.g. `breed MyComponent --path=my-component`.
