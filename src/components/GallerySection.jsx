export default function GallerySection({ images }) {
  return (
    <section className="gallery-section info-section">
      <div className="section-heading">
        <span className="section-tag">Photo gallery</span>
        <h2>Spaces worth exploring.</h2>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={`${image}-${index}`} className="gallery-item">
            <img src={image} alt="Home property view" />
          </div>
        ))}
      </div>
    </section>
  )
}
