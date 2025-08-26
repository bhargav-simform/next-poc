import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";


export const server = new McpServer({
  name: "nestjsMCP",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

const supabaseClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);

server.tool(
  "create_issue",
  "Create a new issue with optional defaults",
  {
    name: z.string().describe("Title of the issue"),
    description: z.string().optional().default("No description provided"),
    status: z.string().optional().default("Open"),
    priority: z.string().optional().default("Low"),
    assignee: z.string().optional().default("Unassigned"),
    due_date: z.string().datetime().optional().describe("Due date in ISO format"),
    browser: z.string().optional().default("Unknown"),
    reproducible: z.boolean().optional().default(true),
    estimation: z.number().optional().default(1),
  },
  async (input) => {

    const { error } = await supabaseClient
      .from('issues')
      .insert([{
        ...input,
        title: input.name,
        due_date: input.due_date ? new Date(input.due_date).toISOString() : null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }])

    if (error) {
      return {
        content: [
          {
            type: "text",
            text: 'Failed to add issue',
          },
        ]
      }
    }

    return {
      content: [
        {
          type: "text",
          text: `Issue created`,
        },
      ],
    };
  }
);


(async () => {
  const transport = new StdioServerTransport();
  await server.connect(transport);
})();