var cake = [
    {   status : 1,
        name : "Bánh Cracker AFC kinh đô vị phô mai",
        price : 29000,
        img :"https://bizweb.dktcdn.net/thumb/large/100/366/378/products/9-2ae7523d-fdb0-4caf-bc36-12c51b43f1fc.png?v=1568946112757"
    },
    {   status : 1,
        id : 1,
        name : "Hộp 10 gói bánh kinh đô Oreo vị Chocolate",
        price : 54000,
        img :"https://bizweb.dktcdn.net/thumb/large/100/366/378/products/10-2854416b-a234-4c35-9a87-4ae84d475cf4.png?v=1568944833700"
    },
    {   status : 1,
        id : 1,
        name : "Hộp 10 gói bánh kinh đô Oreo vị Chocolate",
        price : 54000,
        img :"https://bizweb.dktcdn.net/thumb/large/100/366/378/products/10-2854416b-a234-4c35-9a87-4ae84d475cf4.png?v=1568944833700"
    },
    {   status : 1,
        id : 1,
        name : "Hộp 10 gói bánh kinh đô Oreo vị Chocolate",
        price : 54000,
        img :"https://bizweb.dktcdn.net/thumb/large/100/366/378/products/10-2854416b-a234-4c35-9a87-4ae84d475cf4.png?v=1568944833700"
    },
    {   status : 1,
        id : 1,
        name : "Hộp 10 gói bánh kinh đô Oreo vị Chocolate",
        price : 54000,
        img :"https://bizweb.dktcdn.net/thumb/large/100/366/378/products/9-2ae7523d-fdb0-4caf-bc36-12c51b43f1fc.png?v=1568946112757"
    },
    {   status : 1,
        id : 1,
        name : "Hộp 10 gói bánh kinh đô Oreo vị Chocolate",
        price : 54000,
        img :"https://bizweb.dktcdn.net/thumb/large/100/366/378/products/10-2854416b-a234-4c35-9a87-4ae84d475cf4.png?v=1568944833700"
    },
    {   status : 2,
        id : 2,
        name : "Bánh trứng Tik-Tok sầu riêng",
        price : 23000,
        img :"https://bizweb.dktcdn.net/thumb/large/100/366/378/products/12-305c5dfc-8a9a-4fe5-ba33-c4b04e154a8c.png?v=1568944752707"
    },
    {   status : 2,
        id : 2,
        name : "Bánh bơ trứng Richy",
        price : 29800,
        img :"https://bizweb.dktcdn.net/thumb/large/100/366/378/products/6.png?v=1568944235997"
    }
];
function listCake() {
    
    for(var i=0;i<cake.length;i++){
        if(cake[i].status == 1){
            var demo='<div class="col-2">';
            demo +='<div class="card-group">';
            demo +='<div class="card">';
            demo += '<img src="'+ cake[i].img+'" class="card-i  mg-top" >';   
            demo += '<div class="card-body">';
            demo += '<h6 class="card-title">'+cake[i].name+'</h6>';
            demo += '<p class="card-text text-center">'+cake[i].price +'</p>';
            demo +='</div>';
            demo +='</div>';
            demo +='</div>';
            demo +='</div>';
            console.log(demo);
            document.getElementById('spbc').innerHTML+=demo;
        }else if(cake[i].status == 2){
            var demo='<div class="col-2">';
            demo +='<div class="card-group">';
            demo +='<div class="card">';
            demo += '<img src="'+ cake[i].img+'" class="card-i  mg-top" >';   
            demo += '<div class="card-body">';
            demo += '<h6 class="card-title">'+cake[i].name+'</h6>';
            demo += '<p class="card-text text-center">'+cake[i].price +'</p>';
            demo +='</div>';
            demo +='</div>';
            demo +='</div>';
            demo +='</div>';
            console.log(demo);
            document.getElementById('spnb').innerHTML+=demo;
        }
    }
     
    }

