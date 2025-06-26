const blogs = [
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img-2.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page 1-img-3.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page 1-img-4.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page 1-img-5.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page 1-img-6.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/paage 1-img-7.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },

    {
            image: `assests-2/page 1-img-6.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page 1-img-3.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    },
    {
            image: `assests-2/page1-img1.png`,
            button: `Saleforce implementation`,
            description: `Step-by-Step Guide to Hard Bounce Auto Suppression in `,
            profile:"assests-2/hero-pf-img.svg",
    }

]
   const blogsPerPage =9;
    let currentPage = 1;
    
    function displayBlogs(page) {
        const start = (page - 1) * blogsPerPage;
        const end = start + blogsPerPage;
        const paginatedBlogs = blogs.slice(start, end);
        
        document.getElementById("blog-container").innerHTML = paginatedBlogs.map(blog => `
            <div class="col-md-4">
        <div class="blog-outer">
                <div class="blog-card">
                    <img src="${blog.image}" class="card-img-top pb-4" alt="Blog Image">
                    <div class="cardbody">
                        <button class="blog-btn">${blog.button}</button>

                       <p class="card-text pt-2">${blog.description}</p>
                     <div class="d-flex profile pt-2">
                     <img src="${blog.profile}" alt="Profile Image" class="me-2">
                      <p class="mb-0 me-2 page-text">Lorem Ipsum</p>
                       <p class="mb-0 px-3 fw-*300 page-text text-secondary">5 mins</p>
                    </div>  
                        </div>
                </div>
             </div>   
            </div>
        `).join("");
        document.getElementById("blog-container").scrollIntoView({ behavior: "smooth", block: "start" });


    }

    function setupPagination() {
        const totalPages = Math.ceil(blogs.length / blogsPerPage);
        const paginationContainer = document.getElementById("pagination");
        paginationContainer.innerHTML = "";
        
        for (let i = 1; i <= totalPages; i++) {
                const li = document.createElement("li");
                li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        
                const a = document.createElement("a");
        a.className = "page-link";
        a.textContent = i;
        a.style.cursor = "pointer";
        a.onclick = (event) => changePage(event, i);

        li.appendChild(a);
        paginationContainer.appendChild(li);
        }
    }

    function changePage(event,page) {
       if (event) event.preventDefault();
        currentPage = page;
        displayBlogs(page);
        setupPagination();
    }

   displayBlogs(currentPage);
    setupPagination();