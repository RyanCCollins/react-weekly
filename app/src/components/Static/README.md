## Static Component
A component that takes static content and renders a static article

### Example

```js
<Static
  content={`
    # HELLO WORLD

    This is _markdown_ content.
  `}
  hasBoxShadow={false}
/>
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **content**    | String   |             | Markdown content to show in the article.
| **hasBoxShadow**    | Boolean   |             | True or false, whether to show the box shadow on the article.


### Other Information
