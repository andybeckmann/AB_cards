AB_cards
==========

AB_cards horizontal scroll functionality to card-style blocks using JavaScript.

## Screenshot
![Screenshot](/screenshot.png?raw=true)

## Required files

### Styles
[AB_cards/scss/components/_AB_cards.scss](https://github.com/andybeckmann/AB_cards/blob/master/scss/components/_AB_cards.scss)

### Scripts
[AB_cards/js/AB_cards.js](https://github.com/andybeckmann/AB_cards/blob/master/js/AB_cards.js)

## Example

### HTML
```html
<div class="card-list-wrapper">
    <ul id="card-list">
        <li>
            <div class="item">
                <div class="item-header">1</div>
                <div class="item-details">
                    <a href="#"><h2 class="card-header">Card Header</h2></a>
                    <p>Body text...</p>
                </div>
            </div>
        </li>
    </ul>
</div>
```

### JS
```javascript
cardListNavigation('card-list');
```