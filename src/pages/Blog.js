import React from 'react';
import { Link } from 'react-router-dom';
import { mainImage, familyImage, flightImage } from '../assets/images';

const Blog = () => {
  return (
    <>
      {/* Blog Hero */}
      <section className="py-5 booking-banner" style={{ 
        background: `linear-gradient(rgba(0, 86, 179, 0.7), rgba(0, 86, 179, 0.5)), url(${mainImage}) center/cover no-repeat`
      }}>
        <div className="container text-center text-white">
          <h1 className="display-5 fw-bold">PaxPass Blog</h1>
          <p className="lead">Travel tips, insights, and stories from the luggage experts</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Featured Blog Post */}
            <div className="col-12 mb-4">
              <div className="card border-0 shadow-sm overflow-hidden">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={mainImage} className="img-fluid h-100 object-cover" alt="Blog featured" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6 className="text-primary mb-2">FEATURED POST</h6>
                      <h2 className="card-title h3">5 Ways to Make Your Airport Experience Stress-Free</h2>
                      <p className="text-muted mb-2">August 3, 2023 • 5 min read</p>
                      <p className="card-text">Air travel can be stressful, especially when you're juggling multiple pieces of luggage. At PaxPass, we understand the challenges travelers face and have developed solutions to make your journey smoother.</p>
                      <Link to="/blog/stress-free-airport-experience" className="btn btn-outline-primary">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Post 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <img src={familyImage} className="card-img-top" alt="Blog post" />
                <div className="card-body p-4">
                  <h6 className="text-primary mb-2">FAMILY TRAVEL</h6>
                  <h3 className="card-title h4">Family Travel Made Easy: Tips for Parents</h3>
                  <p className="text-muted mb-2">July 15, 2023 • 4 min read</p>
                  <p className="card-text">Traveling with children can be challenging, but with proper planning and the right services, it can be a joyful experience for the whole family.</p>
                </div>
                <div className="card-footer bg-white border-0 p-4 pt-0">
                  <Link to="/blog/family-travel-tips" className="btn btn-outline-primary">Read More</Link>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <img src={flightImage} className="card-img-top" alt="Blog post" />
                <div className="card-body p-4">
                  <h6 className="text-primary mb-2">BUSINESS TRAVEL</h6>
                  <h3 className="card-title h4">How PaxPass is Revolutionizing Business Travel</h3>
                  <p className="text-muted mb-2">June 28, 2023 • 3 min read</p>
                  <p className="card-text">For business travelers, time is money. Learn how our luggage assistance service is helping professionals maximize their productivity while on the move.</p>
                </div>
                <div className="card-footer bg-white border-0 p-4 pt-0">
                  <Link to="/blog/business-travel-revolution" className="btn btn-outline-primary">Read More</Link>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <img src={mainImage} className="card-img-top" alt="Blog post" />
                <div className="card-body p-4">
                  <h6 className="text-primary mb-2">PACKING TIPS</h6>
                  <h3 className="card-title h4">The Ultimate Packing Guide for Every Type of Traveler</h3>
                  <p className="text-muted mb-2">June 10, 2023 • 6 min read</p>
                  <p className="card-text">Whether you're a minimalist traveler or someone who likes to be prepared for every situation, our comprehensive packing guide has tips for everyone.</p>
                </div>
                <div className="card-footer bg-white border-0 p-4 pt-0">
                  <Link to="/blog/ultimate-packing-guide" className="btn btn-outline-primary">Read More</Link>
                </div>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="col-lg-6 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h6 className="text-primary mb-2">INDUSTRY INSIGHTS</h6>
                  <h3 className="card-title h4">The Future of Airport Luggage Handling in India</h3>
                  <p className="text-muted mb-2">May 22, 2023 • 5 min read</p>
                  <p className="card-text">India's aviation sector is growing rapidly, and with it comes the need for innovative luggage handling solutions. Explore how PaxPass is leading the way in this evolving landscape.</p>
                  <p className="card-text">As more Indians take to the skies for both business and leisure, the demand for efficient and reliable luggage services has never been higher. PaxPass is at the forefront of this revolution, combining technology with personalized service to create a seamless experience for travelers.</p>
                  <p className="card-text">Our research shows that over 65% of air travelers in India consider luggage handling to be one of the most stressful aspects of their journey. This is where PaxPass steps in, offering a solution that not only eliminates this stress but also adds value to the entire travel experience.</p>
                </div>
                <div className="card-footer bg-white border-0 p-4 pt-0">
                  <Link to="/blog/future-luggage-handling-india" className="btn btn-outline-primary">Read More</Link>
                </div>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="col-lg-6 col-md-12">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h6 className="text-primary mb-2">CUSTOMER STORIES</h6>
                  <h3 className="card-title h4">How PaxPass Saved a Wedding: A Customer's Journey</h3>
                  <p className="text-muted mb-2">May 5, 2023 • 4 min read</p>
                  <p className="card-text">When Priya and Rahul were traveling to Goa for their destination wedding, they faced a luggage crisis that threatened to ruin their special day. Here's how PaxPass came to the rescue.</p>
                  <p className="card-text">"We had multiple bags containing our wedding outfits, decorations, and gifts for guests," recalls Priya. "The thought of managing all that luggage while coordinating wedding details was overwhelming. That's when we discovered PaxPass."</p>
                  <p className="card-text">The couple booked PaxPass to handle the transportation of their 8 suitcases from Mumbai to their resort in Goa. "It was the best decision we made," says Rahul. "We arrived stress-free and could focus on enjoying our wedding preparations. PaxPass delivered everything on time and in perfect condition."</p>
                </div>
                <div className="card-footer bg-white border-0 p-4 pt-0">
                  <Link to="/blog/wedding-rescue-story" className="btn btn-outline-primary">Read More</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <nav className="mt-5">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-6 fw-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="lead mb-4">Get the latest travel tips, industry insights, and exclusive offers delivered to your inbox.</p>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Your email address" aria-label="Your email address" />
                    <button className="btn btn-primary" type="button">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article>
                <h2 className="display-5 fw-bold mb-4">5 Ways to Make Your Airport Experience Stress-Free</h2>
                <p className="text-muted mb-4">August 3, 2023 • 5 min read • By PaxPass Team</p>
                
                <img src={mainImage} alt="Airport experience" className="img-fluid rounded-3 mb-4" />
                
                <p className="lead mb-4">Air travel can be stressful, especially when you're juggling multiple pieces of luggage. At PaxPass, we understand the challenges travelers face and have developed solutions to make your journey smoother.</p>
                
                <p>Whether you're a frequent flyer or an occasional traveler, these tips will help you navigate the airport with ease and start your journey on the right note.</p>
                
                <h3 className="h4 mt-5 mb-3">1. Let PaxPass Handle Your Luggage</h3>
                <p>The most effective way to eliminate luggage-related stress is to let PaxPass take care of it for you. Our door-to-airport service means you can travel light, without the burden of heavy bags. We'll pick up your luggage from your home and deliver it directly to the airport, allowing you to enjoy a hassle-free journey.</p>
                
                <h3 className="h4 mt-5 mb-3">2. Check-In Online</h3>
                <p>Most airlines allow online check-in 24-48 hours before departure. Take advantage of this feature to select your preferred seat and receive your boarding pass in advance. This saves time at the airport and reduces the stress of long check-in queues.</p>
                
                <h3 className="h4 mt-5 mb-3">3. Arrive Early</h3>
                <p>Give yourself plenty of time by arriving at the airport at least 2-3 hours before domestic flights and 3-4 hours before international flights. This buffer allows for unexpected delays and gives you time to relax before boarding.</p>
                
                <h3 className="h4 mt-5 mb-3">4. Stay Organized</h3>
                <p>Keep your travel documents (ID, boarding pass, etc.) in an easily accessible place. Consider using a travel wallet or document holder to keep everything organized. This prevents the last-minute scramble to find important papers.</p>
                
                <h3 className="h4 mt-5 mb-3">5. Stay Hydrated and Comfortable</h3>
                <p>Airports and airplanes can be dehydrating environments. Carry an empty water bottle to fill after security, and dress in comfortable layers to adapt to changing temperatures. Taking care of your physical comfort goes a long way in reducing stress.</p>
                
                <div className="alert alert-primary mt-5">
                  <h4 className="alert-heading">Ready to experience stress-free travel?</h4>
                  <p>Book PaxPass for your next journey and focus on what matters most – enjoying your trip.</p>
                  <hr />
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link to="/booking" className="btn btn-primary">Book Now</Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;