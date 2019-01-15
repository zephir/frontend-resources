<p align="center">
  <img src="https://avatars2.githubusercontent.com/u/6582596?s=200&v=4" alt="LUYA Logo"/>
</p>

# Zephir Frontend Resources

Installation:

```sh
composer require zephir/frontend-resources
```

Usage:

```
@import "vendor/zephir/frontend-resources/scss/normalize";
@import "vendor/zephir/frontend-resources/scss/zephir";
```

## SCSS

Variables

|Variable|Description|Example|
|--------|-----------|------|
|`$z-root-font-size`|Base font size. Used to calculate rem.||
|`$z-breakpoints`|Will be used in the mediaquery mixins. For example `z-media-up(tapo)`.|`$z-breakpoints: (tapo: 768px, taho: 1024px, desk: 1920px) !default;`


Functions

|Function|Description|Example|
|--------|-----------|------|
|`z-rem`|The mixin will automatically provide a px fallback for the rem value, example output of the mixin.|Adds a `z-rem(20px)` function and a mixin `@include z-rem(20px)`.|
|`z-strip-unit`|strips a given unit (for example px) from a value.|`z-strip-unit(20px)`|
|`z-xdem-to-rem`|function can calculate the rem value based on EM values given by XD. This function is especially useful if you have to define letter spacing that was defined in a XD file. The first param equals the letter spacing in XD and the second parameter has to be the current font-size in px.|`z-xdem-to-rem(20, 20px)`|


Mixins

|Mixin|Description|Example
|--------|-----------|------
|`z-media-up`|Adds the mediaquery mixins. These will use the `$z-breakpoints` map but can also accept regular pixel values.||
|`z-media-down`|Adds the mediaquery mixins. These will use the `$z-breakpoints` map but can also accept regular pixel values.||
|`z-media-between`|Adds the mediaquery mixins. These will use the `$z-breakpoints` map but can also accept regular pixel values.||
|`z-better-text-rendering`|Include this in your body for better/smoother font rendering.|`@include z-better-text-rendering;`|


======================================================================================================================================00

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

`@include ;`

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

## Normalize

The normamlize file can be included to reset the .... its based upon: https://github.com/csstools/normalize.css