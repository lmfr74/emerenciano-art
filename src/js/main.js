'option explicit';

function createPage(title, prefix, n) {
    if (title) createMenuItems(title);
    if (prefix) createGaleryItems(title, prefix, n);
}

function createMenuItems(title) {
  const pageTitleElement = document.getElementById("pageTitle");
  if (pageTitleElement) {
    pageTitleElement.innerText = title;
  }

  const navBarData = [
    {
      id: "Biografia",
      href: "./Biografia.html",
    },
    {
      id: "Pinturas",
      href: "./Pinturas.html",
    },
    {
      id: "Desenhos",
      href: "./Desenhos.html",
    },
    {
      id: "Simbolos",
      href: "./simbolos.html",
    },
    {
      id: "Atelier",
      href: "./Atelier.html",
    },
    {
      id: "Contacto",
      href: "./Contacto.html",
    },
    {
      id: "Links",
      href: "./Links.html",
    },
  ];

  let html = "";
  navBarData.forEach(d => {
    d.title = d.id;
    const cls = title === d.title ? "active" : "";
    html += `<li class="nav-item"><a class="nav-link ${cls}" href="${d.href}">${d.title}</a></li>`;
  });

  const navbarItemsElement = document.getElementById("pageNavItems");
  navbarItemsElement.innerHTML = html;
}

function createGaleryItems(title, prefix, n) {
  let galeryData = [];

  for (i = 1; i <= n; i++) {
    const imageData = {
      href: `images/${title}/${prefix} (${i}).jpg`,
      alt: `${prefix} #${i}`
    };

    galeryData.push(imageData);
  }

  let html = "";
  galeryData.forEach(d => {
    html += `<div class="col d-flex align-items-center"><img class="img-fluid mx-auto" src="${d.href}" alt="${d.alt}" /></div>`;
  });
  
  const navbarItemsElement = document.getElementById("pageGalery");
  navbarItemsElement.innerHTML = html;
}