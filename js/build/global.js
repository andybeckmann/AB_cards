/**
 * AB_cards
 * version: 1.0.0
 */

function cardListNavigation(list) {

	'use strict';

	let cardNavigationButtonPrevious = document.getElementById('card-navigation-button-previous');
	let cardNavigationButtonNext = document.getElementById('card-navigation-button-next');

	cardNavigationButtonPrevious.onmousedown = function () {
	  document.getElementById(list).scrollLeft -= 125;
	};

	cardNavigationButtonNext.onmousedown = function () {
	  document.getElementById(list).scrollLeft += 125;
	};
}