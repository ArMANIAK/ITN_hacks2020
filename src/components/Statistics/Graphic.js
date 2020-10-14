import React, { useRef, useEffect } from 'react';

const Graphic = ( {title, stats} ) => {

    const canvasRef = useRef(null);

    const drawGraphic = (data, canvas, { width, height, padding }) => {
        const segments = data.length + 1;
        const segmentWidth = Math.floor((width - padding - 2) / segments);
        const min = data.reduce((min, current) => min = current[1] < min ? current[1] : min, Infinity);
        const max = data.reduce((max, current) => max = current[1] > max ? current[1] : max, -Infinity);
        const segmentHeight = Math.floor((height - padding - 2) / (max - min));
        canvas.beginPath();
        canvas.moveTo(padding * 2 + 2, height - segmentHeight * (data[0][1] - min) - padding - 2);
        for (let i = 1, n = data.length; i < n; i++) {
            canvas.lineTo(segmentWidth * (i + 1), height - segmentHeight * (data[i][1] - min) - padding - 2);
            canvas.fillText(data[i][1], padding * 2 - 15, height - segmentHeight * (data[i][1] - min) - padding - 2)
        }
        canvas.stroke();
    }
    
    useEffect(() => {
        const width = canvasRef.current.scrollWidth;
        const height = canvasRef.current.scrollHeight;
        const canvas = canvasRef.current.getContext('2d');
        let padding = 20;
        canvas.fillRect(padding * 2, padding, width - padding * 3, height - padding * 2);
        canvas.clearRect(padding * 2 + 1, padding, width - padding * 3, height -  padding * 2 - 1);
        drawGraphic(stats, canvas, {width, height, padding})
    })

    return (
        <div>
            <h3>{title}</h3>
            <canvas width={'600px'} height={'400px'} ref={canvasRef}></canvas>
        </div>

    )
}

export default Graphic;