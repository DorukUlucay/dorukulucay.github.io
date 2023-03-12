---
title: Best Practises
---

Some practises I learned along the way. I'll explain some these later and add more. 

* Avoid repetition. Reusability is king. 

* Simple beats smart. Keep it simple.

* Make Illegal State Unrepresentabe. Best way to avoid exceptions is never letting the conditions for them to happen.

* Embrace immutability. Tranform the data instead of changing it.

* Functions must do what their name refers to and nothing else. No side effects.

* Take sometime to name stuff. Code with good naming is self documenting.

* No magic values. Use constants instead.

* Compiler is your friend. Don't ignore it's warnings.

* Refactoring should not be a separate process or task. It must be a routine. A continuous process. Always try to leave the code better than you found it.

* Core logic must have unit tests. Endpoints must have integration tests.

* Don't spend too much time optimizing in early stages. First make it work, then scale.

## Best practises for OOP

* Hide constructors. Create static factories.

* One type per file.

* Single reponsiblity object is (in my opinion) most important and most applicable one of the SOLID. Make your types highly cohesive and lowly coupled and you have a better SRO, hence cleaner and simpler code.
