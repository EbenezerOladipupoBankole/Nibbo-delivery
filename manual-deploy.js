import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');

try {
    console.log('🚀 Starting manual deployment...');

    // 1. Initialize git in dist folder
    process.chdir(distPath);
    execSync('git init');

    // 2. Add remote (force push to the gh-pages branch)
    execSync('git remote add origin https://github.com/EbenezerOladipupoBankole/Nibbo-delivery.git');

    // 3. Add CNAME if it exists in public (Vite usually copies it)
    // But let's make sure it's there
    execSync('git add .');

    // 4. Commit
    execSync('git commit -m "Deploy to GitHub Pages"');

    // 5. Force push to gh-pages branch
    console.log('📤 Pushing to GitHub...');
    execSync('git push -f origin master:gh-pages');

    console.log('✅ Deployment successful!');
} catch (error) {
    console.error('❌ Deployment failed:', error.message);
}
