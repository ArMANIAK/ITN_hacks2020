import React, { useRef, useEffect } from 'react';

const Graphic = ( {title, stats} ) => {

    const colors = ['red', 'yellow', 'green', 'blue', 'pink', 'magenta', 'goldenrod', 'lime', 'grey'];

    const canvasRef = useRef(null);

    const drawGraphic = (data, canvas, { width, height, padding, type }) => {

        // preliminary calculations
        const offset = 3
        const segments = data.length + 1;
        const segmentWidth = Math.floor((width - padding * 2 - offset) / segments);
        const min = data.reduce((min, current) => min = current[1] < min ? current[1] : min, Infinity)  - offset;
        const max = data.reduce((max, current) => max = current[1] > max ? current[1] : max, -Infinity);
        const segmentHeight = Math.floor((height - padding - offset * 2) / (max - min));
        
        switch (type) {

            // regular polyline graphic
            case 'polyline':
                canvas.beginPath();
                canvas.moveTo(padding * 2 + offset, height - segmentHeight * (data[0][1] - min) - padding - offset);
                for (let i = 1, n = data.length; i < n; i++) {
                    canvas.lineTo(segmentWidth * (i + 1), height - segmentHeight * (data[i][1] - min) - padding - offset);
                    canvas.fillText(data[i][1], padding * 2 - 15, height - segmentHeight * (data[i][1] - min) - padding - offset)
                }
                canvas.stroke();    
            break;

            // bar diagram
            case 'bar':
                canvas.fillStyle = colors[0];
                canvas.fillRect(padding * 2 + offset, 
                                height - segmentHeight * (data[0][1] - min) - padding - offset, 
                                segmentWidth, 
                                segmentHeight * (data[0][1] - min));
                for (let i = 1, n = data.length; i < n; i++) {
                    canvas.fillStyle = colors[i % colors.length];
                    canvas.fillRect(padding * 2 + offset + (segmentWidth + offset) * i,
                                    height - segmentHeight * (data[i][1] - min) - padding - offset, 
                                    segmentWidth, 
                                    segmentHeight * (data[i][1] - min));
                }
            break;
        }
    }
    
    useEffect(() => {
        const width = canvasRef.current.scrollWidth;
        const height = canvasRef.current.scrollHeight;
        const canvas = canvasRef.current.getContext('2d');
        let padding = 20;
        canvas.fillRect(padding * 2, padding, width - padding * 3, height - padding * 2);
        canvas.clearRect(padding * 2 + 1, padding, width - padding * 3, height -  padding * 2 - 1);
        let type = 'polyline';
        drawGraphic(stats, canvas, {width, height, padding, type})
    })

    return (
        <div className="graphic-card">
            <h3 className="graphic-title">{title}</h3>
            <div className="graphic-diagram" >
                <canvas width={'600px'} height={'400px'} ref={canvasRef}></canvas>
            </div>
        </div>

    )
}

export default Graphic;