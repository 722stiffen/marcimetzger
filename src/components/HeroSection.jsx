export default function HeroSection({ image }) {
  return (
    <section className="hero-section">
      <div className="hero-visual" aria-label="Hero image">
        <div className="visual-card hero-photo-card">
          <img src={image} alt="Pahrump landscape" />
        </div>
      </div>

      <div className="hero-copy">
        <span className="eyebrow">The Ridge Realty Group</span>
        <h1>Find your place in Pahrump.</h1>
        <p>
          Local expertise, honest guidance, and a better way to buy or sell in Southern Nevada.
        </p>

        <div className="estate-search" aria-label="Property search">
          <h2>Search Listings</h2>
          <div className="search-fields">
            <label>
              <span>Location</span>
              <select defaultValue="Any">
                <option>Any</option>
                <option>Alamo</option>
                <option>Alton</option>
                <option>Amargosa Valley</option>
                <option>Beatty</option>
                <option>Beryl</option>
                <option>Blue Diamond</option>
                <option>Boulder City</option>
                <option>Brian Head</option>
                <option>Cal Nev Ari</option>
                <option>Caliente</option>
                <option>Cold Creek</option>
                <option>Crystal</option>
                <option>Duck Creek Village</option>
                <option>Dyer</option>
                <option>Elko</option>
                <option>Ely</option>
                <option>Goldfield</option>
                <option>Goodsprings</option>
                <option>Hatch</option>
                <option>Henderson</option>
                <option>Indian Springs</option>
                <option>Jean</option>
                <option>Las Vegas</option>
                <option>Laughlin</option>
                <option>Logandale</option>
                <option>Manhattan</option>
                <option>Mc Gill</option>
                <option>Mesquite</option>
                <option>Moapa</option>
                <option>Mount Charleston</option>
                <option>Mountain Springs</option>
                <option>North Las Vegas</option>
                <option>Other</option>
                <option>Overton</option>
                <option>Pahrump</option>
                <option>Palm Gardens</option>
                <option>Panaca</option>
                <option>Parowan</option>
                <option>Pioche</option>
                <option>Round Mountain</option>
                <option>Sandy Valley</option>
                <option>Searchlight</option>
                <option>Tonopah</option>
              </select>
            </label>
            <label>
              <span>Type</span>
              <select defaultValue="Any">
                <option>Any</option>
                <option>Land</option>
                <option>Residential Lease</option>
                <option>High Rise</option>
                <option>Residential</option>
              </select>
            </label>
            <label>
              <span>Sort By</span>
              <select defaultValue="Newest">
                <option>Newest</option>
                <option>Oldest</option>
                <option>Least Expensive to Most</option>
                <option>Most Expensive to Least</option>
                <option>Bedrooms (Low to High)</option>
                <option>Bedrooms (High to Low)</option>
                <option>Bathrooms (Low to High)</option>
                <option>Bathrooms (High to Low)</option>
              </select>
            </label>
            <label>
              <span>Bedrooms</span>
              <select defaultValue="Any Number">
                <option>Any Number</option>
                <option>Studio</option>
                <option>1+</option><option>2+</option><option>3+</option>
                <option>4+</option><option>5+</option><option>6+</option>
              </select>
            </label>
            <label>
              <span>Baths</span>
              <select defaultValue="Any Number">
                <option>Any Number</option>
                <option>1+</option><option>2+</option><option>3+</option>
                <option>4+</option><option>5+</option><option>6+</option>
              </select>
            </label>
            <label>
              <span>Min Price</span>
              <input type="number" placeholder="$0" min="0" />
            </label>
            <label>
              <span>Max Price</span>
              <input type="number" placeholder="No max" min="0" />
            </label>
            <a href="#listings" className="primary-button search-button">Search Now</a>
          </div>
        </div>

        <div className="hero-actions">
          <a href="tel:2069196886" className="secondary-button">Call Marci</a>
          <a href="#about" className="text-link">Meet your realtor <span aria-hidden="true">-&gt;</span></a>
        </div>
      </div>

    </section>
  )
}
