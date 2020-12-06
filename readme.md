# react-sponge

react-sponge can generate component skeleton. It will generate components in src folder of your project.

## How to use?

Installation

``` console
% npm i -g react-sponge
```

Create class component

``` console

% rsg g c components/dropdown-menu/DropdownMenu

```

This code will generate the following folder structure and react class component.

``` console
your project

    - src
      - components
        - dropdown-menu
          - DropdownMenu.js
          - DropdownMenu.css

```

Here is how DropdownMenu.js looks like.

``` jsx
import React, {
    Component
} from "react";
import "./DropdownMenu.css";

class DropdownMenu extends Component {
    constructor(props) {

        super(props);

        this.state = {

        };

    }

    render() {
        return (
          < >

          </>
        )}
    }
    export default DropdownMenu;
```

Create functional component

``` shell

% rsg g f ShoppingList -p scss

```

This code will generate the following folder structure and react functional component.

``` console
your project

    - src 
      - ShoppingList.js
      - ShoppingList.scss

```

Here is how ShoppingList.js looks like.

``` jsx
import React from "react";
import "./ShoppingList.scss";

const ShoppingList = () => ( 
   <>

   </>
)

export default ShoppingList;
```

## License

MIT
