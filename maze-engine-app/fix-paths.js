const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'engine');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

// 1. Process HTML files
walkDir(outDir, function(filePath) {
  if (filePath.endsWith('.html')) {
    const relativeDepth = path.relative(outDir, filePath).split(path.sep).length - 1;
    const prefix = relativeDepth === 0 ? './' : '../'.repeat(relativeDepth);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace href="/engine/..." and src="/engine/..."
    content = content.replace(/href="\/engine\//g, `href="${prefix}`);
    content = content.replace(/src="\/engine\//g, `src="${prefix}`);
    content = content.replace(/srcset="\/engine\//g, `srcset="${prefix}`);
    
    fs.writeFileSync(filePath, content);
  }
  
  if (filePath.endsWith('.css')) {
      let content = fs.readFileSync(filePath, 'utf8');
      // For CSS, we might have things like url(/engine/_next/...
      // Since CSS is inside _next/static/css/, depth to root is ../../../
      // Actually CSS files only reference fonts usually.
      content = content.replace(/url\(\/engine\//g, `url(../../../`);
      fs.writeFileSync(filePath, content);
  }
});

console.log("Paths fixed for file:// protocol support.");
