
interface Env {
    ASSETS: {
        fetch: (request: Request) => Promise<Response>;
    };
}

export default {
    async fetch(request: Request, env: Env, ctx: any): Promise<Response> {
        const url = new URL(request.url);

        // Только для путей .well-known/matrix/
        if (url.pathname.startsWith("/.well-known/matrix/")) {
            // 1. Пытаемся получить файл из статических ассетов (из папки public/dist)
            let response = await env.ASSETS.fetch(request);

            // 2. Если файл найден (200 OK), создаем новый ответ с нужными заголовками
            if (response.status === 200) {
                const newResponse = new Response(response.body, response);
                newResponse.headers.set("Access-Control-Allow-Origin", "*");
                newResponse.headers.set("Access-Control-Allow-Methods", "GET, HEAD, POST, OPTIONS");
                newResponse.headers.set("Access-Control-Allow-Headers", "Content-Type");
                newResponse.headers.set("Content-Type", "application/json");
                return newResponse;
            }

            // Если файл не найден, возвращаем как есть (404)
            return response;
        }

        // Для всех остальных запросов просто отдаем статику или 404
        return env.ASSETS.fetch(request);
    },
};
