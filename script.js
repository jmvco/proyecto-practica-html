document.addEventListener('DOMContentLoaded', () => {
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const htmlLineNumbers = document.getElementById('html-line-numbers');
    const cssLineNumbers = document.getElementById('css-line-numbers');
    const jsLineNumbers = document.getElementById('js-line-numbers');

    const bgColorInput = document.getElementById('bg-color');
    const btnColorInput = document.getElementById('btn-color');
    const runButton = document.getElementById('run-btn');
    const fontSizeInput = document.getElementById('font-size');
    const fontSizeValue = document.getElementById('font-size-value');

    // Función para actualizar la numeración de líneas
    function updateLineNumbers(textarea, lineNumbersElement) {
        const lines = textarea.value.split('\n');
        let lineNumbers = '';
        for (let i = 1; i <= lines.length; i++) {
            lineNumbers += i + '\n';
        }
        lineNumbersElement.textContent = lineNumbers;
    }

    // Función para sincronizar el desplazamiento de los números con el área de texto
    function syncScroll(textarea, lineNumbersElement) {
        lineNumbersElement.scrollTop = textarea.scrollTop;
    }

    // Actualizar la numeración de las líneas al escribir
    htmlCode.addEventListener('input', () => updateLineNumbers(htmlCode, htmlLineNumbers));
    cssCode.addEventListener('input', () => updateLineNumbers(cssCode, cssLineNumbers));
    jsCode.addEventListener('input', () => updateLineNumbers(jsCode, jsLineNumbers));

    // Sincronización de desplazamiento
    htmlCode.addEventListener('scroll', () => syncScroll(htmlCode, htmlLineNumbers));
    cssCode.addEventListener('scroll', () => syncScroll(cssCode, cssLineNumbers));
    jsCode.addEventListener('scroll', () => syncScroll(jsCode, jsLineNumbers));

    // Función para ejecutar el código
    runButton.addEventListener('click', () => {
        const htmlContent = htmlCode.value;
        const cssContent = cssCode.value;
        const jsContent = jsCode.value;

        const outputFrame = document.getElementById('output-frame');
        const outputDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;

        outputDoc.open();
        outputDoc.write(`
            <html>
                <head>
                    <style>${cssContent}</style>
                </head>
                <body>
                    ${htmlContent}
                    <script>
                        try {
                            ${jsContent}
                        } catch (error) {
                            console.error('Error al ejecutar el código JS:', error);
                        }
                    </script>
                </body>
            </html>
        `);
        outputDoc.close();
    });

    // Función para cambiar el color de fondo
    bgColorInput.addEventListener('input', (e) => {
        document.body.style.backgroundColor = e.target.value;
    });

    // Función para cambiar el color del botón
    btnColorInput.addEventListener('input', (e) => {
        runButton.style.backgroundColor = e.target.value;
    });

    // Cambiar el tamaño de la fuente
    fontSizeInput.addEventListener('input', (e) => {
        const newSize = e.target.value + "px";
        fontSizeValue.textContent = newSize;
        htmlCode.style.fontSize = newSize;
        cssCode.style.fontSize = newSize;
        jsCode.style.fontSize = newSize;
    });

    // Inicializar las líneas de numeración
    updateLineNumbers(htmlCode, htmlLineNumbers);
    updateLineNumbers(cssCode, cssLineNumbers);
    updateLineNumbers(jsCode, jsLineNumbers);

    // Sincronizar el desplazamiento de los números con los textarea al cargar la página
    syncScroll(htmlCode, htmlLineNumbers);
    syncScroll(cssCode, cssLineNumbers);
    syncScroll(jsCode, jsLineNumbers);
});
