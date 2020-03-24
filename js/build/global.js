/**
 * AB_cards
 * version: 1.0.0
 */

function cardListNavigation(list) {
	var cardNavigationButtonPrevious = document.getElementById('card-navigation-button-previous');
	var cardNavigationButtonNext = document.getElementById('card-navigation-button-next');

	cardNavigationButtonPrevious.onmousedown = function () {
	  document.getElementById(list).scrollLeft -= 125;
	};

	cardNavigationButtonNext.onmousedown = function () {
	  document.getElementById(list).scrollLeft += 125;
	};
}