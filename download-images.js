const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
    { name: 'academic-paper.jpg', url: 'https://picsum.photos/800/400?random=1' },
    { name: 'workplace.jpg', url: 'https://picsum.photos/800/400?random=2' },
    { name: 'content-creation.jpg', url: 'https://picsum.photos/800/400?random=3' },
    { name: 'literature-review.jpg', url: 'https://picsum.photos/800/400?random=4' },
    { name: 'research-method.jpg', url: 'https://picsum.photos/800/400?random=5' },
    { name: 'business-report.jpg', url: 'https://picsum.photos/800/400?random=6' },
    { name: 'business-email.jpg', url: 'https://picsum.photos/800/400?random=7' },
    { name: 'article-writing.jpg', url: 'https://picsum.photos/800/400?random=8' },
    { name: 'video-script.jpg', url: 'https://picsum.photos/800/400?random=9' }
];

const imagesDir = path.join(__dirname, 'images');

// 确保images目录存在
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

// 下载图片
images.forEach(image => {
    const filePath = path.join(imagesDir, image.name);
    const file = fs.createWriteStream(filePath);

    https.get(image.url, response => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${image.name}`);
        });
    }).on('error', err => {
        fs.unlink(filePath, () => {}); // 删除文件
        console.error(`Error downloading ${image.name}:`, err.message);
    });
}); 