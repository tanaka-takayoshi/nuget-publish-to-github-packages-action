const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');
const fs = require('fs');

try {
  // `who-to-greet` input defined in action metadata file
  const path = core.getInput('nupkg-path');
  const owner = core.getInput('repo-owner');
  const username = core.getInput('gh-user');
  const token = core.getInput('token');
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  const xml = `<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <packageSources>
        <clear />
        <add key="github" value="https://nuget.pkg.github.com/${owner}/index.json" />
    </packageSources>
    <packageSourceCredentials>
        <github>
            <add key="Username" value="${username}" />
            <add key="ClearTextPassword" value="${token}" />
        </github>
    </packageSourceCredentials>
</configuration>`;
	console.log(xml);
	fs.writeFileSync("nuget.config", xml);
	exec.exec("dotnet", ["nuget", "push", path, "--source", "github"]);
} catch (error) {
  core.setFailed(error.message);
}