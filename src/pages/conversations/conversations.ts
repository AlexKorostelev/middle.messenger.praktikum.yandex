(function scrollToLastMessage() {
  setTimeout(() => {
    // eslint-disable-next-line no-undef
    const collection = document.getElementsByClassName("messages-container");
    if (collection.length) {
      collection[0].scrollTo({
        top: collection[0].scrollHeight,
        behavior: 'smooth',
      });
    }
  }, 500);
}());
