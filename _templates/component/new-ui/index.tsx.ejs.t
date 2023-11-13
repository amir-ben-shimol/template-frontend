---
to: src/components/ui/UI<%= h.changeCase.pascalCase(name.toLowerCase()) %>/index.ts
---
<% name = name.toLowerCase() %>import UI<%= h.changeCase.pascalCase(name) %> from './UI<%= h.changeCase.pascalCase(name) %>';

export default UI<%= h.changeCase.pascalCase(name) %>;
