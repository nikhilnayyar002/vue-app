## Side Toggle

### _variables.scss

```scss
$app-main-padding-x: 5rem;
$app-side-width: 22rem;
```

### _config.scss

```scss
:root {
  --app-side-width:#{var.$app-side-width};
  --app-side-toggle-value: 0rem;
}
```

### App.vue

```js
  setup() {
    const isAppSideOpenRef = ref(false);
    function toggleAppSide() {
      isAppSideOpenRef.value = !isAppSideOpenRef.value;

      /** update CSS variable value so that it consumers get aware of it. */
      const appSideWidth = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--app-side-width");

      document.documentElement.style.setProperty(
        "--app-side-toggle-value",
        isAppSideOpenRef.value ? appSideWidth : "0rem"
      );
      /** */
    }
    return {
      isAppSideOpenRef,
      toggleAppSide,
    };
  },
  provide() {
    return {
      isAppSideOpen: computed(() => this.isAppSideOpenRef),
      toggleAppSide: this.toggleAppSide,
    };
  },
```

### AppMain.vue

```scss
.AppMain {
  padding: 2rem variables.$app-main-padding-x;
}
```

### ActionBarGeneralControls.vue

```js
export default {
  name: "ActionBarGeneralControls",
  inject: ["isAppSideOpen","toggleAppSide"],
```

```html
  <ActionBarCommonControl @click="toggleAppSide" label="Chat" :isActive="isAppSideOpen.value">
    <ChatIcon
  /></ActionBarCommonControl>
```

### AppSide.vue

```js
export default {
  name: "AppSide",
  inject: ["isAppSideOpen"],
```

```html
  <div v-show="isAppSideOpen.value" class="AppSide h-100 ps-4">
    <CommentArea />
  </div>
```

```scss
.AppSide {
  width: variables.$app-side-width;
}
```

## Sliding

### Slider.vue
Please refer to this component to understand sliding mechanism.




