## Development and Testing

To run the project locally, clone the repository and install the dependencies.

```
git clone https://github.com/amadeusdev/amadeus-node.git
cd amadeus-node
npm install
```

### Running tests

To run tests, simply run `npm test` or `npm run test:watch` to keep watching the source for changes and test accordingly.

We are trying to keep 100% coverage, so keep an eye on the `coverage` folder for an overview of the coverage.

### Building the source

To build the source, run `npm run build` or `npm run build watch` to keep watching the source for changes and build accordingly.

### Using a library locally

To use a library locally as a dependency, simply import or require the `lib/amadeus.js`.

```js
var Amadeus = require('./lib/amadeus');
```

To install your local build into a different project using NPM, first install this library globally, then link it to a new project.

```sh
cd amadeus-node
npm install
npm install -g ./
cd ../your-node-project
npm link amadeus
npm install
```

You can then simply include it as if pulling the library from NPM.

```js
var Amadeus = require('amadeus');
```

### Releasing

To release, make sure to update the version number, submit all your changes, tag the release in Git, and run `npm publish`. This will be replaced in the future by a deploy through Travis CI.

## How to contribute to the Amadeus Node Client Library

#### **Did you find a bug?**

* **Ensure the bug was not already reported** by searching on GitHub under [Issues](https://github.com/amadeusdev/amadeus-node/issues).

* If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/amadeusdev/amadeus-node/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case** demonstrating the expected behavior that is not occurring.

#### **Did you write a patch that fixes a bug?**

* Open a new GitHub pull request with the patch.

* Ensure the PR description clearly describes the problem and solution. Include the relevant issue number if applicable.

#### **Do you intend to add a new feature or change an existing one?**

* Suggest your change [in a new issue](https://github.com/amadeusdev/amadeus-node/issues/new) and start writing code.

* Make sure your new code does not break any tests and include new tests.

* With good code comes good documentation. Try to copy the existing documentation and adapt it to your needs.

* Close the issue or mark it as inactive if you decide to discontinue working on the code.

#### **Do you have questions about the source code?**

* Ask any question about how to use the library by [raising a new issue](https://github.com/amadeusdev/amadeus-node/issues/new).
