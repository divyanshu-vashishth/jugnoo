import fs from 'fs';
import path from 'path';

const blogDir = 'src/content/blog';

function fixBlogs() {
  const files = fs.readdirSync(blogDir);
  for (const file of files) {
    if (file.endsWith('.mdx')) {
      const filePath = path.join(blogDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Revert broken image paths
      content = content.replace(/\/design-docs\//g, '/component-docs/');
      content = content.replace(/design\.cloudcannon\.inputs/g, 'component.cloudcannon.inputs');
      // Some other images might have had "components" replaced
      content = content.replace(/\/creative designs\//gi, '/components/');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed paths in ${file}`);
    }
  }
}

fixBlogs();
