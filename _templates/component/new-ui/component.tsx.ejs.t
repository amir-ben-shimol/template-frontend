---
to: src/components/ui/UI<%= h.changeCase.pascalCase(name.toLowerCase()) %>/UI<%= h.changeCase.pascalCase(name.toLowerCase()) %>.tsx
---
<% name = name.toLowerCase() %>import React from 'react';

import UI<%= h.changeCase.pascalCase(name) %>View from './UI<%= h.changeCase.pascalCase(name) %>.view';

type TProps = object;

const UI<%= h.changeCase.pascalCase(name) %> = () => {
  return <UI<%= h.changeCase.pascalCase(name) %>View />;
};

export default React.memo(UI<%= h.changeCase.pascalCase(name) %>);
