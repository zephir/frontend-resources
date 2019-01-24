<p align="center">
  <img src="https://avatars2.githubusercontent.com/u/6582596?s=100&v=4" alt="LUYA Logo"/>
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
|`z-rem`|Returns the calculated rem value based on the given pixel value and the `$z-root-font-size`. The mixin that's provided also adds a pixel fallback if used.|Adds a `z-rem(20px)` function and a mixin `@include z-rem(20px)`.|
|`z-em`|Returns the calculated em value based on given pixel value and parent font size. If no parent font size is given it uses the `$z-root-font-size` variable.|Adds a `z-em(20px, 24px)` function.|
|`z-strip-unit`|strips a given unit (for example px) from a value.|`z-strip-unit(20px)`|
|`z-xdem-to-rem`|function can calculate the rem value based on EM values given by XD. This function is especially useful if you have to define letter spacing that was defined in a XD file. The first param equals the letter spacing in XD and the second parameter has to be the current font-size in px.|`z-xdem-to-rem(20, 20px)`|


Mixins

|Mixin|Description|Example
|--------|-----------|------
|`z-media-up`|Adds the mediaquery mixins. These will use the `$z-breakpoints` map but can also accept regular pixel values.||
|`z-media-down`|Adds the mediaquery mixins. These will use the `$z-breakpoints` map but can also accept regular pixel values.||
|`z-media-between`|Adds the mediaquery mixins. These will use the `$z-breakpoints` map but can also accept regular pixel values.||
|`z-better-text-rendering`|Include this in your body for better/smoother font rendering.|`@include z-better-text-rendering;`|
|`z-clearfix`|Include this to clear floats and prevent following elements to flow around the previous floating element.|`@include z-clearfix;`|

## Normalize

The normamlize file can be included to reset the .... its based upon: https://github.com/csstools/normalize.css