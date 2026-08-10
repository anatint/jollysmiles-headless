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
  let content = fs.readFileSync(f, 'utf8');
  
  // Replace the previous 15px with 25px
  let newContent = content.replace(/py-\[15px\]/g, 'py-[25px]');
  
  if (content !== newContent) {
    fs.writeFileSync(f, newContent);
    console.log('Set 25px spacing in', f);
  }
});
