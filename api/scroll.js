// api/scroll.js
export default function handler(req, res) {
  // Configura CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Content-Type', 'application/javascript');
  
  res.send(`
    document.addEventListener('DOMContentLoaded', function() {
      const btn = document.createElement('div');
      btn.innerHTML = '↑';
      btn.style = 'position:fixed;bottom:20px;right:20px;width:50px;height:50px;background:#4285f4;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;cursor:pointer;box-shadow:0 2px 5px rgba(0,0,0,0.3);z-index:9999;';
      
      btn.onclick = function() {
        // Tenta todas as formas de scroll
        try {
          if (window.parent !== window) {
            window.parent.postMessage('SCROLL_TO_TOP', '*');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch(e) {
          document.documentElement.scrollTop = 0;
        }
      };
      
      document.body.appendChild(btn);
    });
  `);
}
