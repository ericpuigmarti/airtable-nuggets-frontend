// Show more / less toggle
$('.actions').on('click', function(e){
		e.preventDefault();
		$(this).text( $(this).text() == "Show more" ? "Show Less" : "Show more" );
		// $(this).closest('article.post').find('.hidden-content').slideToggle()
	})

// Vue.js filters
// ---- ADDED BACK TO INDEX.HTML

// Vue.filter('snippet', function(value){
// 	return value.slice(0,100);
// });