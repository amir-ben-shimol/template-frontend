---
to: src/components/containers/<%= h.changeCase.pascalCase(pageName.toLowerCase()) %>/<%= h.changeCase.pascalCase(containerName.toLowerCase()) %>/<%= h.changeCase.pascalCase(containerName.toLowerCase()) %>.view.tsx
---
<% name = containerName.toLowerCase() %>import React from 'react';

import classes from './<%= h.changeCase.pascalCase(name) %>.module.scss';

type TProps = object;

const <%= h.changeCase.pascalCase(name) %>View = () => {
  return (
    <div className={classes['container']}>
      <span><%= h.changeCase.pascalCase(name) %> Container</span>
    </div>
  );
};

export default React.memo(<%= h.changeCase.pascalCase(name) %>View);
