# Styling Guide

We are using Sass (Dart Sass).

## Bootstrap 5.0 Sass Files

This is the package of bootstrap located under ```node_modules```.

```
bootstrap
├── scss
│   ├── forms
│   │   ├── _floating-labels.scss
│   │   ├── _form-check.scss
│   │   ├── _form-control.scss
│   │   ├── _form-range.scss
│   │   ├── _form-select.scss
│   │   ├── _form-text.scss
│   │   ├── _input-group.scss
│   │   ├── _labels.scss
│   │   └── _validation.scss
│   ├── helpers
│   │   ├── _clearfix.scss
│   │   ├── _colored-links.scss
│   │   ├── _position.scss
│   │   ├── _ratio.scss
│   │   ├── _stretched-link.scss
│   │   ├── _text-truncation.scss
│   │   └── _visually-hidden.scss
│   ├── mixins
│   │   ├── _alert.scss
│   │   ├── _border-radius.scss
│   │   ├── _box-shadow.scss
│   │   ├── _breakpoints.scss
│   │   ├── _buttons.scss
│   │   ├── _caret.scss
│   │   ├── _clearfix.scss
│   │   ├── _container.scss
│   │   ├── _deprecate.scss
│   │   ├── _forms.scss
│   │   ├── _gradients.scss
│   │   ├── _grid.scss
│   │   ├── _image.scss
│   │   ├── _list-group.scss
│   │   ├── _lists.scss
│   │   ├── _pagination.scss
│   │   ├── _reset-text.scss
│   │   ├── _resize.scss
│   │   ├── _table-variants.scss
│   │   ├── _text-truncate.scss
│   │   ├── _transition.scss
│   │   ├── _utilities.scss
│   │   └── _visually-hidden.scss
│   ├── utilities
│   │   └── _api.scss
│   ├── vendor
│   │   └── _rfs.scss
│   ├── _accordion.scss
│   ├── _alert.scss
│   ├── _badge.scss
│   ├── _breadcrumb.scss
│   ├── _button-group.scss
│   ├── _buttons.scss
│   ├── _card.scss
│   ├── _carousel.scss
│   ├── _close.scss
│   ├── _containers.scss
│   ├── _dropdown.scss
│   ├── _forms.scss
│   ├── _functions.scss
│   ├── _grid.scss
│   ├── _helpers.scss
│   ├── _images.scss
│   ├── _list-group.scss
│   ├── _mixins.scss
│   ├── _modal.scss
│   ├── _nav.scss
│   ├── _navbar.scss
│   ├── _pagination.scss
│   ├── _popover.scss
│   ├── _progress.scss
│   ├── _reboot.scss
│   ├── _root.scss
│   ├── _spinners.scss
│   ├── _tables.scss
│   ├── _toasts.scss
│   ├── _tooltip.scss
│   ├── _transitions.scss
│   ├── _type.scss
│   ├── _utilities.scss
│   ├── _variables.scss
│   ├── bootstrap-grid.scss
│   ├── bootstrap-reboot.scss
│   ├── bootstrap-utilities.scss
│   └── bootstrap.scss
```

### ```bootstrap/scss/bootstrap.scss```


```
/*!
 * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors
 * Copyright 2011-2020 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */

// scss-docs-start import-stack
// Configuration
@import "functions";
@import "variables";
@import "mixins";
@import "utilities";

// Layout & components
@import "root";
@import "reboot";
@import "type";
@import "images";
@import "containers";
@import "grid";
@import "tables";
@import "forms";
@import "buttons";
@import "transitions";
@import "dropdown";
@import "button-group";
@import "nav";
@import "navbar";
@import "card";
@import "accordion";
@import "breadcrumb";
@import "pagination";
@import "badge";
@import "alert";
@import "progress";
@import "list-group";
@import "close";
@import "toasts";
@import "modal";
@import "tooltip";
@import "popover";
@import "carousel";
@import "spinners";

// Helpers
@import "helpers";

// Utilities
@import "utilities/api";
// scss-docs-end import-stack

```

## Application Style Directory Structure

One must not style bootstrap files directly. Instead config bootstrap and add required bootstrap scss files using the below setup.

```
src
└── styles
    ├── _bootstrap.scss
    ├── _common.scss
    ├── _config.scss
    ├── _variables.scss
    └── index.scss
```

* ```_config.scss``` includes ```bootstrap/scss/bootstrap.scss``` **configuration** portion.
* ```_bootstrap.scss``` is basically ```bootstrap/scss/bootstrap.scss``` file but without **configuration**.
* ```_common.scss``` is basically is supposed to contain css common to application components. One must ensure that these styles are basic and general.
* ```_variables.scss``` is basically is supposed to contain sass & css variables.
* ```index.scss``` includes other sass files and provide some root level css.
    > Note: Order of import matters
    > ```scss
    >//index.scss
    > @import "./config";
    > @import "./bootstrap";
    > @import "./common";
    > ```
    > Here we import ```config``` first as it will be containing configerations that will override ```bootstrap``` config and hence produce expected css output. For example:
    > ```scss
    >//_variables.scss
    >$primary:#039BE5;
    >$secondary:#242424;
    >
    >//_config.scss
    >@use "./variables" as var;
    >
    >// These variables will override bootstrap variables
    >$primary:var.$primary;
    >$secondary:var.$secondary;
    > ```
    >Since ```config``` is imported before ```bootstrap``` therefore in bootstrap **primary** & **secondary** variables (hence colors) will be overrided.

## BEM

This is a methodology that ensures everyone write styles for block/elements (with modifiers) in standard manner.

### Resources

http://getbem.com/introduction/

http://getbem.com/naming/