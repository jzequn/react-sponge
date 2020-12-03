# react-sponge

react-sponge is named after spongebob squarepants

## What is react-sponge for?

react-sponge can generate component skeleton. It will generate components in src folder of your project.

## How to use?

> Installation

``` code
npm i -g react-sponge
```

> create functional component with scss and jsx

``` code

% rsg c 
% what is the folder name? <your-folder-name>
% what is the file name? <your-file-name>

```

This code will generate the following folder structure and react class component.

``` structure
your project

    - src
      - your-folder-name
        - your-file-name.jsx
        - your-file-name.scss

```

here is what <your-file-name.jsx> look like.

``` code

import React, { Component } from "react";
import "./your-file-name.scss";

class your-file-name extends Component {
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
export default your-file-name;

```

## issues: 

1. when user types in <your-folder-name> or <your-file-name>,

   The file console will print out <your-folder-name> as <yyoouurr--ffoollddeerr--nnaammee> ...
   However, the name for generated components will be correct. 
   
   I don't know why this happen. Probabaly solve the problem later...
