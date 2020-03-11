let categorySelection = function() {
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
                    
                });
                
            }
function k() {
    console.log('test');
}