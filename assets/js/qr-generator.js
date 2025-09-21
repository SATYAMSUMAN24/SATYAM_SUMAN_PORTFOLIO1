
// QR Code Generator for Resume Download
document.addEventListener('DOMContentLoaded', function() {
    // QR Code generation for resume
    function generateResumeQR() {
        const qrCanvas = document.getElementById('qr-code');
        if (!qrCanvas) return;

        // Use a simple QR code generation approach
        const resumeURL = window.location.origin + '/assets/docs/Satyam_Suman_Resume.pdf';
        
        // Create QR code using qr.js library or similar
        // For now, we'll create a placeholder that can be replaced with actual QR generation
        const ctx = qrCanvas.getContext('2d');
        const size = 150;
        qrCanvas.width = size;
        qrCanvas.height = size;
        
        // Draw a simple pattern as placeholder
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, size, size);
        
        ctx.fillStyle = '#ffffff';
        const cellSize = size / 21;
        
        // Create a basic QR-like pattern
        for (let i = 0; i < 21; i++) {
            for (let j = 0; j < 21; j++) {
                if ((i + j) % 2 === 0 || (i === 10 && j < 11) || (j === 10 && i < 11)) {
                    ctx.fillRect(i * cellSize, j * cellSize, cellSize - 1, cellSize - 1);
                }
            }
        }
        
        // Add corner squares (QR positioning markers)
        function drawCornerSquare(x, y) {
            const squareSize = cellSize * 7;
            ctx.fillStyle = '#000000';
            ctx.fillRect(x, y, squareSize, squareSize);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(x + cellSize, y + cellSize, squareSize - 2 * cellSize, squareSize - 2 * cellSize);
            ctx.fillStyle = '#000000';
            ctx.fillRect(x + 2 * cellSize, y + 2 * cellSize, squareSize - 4 * cellSize, squareSize - 4 * cellSize);
        }
        
        drawCornerSquare(0, 0);
        drawCornerSquare((21 - 7) * cellSize, 0);
        drawCornerSquare(0, (21 - 7) * cellSize);
        
        // Add click handler for QR code
        qrCanvas.addEventListener('click', function() {
            window.open(resumeURL, '_blank');
        });
        
        qrCanvas.style.cursor = 'pointer';
        qrCanvas.title = 'Click to download resume';
    }

    // Initialize QR code when page loads
    if (document.getElementById('qr-code')) {
        generateResumeQR();
    }

    // Add scanner functionality for mobile devices
    function initializeScanner() {
        const scannerBtn = document.getElementById('scanner-btn');
        if (scannerBtn && 'mediaDevices' in navigator) {
            scannerBtn.style.display = 'inline-block';
            scannerBtn.addEventListener('click', function() {
                // Basic camera access for scanning (placeholder)
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then(function(stream) {
                        // Handle camera stream for QR scanning
                        alert('Scanner feature would open camera here. Implement with QR scanner library.');
                        stream.getTracks().forEach(track => track.stop());
                    })
                    .catch(function(err) {
                        console.log('Camera access denied:', err);
                        alert('Camera access is required for scanning.');
                    });
            });
        }
    }

    initializeScanner();
});
