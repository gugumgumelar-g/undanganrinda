// wedding-data.js - Data Utama Undangan Pernikahan
// File ini adalah sumber data permanen untuk index.html dan admin.html.
// Saat Anda mengganti data pelanggan di sini, data tersebut 100% permanen dan langsung tampil di Netlify untuk semua tamu!

const weddingData = {
    cover: {
        bgUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=80",
        archUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
        dateText: "Minggu, 31 Desember 2026"
    },
    groom: {
        name: "Romeo Montague, S.T.",
        father: "Lord Montague",
        mother: "Lady Montague",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
    },
    bride: {
        name: "Juliet Capulet, S.Ked",
        father: "Lord Capulet",
        mother: "Lady Capulet",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    },
    akad: {
        date: "Minggu, 31 Desember 2026",
        time: "Pukul 08.00 WIB - 10.00 WIB",
        location: "Masjid Agung Al-Barkah",
        address: "Jl. Veteran No. 46, Marga Jaya, Kec. Bekasi Selatan, Kota Bekasi",
        maps: "https://maps.google.com"
    },
    resepsi: {
        date: "Minggu, 31 Desember 2026",
        time: "Pukul 11.00 WIB - 14.00 WIB",
        location: "Grand Ballroom Hotel Santika",
        address: "Jl. Ahmad Yani No. 1, Ahmad Yani Center, Kota Bekasi",
        maps: "https://maps.google.com"
    },
    gallery: [
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1621245643446-59b362086c2e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
    ],
    bank1: {
        name: "BCA",
        number: "123 456 7890",
        owner: "Romeo Montague"
    },
    bank2: {
        name: "MANDIRI",
        number: "987 654 3210",
        owner: "Juliet Capulet"
    },
    music: {
        url: "",
        name: "Instrumen Default",
        autoplay: true
    }
};

// Pastikan variabel global dapat diakses
if (typeof window !== 'undefined') {
    window.weddingData = weddingData;
}
