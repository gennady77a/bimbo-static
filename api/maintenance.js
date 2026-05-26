export default function handler(request, response) {
  response.setHeader("Retry-After", "3600"); // Повторить через час
  response.status(503).send(`
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bimbo.by — Ведутся технические работы</title>
        <link rel="icon" href="/favicon.png" type="image/png">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            
            body, html {
                height: 100%;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: white;
                overflow: hidden;
            }
            
            .background {
                position: fixed;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background-image: url('../bg.jpg'); 
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                z-index: -2;
            }
            
            .overlay {
                position: fixed;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background: rgba(0, 30, 60, 0.65);
                z-index: -1;
            }
            
            .content {
                position: relative;
                z-index: 1;
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                padding: 20px;
            }
            
            h1 {
                font-size: 3.2rem;
                margin-bottom: 20px;
                text-shadow: 0 2px 15px rgba(0,0,0,0.6);
            }
            
            p {
                font-size: 1.35rem;
                max-width: 620px;
                line-height: 1.5;
                opacity: 0.95;
            }
            
            .footer {
                position: absolute;
                bottom: 35px;
                font-size: 1rem;
                opacity: 0.8;
            }
        
            /* Адаптив */
            @media (max-width: 768px) {
                h1 { font-size: 2.4rem; }
                p { font-size: 1.2rem; }
            }
            @media (max-width: 480px) {
                h1 { font-size: 2rem; }
                p { font-size: 1.1rem; }
            }
        </style>
    </head>
    <body>
        <div class="background"></div>
        <div class="overlay"></div>
        
        <div class="content">
            <h1>Ведутся технические работы</h1>
            <p>Сайт временно недоступен. Мы проводим плановое техническое обслуживание и скоро вернёмся. Спасибо за понимание!</p>
            
            <div class="footer">
                Bimbo.by — Скоро будем с вами
            </div>
        </div>
    </body>
    </html>
  `);
}
