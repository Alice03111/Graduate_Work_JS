k();
class AllProducts {
    constructor(containerProducts, catalogProduct) {
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProduct = catalogProduct;
        this.createProduct();
    }
    createProduct() {
        let wrapper = document.createElement("slot");
        for (let i = 0; i < this.catalogProduct.length; i++) {
            let item = this.getProductItem({
                tagName: "div",
                className: "item"
            })
            let name = this.getProductItem({
                tagName: "a",
                className: "name",
                textName: this.catalogProduct[i].name
            })
            let img = this.getProductItem({
                tagName: "img",
                className: "img",
                backgroundImg: this.catalogProduct[i].img
            })
            let description = this.getProductItem({
                tagName: "p",
                className: "description",
                textName: this.catalogProduct[i].description
            })
            let price = this.getProductItem({
                tagName: "div",
                className: "price",
                textName: `Цена: ${this.catalogProduct[i].price} BYN`
            })
            let btn = this.getProductItem({
                tagName: "button",
                className: "btn",
                textName: "Купить"
            })
            let btn2 = this.getProductItem({
                tagName: "button",
                className: "btn2",
                textName: "Подробнее"
            })

            function addTavar() {
                item.appendChild(img);
                item.appendChild(name);
                item.appendChild(description);
                item.appendChild(price);
                item.appendChild(btn);
                item.appendChild(btn2);
                wrapper.appendChild(item);
            }

            function categorySelection() {
                addTavar();
                categories.addEventListener('click', function (event) {
                    if (event.target && event.target.innerHTML == 'Комнатные цветы') {
                        item.remove();
                        if (catalogProduct[i].category == 'room') {
                            addTavar();
                        }
                    }
                   
                    if (event.target && event.target.value == 'b1') {
                        item.remove();
                        if (catalogProduct[i].room == 'vanda') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b2') {
                        item.remove();
                        if (catalogProduct[i].room == 'formi') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b3') {
                        item.remove();
                        if (catalogProduct[i].room == 'fal') {
                            addTavar();
                        }
                    }
                    
                    if (event.target && event.target.value == 'b4') {
                        item.remove();
                        if (catalogProduct[i].room == 'mini') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b5') {
                        item.remove();
                        if (catalogProduct[i].color == 'white') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b6') {
                        item.remove();
                        if (catalogProduct[i].color == 'pink') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b7') {
                        item.remove();
                        if (catalogProduct[i].size  == '60') {
                            addTavar();
                        }
                    }
                    if (event.target && event.target.value == 'b8') {
                        item.remove();
                        if (catalogProduct[i].size  == '40') {
                            addTavar();
                        }
                    }
                    //////////////////////////////////////////////////////
                    
                   
                });
                
            }
            categorySelection();

        }
        this.containerProducts.appendChild(wrapper);
    }

    getProductItem(card) {
        let element = document.createElement(card.tagName);
        if ('className' in card) {
            element.setAttribute('class', card.className);
        }
        if ('textName' in card) {
            element.innerHTML = card.textName;
        }
        if ("backgroundImg" in card) {
            element.src = card.backgroundImg;
        }
        return element;
    }
}

let allProducts = new AllProducts('.container_product', catalogProduct);

function subcategory() {
    let i = 0 ,j = 0 ,r = 0 ,f = 0;
    room.addEventListener('click', function () {
        if (i == 0) {
            block_room.style.display = "block";
            i = 1;
        } else {
            block_room.style.display = "none";
            i = 0;
        }
    });
    

}
subcategory();

function display(){
    main.addEventListener('click', function () {
        block_main.style.display = "block";
        container_catalog.style.display = "none";
    });
    catalog.addEventListener('click', function () {
        container_catalog.style.display = "block";
        block_main.style.display = "none";
    });
}
display();
