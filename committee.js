const committeeData = {
    "General Chairs": [
        { name: "Rui Zhang", title: "General Chair", affiliation: "University of Minnesota", image: "assets/images/rui_zhang.png" },
        { name: "Cui Tao", title: "General Chair", affiliation: "Mayo Clinic", image: "assets/images/cui_tao.png" }
    ],
    "Analytics Track Chairs": [
        { name: "Yonghui Wu", title: "Analytics Track Chair", affiliation: "University of Florida, USA", image: "assets/images/yonghui_wu.png" },
        { name: "Nan Liu", title: "Analytics Track Chair", affiliation: "Duke-NUS, Singapore", image: "assets/images/nan_liu.png" },
        { name: "Yi Xing", title: "Analytics Track Chair", affiliation: "Children’s Hospital of Philadelphia", image: "assets/images/yi_xing.png" }
    ],
    "Human Factors Track Chairs": [
        { name: "Jenna Marquard", title: "Human Factors Track Chair", affiliation: "University of Minnesota, USA", image: "assets/images/jenna_marquard.png" },
        { name: "Mustafa Ozkaynak", title: "Human Factors Track Chair", affiliation: "University of Colorado, USA", image: "assets/images/mustafa_ozkaynak.png" }
    ],
    "Systems Track Chairs": [
        { name: "Yiye Zhang", title: "Systems Track Chair", affiliation: "Weill Cornell Medicine, USA", image: "assets/images/yiye_zhang.png" },
        { name: "Yong Chen", title: "Systems Track Chair", affiliation: "University of Pennsylvania, USA", image: "assets/images/yong_chen.png" }
    ],
    "Early Submission Chairs": [
        { name: "Xiaolei Huang", title: "Early Submission Chair", affiliation: "University of Memphis, TN, USA", image: "assets/images/xiaolei_huang.jpg" }
    ],
    "Publicity Chairs": [
        { name: "Nicolas Garcelon", title: "Publicity Chair", affiliation: "Imagine Institute, Paris, France", image: "assets/images/nicolas_garcelon.png" },
        { name: "Alexander Alekseyenko", title: "Publicity Chair", affiliation: "Medical University of South Carolina, USA", image: "assets/images/alexander_alekseyenko.png" }
    ],
    "Industry Track Chairs": [
        { name: "Xinxin Zhu", title: "Industry Track Chair", affiliation: "Boston Scientific, USA", image: "assets/images/xinxin_zhu.png" },
        { name: "Chung-Ching Zhou", title: "Industry Track Chair", affiliation: "United Health Group, USA", image: "assets/images/chung_ching_zhou.jpeg" },
        { name: "Ikram Khan", title: "Industry Track Chair", affiliation: "Health AI Institute", image: "assets/images/ikram_khan.jpg" }
    ],
    "Poster and Demonstration Chairs": [
        { name: "Kai Ding", title: "Poster & Demo Chair", affiliation: "Johns Hopkins University, USA", image: "assets/images/kai_ding.png" },
        { name: "Feng Xie", title: "Poster & Demo Chair", affiliation: "University of Minnesota, USA", image: "assets/images/feng_xie.png" }
    ],
    "Workshop Chairs": [
        { name: "Halil Kiligluco", title: "Workshop Chair", affiliation: "University of Minnesota, USA", image: "assets/images/halil_kiligluco.png" },
        { name: "Mingquan Lin", title: "Workshop Chair", affiliation: "University of Minnesota, USA", image: "assets/images/mingquan_lin.png" }
    ],
    "Financial Chairs": [
        { name: "Xiaoyi Chen", title: "Financial Chair", affiliation: "University of Illinois-Urban Champion, USA", image: "assets/images/xiaoyi_chen.jpg" },
        { name: "Lindsay Bork Nichols", title: "Financial Chair", affiliation: "University of Minnesota, USA", image: "assets/images/lindsay_nichols.png" }
    ],
    "Doctoral Consortium Chairs": [
        { name: "Jie Ding", title: "Doctoral Consortium Chair", affiliation: "University of Minnesota, USA", image: "assets/images/jie_ding.png" },
        { name: "Dezhi Wu", title: "Doctoral Consortium Chair", affiliation: "University of South Carolina, USA", image: "assets/images/dezhi_wu.png" }
    ],
    "Tutorial Chairs": [
        { name: "Chang Su", title: "Tutorial Chair", affiliation: "Weill Cornell Medicine", image: "assets/images/chang_su.png" },
        { name: "Lichao Sun", title: "Tutorial Chair", affiliation: "Lehigh University", image: "assets/images/lichao_sun.png" }
    ],
    "Women in Healthcare Informatics Chairs": [
        { name: "Robin Austin", title: "Women in HI Event Chair", affiliation: "University of Minnesota, USA", image: "assets/images/robin_austin.png" },
        { name: "Megan Salwei", title: "Women in HI Event Chair", affiliation: "Vanderbilt University, USA", image: "assets/images/megan_salwei.png" }
    ],
    "Publication Chairs": [
        { name: "Ming Huang", title: "Publication Chair", affiliation: "University of Texas Houston, USA", image: "assets/images/ming_huang.png" }
    ],
    "Sponsorship Chairs": [
        { name: "Chris Tignanelli", title: "Sponsorship Chair", affiliation: "University of Minnesota, USA", image: "assets/images/chris_tignanelli.png" },
        { name: "Nansu Zhong", title: "Sponsorship Chair", affiliation: "Mayo Clinic, USA", image: "assets/images/nansu_zhong.jpg" }
    ],
    "Local Chairs": [
        { name: "Genevieve Melton-Meaux", title: "Local Chair", affiliation: "University of Minnesota, USA", image: "assets/images/genevieve_melton.png" },
        { name: "Ju Sun", title: "Local Chair", affiliation: "University of Minnesota, USA", image: "assets/images/ju_sun.png" }
    ],
    "Web Chair": [
        { name: "Yu Hou", title: "Web Chair", affiliation: "University of Minnesota, USA", image: "assets/images/yu_hou.png" }
    ]
};

// Rendering logic (unchanged)
const container = document.getElementById('committee-container');

Object.entries(committeeData).forEach(([group, members]) => {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'committee-group';

    const title = document.createElement('h3');
    title.textContent = group;
    groupDiv.appendChild(title);

    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container';

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'committee-card';

        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.name;

        const name = document.createElement('h4');
        name.textContent = member.name;

        const role = document.createElement('p');
        role.textContent = member.title;

        const aff = document.createElement('p');
        aff.textContent = member.affiliation;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(role);
        card.appendChild(aff);

        cardsContainer.appendChild(card);
    });

    groupDiv.appendChild(cardsContainer);
    container.appendChild(groupDiv);
});

// Show or hide the back-to-top button
window.onscroll = function () {
    const btn = document.getElementById("backToTop");
    if (!btn) return;
    btn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
        ? "block"
        : "none";
};

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}