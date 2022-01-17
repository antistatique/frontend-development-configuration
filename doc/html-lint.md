# Linting HTML/Twig

In this configuration, we are not really talking about linting, but more about formatting. To ensure a common and homogeneous quality of our HTML/Twig files, we are using Prettier to (re)format our code and to take a look on our staged files before committing.

In order to simplify your life, make sure that your IDE is properly configured to handle Prettier. Otherwise, you can also run the **fix** command with `yarn fix:html`.

We also recommend that you install something like [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind) to automatically set the correct Tailwind classes order in your HTML/Twig files. 

## Troubleshoot

To avoid any trouble, be sure to comply with the following recommendations

- no `{% if %}` in attributes or between `<` and `>`, prefer `set`, `attr`, `?:`, `??`, `attributes.setAttribute()`, etc
- no `{% for %}` in attributes or between `<` and `>`, prefer `set` and `for`
- => no `{% %}` in attributes or between `<` and `>` in general, only `{{ }}`

- avoid condition wrapped tag opening/closing, f.ex `{% if true %}</div>{% endif %}`
- avoid special character, f.ex. `1e+6` to `1000000`
- ignore Drupal `html.html.twig` file because of problematic unclosed `<xyz-placeholder>` tags
- don't use 
  ```
      _          _   _     _        _   _
    / \   _ __ | |_(_)___| |_ __ _| |_(_) __ _ _   _  ___
    / _ \ | '_ \| __| / __| __/ _` | __| |/ _` | | | |/ _ \
  / ___ \| | | | |_| \__ \ || (_| | |_| | (_| | |_| |  __/
  /_/   \_\_| |_|\__|_|___/\__\__,_|\__|_|\__, |\__,_|\___|
                                            |_|
  ```

Please contribute to this list if you see any other “interresting” cases.

⚠️ To see what's going on with you Twig Prettier lint, **READ** the error message. F.ex. `Expected ) but found symbol instead` means “you mess with a recommendation above“ or `Unexpected closing "head" tag` means what it means or `Unexpected closing "div" tag. Seems like your DOM is out of control.` means you could do better than isolate a `<div>` or a `</div>` inside a condition.
