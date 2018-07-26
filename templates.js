const jsTemplate = (component, path) => `import React from 'react';

import './${path}.scss';

const ${component} = () => <div styleName="${component.charAt(0).toLowerCase() +
  component.slice(1)}">[${component}]</div>;

export default ${component};
`;

const cssTemplate = component => `.${component.charAt(0).toLowerCase() + component.slice(1)} {

}`;

const indexTemplate = (component, path) => `import ${component} from './${path}';

export default ${component};
`;

module.exports = { jsTemplate, cssTemplate, indexTemplate };
