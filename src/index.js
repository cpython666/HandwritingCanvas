function updateCanvas() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const scale = window.devicePixelRatio;  // 获取设备的像素比
    canvas.width = canvas.clientWidth * scale;  // 将 canvas 的宽度设置为实际像素宽度
    canvas.height = canvas.clientHeight * scale;  // 将 canvas 的高度设置为实际像素高度
    ctx.scale(scale, scale);  // 缩放上下文以适应高清显示

    // 获取用户输入的参数
    const text = document.getElementById('textInput').value;
    const fontStyle = document.getElementById('fontStyle').value;
    const fontSize = document.getElementById('fontSize').value;
    const fontColor = document.getElementById('fontColor').value;
    const bgImage = document.getElementById('bgImage').value;

    // 加载背景图片
    if (bgImage) {
        const img = new Image();
        img.src = bgImage;
        img.onload = function() {
            ctx.drawImage(img, 0, 0, canvas.width / scale, canvas.height / scale);
            drawText();
        };
    } else {
        // 清除画布
        ctx.clearRect(0, 0, canvas.width / scale, canvas.height / scale);
        drawText();
    }

    // 绘制文本的函数
    function drawText() {
        // 设置字体样式
        ctx.font = `${fontSize}px ${fontStyle}`;
        ctx.fillStyle = fontColor;

        // 设置文本基线和对齐方式
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';

        // 绘制文本
        ctx.fillText(text, 10, 10);  // 您可以根据需要调整位置
    }
}

function downloadHandwriting() {
    const canvas = document.getElementById('canvas');
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'handwriting.png';
    link.click();
}

// 初始化画布
updateCanvas();

window.updateCanvas = updateCanvas;
window.downloadHandwriting = downloadHandwriting;
