---
to: src/components/ui/U<%= h.changeCase.pascalCase(name.toLowerCase()) %>/U<%= h.changeCase.pascalCase(name.toLowerCase()) %>.tsx
---
<% name = name.toLowerCase() %>import React from 'react';

import U<%= h.changeCase.pascalCase(name) %>View from './U<%= h.changeCase.pascalCase(name) %>.view';

type TProps = object;

const U<%= h.changeCase.pascalCase(name) %> = () => {
  return <U<%= h.changeCase.pascalCase(name) %>View />;
};

export default React.memo(U<%= h.changeCase.pascalCase(name) %>);
