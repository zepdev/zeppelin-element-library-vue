# zeppelin-element-library-vue

Vue Components for Zeppelin Element Library (Legacy)

## ⚠️ This Design System is deprecated and no longer maintained. npm packges will stay available, but please make sure to opt out until 2025 ⚠️

## Installation and Usage

```bash
npm install --save @zlab-de/zel-vue

yarn add @zlab-de/zel-vue

```### Components

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
12. zeltable
13. zelpagination

````javascript
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
  ZelVueTag,
  ZelVuePagination
  }"@zlab-de/zel-vue";

  Vue.use(ZelVueButton);
  Vue.use(ZelVueCheckbox);
  Vue.use(ZelVueInput);

Alternatively you can
``` html <a href=https://github.com/zepdev/zeppelin-element-library-vue/archive/master.zip" target="_blank" rel="noopener">download</a> ```  and reference the script and the stylesheet in your HTML:

``` html
<link rel="stylesheet" href="path/to/zeppelin-element-library.css">
<script src="path/to/dist/zel-vue.min.js"></script>
````

### Components and Props

Each components are it's associated properties that can be added to it

#### Button (ZelVueButton) Component

| Prop Name |   Type   | Default | Description                                                                                       |
| --------- | :------: | ------: | ------------------------------------------------------------------------------------------------- |
| variant   |  String  | primary | Other options tertiary, secondary                                                                 |
| @click    | Function |         | Callback function attached to the component when the button click event is triggered.             |
| disabled  | Boolean  |   false |
| fullWidth | Boolean  |   false | Set the button width to occupy the full width of it's parent container                            |
| icon      |  String  |         | A string of icon name, see zeppelin element libary for more information about available icons set |
| size      |  String  |         | Sets the size of component eg: small                                                              |

#### Checkbox (ZelVueCheckbox) Component

| Prop Name | Type    | Default | Description                                  |
| --------- | :------ | :------ | :------------------------------------------- |
| disabled  | Boolean | false   | disables and/or enables a checkbox component |
| value     | Boolean | false   | checkstate                                   |
| label     | String  |         | label for the checkbox                       |

#### Input (ZelVueInput) Component

| Prop Name    | Type    | Default    | Description                               |
| ------------ | :------ | :--------- | :---------------------------------------- |
| id           | String  |            | element ID                                |
| placeholder  | String  |            | placeholder text                          |
| disabled     | Boolean | false      | enable or disable component               |
| label        | String  | label text | label for input component                 |
| value        | String  |            | value of input component                  |
| error        | Boolean |            | set the error state on component          |
| errorMessage | String  | Required   | Message to display when there is an error |

#### List (ZelVueBulletlist) Component

| Prop Name  | Type  | Default | Description                                                                                                      |
| ---------- | :---- | :------ | :--------------------------------------------------------------------------------------------------------------- |
| dataSource | Array |         | An array of objects containing items to use as bullet list eg:` [{id:1,text: 'bullet1'},{id:1, text:'bullet2'}]` |

#### List (ZelVueAttributeListItem) Component

| Prop Name  | Type  | Default | Description                                                                                                                                      |
| ---------- | :---- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSource | Array |         | An array of objects containing items to use as bullet list eg:` [{id:1,text: 'bullet1', label:'label1'},{id:1, text:'bullet2', label:'label2'}]` |

#### Notification (ZelVueNotification) Component

| Prop Name        | Type                | Default | Description                                                            |
| ---------------- | :------------------ | :------ | :--------------------------------------------------------------------- |
| variant          | String              | info    | Indicates the type of notification eg (info, warning, danger, success) |
| message          | String **required** |         | Message to display on notifcation component                            |
| autoHideDuration | Number              | 600     | duration to show the notification component                            |
| onClose          | Function            |         | callback executed when close is clicked                                |

#### NumberInput (ZelVueNumberInput) Component

| Prop Name  | Type   | Default | Description                            |
| ---------- | :----- | :------ | :------------------------------------- |
| plustitle  | String |         | The text shown on the plust icon       |
| minustitle | String |         | The text shown on the minus icon       |
| max        | Number |         | Maximum number for the input component |
| min        | Number |         | Minimum number for the input component |
| step       | Number | 1       | Increment per step                     |
| value      | Number | 0       | value of the input element             |

#### RadioButton (ZelVueRadioButton) Component

| Prop Name     | Type                | Default | Description                     |
| ------------- | :------------------ | :------ | :------------------------------ |
| name          | String              |         | name of radio component         |
| classNameProp | String              |         | custom class name               |
| label         | String              |         | label for the radio             |
| id            | String              |         | element id of radio component   |
| value         | String              |         | value of radio component        |
| required      | Boolean             | false   | required attribute of component |
| checked       | Boolean             | false   | check state of component        |
| label         | String **required** |         | label of radio compoonent       |

#### Search (ZelVueSearchInput) Component

| Prop Name   | Type   | Default         | Description                    |
| ----------- | :----- | :-------------- | :----------------------------- |
| className   | String |                 | custom class name              |
| label       | String |                 | label for the search           |
| id          | String | searchbar       | element id of search component |
| titlelabel  | String | zepicons-search | search input label             |
| placeholder | String | search          | Placeholder for search         |
| dataSource  | Array  |                 | Array or Array of Objects      |
| value       | String |                 | value of search input          |

#### Select (ZelVueSelect) Component

| Prop Name   | Type                | Default    | Description               |
| ----------- | :------------------ | :--------- | :------------------------ |
| label       | String **required** |            | label for the select      |
| placeholder | String **required** | Select One | Placeholder for select    |
| dataSource  | Array **required**  | [ ]        | Array or Array of Objects |
| value       | String              |            | value of select input     |

#### Table (ZelVueTable) Component

| Prop Name               | Type                | Default | Description                                       |
| ----------------------- | :------------------ | :------ | :------------------------------------------------ |
| className               | String              |         | class name for table                              |
| titleHeaderClassName    | String              |         | class name for table title header                 |
| subtitleHeaderClassName | String              |         | class name for sub-title header                   |
| tableBodyClassName      | String              |         | class name for table body                         |
| tableHeaderClassName    | String              |         | class name for table header                       |
| title                   | String **required** |         | title for table                                   |
| subtitle                | String              |         | sub-tile for table                                |
| tableHeaderData         | Array               | []      | Array of object containing table header text/data |
| tableBodyData           | Array               | []      | Array of object containing table body text/data   |
| tableFooterData         | Array               | []      | Array of object containing table footer text/data |

#### Tab (ZelVueTab) Component

<small>Expect ZelVueTabs</small>

| Prop Name | Type                | Default | Description              |
| --------- | :------------------ | :------ | :----------------------- |
| name      | String **required** |         | name of tab container    |
| selected  | Boolean             | false   | select state of tab item |

#### Tabs (ZelVueTabs) Component

<small>You are required to nest a ZelVueTabs inside a ZelVueTab</small>

| Prop Name    | Type    | Default | Description                                        |
| ------------ | :------ | :------ | :------------------------------------------------- |
| className    | String  |         | class name for tab container                       |
| tabsizeSmall | Boolean | true    | size of tab                                        |
| id           | String  |         | element id                                         |
| tabindex     | Number  |         | tabindex for each tab                              |
| tabsItems    | Array   | []      | Array of object containing id and name of tab item |

#### Tag (ZelVueTag) Component

| Prop Name | Type                | Default        | Description        |
| --------- | :------------------ | :------------- | :----------------- |
| tagname   | String **required** |                | tag name           |
| tagtitle  | String              | zepicons-close | title of tab close |

#### Pagination (ZelVuePagination) Component

| Prop Name      | Type                | Default | Description                                                                           |
| -------------- | :------------------ | :------ | :------------------------------------------------------------------------------------ |
| className      | String **required** |         | class name for pagination component                                                   |
| visiblebuttons | Number **required** | 5       | number of visible button to show at a time                                            |
| perpage        | Number **required** |         | number of items per page                                                              |
| currentpage    | Number **required** |         | current page                                                                          |
| items          | Array of Objects    | []      | Array of items to paginate                                                            |
| onPagechanged  | function            |         | Callback function attached to the component when the page changed event is triggered. |

## Questions

If you have any questions, ideas or you want to discuss with Zel-element-library-vue community, use [Issues](https://github.com/zepdev/zeppelin-element-library-vue/issues) to send any issue or note to us we will be happy to pick it up.

<small>May work in other browsers but it's untested.</small>

## Credits and Thanks

- <a href="https://github.com/cabutler10" target="_blank">Alyssa</a> for the support and contribution towards the project

## License

MIT
