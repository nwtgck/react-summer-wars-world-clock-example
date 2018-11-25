# My Note

## How to debug

```bash
# Run in the library, "react-summer-wars-world-clock"
npm run build
```

and then, change "react-summer-wars-world-clock-example/package.json" like the following.

```json
"dependencies": {
  ...
  "react-summer-wars-world-clock": "file:../react-summer-wars-world-clock"
  ...
```

(NOTE: You should replace with proper path of the library.)

and then, run the following.

```bash
npm start
```
