import lumeCMS from "lume/cms/mod.ts";
import { parseArgs } from "@std/cli/parse-args";

const cms = lumeCMS();

cms.storage("src", ".");

const user = Deno.env.get("CMS_USER") ?? "admin";
const pass = Deno.env.get("CMS_PASSWORD") ?? "";

cms.auth({
  [user]: pass,
});

cms.git();

cms.document({
  name: "Slides",
  store: "src:data.json",
  fields: [
    {
      type: "choose-list",
      name: "slides",
      fields: [
        {
          type: "object",
          name: "tweet",
          fields: [
            "title: text",
            "text: rich-text",
            "url: url",
            "date: text",
            "author: text",
            "username: text",
            {
              type: "file",
              name: "avatar",
            },
          ],
        },
        {
          type: "object",
          name: "visual",
          fields: [
            "title: text",
            {
              type: "file",
              name: "image",
            },
          ],
        },
        {
          type: "object",
          name: "art",
          fields: [
            "title: text",
            "author: text",
            "year: text",
            "url: url",
            "source: text",
            {
              type: "file",
              name: "image",
            },
          ],
        },
      ],
    },
  ],
});

cms.upload("images", "src:img");

const args = parseArgs(Deno.args);
Deno.serve({
  handler: cms.fetch,
  port: args.port,
  hostname: args.hostname,
});
