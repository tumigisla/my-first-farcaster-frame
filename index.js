const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Custom Meta Tags Example</title>
      
      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website">      
      <meta property="og:image" content="https://fc-dev-callx.replit.app/image">
      
      <!-- Custom Frame Campaign Meta Tags -->
      <meta property="fc:frame" content="vNext">
      <meta property="fc:frame:image" content="https://fc-dev-call.replit.app/image">
      
      <meta property="fc:frame:button:1" content="Spec">
      <meta property="fc:frame:button:1:action" content="link">
      <meta property="fc:frame:button:1:target" content="https://docs.farcaster.xyz/learn/what-is-farcaster/frames">
      
      <meta property="fc:frame:button:2" content="Image">
      <meta property="fc:frame:button:2:action" content="link">
      <meta property="fc:frame:button:2:target" content="https://fc-dev-call.replit.app/image">
      
      <meta property="fc:frame:button:3" content="Frame Validator">
      <meta property="fc:frame:button:3:action" content="link">
      <meta property="fc:frame:button:3:target" content="https://warpcast.com/~/developers/frames">
      
      <meta property="fc:frame:button:4" content="Replit">
      <meta property="fc:frame:button:4:action" content="link">
      <meta property="fc:frame:button:4:target" content="https://giddy-disguised-protocols-tumsgis.replit.app/">
    </head>
    <body>
      <h1>Hello, this is a webpage with custom Frame Campaign meta tags!</h1>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
