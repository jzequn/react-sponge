# react-sponge

react-sponge can generate component skeleton. It will generate components in src folder of your project.

## How to use?

>> Installation

``` code
% npm i -g react-sponge
```

>> create class component

``` code

% rsg g c components/dropdown-menu/DropdownMenu

```

This code will generate the following folder structure and react class component.

``` structure
your project

    - src
      - components
        - dropdown-menu
          - DropdownMenu.js
          - DropdownMenu.css

```

Here is how DropdownMenu.js looks like.

``` code

import React, { Component } from "react";
import "./DropdownMenu.css";

class DropdownMenu extends Component {
  constructor(props) {

    super(props);

    this.state = {

    };

  }

  render() {

    return (<>

    </>)

  }

}
export default DropdownMenu;

```

>> create functional component

``` code

% rsg g f ShoppingList -p scss

```

This code will generate the following folder structure and react functional component.

``` structure
your project

    - src
      - ShoppingList.js
      - ShoppingList.scss

```

Here is how ShoppingList.js looks like.

``` code

import React from "react";
import "./ShoppingList.scss";

const ShoppingList = () => (
      <>
      
      </>
)

export default ShoppingList;

```

## License MIT
