const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoUrl = 'https://github.com/takimasa5516/elden-ring-guide.git';
const tempDir = 'C:\\Users\\takim\\.gemini\\antigravity\\scratch\\gh_pages_deploy';
const distDir = 'C:\\Users\\takim\\.gemini\\antigravity\\scratch\\elden-ring-guide\\dist';

if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

console.log('Cloning gh-pages branch...');
execSync(`git clone --branch gh-pages --single-branch ${repoUrl} "${tempDir}"`, { stdio: 'inherit' });

// Remove everything except .git
fs.readdirSync(tempDir).forEach(file => {
  if (file !== '.git') {
    fs.rmSync(path.join(tempDir, file), { recursive: true, force: true });
  }
});

// Copy all dist files
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach(element => {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

console.log('Copying new dist files...');
copyFolderSync(distDir, tempDir);

console.log('Committing and pushing to gh-pages...');
execSync('git add -A', { cwd: tempDir, stdio: 'inherit' });
execSync('git commit -m "deploy: サブNPCイベント完全攻略フローおよび武器・防具・戦灰取得と地域マップの相互連動システムの本番反映"', { cwd: tempDir, stdio: 'inherit' });
execSync('git push origin gh-pages', { cwd: tempDir, stdio: 'inherit' });

fs.rmSync(tempDir, { recursive: true, force: true });
console.log('DEPLOY_COMPLETE_SUCCESS');
