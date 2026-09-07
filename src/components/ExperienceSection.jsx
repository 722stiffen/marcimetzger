import { useEffect, useState } from 'react'

export default function ExperienceSection({ images }) {
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedImage(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section className="experience-section property-gallery-section info-section">
      <div className="property-gallery-heading">
        <div>
          <h2>Marci Metzger Homes Gallery</h2>
        </div>
        <p>Explore the homes, details, and neighborhoods that make Southern Nevada feel like home.</p>
      </div>

      <div className="property-gallery-grid">
        {images.map((image, index) => (
          <button
            type="button"
            key={`${image}-${index}`}
            className={`property-gallery-item gallery-item-${index + 1}`}
            onClick={() => setSelectedImage(image)}
            aria-label="Open full property image"
          >
            <img src={image} alt="Real estate property view" />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div className="property-lightbox" role="dialog" aria-modal="true" aria-label="Full property image" onClick={() => setSelectedImage(null)}>
          <button type="button" className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close full image">Close</button>
          <img src={selectedImage} alt="Full real estate property view" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
