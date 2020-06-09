# zeppelin-element-library-vue
Vue Components for Zeppelin Element Library

## Installation and Usage

```bash
npm install --save @zlab-de/zel-vue

yarn add @zlab-de/zel-vue

```
### Components

1. Zelbutton
2. Zelcheckbox
3. ZelInput
4. Zelnotification
5. Zelnumberinput
6. Zelpagination
7. Zelradiobutton
8. zelsearchinput
9. zelselect
10. zeltab
11. zeltabs

``` javascript 
import Vue from 'vue';
import "path/to/zeppelin-element-library.css";
import {
  ZelVueButton,
  ZelVueCheckbox,
  ZelVueInput,
  ZelVueBulletList,
  ZelVueAttributeList,
  ZelVueNotifications,
  ZelVueNumberInput,
  ZelVueRadioButton,
  ZelVueSearchInput,
  ZelVueSelect,
  ZelVueTable,
  ZelVueTabs,
  ZelVueTab,
  ZelVueTagInput,
  ZelVueTag,
  ZelVuePagination
  }"@zlab-de/zel-vue";

  Vue.use(ZelVueButton);
  Vue.use(ZelVueCheckbox);
  Vue.use(ZelVueInput);

```

Alternatively you can <a href=https://github.com/zepdev/zeppelin-element-library-vue/archive/master.zip" target="_blank" rel="noopener">download</a> and reference the script and the stylesheet in your HTML:

``` html
<link rel="stylesheet" href="path/to/zeppelin-element-library.css">
<script src="path/to/dist/zel-vue.min.js"></script>
```
### Components and Props
Each components are it's associated properties that can be added to it
#### Button (ZelVueButton) Component
| Prop Name        | Type          | Default  | Description
| ---------------- |:-------------:| --------:| -----------
| variant          | String        |  Primary | 
| @click           | Function      |          | Callback function attached to the component when the button click event is triggered.
| disabled         | Boolean       | false    |
| fullWidth        | Boolean       | false    | Set the button width to occupy the full width of it's parent container 
## Questions

If you have any questions, ideas or you want to discuss with Zel-element-library-vue community, use [Issues](https://github.com/zepdev/zeppelin-element-library-vue/issues) to send any issue or note to us we will be happy to pick it up.

<small>May work in other browsers but it's untested.</small>

## Credits and Thanks

* <a href="https://github.com/cabutler10" target="_blank">Alyssa</a> for the support and contribution towards to project

## License

MIT
