const committeeData = {
    "General Chairs": [
        { name: "Rui Zhang, PhD", title: "General Chair", affiliation: "University of Minnesota", image: "assets/images/rui_zhang.png", email: "ruizhang@umn.edu" },
        { name: "Cui Tao, PhD", title: "General Chair", affiliation: "Mayo Clinic", image: "assets/images/cui_tao.png", email: "tao.cui@mayo.edu" }
    ],
    "Analytics Track Chairs": [
        { name: "Yi Xing, PhD", title: "Analytics Track Chair", affiliation: "Children’s Hospital of Philadelphia, USA", image: "assets/images/yi_xing.png", email: "xingyi@chop.edu" },
        { name: "Yonghui Wu, PhD", title: "Analytics Track Chair", affiliation: "University of Florida, USA", image: "assets/images/yonghui_wu.png", email: "yonghui.wu@ufl.edu" },
        { name: "Nan Liu, PhD", title: "Analytics Track Chair", affiliation: "Duke-NUS, Singapore", image: "assets/images/nan_liu.png", email: "liu.nan@duke-nus.edu.sg" }
    ],
    "Human Factors Track Chairs": [
        { name: "Jenna Marquard, PhD", title: "Human Factors Track Chair", affiliation: "University of Minnesota, USA", image: "assets/images/jenna_marquard.png", email: "marquard@umn.edu"},
        { name: "Mustafa Ozkaynak, PhD", title: "Human Factors Track Chair", affiliation: "University of Colorado, USA", image: "assets/images/mustafa_ozkaynak.png", email: "mustafa.ozkaynak@cuanschutz.edu" }
    ],
    "Systems Track Chairs": [
        { name: "Yiye Zhang, PhD", title: "Systems Track Chair", affiliation: "Weill Cornell Medicine, USA", image: "assets/images/yiye_zhang.png", email: "yiz2014@med.cornell.edu" },
        { name: "Yong Chen, PhD", title: "Systems Track Chair", affiliation: "University of Pennsylvania, USA", image: "assets/images/yong_chen.png", email: "ychen123@upenn.edu" }
    ],
    "Early Submission Chairs": [
        { name: "Xiaolei Huang, PhD", title: "Early Submission Chair", affiliation: "University of Memphis, TN, USA", image: "assets/images/xiaolei_huang.jpg", email: "xhuang7@memphis.edu" },
        { name: "Chun-Nan Hsu, PhD", title: "Early Submission Chair", affiliation: "University of California, San Diego, USA", image: "assets/images/chunnan_hsu.jpeg", email: "chhsu@ucsd.edu" }
    ],
    "Publicity Chairs": [
        { name: "Nicolas Garcelon, PhD", title: "Publicity Chair", affiliation: "Imagine Institute, Paris, France", image: "assets/images/nicolas_garcelon.png", email: "nicolas.garcelon@institutimagine.org" },
        { name: "Alexander Alekseyenko, PhD", title: "Publicity Chair", affiliation: "Medical University of South Carolina, USA", image: "assets/images/alexander_alekseyenko.png", email: "alekseye@musc.edu" },
        { name: "Aarti Sathyanarayana, PhD", title: "Publicity Chair", affiliation: "Northeastern University, USA", image: "assets/images/a_sathyanarayana.jpg", email: "a.sathyanarayana@northeastern.edu" }
    ],
    "Industry Track Chairs": [
        { name: "Xinxin Zhu, PhD", title: "Industry Track Chair", affiliation: "Boston Scientific, USA", image: "assets/images/xinxin_zhu.png", email: "katie.zhu@bsci.com" },
        { name: "Chung-Ching Zhou", title: "Industry Track Chair", affiliation: "United Health Group, USA", image: "assets/images/chung_ching_zhou.jpeg", email: "Changqingzhou@gmail.com" },
        { name: "Ikram Khan", title: "Industry Track Chair", affiliation: "Health AI Institute", image: "assets/images/ikram_khan.jpg", email: "ikram@healthai.institute"  }
    ],
    "Poster and Demonstration Chairs": [
        { name: "Kai Ding, PhD, MS, MBA", title: "Poster & Demo Chair", affiliation: "Johns Hopkins University, USA", image: "assets/images/kai_ding.png", email: "kai@jhu.edu" },
        { name: "Feng Xie, PhD", title: "Poster & Demo Chair", affiliation: "University of Minnesota, USA", image: "assets/images/feng_xie.png", email: "xie00469@umn.edu" }
    ],
    "Workshop Chairs": [
        { name: "Halil Kilicoglu, PhD", title: "Workshop Chair", affiliation: "University of Illinois, Urbana-Champaign, IL, USA", image: "assets/images/halil_kiligluco.png", email: "halil@illinois.edu" },
        { name: "Mingquan Lin, PhD", title: "Workshop Chair", affiliation: "University of Minnesota, USA", image: "assets/images/mingquan_lin.png", email: "lin01231@umn.edu" }
    ],
    "Financial Chairs": [
        { name: "Xiaoyi Chen, PhD", title: "Financial Chair", affiliation: "University of Minnesota, USA", image: "assets/images/xiaoyi_chen.jpg", email: "chen9435@umn.edu" },
        { name: "Lindsay Bork Nichols, MBA", title: "Financial Chair", affiliation: "University of Minnesota, USA", image: "assets/images/lindsay_nichols.png", email: "lindsay@umn.edu" }
    ],
    "Doctoral Consortium Chairs": [
        { name: "Jie Ding, PhD", title: "Doctoral Consortium Chair", affiliation: "University of Minnesota, USA", image: "assets/images/jie_ding.png", email: "dingj@umn.edu" },
        { name: "Dezhi Wu, PhD", title: "Doctoral Consortium Chair", affiliation: "University of South Carolina, USA", image: "assets/images/dezhi_wu.png", email: "dezhiwu@cec.sc.edu" }
    ],
    "Tutorial Chairs": [
        { name: "Chang Su, PhD", title: "Tutorial Chair", affiliation: "Weill Cornell Medicine", image: "assets/images/chang_su.png", email: "chs4001@med.cornell.edu" },
        { name: "Lichao Sun, PhD", title: "Tutorial Chair", affiliation: "Lehigh University", image: "assets/images/lichao_sun.png", email: "lis221@lehigh.edu" }
    ],
    "Women in Healthcare Informatics Chairs": [
        { name: "Robin Austin, PhD", title: "Women in HI Event Chair", affiliation: "University of Minnesota, USA", image: "assets/images/robin_austin.png", email: "quis0026@umn.edu" },
        { name: "Megan Salwei, PhD", title: "Women in HI Event Chair", affiliation: "Vanderbilt University, USA", image: "assets/images/megan_salwei.png", email: "megan.salwei@vumc.org" }
    ],
    "Publication Chairs": [
        { name: "Ming Huang, PhD", title: "Publication Chair", affiliation: "University of Texas Health Science Center at Houston, USA", image: "assets/images/ming_huang.png", email: "Ming.Huang@uth.tmc.edu" },
        { name: "Patrizia Vizza, PhD", title: "Publication Chair", affiliation: "Magna Graecia University, Italy", image: "assets/images/patrizia_vizza.jpg", email: "vizzap@unicz.it" }
    ],
    "Sponsorship Chairs": [
        { name: "Chris Tignanelli, MD, MS, MBA", title: "Sponsorship Chair", affiliation: "University of Minnesota, USA", image: "assets/images/chris_tignanelli.png", email: "ctignane@umn.edu" },
        { name: "Nansu Zhong, PhD", title: "Sponsorship Chair", affiliation: "Mayo Clinic, USA", image: "assets/images/nansu_zhong.jpg", email: "zong.nansu@mayo.edu" }
    ],
    "Local Chairs": [
        { name: "Genevieve Melton-Meaux, MD, PhD", title: "Local Chair", affiliation: "University of Minnesota, USA", image: "assets/images/genevieve_melton.png", email: "gmelton@umn.edu" },
        { name: "Ju Sun, PhD", title: "Local Chair", affiliation: "University of Minnesota, USA", image: "assets/images/ju_sun.png", email: "jusun@umn.edu" }
    ],
    "Web Chair": [
        { name: "Yu Hou, PhD", title: "Web Chair", affiliation: "University of Minnesota, USA", image: "assets/images/yu_hou.png", email: "hou00127@umn.edu" }
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
        // card.appendChild(role);
        card.appendChild(aff);

        if (member.email) {
            const email = document.createElement('p');
            email.className = 'committee-email';
            email.innerHTML = `<a href="mailto:${member.email}">${member.email}</a>`;
            card.appendChild(email);
        }

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
