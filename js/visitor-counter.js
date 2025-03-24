// 访客计数器
class VisitorCounter {
    constructor() {
        this.storageKey = 'visitor_count';
        this.count = this.getCount();
        this.incrementCount();
    }

    getCount() {
        const count = localStorage.getItem(this.storageKey);
        return count ? parseInt(count) : 0;
    }

    incrementCount() {
        this.count++;
        localStorage.setItem(this.storageKey, this.count.toString());
        this.updateDisplay();
    }

    updateDisplay() {
        const counterElement = document.getElementById('visitor-counter');
        if (counterElement) {
            counterElement.textContent = this.count.toLocaleString();
        }
    }
}

// 初始化计数器
document.addEventListener('DOMContentLoaded', () => {
    new VisitorCounter();
}); 