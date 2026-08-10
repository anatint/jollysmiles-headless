const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = [...walk('src/components'), ...walk('src/app')];
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let newContent = content
    .replace(/\b(py|pt|pb|my|mt|mb|gap|space-[xy])-24\b/g, '$1-12')
    .replace(/\b(py|pt|pb|my|mt|mb|gap|space-[xy])-20\b/g, '$1-10')
    .replace(/\b(py|pt|pb|my|mt|mb|gap|space-[xy])-16\b/g, '$1-8');
  if (content !== newContent) {
    fs.writeFileSync(f, newContent);
    console.log('Updated spacing in', f);
  }
});
