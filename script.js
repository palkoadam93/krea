const o = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.style.opacity = 1;
              e.target.style.transform = "translateY(0)";
            }
          }),
        { threshold: 0.08 },
      );
      document.querySelectorAll(".card,.step,.feature").forEach((e) => {
        e.style.opacity = 0;
        e.style.transform = "translateY(18px)";
        e.style.transition = "opacity .7s ease,transform .7s ease";
        o.observe(e);
      });