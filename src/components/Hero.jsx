import { Link } from "react-router-dom";
import foto from "../assets/poto.jpeg";

function Hero() {
  return (
    <section id="beranda" className="bagian-hero">
      <div className="profil">
        <div className="teks-hero">
          <p style={{ fontSize: "1rem", color: "#a1502e" }}>Halo, Saya</p>
          <h1>
            Novan Arrijal
            <br />
            <span className="aksen">Ghifari Hakim</span>
          </h1>
          <p className="deskripsi">
            Mahasiswa Pendidikan Ilmu Komputer di Universitas Pendidikan
            Indonesia, Kelas B Angkatan 2025. Lulusan SMK Negeri 11 Bandung.
            Domisili Kopo Sayati.
          </p>

          <div className="button-hero">
            <Link to="/contact" className="button button-utama">
              Hubungi Saya
            </Link>
            <Link to="/about" className="button button-garis">
              Tentang Saya →
            </Link>
          </div>

          <div className="about">
            <div className="item-about">
              <strong>UPI 2025</strong>
              <span>Pend. Ilmu Komputer</span>
            </div>
            <div className="item-about">
              <strong>Asprak</strong>
              <span>Algoritma Pemrograman</span>
            </div>
            <div className="item-about">
              <strong>SMKN 11</strong>
              <span>Lulusan Bandung</span>
            </div>
          </div>

          <div className="tech-stack">
            <span className="label-tech-stack">Tech yang saya pakai</span>
            <div className="daftar-tech-stack">
              <span className="pil-tech-stack">HTML</span>
              <span className="pil-tech-stack">CSS</span>
              <span className="pil-tech-stack">JavaScript</span>
              <span className="pil-tech-stack">React</span>
              <span className="pil-tech-stack">Vite</span>
              <span className="pil-tech-stack">Git</span>
            </div>
          </div>
        </div>

        <div className="foto-hero">
          <img src={foto} alt="Foto Novan Arrijal Ghifari Hakim" />
          <div className="foto">
            <strong>UPI Bandung</strong>
            <span>Pend. Ilmu Komputer • Kelas B</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
