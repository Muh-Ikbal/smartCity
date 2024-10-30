import Image from "next/image";

const layanan = [
    {
        title: "Infrastruktur Cerdas",
        image: "/image/layanan1.png",
        id: "infrastruktur",
        content: [
            {
                title: "Sistem Transportasi",
                deskripsi:
                    "Menyediakan jaringan transportasi yang efisien dan terintegrasi, termasuk sistem manajemen lalu lintas untuk mengurangi kemacetan dan meningkatkan keselamatan.",
            },
            {
                title: "Lampu Jalan Pintar",
                deskripsi:
                    "Lampu jalan dengan sensor otomatis yang dapat menyesuaikan pencahayaan berdasarkan kondisi lingkungan, sehingga menghemat energi dan meningkatkan keamanan jalan.",
            },
            {
                title: "Pengelolaan Limbah",
                deskripsi:
                    "Sistem pengelolaan limbah terpadu yang menggunakan teknologi untuk mendeteksi, mengumpulkan, dan mendaur ulang limbah secara efektif.",
            },
        ],
    },
    {
        title: "Keamanan Publik",
        id: "keamanan",
        image: "/image/layanan2.png",
        content: [
            {
                title: "Pengawasan Kamera",
                deskripsi:
                    "Penggunaan kamera CCTV di tempat strategis untuk memantau aktivitas, meningkatkan keamanan publik, dan membantu dalam penanganan situasi darurat.",
            },
            {
                title: "Sistem Keamanan Darurat",
                deskripsi:
                    "Sistem yang memungkinkan warga melaporkan kejadian darurat dengan cepat melalui aplikasi atau perangkat khusus yang terhubung langsung dengan pihak berwenang.",
            },
        ],
    },
    {
        title: "Energi Terbarukan",
        id: "energi",
        image: "/image/layanan3.png",
        content: [
            {
                title: "Panel Surya",
                deskripsi:
                    "Instalasi panel surya untuk menghasilkan energi listrik ramah lingkungan, mengurangi ketergantungan pada bahan bakar fosil, dan mengurangi emisi karbon.",
            },
            {
                title: "Pengelolaan Energi",
                deskripsi:
                    "Sistem pengelolaan energi yang cerdas, memonitor konsumsi energi, dan mengoptimalkan penggunaan energi terbarukan di seluruh kota.",
            },
        ],
    },
    {
        title: "Pelayanan Publik",
        id: "pelayanan",
        image: "/image/layanan4.png",
        content: [
            {
                title: "Pusat Informasi",
                deskripsi:
                    "Memberikan akses informasi publik yang mudah dijangkau oleh warga, termasuk informasi terkait layanan pemerintah, acara, dan kebijakan baru.",
            },
            {
                title: "Layanan Digital",
                deskripsi:
                    "Penyediaan layanan publik secara digital seperti pembayaran pajak, pengurusan izin, dan layanan administrasi lainnya melalui platform online.",
            },
        ],
    },
];

export default layanan;
