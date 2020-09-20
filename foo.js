// indent-rule default
// - documentation https://eslint.org/docs/rules/indent#rule-details
//   "This rule enforces a consistent indentation style. The default style is 4 spaces."
// - code  https://github.com/eslint/eslint/blob/master/lib/rules/indent.js#L633
//         let indentType = "space";
//         let indentSize = 4;

// eslint-recommended configuration does not mention indent-rule
// -code https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js

// Below a code sample from section "Examples of incorrect code for this rule with the default options"
// Code sample has 2 spaces indent, while default is 4 spaces

// Lint this code should throw error then, but does not
// npx eslint foo.js

// Explicitly specifying the rule works well
// npx eslint --rule 'indent: ["error", 4]' ./foo.js does throw error
// $ 11:1 error  Expected indentation of 4 spaces but found 2  indent

let  a, b, c, e, f ;
if (a) {
  // eslint-disable-next-line no-unused-vars
  b=c;
  // eslint-disable-next-line no-inner-declarations,no-unused-vars
  function foo(d) {
    // eslint-disable-next-line no-unused-vars
    e=f;
  }
}
