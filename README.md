# Better GitHub Skills

Showcase your concise GitHub skills on a minimalist card

### Usage

To use it you must consume the api in this way:

```
https://better-github-skills.deno.dev/api/{username}?techs={tech1},{tech2},{tech3},{tech4}
```

where:

- `{username}` is the username of the user you want to show
- `{tech1},{tech2},{tech3},{tech4}` are the techs you want to show

### Example Fetch Request

```
https://better-github-skills.deno.dev/api/josvaal?techs=js,svelte,spring,go
```

### Example Github Readme Card

![](https://better-github-skills.deno.dev/api/josvaal?techs=js,svelte,spring,go)
