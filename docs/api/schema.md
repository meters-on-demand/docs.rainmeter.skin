---
---

# Skin API data structure

The `/skins` API returns an array of skin objects as JSON.

The skin objects are structured like this:

```js
{
    full_name: { type: String, required: true, unique: true, lowercase: true },
    skin_name: { type: String, required: true },
    name: { type: String, required: true },
    topics: [String],
    description: String,
    preview_image: String,
    latest_release: {
        tag_name: String,
        browser_download_url: String,
        name: String,
    },
    owner: {
        name: String,
        avatar_url: String,
    },
    last_checked: Date,
}
```

## Peculiarities

Most property names are in snake_case because they're named like that in GitHub's API.

full_name can be considered to be the unique identifier of each skin. It is always the same as the GitHub repository name eg. reisir/mondtholomew

The properties with { type: String } are not objects, they just have additional schema options set.
