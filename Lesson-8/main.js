$(document).ready(function() {
	function toggleMenu() {
		$('.menu-toggle').toggleClass('menu-toggle_active');
		$('.header-top__mobile,.header-top__mobile-shadow').toggleClass('active');
	}

	$('.menu-toggle,.header-top__mobile-shadow').click(function() { toggleMenu() });

	function loadUser() {
        var nextContent = $('.main-section__content');

		$.ajax({
			url: 'https://randomuser.me/api/?results=3',
			dataType: 'json',
			success: function (data) {
				if (data.results.length) {
					for (var i = 0; i < data.results.length; i++) {
						nextContent
						.append('<div class=\'main-section__content-item\'>' +
							'<div class=\'main-section__content-left\'>' +
							'<img alt=' + data.results[i].login.username + ' src=' +
							data.results[i].picture.large +
							'></div>' +
							'<div class=\'main-section__content-right\'>' +
							'<div class=\'main-section__content-info\'>' +
							'<div class=\'main-section__content-author\'>' + 
							data.results[i].name.first + 
							'</div>' +
							'<div class=\'main-section__content-status\'>Member</div>' +
							'<div class=\'main-section__content-infoblock\'>' +
							'<div class=\'main-section__content-comment\'>' +
							parseInt(Math.random() * (100 - 1) + 1) +
							'</div> ' +
							'<div class=\'main-section__content-time\'>20m</div></div></div>' +
							'<div class=\'main-section__content-heading\'><a href=\'#\'>' + 
							data.results[i].location.city + 
							'</a></div>' +
							'<div class=\'main-section__content-text\'>Suspendisse potenti. Duis imperdiet ex non leo condimentum efficitur. Sed rhoncus eleifend lacus sit amet faucibus. Nunc semper nisl a dolor pretium dapibus quis quis lacus. Nulla faucibus viverra laoreet. Fusce in scelerisque magna. Duis porta erat vitae lectus lacinia tempus.</div>' +
							'<div class=\'main-section__content-tag\'>' +
							'<a href=\'#\'>tag1</a>,<a href=\'#\'>tag2</a>,<a href=\'#\'>tag3</a></div></div>');
					}
				}
			}
		});
	}

	$('.main-section__pagination-button.next').click(function(e) { e.preventDefault(); loadUser() });

})