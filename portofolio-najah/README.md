# Portofolio Sederhana - Najah

Portofolio web modern, responsif, dan ringan yang siap digunakan untuk latihan deploy ke [Vercel](https://vercel.com/).

## 📁 Struktur Folder
```text
portofolio-najah/
├── index.html   # Struktur halaman utama (Bisa dibuka langsung di browser)
├── style.css    # Gaya tampilan modern (Dark mode + gradien + responsif HP)
├── script.js    # Interaktivitas (Menu HP, scroll aktif, formulir pesan)
└── README.md    # Panduan cara deploy ke Vercel
```

---

## 🚀 Cara Melihat Portofolio di Komputer (Lokal)
Cukup klik ganda (double-click) file `index.html`, halaman portofolio akan langsung terbuka di browser kamu (Chrome/Edge/Firefox).

---

## 🌐 2 Cara Mudah Deploy ke Vercel

### Cara 1: Lewat Dashboard Vercel (Paling Mudah & Populer via GitHub)
1. **Push ke GitHub**:
   - Buat repositori baru di GitHub (misal: `portofolio-najah`).
   - Upload file `index.html`, `style.css`, dan `script.js` ke repositori tersebut.
2. **Buka Vercel**:
   - Kunjungi [vercel.com](https://vercel.com/) dan login (bisa login dengan akun GitHub kamu).
   - Klik tombol **"Add New..."** -> **"Project"**.
   - Pilih repositori `portofolio-najah` dari GitHub kamu.
   - Pada kolom **Framework Preset**, biarkan **"Other"** (karena HTML/CSS/JS statis).
   - Klik **"Deploy"**.
   - Dalam hitungan detik, websitemu akan aktif dengan link publik gratis, misalnya `portofolio-najah.vercel.app`!

---

### Cara 2: Lewat Terminal (Vercel CLI)
Jika kamu ingin deploy langsung dari terminal / command prompt:
1. Buka folder ini di Terminal / PowerShell:
   ```powershell
   cd "c:\Users\MG GAMING PRO.DESKTOP-3QJQCSQ\Documents\portofolio-najah"
   ```
2. Jalankan perintah Vercel:
   ```bash
   npx vercel
   ```
3. Ikuti instruksi login di browser dan tekan `Enter` pada setiap pertanyaan default.
4. Website kamu akan langsung online!

---

## ✏️ Cara Mengubah Data Pribadi
Buka file `index.html` dengan teks editor:
- Cari teks `Najah` untuk mengganti nama atau gelar.
- Cari bagian `hero-subtitle` dan `Tentang Saya` untuk mengubah deskripsi diri.
- Cari bagian `Mari Berdiskusi` untuk mengisi nomor WhatsApp dan email aslimu.

