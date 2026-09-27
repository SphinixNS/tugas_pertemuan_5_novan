import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";

function Gallery() {
  return (
    <div>
      <section id="gallery">
        <div class="gallery">
          <h3>Gallery</h3>
          <hr />
          <div class="tabel">
            <table>
              <tr>
                <td>
                  <img class="gambar" src={gallery1} alt="gallery1" />
                </td>
                <td>
                  <img class="gambar" src={gallery2} alt="gallery2" />
                </td>
              </tr>
              <tr>
                <td>
                  <img class="gambar" src={gallery3} alt="gallery3" />
                </td>
                <td>
                  <img class="gambar" src={gallery4} alt="gallery4" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
}

export default Gallery;
