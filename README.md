# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./dist/assets/images/screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

It's my first time using the svg tag on my solutions on Frontend Mentor, I used it by copying the code of the SVG file when I opened it via VS Code. It's also my first time creating a Javascript project from the scratch. I use some of the JS codes below. 

I have a question in my mind, is it impossible to use the const one = document.getElementByClassNames('one'), because the one I used is const cardSubmit = document.querySelector('.card__submit');

To see how you can add code snippets, see below:

```html
<svg width="17" 
              height="16" 
              xmlns="http://www.w3.org/2000/svg">
              <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" 
              fill="#FC7614"/>
</svg>
```
```css
:root {
    --orange: hsl(25, 97%, 53%);
    --gray: hsl(0, 0%, 100%);
    --dark-gray: hsl(216, 12%, 54%);
    --dark-blue: hsl(213, 19%, 18%);
    --very-dark-blue: hsl(216, 12%, 8%);

    --transition: all ease 600ms;
}
```
```js
one.classList.toggle('card__scale-item--selected');
one.classList.remove('card__scale-item--selected');

const cardSubmit = document.querySelector('.card__submit');


```

### Continued development

On my next projects, I will create projects on Frontend Mentor that utilizes Javascript. I will consider to be an amateur on Javascript DOM Manipulation. 

### Useful resources

- [var, let, const](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/) - This help for choosing the appropriate variable on my functions. Although I still dont have a concrete idea on what to use, it helped somehow


## Author

- Github - [loifloro](https://github.com/loifloro/)
- Frontend Mentor - [@loifloro](https://www.frontendmentor.io/profile/loifloro)
- Twitter - [@loisfloro](https://www.twitter.com/yourusername)

## Acknowledgments

Thank you Frontend Mentor for having projects that helps beginner to really enhance their knowledge. 

