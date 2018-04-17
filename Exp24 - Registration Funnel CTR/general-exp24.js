window.showShare = function() {
    $(document).on('click', '.new-icons a.mck-share-icon.social-contact', function(e){
        var shareContainer = document.querySelector('.share-container');
        
        e.preventDefault();
        e.stopPropagation();

        shareContainer.classList.toggle('hidden');
        scrollShare = document.documentElement.scrollTop;
        return false;
    });
};