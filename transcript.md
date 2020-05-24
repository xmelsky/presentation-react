## Slide 1

> - Hello and welcome! I am more than happy to see all of you here
 on my presentation about React.js core principles for beginners.
> - It's pleasure to be a part of such great developers community. And today I want to share with you three core principels which you should know before you start learning React.
> - But before we'll get started I'd like to introduce myself;

## Slide 2

> - I am a front-end developer at wgwc company in Poland with 1+ year experience. You can find me on  this github account or on LinkedIn. I am a coding passionate, React and Typescript enthusiast, meetups attendee and somtimes a public speaker. Most of the time I create web applications but also record video tutorials.
> - And today we will about React.js but we won't dive into handling events, conditional rendering or lifecycle methods. Instead we will stop at most in my opinion important topics which is essensial for proper use of this library.

## Slide 3

> - Before we will start dig into technical aspects of React I'd like to ask you - what does this code do?
> - As you can see this is a contructor function named Framework but when it being inwoked it brings a Framework instance, but as a property it has library with a string React.js as its value.
> - Obviously it's a methafor which shows you that this powerful and dynamic library can stand alogside with real frameworks like Angular, Vue or Ember for example. Even if on official React website they called React as a JavaScript library for building User Interfaces.

## Slide 4

> - Another statement you can discover  - that React is a flexible and modern library.
> - It means that React:
> - combines the speed of JavaScript and uses a new way of rendering webpages.
> - also it makes manipulation with DOM highly dynamic and allows fast response to user interaction
> -  and finally React uses downward data binding to ensure that changes of child structures dont affect their parents.

## Slide 5

> - Additionally we need to mention that React.js is a view layer of an MVC application. And here you can clearly see why even facebook developers don't call React a framework. But design patterns and applied by development team make this library very popular amongst developers. Today over 100.000 start on github repository. And yes, it's an opensource library. How cool is that?

## Slide 6

> - Besides React has a huge community, a lot of useful features. One of them is ReactDevTool - a powerful browser extention which makes your life substantially better because it helps you explore the structure of your renderend components in browser.

## Slide 7

Okay, with this all being said let's take a look at React syntax called JSX - which stands for JavaScript eXtended.
With JSX we can write javascript code which looks like HTML but actually isn't.
Let's keep an eye on this code. For some of you it might look unusual and a bit strange but be patient, we will write some code in a while. For now I also want to mention that JSX is just a syntactic sugar for native React.createElement method.
And here is the same line of code but without JSX. So you shoud know that under the hood JSX compiles to this noJSX syntax.

## Slide 8

Okay, now we a ready to uncover our first react principle - REUSABLE COMPONENTS

It's the main and most important feature in React.js.
Almost everything in React consists of components, which can be a class components or a simple (or functional) components.

Let's recap the code we've seen on previous slide. It's technically nothing wrong with this code. Except... this is not reusable component of our future application. And based on this code the React component will look like this.

It's still simple React component but now it's a reusable one.

## Slide 9

Let's get some practice and write some code with this component. THere is an interactive slide of my presentation where we can work with react application.

We don't use React variable in our code but React compiler does. Let's see what will happen if we just comment this code. See? Compiler throws an error - React doesn't in scope. So this is another caveat you shoud remember.

## Slide 10

Okay. now we have wrote your first reusable component. And we a ready to go further. Another core principle of React - is stateles and statefull components.

## Slide 11

There is one more type of components - I call them stateless components on steroids. They use HOOKS. And hooks is the main core feature in react since last major update of the library. You shoud check Dan's Abramov presentation about hooks on ReactConf.

## Slide 12

And finally today's last React core principle we will talk about is - Components Composition.

## Slide 13

Here you can see components composition in use.
But let's try components composition in more convinient way instead of boring slides. Let's do some code