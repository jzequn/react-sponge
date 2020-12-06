const preprocessor = "css";

const classComponentTemplate = (component, preprocessor = preprocessor) =>
  `import React, { Component } from \"react\";
import \"./${component}.${preprocessor}\";

class ${component} extends Component {
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
export default ${component};`;

const funtionalComponentTemplate = (component, preprocessor = preprocessor) =>
  `import React from \"react\";
import \"./${component}.${preprocessor}\";


const ${component} = () => (
      <>
      
      </>
)

export default ${component};`;

module.exports = {
  classComponentTemplate,
  funtionalComponentTemplate,
};
