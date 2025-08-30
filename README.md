# Tutorial Menjalankan CLI pada W.AI Pelatihan dan Inferensi Model Miner GPU/VGA

**W.ai is building the Global AI Supercomputer – a worldwide network that uses the spare power from everyday devices (PCs, laptops, phones) to create a massive, shared resource for Artificial Intelligence. Backed by Nvidia**

<img width="1339" height="637" alt="image" src="https://github.com/user-attachments/assets/d36e1c3a-8319-4a08-a34d-4f4f5d5d9660" />

## Apa yang Bisa Anda Dapatkan 🤑

- **Mendapatkan Poin W** untuk setiap tugas task yang diselesaikan oleh node Anda
- Poin kemungkinan dapat dikonversi menjadi token di masa depan
- Semakin banyak node, semakin besar penghasilan

## Persyaratan Awal

- **Mac**: Seri chips (M1, M2, M3, M4)
- **Windows/Linux**: GPU NVIDIA (GTX atau RTX)
- **RAM**: Minimum 6GB - 8GB (disarankan 12GB atau lebih)
- **Storage**: Ruang kosong 50GB atau lebih
- **SERVER GPU RENTAL**

## Daftar Cepat

### Daftar dan dapatkan API-KEY
1. Kunjungi dasboard, daftar menggunakan email [https://app.w.ai/auth/signup](https://w.ai/r/RC2MEX9C)
2. Buka bagian `API-KEYS`
3. Buat kunci baru (diawal)
4. Salin kunci tersebut , bisa buat lebih banyak dengan catatan simpan jangan lupa

<img width="1624" height="486" alt="image" src="https://github.com/user-attachments/assets/bfab7771-4ff5-4540-96c9-c015e04d5c9e" />

## Rental Sewa GPU atau Running Lokal
1. Menurut saya Octaspace biaya lebih murah dari rental lainnya
2. Dibutuhkan alamat email + top up saldo USDC/USDT di jaringan BSC, daftar [https://cube.octa.computer/users/sign_up](https://octa.space/?ref=rTXHXwn7D96)
3. Jika sudah daftar dan berhasil top up di menu https://marketplace.octa.space/ bisa pilih templates **W.ai atau Ubuntu 22.04 LTS**
4. Pilih sesuai kebutuhan aja misal rental RTX 3060 atau lainnya
5. Selain jalanin W.Ai bisa jalani node lain misal **ex; nexus.xyz, Gensyn blockassist** dll manfaatin yang ada

## Instalasi Setup

### Update sistem dan instal dependensi

```bash
apt update && apt upgrade \
apt install screen curl iptables build-essential git speedtest-cli nload wget lz4 jq make gcc nano automake autoconf htop nvme-cli libgbm1 pkg-config libssl-dev libleveldb-dev tar clang bsdmainutils ncdu unzip libleveldb-dev  -y
```

### Install Node.js - NVM - NPM dan PM2 buat running 2-10 lebih node nantinya

```bash
#!/bin/bash

# Instal NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
source ~/.bashrc

# Instal Node.js
nvm install 22.18.0
nvm use 22.18.0
nvm alias default 22.18.0

# Instal PM2 dan Yarn
npm install -g pm2 yarn

# Konfigurasi NVM di .bash_profile
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bash_profile
echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"' >> ~/.bash_profile
source ~/.bash_profile

# Atur izin
chown -R $USER:$USER ~/.nvm
chmod -R 755 ~/.nvm

# Tampilkan versi
echo "Instalasi selesai:"
node -v
npm -v
pm2 -v
yarn -v
```

### Install CLI w.ai
```bash
# Instal CLI
curl -fsSL https://app.w.ai/install.sh | bash

# Cek versi
wai --version
```

- Jika sudah dan muncul version yang digunakan lanjut dibawah

### Mulai menjalankan
```bash
# Ganti kunci api key
export W_AI_API_KEY=kunci_api_key

# Jalankan
wai run
```

- Selesai! Cek dashboard berkala...sekarang poin W harusnya bertambah! 🎉

## Pengaturan Lanjutan (Beberapa Node)

### Langsung tempel saja di terminal (ganti `kunci-api-key`)
```bash

# Buat file konfigurasi
cat > wai.miner.js << 'CONFIG'
module.exports = {
  apps : [{
    name: 'wai-node',
    script: 'wai',
    args: 'run',
    instances: 3,  // Jumlah node bisa edit
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      W_AI_API_KEY: 'kunci-api-key'
    }
  }]
};
CONFIG

# Jalankan beberapa node
pm2 start wai.miner.js

# PM2 save
pm2 startup
pm2 save
```

### Command yang dibutuhkan
```bash
# status run
pm2 list
```

```bash
# Lihat log
pm2 logs wai-node
```

```bash
# Pantau GPU
nvidia-smi
```

```bash
# Pantau realtime GPU
watch -n 1 nvidia-smi
```

### Tips Optimasi Internet 🌐

```bash
# Uji koneksi ping dll
speedtest-cli
```

```bash
# Pantau bandwidth
nload
```

### Mulai Ulang Otomatis Saat Gagal
```bash
# PM2 menjaga node Anda tetap berjalan
pm2 startup
pm2 save
```

## Tips 

### Yang Berhasil:
- **Mulai dengan 1 node**: Diuji selama 24 jam
- **Skalakan ke 4 node**: Internet saya mampu menanganinya
- **Gunakan PM2**: Menjaga semuanya berjalan lancar
- **Pantau dengan cermat**: Lacak penghasilan setiap hari

### Masalah Umum & Solusi:
1. **"Koneksi timeout"**: Periksa stabilitas internet Anda
2. **"Memori GPU penuh"**: Kurangi jumlah node
3. **"Kunci API tidak valid"**: Periksa kembali kunci Anda
4. **"Tidak ada tugas tersedia"**: Tunggu, tugas datang secara bergantian

### Tips Profesional:
- **Jalankan 24/7**: Waktu aktif maksimal = penghasilan maksimal
- **Bergabung dengan komunitas DISCORD**
- **Siapkan cadangan GPU**
