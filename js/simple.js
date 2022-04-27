if (!!window.IntersectionObserver) {
    let observer = new IntersectionObserver((divs, observer) => {
        divs.forEach(div => {
            if (div.isIntersecting) {
                div.target.classList.add("animacionEntrada")
                observer.unobserve(div.target);
            }
        });
    }, { rootMargin: "0px 0px -150px 0px" });
    document.querySelectorAll('.preAnimacion').forEach(one => { observer.observe(one) });
}
else document.querySelectorAll('.preAnimacion').forEach(one => { one.classList.remove("preAnimacion") });;
