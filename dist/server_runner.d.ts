import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
interface ServerOptions {
    name: string;
}
export declare const ExpressHttpStreamableMcpServer: (options: ServerOptions, setupCb: (server: McpServer) => void) => {
    process: NodeJS.Process;
    server: McpServer;
    express_server: import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
};
export {};
