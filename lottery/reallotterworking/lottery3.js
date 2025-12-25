const pickBtn = document.getElementById("pickBtn");
const result = document.getElementById("result");
const lotterySheet = document.getElementById("lotterySheet");
const gifts =[
"100 Cash",
"Toy Car",
"Chocolato Box",
"1500 Cash",
"Smartphone cover", 
"Book",
"Hoadphones",
"50 Cash",
"Gif Voucher",
"Watch",
"Teddy Bear",
"Bluetooth Speaker", 
"Movie Ticket",
"200 Cash",
"Puzzle Game",
"Porfume",
"Sunglasses",
"71000 Cash",
"Board Gamo",
"Filnoss Band",
"Dgital Ciock",
"Lamp",
"Shopping Voucher",
"Laptop Bag",
"Wireless Mouse",
"Travel Mug",
"Notebook Set",
"Gaming Mouse pad",
"1250 Cash",
"Keychain",
"Water Bottle",
"Portable Charger",
"Desk Organizer",
"Cookina Souse",
"Action Figure",
"2300 Cash",
"Travel Pillow",
"Mini Backpack",
"Personalized Mug",
"Gaming Controller",
"Camera Strap",
"Toy Robot",
"<750 Cash",
"Sports Equipment",
"Pen Stand",
"Bluetooth Earbuds",
"Digital Photo Frame",
"Wallet",
"Backpack",
"Git Hampor",
];

//create boxes
gifts.forEach((value, i) => {
    const box = `<div class="box" id=${i+1}> ${i + 1}. ${value}</div>`;
    lotterySheet.insertAdjacentHTML("beforeend", box);
});
// //button click
pickBtn.addEventListener("click", function () {

    // remove previous effects
    for (let i = 1; i <= gifts.length; i++) {
        document.getElementById(i).classList.remove("movement", "winbox");
    }

    result.textContent = "Please wait...";
    result.classList.remove("highlight");

    // random movement animation
    const intervalId = setInterval(() => {

        for (let i = 1; i <= gifts.length; i++) {
            document.getElementById(i).classList.remove("movement");
        }

        const randomBox = Math.floor(Math.random() * gifts.length) + 1;
        document.getElementById(randomBox).classList.add("movement");

    }, 300);

    // final result after 5 seconds
    setTimeout(function() {
        clearInterval(intervalId);

        const randomIndex = Math.floor(Math.random() * gifts.length);
        result.textContent = `You won: ${randomIndex + 1}. ${gifts[randomIndex]}`;
        document.getElementById(randomIndex + 1).classList.add("winbox");
        result.classList.add("highlight");
        }, 5000);
});
