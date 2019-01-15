# frontend-resources

## normalize.scss

`@import "vendor/zephir/frontend-resources/scss/normalize";`

https://github.com/csstools/normalize.css

## zephir.scss

`@import "vendor/zephir/frontend-resources/scss/zephir";`

### Variables

`$z-root-font-size: 16px !default;`

Base font size. Used to calculate rem.

```
$z-breakpoints: (
    tapo: 768px,     // Tablet-portrait
    taho: 1024px,    // Tablet-horizontal
    desk: 1920px,    // Desktop
) !default;
```

Breakpoints. Will be used in the mediaquery mixins. For example `z-media-up(tapo)`.

### Better text rendering

Include this in your body for better/smoother font rendering.

`@include z-better-text-rendering;`

### Box sizing

Sets the box sizing to border box, best use case:

```
*,
*::after,
*::before {
    @include z-box-sizing;
}
```

### Media

Adds the mediaquery mixins. These will use the `$z-breakpoints` map but can also accept regular pixel values.

```
@include z-media-up(tapo) {}
@include z-media-down(tapo) {}
@include z-media-between(tapo, taho) {}
```

### Rem

Adds a `z-rem(20px)` function and a mixin `@include z-rem(20px)`.  
The mixin will automatically provide a px fallback for the rem value, example output of the mixin:

```
.test {
    font-size: 20px;
    font-size: 1.2rem;
}
```

### Strip unit

The `z-strip-unit(20px)` function strips a given unit (for example px) from a value.

### XD em to rem

The `z-xdem-to-rem(20, 20px)` function can calculate the rem value based on EM values given by XD. This function is especially useful if you have to define letter spacing that was defined in a XD file. The first param equals the letter spacing in XD and the second parameter has to be the current font-size in px.