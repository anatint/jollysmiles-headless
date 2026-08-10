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
  
  // Regex to find any large vertical padding classes (10, 12, 16, 20, 24, 32) including responsive prefixes
  const regex = /\b(?:sm:|md:|lg:|xl:)?(?:py|pt|pb)-(?:10|12|14|16|20|24|32)\b/g;
  
  // We don't want to just remove them, we want to replace the first occurrence in a className string
  // with our standard spacing, and remove the rest to avoid duplicates.
  
  let newContent = content.replace(/className="([^"]+)"/g, (match, classNames) => {
    if (regex.test(classNames)) {
      // It has large padding. Remove all of them.
      let cleaned = classNames.replace(regex, '').replace(/\s+/g, ' ').trim();
      // Add standard uniform padding
      return `className="${cleaned} py-12 md:py-16"`;
    }
    return match;
  });

  if (content !== newContent) {
    fs.writeFileSync(f, newContent);
    console.log('Standardized spacing in', f);
  }
});
