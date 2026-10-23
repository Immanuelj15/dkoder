const fs = require('fs');

const css = fs.readFileSync('index-source.css', 'utf8');

// Let's find custom rule blocks for dh-, clb-, ot-, hw-, ct-, pl-
function extractMatchingRules(prefix) {
  const regex = new RegExp(`\\.${prefix}[^{]+{[^}]+}`, 'g');
  return css.match(regex) || [];
}

const dhRules = extractMatchingRules('dh');
const otRules = extractMatchingRules('ot');
const ctRules = extractMatchingRules('ct');
const plRules = extractMatchingRules('pl');
const clbRules = extractMatchingRules('clb');

console.log('dh rules count:', dhRules.length);
console.log('ot rules count:', otRules.length);
console.log('ct rules count:', ctRules.length);
console.log('pl rules count:', plRules.length);
console.log('clb rules count:', clbRules.length);

fs.writeFileSync('extracted-custom-styles.css', [
  '/* === HERO DIALOGUE STYLES === */',
  ...dhRules,
  '/* === INTERVIEW WORRIES (OT) STYLES === */',
  ...otRules,
  '/* === CAREER TRACKS (CT) STYLES === */',
  ...ctRules,
  '/* === PLANS (PL) STYLES === */',
  ...plRules,
  '/* === COMPANY LOGO (CLB) STYLES === */',
  ...clbRules
].join('\n'));

console.log('Saved extracted-custom-styles.css');
