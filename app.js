let dict = [
    {
        key: ["Virtual Reality","VR", "vr", "Vr", "virtual reality", "Virtual reality"],
        desc: "Kompyuter orqali yaratilgan va foydalanuvchini sun'iy muhitga botiruvchi texnologiya"
    },
    {
        key: ["Augmented Reality","AR", "ar", "Ar", "augmented reality", "Augmented reality"],
        desc: "Haqiqiy dunyoga virtual ob'ektlarni qo'shish orqali kengaytirilgan reallik."
    },
    {
        key: ["360° Video","360 gradus video", "360 gradus video", "360 Video", "360 video"],
        desc: "Real va virtual dunyoni birlashtiruvchi texnologiya."
    },
    {
        key: ["Head-Mounted Display","HDM", "Hdm", "hdm"],
        desc: "Foydalanuvchi boshiga o'rnatiladigan displey qurilmasi."
    },
    {
        key: ["Field of View","FOV", "fov", "Fov", "Field of view ", "Field of View (FOV)"],
        desc: "Foydalanuvchi boshiga o'rnatiladigan displey qurilmasi."
    },
    {
        key: ["Motion Tracking","motion tracking", "Motion tracking"],
        desc: "Foydalanuvchi boshiga o'rnatiladigan displey qurilmasi."
    },
    {
        key: ["Room-Scale VR","Room Scale VR", "room-scale vr"],
        desc: "Xonadagi harakatlarni to'liq aniqlab, VR tajribasini taqdim etuvchi tizim."
    },
]
let button = document.querySelector("#search");
button.addEventListener("click", () => {
    let inputText = document.querySelector(".search input").value;
    let desc = document.querySelector(".description");
    let searchingWord = document.querySelector("#searchingWord");

    dict.forEach(e => {
        e.key.forEach(f => {
            if (inputText === f) {
                // desc.classList.add("fadeIn");
                desc.style.transition = "0.8s ease-in";
                desc.style.opacity = "1";
                desc.innerHTML = e.desc;
                searchingWord.innerHTML = f;
            }
        })
    })


})