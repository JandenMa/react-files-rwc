- A library for react, to read files from local, or write files to local.



## Install

- ### npm: 

  ```sh
  npm install react-files-rwc --save
  ```

- ### yarn:

  ```sh
  yarn add react-files-rwc --save
  ```




## Change logs

- 1.0.0	(2019-03-19)
  - First commit
  - Beta version



## Usage

### Import

```jsx
import {FilesReader,FilesWriter} from 'react-files-rwc';
```

### How to use FileReader

- __default props__
  - fileTypes:
    - "*application/vnd.apple.numbers*"
    - "*application/vnd.apple.pages*"
    - "*application/msword*"
    - "*application/vnd.ms-excel*"
    - "*text/csv*"
    - "*text/plain*"
  - disabled: false
  - multi: false
  - Id: random number
- __required props__

  - getFiles: 
    - a function to handle the selected files from the HTML input
  - children:
    - pass in your customized element to represent your upload input
- __optional props__
  - fileTypes:
    - Can be passed as a string or an array
  - id:
    - set a `unique` element Id for the input element
    - if this is not set, a random id is generated for each input on the page.
  - disabled:
    - disable input
  - multi:
    - a `boolean` enforce single file or multiple file selection

```jsx
const getFiles = files => {
  console.log(files)
}
 
<FileReader getFiles={getFiles}>
  <button >Open File</button>
</FileReader>
```



### How to use FileWriter

- __default props__
  - extension:
    - "*txt*"
  - fileName: random string
- __required props__
  - datas: 
    - the data which you want to write into file
  - children:
    - pass in your customized element to represent your download or export button
- __optional props__
  - extension:
    - Can be passed as a string
  - fileName:
    - to rename the output file by yourself

```jsx
const datas=[{id:'1',name:'Tom'},{id:'2',name:'Jerry'}];
 
<FilesWriter datas={datas}>
  <button >Export File</button>
</FilesWriter>
```



## Reference

### [React-File-Reader](<https://www.npmjs.com/package/react-file-reader>)

### 