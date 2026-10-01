function Kontak() {
  return (
    <section id="kontak" className="bagian-kontak">
      <p className="halo">Kontak</p>
      <h2 className="judul-kontak">
        Mari <span className="aksen">terhubung</span>
      </h2>
      <p className="pengantar-kontak">
        Terbuka untuk proyek freelance, kolaborasi, atau sekadar berdiskusi soal
        web development.
      </p>

      <div className="daftar-kontak">
        <div className="kartu-kontak">
          <div>
            <span className="label-kontak">Email</span>
            <strong className="nilai-kontak">aghif1126@student.upi.edu</strong>
          </div>
          <a
            href="mailto:aghif1126@student.upi.edu"
            className="button button-garis button-kecil"
          >
            Kirim Email
          </a>
        </div>
        <div className="kartu-kontak">
          <div>
            <span className="label-kontak">Telepon / WhatsApp</span>
            <strong className="nilai-kontak">+62 8531 4678 713</strong>
          </div>
          <a
            href="https://wa.me/6285314678713"
            className="button button-garis button-kecil"
          >
            Chat WA
          </a>
        </div>
        <div className="kartu-kontak">
          <div>
            <span className="label-kontak">Github</span>
            <strong className="nilai-kontak">github.com/SphinixNS</strong>
          </div>
          <a
            href="https://github.com/SphinixNS"
            className="button button-garis button-kecil"
          >
            Kunjungi
          </a>
        </div>
        <div className="kartu-kontak">
          <div>
            <span className="label-kontak">LinkedIn</span>
            <strong className="nilai-kontak">linkedin.com/in/novan</strong>
          </div>
          <a
            href="https://linkedin.com/in/novan"
            className="button button-garis button-kecil"
          >
            Kunjungi
          </a>
        </div>
      </div>
    </section>
  );
}

export default Kontak;
