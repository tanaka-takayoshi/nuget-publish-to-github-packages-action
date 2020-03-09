# Publish Nupkg to GitHub Packages

This action publish Nupkg to GitHub Packages.

## Inputs

### `nupkg-path`

**Required** The path of the Nupkg file to publish.

### `repo-owner`

**Required** The owner of GitHub Packages.

### `gh-user`

**Required** The username of your account.

### `token`

**Required** The token of your GitHub Packages.

## Example usage

uses: tanaka-takayoshi/nuget-publish-to-github-packages-action@v1
with:
  nupkg-path:  './artifacts'
  repo-owner:  'tanaka-takayoshi'
  gh-user:  'tanaka-takayoshi'
  token:  ${{ secrets.GITHUB_TOKEN }}