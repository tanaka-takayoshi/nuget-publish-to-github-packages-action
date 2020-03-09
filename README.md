# Publish Nupkg to GitHub Packages

This cross-platform action publishes Nupkg to GitHub Packages. .NET Core CLI is required. The project-level `nuget.config` will be replaced by this action.

## Inputs

### `nupkg-path`

**Required** The path of the Nupkg file to publish.

### `repo-owner`

**Required** The owner of GitHub Packages.

### `gh-user`

**Required** The username of your account.

### `token`

**Required** The token of your GitHub Packages.

### `skip-duplicate`

**Required** Skip publishing duplicated package(s) if true. The default value is true.

## Example usage

```yaml
uses: tanaka-takayoshi/nuget-publish-to-github-packages-action@v2.0
with:
  nupkg-path:  './artifacts/*.nupkg'
  repo-owner:  'tanaka-takayoshi'
  gh-user:  'tanaka-takayoshi'
  token:  ${{ secrets.GITHUB_TOKEN }}
```
