const jsTemplate = component => `import React from 'react';

import './${component}.scss';

const ${component} = () => <div styleName="${component.charAt(0).toLowerCase() +
  component.slice(1)}">[${component}]</div>;

export default ${component};
`;

const cssTemplate = component => `.${component.charAt(0).toLowerCase() + component.slice(1)} {

}`;

const indexTemplate = component => `import ${component} from './${component}';

export default ${component};
`;

module.exports = { jsTemplate, cssTemplate, indexTemplate };
