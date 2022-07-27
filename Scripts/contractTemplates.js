let data = [
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61eea5ae621137197653c76c_Service_CT.png",
        "category": "General",
        "name": "Service Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61eea52b15a31886cabef5d2_Non-Disclosure_AT.png",
        "category": "General",
        "name": "Non-Disclosure Agreement Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cc6953cbf49c05d7e8bfb1_Employment_CT.png",
        "category": "General",
        "name": "Employment Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61eea5544b3b62f0d4589d53_Professional_Services_CT.png",
        "category": "General",
        "name": "Proffessional Services Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cc6ca99b0bf82e64dbbfa7_Personal_CT.png",
        "category": "General",
        "name": "Personal Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cc6b7585daca5de6a8363e_Electronic_CT.png",
        "category": "General",
        "name": "Electronic Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cc690ecd0e3c1019f7a9af_Fixed_Price_CT.png",
        "category": "General",
        "name": "Fixed Price Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61eea540fd7717bc074fed98_Product_Design_CT.png",
        "category": "Design",
        "name": "Product Design Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61eea4bf90c02c2b1deb76bb_Landscape_Design_CT.png",
        "category": "Design",
        "name": "Landscape Design Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cc6bb8b3273ff06da8ccc1_Logo_Design_CT.png",
        "category": "Design",
        "name": "Logo Design Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61eea49765a97e3ccda8e8eb_Interior_Design_CT.png",
        "category": "Design",
        "name": "Interior Design Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cc6c144b268d03a904240b_Illustration_CT.png",
        "category": "Design",
        "name": "Illustration Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cc6ba5535b75455c972ef3_Freelance_CT.png",
        "category": "Freelance",
        "name": "Freelance Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61eea4d31922c23b11a3f8dc_Marketing_Agency_CT.png",
        "category": "Agency",
        "name": "Marketing Agency Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61eea46317f4ee52592fe8b9_Independent_Contractor_AT.png",
        "category": "Contractor",
        "name": "Independent Contractor Agreement Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61eea312cff0475bb9fd6aa7_Contractor_CT.png",
        "category": "Contractor",
        "name": "Contractor Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cc6c052486cd9c1d53f26e_Independent_Contract_CT.png",
        "category": "Contractor",
        "name": "Independent Contractor Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61eea3eaf6897e9941e03cc5_General_Photography_CT.png",
        "category": "Photography",
        "name": "General Photography Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cc693cfe777a3dbfe4ca70_Event_Photography_CT.png",
        "category": "Photography",
        "name": "Event Photography Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cc6f4847770130ab091b10_Photography_CT.png",
        "category": "Photography",
        "name": "Photography Contract Template"
    },
    {
        "img_url": "https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cc6dbff16cb06996b7690b_Wedding_Photography_CT.png",
        "category": "Photography",
        "name": "Wedding Photography Contract Template"
    }
];

display(data);


function display(arr) {
    document.querySelector('#templates').innerHTML="";
    arr.forEach(function (el) {
        let div = document.createElement('div');
        let img = document.createElement('img');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        img.src = el.img_url;
        h2.innerText = el.name;
        h3.innerText = "Category : - " + el.category;
        div.append(img, h2, h3);
        document.querySelector("#templates").append(div);
    });
}

function sortArr() {
    let sortCat = document.querySelector("#category").value;
    if (sortCat === "") {
        display(data);
    }
    else {
        let A = data.filter(function (el) {
            return (el.category == sortCat);
        });
        console.log(A);
        display(A);
    }

    // console.log(sortCat);
}