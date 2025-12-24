
interface Env {
    ASSETS: {
        fetch: (request: Request) => Promise<Response>;
    };
}

export default {
    async fetch(request: Request, env: Env, ctx: any): Promise<Response> {
        const url = new URL(request.url);

        // CORS headers
        const corsHeaders = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        };

        // Handle OPTIONS requests
        if (request.method === "OPTIONS") {
            return new Response(null, {
                headers: corsHeaders,
            });
        }

        if (url.pathname === "/.well-known/matrix/server") {
            return new Response(JSON.stringify({ "m.server": "matrix.iquxae.org:443" }), {
                headers: {
                    "Content-Type": "application/json",
                    ...corsHeaders,
                },
            });
        }

        if (url.pathname === "/.well-known/matrix/client") {
            return new Response(
                JSON.stringify({
                    "m.homeserver": { "base_url": "https://matrix.iquxae.org" },
                    "m.identity_server": { "base_url": "https://vector.im" },
                }),
                {
                    headers: {
                        "Content-Type": "application/json",
                        ...corsHeaders,
                    },
                }
            );
        }

        // Fallback to assets (Cloudflare Workers Assets)
        // Note: The 'assets' binding is automatically provided when 'assets' is configured in wrangler.jsonc
        // However, if the user requested a pure worker approach or if the assets binding isn't available in this context,
        // we should rely on the configuration. Given the existing wrangler.jsonc has "assets", this is the correct way.
        if (env.ASSETS) {
            return env.ASSETS.fetch(request);
        }

        return new Response("Not Found", { status: 404 });
    },
};
