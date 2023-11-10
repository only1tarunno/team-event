# Question and Ans

1. Question: let greeting; greetign = {}; console.log(greetign);
   Ans: C: undefined
   Explanation: Javascript is a case-sensitive language. In 1st line 'greeting' is declared as let variable but nothing is assinged. In the second line the variable is assinged but their is a spelling mistake (greeting, greetign => n letter change it's place)and that's why javascript will treat 'greeting' and 'greetign' as two different variables. The 2nd variable is not declared at all and before declaring it, we are trying to assing value. So,javascript treat the variable 'greetign' is assigned a value without being declared using let or var, which makes it a global variable. Since greetign is not declared, JavaScript doesn't throw an error, but it treats it as an undeclared variable and logs undefined when we try to console.log(greetign).

2. Question: function sum(a, b) { return a + b } sum(1, "2");
   Ans: C: "12"
   Explanation: In this function, we are passing 1 as the value of 'a' which type is number and "2" as the value of 'b' which type is a string. JavaScript is a dynamically typed language, so it will attempt to perform type coercion to make this operation work. In this case, JavaScript will convert the number 1 to a string and then concatenate the two strings, resulting in the string "12". In simple language javascript give more priority to string than number.In reality a number and a string can't be plus and made one value. So, in this case javascript convert the typeof '1' from number to string and concatenate it with '2' and resulting in the string '12'. Actually this function will not plus the two values because one is string and other one is number rather it will concatenate converting the number into sting.

3. Question: const food = ["🍕", "🍫", "🥑", "🍔"]; const info = { favoriteFood: food[0] }; info.favoriteFood = "🍝"; console.log(food);
   Ans: A: ['🍕', '🍫', '🥑', '🍔']
   Explanation: In the food array the 1st item is "🍕". In the info object favoriteFood is a property which value is food[0] that's means (favoriteFood: "🍕"). Again In the info object favoriteFood property's value is assinged "🍝" that's means (favoriteFood: "🍝" ) We are consoling the food array not the info object. In this code the info object favouriteFood property is changed it's value not the food array. So the array will be the same as before and console ["🍕", "🍫", "🥑", "🍔"]

4. Question: function sayHi(name) {return `Hi there, ${name}`;}console.log(sayHi());
   Ans: B: Hi there, undefined
   Explanation: In the "sayHi" function, it take a parameter name and returns a string. In the console.log the fuction is called without an argument for the name parameter.That's why the name parameter remains undefined, and we get a string with "Hi there, undefined".

5. Question: let count = 0; const nums = [0, 1, 2, 3]; nums.forEach((num) => { if (num) count += 1; }); console.log(count);
   Ans: C: 3
   Explanation: In this code we run a foreach loop on an array. The code iterates over the nums array using the forEach method and increments the count variable if the current element 'num' is truthy. But in the array the 1st element is '0'. We know that '0' is a falsy value. So when '0' becomes the value of num it return false and the count variable not increase. beacuse If num is truthy, it increments count by 1. In the array there are 3 truthy values. so the final result is 3
