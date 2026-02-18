import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');

try {
    console.log('🚀 Starting manual deployment...');

    // 1. Clear previous git state in dist folder if it exists
    const gitPath = path.join(distPath, '.git');
    if (fs.existsSync(gitPath)) {
        console.log('🧹 Cleaning old deployment state...');
        execSync('rmdir /s /q .git', { cwd: distPath });
    }

    // 2. Initialize git in dist folder
    process.chdir(distPath);
    execSync('git init');

    // 3. Add remote
    execSync('git remote add origin https://github.com/EbenezerOladipupoBankole/Nibbo-delivery.git');

    // 4. Add all files (including CNAME)
    execSync('git add -A');

    // 5. Commit
    execSync('git commit -m "Deploy to GitHub Pages"');

    // 6. Force push to gh-pages branch
    console.log('📤 Pushing to GitHub...');
    execSync('git push -f origin master:gh-pages');

    console.log('✅ Deployment successful!');
} catch (error) {
    console.error('❌ Deployment failed:', error.message);
}
