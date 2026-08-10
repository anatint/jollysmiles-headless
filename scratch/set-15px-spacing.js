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
  
  // Replace the previously set "py-12 md:py-16" with "py-[15px]"
  let newContent = content.replace(/py-12 md:py-16/g, 'py-[15px]');
  
  // Also catch any lingering large py- classes and force them to py-[15px] if they weren't caught before
  const regex = /\b(?:sm:|md:|lg:|xl:)?(?:py|pt|pb)-(?:8|10|12|14|16|20|24|32)\b/g;
  
  newContent = newContent.replace(/className="([^"]+)"/g, (match, classNames) => {
    if (regex.test(classNames) && !classNames.includes('py-[15px]')) {
      let cleaned = classNames.replace(regex, '').replace(/\s+/g, ' ').trim();
      return `className="${cleaned} py-[15px]"`;
    }
    return match;
  });

  if (content !== newContent) {
    fs.writeFileSync(f, newContent);
    console.log('Set 15px spacing in', f);
  }
});
