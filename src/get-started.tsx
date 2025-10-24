import { Detail } from "@raycast/api";

const markdown = `# Get Started with Ray Code

Ray Code bundles AI-powered tools that extend Raycast AI Chat with Vibe Coding workflows. Follow these steps before you start:

## 1. Configure the Workspace Root Directory

- Open Raycast Preferences (Cmd + ,)
- Select the Extensions tab
- Select the Ray Code and point the Workspace Root Directory to the root of the project you want to work on
- Save the preference so every tool uses that directory as its base path

## 2. Try the Available Tools

Once the workspace is set, you can run tools such as Read File and List Directory directly inside Raycast AI Chat. Combine them to inspect, modify, or navigate your repository with minimal context switching.

## 3. Troubleshooting Tips

- If a tool cannot access files, double-check the Workspace Root Directory setting
- To switch projects, update the preference to a different path and rerun your tools

Enjoy building with Ray Code!`;

export default function Command() {
  return <Detail markdown={markdown} navigationTitle="Get Started with Ray Code" />;
}
