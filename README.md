# easy-test-fullstack

## Pendahuluan
Proyek ini adalah di peruntukan untuk melakukan test fullstack developer di CV.Easy.

## Prasyarat
Sebelum memulai, pastikan Anda telah menginstal perangkat lunak berikut:
- [Node.js](https://nodejs.org/) (versi terbaru)
- [npm](https://www.npmjs.com/) (biasanya terinstal bersama Node.js)
- [Git](https://git-scm.com/)

## Langkah-langkah Instalasi

1. **Kloning Repositori**
   ```bash
   git clone https://github.com/username/easy-test-fullstack.git
   cd easy-test-fullstack
   ```

2. **Instalasi Dependensi**
   Jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:
   ```bash
   npm install
   ```

3. **Konfigurasi Lingkungan**
   Buat file `.env` di direktori root dan tambahkan konfigurasi yang diperlukan. Contoh:
   ```plaintext
   DATABASE_URL=your_database_url
   PORT=3000
   ```

4. **Menjalankan Migrasi Database**
   Untuk menjalankan migrasi database, gunakan perintah berikut:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   npm run prisma:seed
   ```
   
5. **Menjalankan Aplikasi**
   Untuk menjalankan aplikasi, gunakan perintah berikut:
   ```bash
   npm start
   ```

5. **Mengakses Aplikasi**
   Buka browser Anda dan akses `http://localhost:3000` untuk melihat aplikasi berjalan.

## Endpoint yang Tersedia
Berikut adalah daftar endpoint yang tersedia dalam aplikasi ini beserta detail payload yang diperlukan:

- **POST /battery**
  - **Deskripsi**: Soal Nomor 1.
  - **Payload**:
    ```json
    {
      "inputs": [number]
    }
    ```

- **POST /input_validation**
  - **Deskripsi**: Soal Nomor 2.
  - **Payload**:
    ```json
    {
      "input": "string"
    }
    ```

- **POST /company**
  - **Deskripsi**: Soal Nomor 3.
  - **Payload**:
    ```json
    {
      "input": ["string"]
    }
    ```

- **POST /customer**
  - **Deskripsi**: Soal Nomor 4.
  - **Payload**: Tidak diperlukan.

- **GET /battery**
  - **Deskripsi**: Soal Nomor 5.
  - **Payload**:
    ```json
    {
      "inputs": [number]
    }
    ```

## Pengujian
Untuk menjalankan UNIT TEST CASE, gunakan perintah berikut:
```bash
npm test
```

## Kontribusi
Jika Anda ingin berkontribusi pada proyek ini, silakan buat pull request atau buka issue di GitHub.

## Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).