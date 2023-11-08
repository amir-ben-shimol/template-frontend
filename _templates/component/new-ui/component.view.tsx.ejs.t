---
to: src/components/ui/U<%= h.changeCase.pascalCase(name.toLowerCase()) %>/U<%= h.changeCase.pascalCase(name.toLowerCase()) %>.view.tsx
---
<% name = name.toLowerCase() %>import React from 'react';

import classes from './U<%= h.changeCase.pascalCase(name) %>.module.scss';

type TProps = object;

const U<%= h.changeCase.pascalCase(name) %>View = () => {
  return (
    <div className={classes['container']}>
      <span><%= h.changeCase.pascalCase(name) %> UI</span>
    </div>
  );
};

export default React.memo(U<%= h.changeCase.pascalCase(name) %>View);
