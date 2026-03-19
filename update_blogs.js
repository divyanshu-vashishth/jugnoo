import fs from 'fs';
import path from 'path';

const blogDir = 'src/content/blog';

function updateBlogs() {
  const files = fs.readdirSync(blogDir);
  for (const file of files) {
    if (file.endsWith('.mdx')) {
      const filePath = path.join(blogDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      content = content.replace(/Astro Component Starter/gi, 'Jugnoo');
      content = content.replace(/our component starter/gi, 'Jugnoo studio');
      content = content.replace(/the component starter/gi, 'Jugnoo');
      content = content.replace(/this starter/gi, 'Jugnoo');
      content = content.replace(/CloudCannon/gi, 'Jugnoo');
      content = content.replace(/components/gi, 'creative designs');
      content = content.replace(/component/gi, 'design');
      
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${file}`);
    }
  }
}

updateBlogs();
