## Automated and Manual tests for Vertrical technical test

This repository is made with cypress in javascript.
All the web testing is made with Page Object pattern and its pages is located at `pages` folder.

Inside the e2e folder, we have also, the api testing, located in `api` folder, where, the schema was validated using [Chai Json Schema](https://www.chaijs.com/plugins/chai-json-schema/)

Last but also important, all manual test cases are inside the `Vertrical Test Cases_Qstore` pdf file.

---

## How to run the tests:

Clone this repository using `git clone` or download the project, it is up to you!

You also need to download or update node [node](https://nodejs.org/en/download) to use cypress

Install cypress:
`npm install cypress`

After installing cypress, you can run the tests with:
`npm run test` and `npx cypress run` if you have npx installed, you can use the second command to run [npx](https://www.npmjs.com/package/npx)
