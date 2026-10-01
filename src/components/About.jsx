function About() {
  return (
    <section id="tentang" className="tentang">
      <p className="halo">Tentang Saya</p>
      <h2 className="judul-tentang">
        Mahasiswa Pendidikan Ilmu Komputer yang suka <span className="aksen">ngoding</span>
      </h2>
      <p className="teks-tentang">
        Saya sedang menempuh studi <strong>Pendidikan Ilmu Komputer</strong> di
        Universitas Pendidikan Indonesia angkatan 2025. Di luar perkuliahan,
        saya suka belajar web development dan terbuka untuk proyek freelance.
      </p>

      <div className="poin-tentang">
        <div className="kartu-tentang">
          <span className="nomor-kartu">01</span>
          <h3>Pendidikan</h3>
          <ul>
            <li>Pendidikan Ilmu Komputer, UPI  2025</li>
            <li>SMK Negeri 11 Bandung  Lulusan 2024</li>
          </ul>
        </div>
        <div className="kartu-tentang">
          <span className="nomor-kartu">02</span>
          <h3>Pengalaman</h3>
          <ul>
            <li>Asisten praktikum Algoritma Pemrograman</li>
            <li>Freelance jasa pembuatan website di waktu kosong</li>
          </ul>
        </div>
        <div className="kartu-tentang">
          <span className="nomor-kartu">03</span>
          <h3>Minat & Fokus</h3>
          <ul>
            <li>Belajar coding & pengembangan web</li>
       
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
