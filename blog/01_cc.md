---
title: Clean Code Chapters 1, 2, 3, 4 Summary
---

# Clean Code Chapters 1, 2, 3, 4 Summary
* Below are my main takes from the legendary book, Clean Code by Robert Cecil Martin
* Some are my comments and some are direct quotes.

***

## Clean Code, Robert C. Martin

*Writing clean code is what you must do in order to call yourself a professional. There is no reasonable excuse for doing anything less than your best.* - Robert C. Martin

### C1: Clean Code
* Programmers must take time to write clean code. If they don't; there will be mess.
* Programmers are authors. Being understood is authors responsibility.
* Leave the code better than you found it.


### C2: Meaningful Names
* names must reveal intent. name of something must tell you why it is there.
* choosing a good name takes time but saves more.
* use searchable names. avoid magic numbers/values.
* dont use var prefixes
* use static factory methods instead of ctor overloading.
* pick one word per concept. have a lexicon for it. stay loyal to it. 
* change a name when you find a better one.

### C3: Functions
* must be small. it is best if they are around 20-30 lines.
* they must do one thing.
  * func must do exactly what it's name refers.
    * anything else than that must be extracted to new func.
      * Ward’s principle: “You know you are working on clean code when each routine turns out to be pretty much what you expected.”
* The ideal number of arguments for a function is zero (niladic). Next comes one (monadic), followed closely by two (dyadic). Three arguments (triadic) should be avoided where possible. More than three (polyadic) requires very special justification—and then shouldn’t be used anyway.
* Side effects are lies. Your function promises to do one thing, but it also does other hidden things.
  * it also complies with do one thing principle
* CQRS: Functions should either do something or answer something, but not both. Either your function should change the state of an object, or it should return some information about that object. Doing both often leads to confusion.
* Prefer Exceptions to Returning Error Codes: Returning error codes from command functions is a subtle violation of command query separation. It promotes commands being used as expressions in the predicates of if statements.
* Error Handling Is One Thing: Functions should do one thing. Error handing is one thing. Thus, a function that handles errors should do nothing else. This implies (as in the example above) that if the keyword try exists in a function, it should be the very first word in the function and that there should be nothing after the catch/finally blocks.


### C4: Comments
* “Don’t comment bad code—rewrite it.” —Brian W. Kernighan and P. J. Plaugher
* comments are, at best, a necessary evil.
* Truth can only be found in one place: the code. Only the code can truly tell you what it does. It is the only source of truly accurate information. Therefore, though comments are sometimes necessary, we will expend significant energy to minimize them.

#### Explain Yourself in Code
Which would you rather see? This:
```
// Check to see if the employee is eligible for full benefits
if ((employee.flags & HOURLY_FLAG) &&
 (employee.age > 65))
```

Or this?
```
if (employee.isEligibleForFullBenefits())
```

#### Commented-Out Code
Others who see that commented-out code won’t have the courage to delete it. They’ll think it is there for a reason and is too important to delete. 

There was a time, back in the sixties, when commenting-out code might have been useful. But we’ve had good source code control systems for a very long time now. Those systems will remember the code for us. We don’t have to comment it out any more. Just delete the code. We won’t lose it. Promise.