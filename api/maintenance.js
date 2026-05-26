export default function handler(request, response) {
  response.setHeader('Retry-After', '3600'); // Повторить через час
  response.status(503).send(`
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <title>Техническое обслуживание</title>
        <style>
            body { font-family: sans-serif; text-align: center; padding: 50px; background: #f4f4f4; }
            h1 { color: #333; }
            p { color: #666; }
        </style>
    </head>
    <body>
        <h1>Сайт временно недоступен</h1>
        <p>Мы проводим технические работы. Пожалуйста, зайдите позже.</p>
    </body>
    </html>
  `);
}
