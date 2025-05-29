export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.send(`
    (function() {
      const btn = document.createElement('div');
      btn.innerHTML = '↑';
      btn.style = 'position:fixed;bottom:20px;right:20px;width:50px;height:50px;background:#4285f4;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;cursor:pointer;box-shadow:0 2px 5px rgba(0,0,0,0.3);z-index:9999;';
      
      btn.onclick = () => {
        window.parent.postMessage({ type: 'SCROLL_TO_TOP' }, '*');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      
      document.body.appendChild(btn);
    })();
  `);
}
