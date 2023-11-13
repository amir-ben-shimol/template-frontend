---
to: src/components/ui/UI<%= h.changeCase.pascalCase(name.toLowerCase()) %>/UI<%= h.changeCase.pascalCase(name.toLowerCase()) %>.view.tsx
---
<% name = name.toLowerCase() %>import React from 'react';

import classes from './UI<%= h.changeCase.pascalCase(name) %>.module.scss';

type TProps = object;

const UI<%= h.changeCase.pascalCase(name) %>View = () => {
  return (
    <div className={classes['container']}>
      <span><%= h.changeCase.pascalCase(name) %> UI</span>
    </div>
  );
};

export default React.memo(UI<%= h.changeCase.pascalCase(name) %>View);
