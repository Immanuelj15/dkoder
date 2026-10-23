const fs = require('fs');

const pageCss = fs.readFileSync('page-landing.css', 'utf8');
const plansCss = fs.readFileSync('PlansSection.css', 'utf8');

const combined = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --ink: #17181a;
  --yellow: #fcc419;
  --yellow-light: #fff4c8;
  --cream: #fffdf8;
  --cream-warm: #fffaf0;
  --purple: #4e25a5;
  --purple-dark: #401e87;
  --purple-deep: #1e0d47;
  --purple-deeper: #150934;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'DM Sans', system-ui, sans-serif;
  color: #17181a;
  background-color: #fffdf8;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Custom scrollbars */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #f1ede2;
}
::-webkit-scrollbar-thumb {
  background: #d4ccb8;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #b5ab93;
}

/* Base interactive transitions */
button, a {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

${pageCss}

${plansCss}
`;

fs.writeFileSync('src/index.css', combined);
console.log('src/index.css successfully created!');
