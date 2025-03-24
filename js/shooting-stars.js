// 流星特效
class ShootingStars {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.pointerEvents = 'none';
        document.body.appendChild(this.canvas);
        
        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.resize();
        
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createStar() {
        return {
            x: Math.random() * this.canvas.width,
            y: -10,
            length: Math.random() * 80 + 20,
            speed: Math.random() * 15 + 5,
            angle: Math.random() * 30 + 45,
            opacity: Math.random() * 0.5 + 0.5
        };
    }

    animate() {
        this.ctx.fillStyle = 'rgba(17, 24, 39, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        if (Math.random() < 0.1) {
            this.stars.push(this.createStar());
        }

        for (let i = this.stars.length - 1; i >= 0; i--) {
            const star = this.stars[i];
            star.x += Math.cos(star.angle * Math.PI / 180) * star.speed;
            star.y += Math.sin(star.angle * Math.PI / 180) * star.speed;

            this.ctx.beginPath();
            this.ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
            this.ctx.lineWidth = 2;
            this.ctx.moveTo(star.x, star.y);
            this.ctx.lineTo(
                star.x - Math.cos(star.angle * Math.PI / 180) * star.length,
                star.y - Math.sin(star.angle * Math.PI / 180) * star.length
            );
            this.ctx.stroke();

            if (star.y > this.canvas.height || star.x > this.canvas.width) {
                this.stars.splice(i, 1);
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

// 初始化流星特效
document.addEventListener('DOMContentLoaded', () => {
    new ShootingStars();
}); 