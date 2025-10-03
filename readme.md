# 📖 Panduan Penggunaan NI PPPK FINDER

Panduan lengkap cara menggunakan aplikasi NI PPPK Finder untuk mencari NIP PPPK Anda.

---

## 📋 Daftar Isi

1. [Pengenalan](#pengenalan)
2. [Cara Akses Aplikasi](#cara-akses-aplikasi)
3. [Cara Menggunakan](#cara-menggunakan)
4. [Tips & Trik](#tips--trik)
5. [Troubleshooting](#troubleshooting)
6. [FAQ](#faq)

---

## 🎯 Pengenalan

**NI PPPK FINDER** adalah aplikasi untuk membantu Anda menemukan NIP (Nomor Induk Pegawai) PPPK dengan mudah dan cepat.

### Fitur Utama:
- ✅ Generate multiple NIP sekaligus (1-999 kombinasi)
- ✅ Filter berdasarkan email Anda
- ✅ Auto-fetch data dari server BKN
- ✅ Progress tracking real-time
- ✅ Copy link dengan mudah
- ✅ Tanpa perlu install ekstensi browser

---

## 🌐 Cara Akses Aplikasi

### Metode 1: Akses via Vercel (Online)
```
https://your-app-name.vercel.app
```
✅ Bisa diakses dari mana saja
✅ Tidak perlu install apapun

### Metode 2: Jalankan Lokal (Offline)
```bash
npm start
# Akses: http://localhost:3000
```
✅ Lebih cepat
✅ Tidak perlu internet (setelah setup)

---

## 🚀 Cara Menggunakan

### Langkah 1: Persiapan Data

Sebelum mulai, siapkan:
- **15 digit NIP dasar** (tanpa 3 digit terakhir)
- **Email lengkap Anda** (untuk filter hasil)

**Contoh:**
```
NIP Lengkap: 199312282025212001
↓
15 Digit Dasar: 199312282025212
3 Digit Terakhir: 001 (akan di-generate otomatis)
```

---

### Langkah 2: Input 15 Digit Angka Dasar

![Step 1](https://via.placeholder.com/800x200/667eea/ffffff?text=Input+15+Digit+NIP)

1. **Buka aplikasi**
2. **Cek status server** - Pastikan menunjukkan "✅ Server Online"
3. **Input 15 digit angka dasar** di field pertama
   ```
   Contoh: 199312282025212
   ```

**⚠️ Penting:**
- Harus TEPAT 15 digit
- Hanya angka (tanpa spasi atau karakter lain)
- Ini adalah NIP tanpa 3 digit terakhir

---

### Langkah 3: Input Email (Opsional tapi Disarankan)

![Step 2](https://via.placeholder.com/800x200/28a745/ffffff?text=Input+Email+Anda)

1. **Masukkan email lengkap Anda**
   ```
   Contoh: namaanda@gmail.com
   ```

**Mengapa perlu email?**
- ✅ Untuk memfilter hasil yang BENAR-BENAR milik Anda
- ✅ Aplikasi akan mencocokkan 3 karakter pertama email
- ✅ Hasil yang cocok akan di-highlight warna biru

**Contoh Pencocokan:**
```
Email Anda: johndoe@gmail.com
Email di Server: joh*****@gmail.com
Status: ✅ COCOK (3 karakter pertama sama)
```

**⚠️ Catatan:**
- Jika tidak diisi, semua hasil akan ditampilkan
- Format email harus valid (ada @ dan domain)

---

### Langkah 4: Set Range 3 Digit

![Step 3](https://via.placeholder.com/800x200/ffc107/ffffff?text=Set+Range+001-999)

1. **Pilih range pencarian:**
   - **Dari:** 1 (default)
   - **Sampai:** 999 (default)

**Contoh Penggunaan:**

#### Pencarian Cepat (Recommended):
```
Dari: 1
Sampai: 50
Total: 50 kombinasi
Waktu: ~15 detik
```

#### Pencarian Medium:
```
Dari: 1
Sampai: 200
Total: 200 kombinasi
Waktu: ~1 menit
```

#### Pencarian Lengkap:
```
Dari: 1
Sampai: 999
Total: 999 kombinasi
Waktu: ~5 menit
```

**💡 Tips:**
- Mulai dari range kecil dulu (1-50)
- Jika tidak ketemu, naikkan range
- Semakin besar range, semakin lama prosesnya

---

### Langkah 5: Generate Links

![Step 4](https://via.placeholder.com/800x200/764ba2/ffffff?text=Generate+Links)

1. **Klik tombol "🚀 Generate Links"**
2. **Tunggu sebentar**
3. **Daftar link akan muncul**

**Hasil yang ditampilkan:**
```
Total Link Ditampilkan: 50

NIP: 199312282025212001
URL: https://asndigital.bkn.go.id/api/forget-password?...
Status: Pending
[🔗 Open] [📋 Copy Link]

NIP: 199312282025212002
URL: https://asndigital.bkn.go.id/api/forget-password?...
Status: Pending
[🔗 Open] [📋 Copy Link]

... (dan seterusnya)
```

---

### Langkah 6: Fetch Semua Link

![Step 5](https://via.placeholder.com/800x200/dc3545/ffffff?text=Fetch+All+Links)

1. **Klik tombol "🌐 Fetch Semua Link"**
2. **Progress akan ditampilkan real-time:**
   ```
   Progress: 25 / 50
   (20 sukses, 5 error)
   
   [████████░░░░░░░░] 50%
   ```

3. **Tunggu hingga selesai**

**Selama proses:**
- ✅ Link akan berubah warna sesuai status
- ✅ Response JSON akan ditampilkan
- ✅ Email yang cocok akan di-highlight biru
- ⏹️ Bisa di-stop kapan saja

---

### Langkah 7: Lihat Hasil

![Step 6](https://via.placeholder.com/800x200/667eea/ffffff?text=View+Results)

**Status Link:**

#### 🟡 Pending
```
Status: Belum diproses
Warna: Abu-abu
```

#### 🟠 Fetching
```
Status: Sedang diproses
Warna: Kuning
```

#### 🟢 Success
```
Status: Berhasil diambil
Warna: Hijau
Response: Tampil di bawah
```

#### 🔴 Error
```
Status: Gagal
Warna: Merah
Error: Ditampilkan
```

#### 🔵 Matched (Email Cocok!)
```
Status: Success + Email cocok
Warna: Biru (Highlight)
Background: Lebih terang
Box Shadow: Glow effect
```

**Contoh hasil SUCCESS:**
```json
{
  "status": true,
  "message": "Success",
  "data": {
    "email": "joh*****@gmail.com",
    "username": "199312282025212001"
  }
}
```

---

### Langkah 8: Aksi pada Hasil

Untuk setiap link, Anda bisa:

#### 1. 🔗 Open (New Tab)
- Buka link di tab baru
- Lihat response langsung di browser
- Good untuk verify manual

#### 2. 📋 Copy Link
- Copy link ke clipboard
- Bisa di-paste ke browser atau tools lain
- Notifikasi "Link berhasil disalin!" akan muncul

---

## 💡 Tips & Trik

### 1. Cara Paling Efektif Mencari NIP

**Strategi Bertahap:**

```
Step 1: Range kecil (1-50)
├─ Jika ketemu ✅ → Selesai!
└─ Jika tidak ketemu ❌ → Lanjut

Step 2: Range medium (51-200)
├─ Jika ketemu ✅ → Selesai!
└─ Jika tidak ketemu ❌ → Lanjut

Step 3: Range besar (201-500)
├─ Jika ketemu ✅ → Selesai!
└─ Jika tidak ketemu ❌ → Lanjut

Step 4: Range full (501-999)
└─ Pasti ketemu! ✅
```

### 2. Menggunakan Filter Email

**Wajib mengisi email lengkap:**
```
✅ BENAR: johndoe@gmail.com
❌ SALAH: joh*****@gmail.com
❌ SALAH: johndoe
❌ SALAH: @gmail.com
```

**Cara kerja matching:**
- Server mengirim: `joh*****@gmail.com`
- Anda input: `johndoe@gmail.com`
- System cek: 3 karakter pertama = `joh`
- Hasil: ✅ COCOK!

### 3. Menghentikan Proses

Jika ingin stop di tengah jalan:
1. Klik tombol **"⏹️ Stop"**
2. Progress akan berhenti
3. Hasil yang sudah di-fetch tetap ditampilkan
4. Hasil yang match tetap di-filter

### 4. Menyimpan Hasil

**Metode 1: Screenshot**
- Ambil screenshot hasil
- Save sebagai bukti

**Metode 2: Copy Link**
- Copy link NIP yang cocok
- Save di notepad/dokumen

**Metode 3: Browser DevTools**
- Tekan F12
- Tab Console
- Copy response JSON

---

## 🐛 Troubleshooting

### Problem 1: Server Offline

**Gejala:**
```
❌ Server Offline - Ada masalah koneksi!
```

**Solusi:**

#### Jika menggunakan Vercel:
1. Refresh halaman (F5)
2. Cek koneksi internet
3. Coba lagi beberapa saat

#### Jika menggunakan lokal:
1. Pastikan server Node.js berjalan
2. Jalankan: `npm start`
3. Akses: `http://localhost:3000`

---

### Problem 2: Semua Request Error

**Gejala:**
```
Progress: 50 / 50
(0 sukses, 50 error)
```

**Solusi:**
1. Cek koneksi internet
2. Cek status server BKN (mungkin down)
3. Coba kurangi range (misalnya 1-10)
4. Tunggu beberapa menit, coba lagi

---

### Problem 3: Tidak Ada yang Match

**Gejala:**
```
❌ Tidak ada NIP yang ditemukan cocok dengan email Anda.
```

**Solusi:**

1. **Cek email Anda:**
   ```
   ✅ Email benar: johndoe@gmail.com
   ✅ Lowercase/uppercase tidak masalah
   ✅ Domain harus lengkap
   ```

2. **Perluas range:**
   ```
   Coba: 1 - 999 (full range)
   ```

3. **Cek 15 digit NIP dasar:**
   ```
   Mungkin salah input?
   Coba cek dokumen NIP asli
   ```

---

### Problem 4: Progress Lambat

**Gejala:**
```
Progress sangat lambat / stuck
```

**Solusi:**
1. **Normal behavior:**
   - Ada delay 300ms per request
   - Untuk 100 link = ~30 detik
   - Untuk 999 link = ~5 menit

2. **Jika terlalu lambat:**
   - Stop dan restart
   - Kurangi range
   - Cek koneksi internet

---

### Problem 5: Link Tidak Bisa Dibuka

**Gejala:**
```
Klik "Open" tapi tidak buka
```

**Solusi:**
1. **Popup blocker:**
   - Izinkan popup di browser
   - Settings → Privacy → Allow popups

2. **Copy manual:**
   - Klik "Copy Link"
   - Paste di address bar
   - Enter

---

## ❓ FAQ (Frequently Asked Questions)

### Q1: Apakah aplikasi ini aman?

**A:** Ya, aman!
- ✅ Tidak menyimpan data Anda
- ✅ Semua proses di browser
- ✅ Hanya query ke API resmi BKN
- ✅ Open source (bisa dicek kodenya)

---

### Q2: Apakah gratis?

**A:** Ya, 100% gratis!
- ✅ Tidak ada biaya sama sekali
- ✅ Tidak ada iklan
- ✅ Tidak ada limit penggunaan
- ✅ Vercel hosting gratis

---

### Q3: Berapa lama proses pencarian?

**A:** Tergantung range:
```
1-50:    ~15 detik
1-100:   ~30 detik
1-500:   ~2.5 menit
1-999:   ~5 menit
```

*Delay 300ms per request untuk menghindari rate limiting*

---

### Q4: Kenapa harus pakai email?

**A:** Untuk filter hasil yang benar-benar milik Anda!

**Tanpa email:**
- Akan tampil semua 999 kombinasi
- Harus cek manual satu-satu

**Dengan email:**
- Hanya tampil yang cocok
- Langsung ketemu NIP Anda!

---

### Q5: Apakah bisa dipakai berkali-kali?

**A:** Ya, bisa!
- ✅ Unlimited usage
- ✅ Tidak ada cooldown
- ✅ Bisa search untuk orang lain

---

### Q6: Apakah perlu login?

**A:** Tidak perlu!
- ✅ Langsung pakai
- ✅ Tidak perlu registrasi
- ✅ Tidak perlu akun

---

### Q7: Bisa dipakai di HP?

**A:** Ya, bisa!
- ✅ Responsive design
- ✅ Semua fitur berfungsi
- ✅ Touch-friendly

---

### Q8: Data saya disimpan di mana?

**A:** Tidak disimpan!
- ✅ Semua proses di browser
- ✅ Tidak ada database
- ✅ Refresh = hilang semua data

---

### Q9: Kenapa ada yang error?

**A:** Beberapa kemungkinan:
- Server BKN sedang sibuk
- Koneksi internet tidak stabil
- Rate limiting dari server
- NIP belum terdaftar di sistem

**Solusi:** Coba lagi atau kurangi range

---

### Q10: Bisa request fitur baru?

**A:** Tentu!
- Contact developer
- Submit issue di GitHub
- Saran lewat email

---

## 📞 Dukungan & Kontak

**Developer:** Muif Aha

**Issues?**
1. Cek troubleshooting guide
2. Cek FAQ
3. Contact developer

**Feedback?**
Sangat diterima! Bantu improve aplikasi ini.

---

## 📊 Statistik Penggunaan

**Rata-rata Waktu Pencarian:**
- Fast Search (1-50): 15-30 detik
- Medium Search (1-200): 1-2 menit
- Full Search (1-999): 4-6 menit

**Success Rate:**
- Dengan email filter: ~99%
- Tanpa email filter: 100% (tapi harus cek manual)

**Best Practices:**
- Gunakan email filter ✅
- Mulai dari range kecil ✅
- Simpan hasil segera ✅

---

## 🎉 Selamat Mencari!

Semoga panduan ini membantu Anda menemukan NIP PPPK dengan mudah!

**Good luck! 🚀**

---

**Last Updated:** October 2025
**Version:** 1.0.0
**Created by:** Muif Aha