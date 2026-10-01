import galeri1 from "../assets/gallery1.png";
import galeri2 from "../assets/gallery2.png";
import galeri3 from "../assets/gallery3.png";
import galeri4 from "../assets/gallery4.png";

function Gallery() {
  return (
    <section id="galeri" className="bagian-galeri">
      <p className="halo">Galeri</p>
      <h2 className="judul-galeri">
        Kumpulan <span className="aksen">momen</span> saya
      </h2>
      <p className="pengantar-galeri">
        Beberapa dokumentasi project yang telah saya buat
      </p>

      <div className="kisi-galeri">
        <div className="kartu-galeri">
          <img className="gambar" src={galeri1} alt="Cyber Digi, Belajar dengan sistem Gamifikasi" />
          <span className="keterangan-gambar">Cyber Digi, Belajar dengan sistem Gamifikasi</span>
        </div>
        <div className="kartu-galeri">
          <img className="gambar" src={galeri2} alt="Sijago, Sistem Jaga Otoritas." />
          <span className="keterangan-gambar">Sijago, Sistem Jaga Otoritas.</span>
        </div>
        <div className="kartu-galeri">
          <img className="gambar" src={galeri3} alt="Modul Belajar Python Dasar" />
          <span className="keterangan-gambar">Modul Belajar Python Dasar</span>
        </div>
        <div className="kartu-galeri">
          <img className="gambar" src={galeri4} alt="Ayuna Fashion, Website Katalog Digital" />
          <span className="keterangan-gambar">Ayuna Fashion, Website Katalog Digital</span>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
