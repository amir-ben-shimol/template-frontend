---
to: src/components/ui/U<%= h.changeCase.pascalCase(name.toLowerCase()) %>/index.ts
---
<% name = name.toLowerCase() %>import U<%= h.changeCase.pascalCase(name) %> from './U<%= h.changeCase.pascalCase(name) %>';

export default U<%= h.changeCase.pascalCase(name) %>;
