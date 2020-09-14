export default {
  inserted: (el) => {
    function loadImage() {
      const imageElement = Array.from(el.children).find(
        (el) => el.nodeName === "IMG"
      );
      if (imageElement) {
        imageElement.addEventListener("load", () => {
          imageElement.classList.add("nx_animation-fade_in");
          imageElement.classList.remove("nx_animation-faded");
        });
        imageElement.src = imageElement.dataset.url;
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: "0",
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }

    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      loadImage();
    }
  },
};
