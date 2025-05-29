export default function handler(req, res) {
  // Cabeçalhos essenciais para Google Sites
  res.setHeader('Access-Control-Allow-Origin', 'https://sites.google.com');
  res.setHeader('Content-Security-Policy', "default-src 'self' 'unsafe-inline'");
  res.setHeader('Content-Type', 'application/javascript');
  
  res.send(`
    (function() {
      function init() {
        var btn = document.createElement('div');
        btn.innerHTML = '↑';
        btn.style = 'position:fixed;bottom:20px;right:20px;width:50px;height:50px;background:#4285f4;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;cursor:pointer;box-shadow:0 2px 5px rgba(0,0,0,0.3);z-index:9999;';
        
        btn.onclick = function() {
          try {
            // Método para Google Sites
            if (window.parent !== window) {
              window.parent.postMessage('BACK_TO_TOP', '*');
            }
            // Fallback universal
            document.documentElement.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          } catch(e) {
            window.scrollTo(0, 0);
          }
        };
        
        document.body.appendChild(btn);
      }
      
      // Espera o DOM e tenta inicializar 3 vezes
      function waitForDOM() {
        if (document.body) {
          init();
        } else {
          setTimeout(waitForDOM, 500);
        }
      }
      
      waitForDOM();
    })();
  `);
}
