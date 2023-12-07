# Tests Handbook

Testing in **not a common practice** in the frontend world. Here is a **simple summary** to make frontend tests understandable regarding the “Antistatique Frontend Development Configuration”.

And remember, **if you want to wee those tests in action,** take a look at the **[playground](https://github.com/antistatique/frontend-development-configuration/tree/master/playground)**.

## Table of content

- [What kinds of tests?](#what-kinds-of-tests)
- [What to test?](#what-to-test)
- [When to test?](#when-to-test)
- [Unit tests](#unit-tests)
- [E2E tests](#e2e-tests)

## What kinds of tests?

Here we have two kinds of tests that makes sense to cover almost every part of your project:
- **Unit tests** : used to check the absence of a bug in your code. Usually to ensure the proper function of your methods (especially in Functionnal Programming)
- **E2E tests** : used to test the final product. It simulates the behaviour of your end users by using a scripted browser.

## What to test?

There is the simple rule:
- You want to test the **behaviour of your UI** 👉 **E2E**
- You want to test your **method** or a piece of code 👉 **Unit**

## When to test?

There is no magic rule here, but depending of the time and budget of your project, you'll have 2 choices:
- **Short** time/budget 👉 Write tests **when you fix bugs** to ensure that they won't happen again
- **Large** time/budget 👉 Write tests **at the same time** that your feature's code (TDD) It will save you a lot of time repeating the same action manually.

## Unit tests

To create a new unit test: simple create a new file in a `__tests__` sub directory with the suffix `.spec`. For example:

```plain
.
├── my-script.ts
└── __tests__
    └── my-script.spec.ts
```

Then write your test using mainly only the [Jest API](https://jestjs.io/docs/en/expect).

## E2E tests

There are two kinds of E2E tests coming with the “Antistatique Frontend Development Configuration”:
- **Global E2E** : located in `./cypress/integration`, will test the **final product**, aka your app
- **Component E2E** : will test **components independently**, inside Storybook

To create a new E2E test (always with the `.e2e` suffix):
- **Global** : add a new test file in `./cypress/integration`, for example `./cypress/integration/contact.e2e.js`
- **Component** : add a new test file (+ a story if there is not) in your component's directory, for example:
```plain
.
├── Button.tsx            👉 Component
├── Button.stories.tsx    👉 Storybook stories
└── Button.e2e.ts         👉 Cypress test using visitStorybook()
```

⚠️ **Pro tips**: If you want to ease your life, copy the [Blank component](https://github.com/antistatique/frontend-development-configuration/tree/master/playground/src/components/Blank) in your project and use `$ bun x generact` to create new components.
