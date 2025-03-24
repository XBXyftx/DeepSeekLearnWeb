const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
    { name: 'academic-paper.jpg', url: 'https://dummyimage.com/800x400/4a90e2/ffffff.jpg&text=Academic+Paper' },
    { name: 'workplace.jpg', url: 'https://dummyimage.com/800x400/50e3c2/ffffff.jpg&text=Workplace' },
    { name: 'content-creation.jpg', url: 'https://dummyimage.com/800x400/f5a623/ffffff.jpg&text=Content+Creation' },
    { name: 'literature-review.jpg', url: 'https://dummyimage.com/800x400/7ed321/ffffff.jpg&text=Literature+Review' },
    { name: 'research-method.jpg', url: 'https://dummyimage.com/800x400/9013fe/ffffff.jpg&text=Research+Method' },
    { name: 'business-report.jpg', url: 'https://dummyimage.com/800x400/417505/ffffff.jpg&text=Business+Report' },
    { name: 'business-email.jpg', url: 'https://dummyimage.com/800x400/7ed321/ffffff.jpg&text=Business+Email' },
    { name: 'article-writing.jpg', url: 'https://dummyimage.com/800x400/50e3c2/ffffff.jpg&text=Article+Writing' },
    { name: 'video-script.jpg', url: 'https://dummyimage.com/800x400/f5a623/ffffff.jpg&text=Video+Script' }
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
        if (response.statusCode === 200) {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${image.name}`);
            });
        } else {
            console.error(`Failed to download ${image.name}: ${response.statusCode}`);
            fs.unlink(filePath, () => {});
        }
    }).on('error', err => {
        fs.unlink(filePath, () => {}); // 删除文件
        console.error(`Error downloading ${image.name}:`, err.message);
    });
}); 