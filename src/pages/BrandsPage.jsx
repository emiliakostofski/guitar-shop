import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BRANDS } from '../graphql/queries';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BrandsPage = () => {
    const { loading, error, data } = useQuery(GET_BRANDS);
    const navigate = useNavigate();

    if (loading) return <p className="text-center my-5">Loading brands...</p>;
    if (error) return <p className="text-danger text-center my-5">Error fetching brands</p>;

    return (
        <div className="w-100">
            {/* Navbar */}
            <nav className="navbar navbar-light bg-white px-4 w-100">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold mx-auto" href="/">
                        <i className="fas fa-music me-2"></i> VibeStrings
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <div
                className="d-flex align-items-center justify-content-center flex-column text-white text-center"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1526813825024-211a67f2e655?auto=format&fit=crop&w=1400&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '60vh',
                    width: '100%'
                }}
            >
                <h1 className="fw-bold display-4 align-items-center"><span style={{ color: '#ff6f37' }}>Browse top quality Guitars online</span></h1>
                <p className="lead">Discover your next sound with VibeStrings</p>
            </div>

            {/* Brands Section */}
            <div className="w-100 py-100 bg-white">
                <div className="container text-center">
                    <h3>Featuring the <span style={{ color: '#ff3b3b' }}>Best Brands</span></h3>
                    <div className="row justify-content-center mt-4">
                        {data.findAllBrands.map((brand) => (
                            <div
                                key={brand.id}
                                className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
                                style={{ cursor: 'pointer' }}
                                onClick={() => navigate(`/models/${brand.id}`)}
                            >
                                <img
                                    src={brand.logo || 'https://via.placeholder.com/100x50?text=Logo'}
                                    alt={brand.name}
                                    className="img-fluid"
                                    // Change 1: Increased maxHeight from 50px to 80px
                                    style={{ maxHeight: '80px', objectFit: 'contain' }}
                                />
                                {/* Change 2: Changed the paragraph tag to a heading tag and removed 'small' class */}
                                <h5 className="mt-2 fw-bold">{brand.name}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dark Info Section */}
            <div className="bg-dark text-white py-5 text-center w-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <i className="fas fa-shipping-fast fa-3x mb-3"></i>
                            <h5>Modern Shipping</h5>
                            <p>Get your guitars delivered safely & quickly</p>
                        </div>
                        <div className="col-md-6">
                            <i className="fas fa-headset fa-3x mb-3"></i>
                            <h5>24/7 Support</h5>
                            <p>We’re here for you at any time</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* App Promo Section */}
            <div className="text-center py-5 w-100 bg-white">
                <h3>Browse and buy your <span style={{ color: '#ff3b3b' }}>favorite guitars</span> with VibeStrings.</h3>
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-4">
                    <img
                        src="https://images.unsplash.com/photo-1589369481190-d6f1a972fd79?auto=format&fit=crop&w=600&q=80"
                        alt="App preview"
                        className="img-fluid rounded mb-4 mb-md-0"
                        style={{ maxWidth: '300px', marginRight: '2rem' }}
                    />
                    <div>
                        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: '60px', marginBottom: '10px' }} /></a>
                        <br />
                        <a href="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" style={{ height: '60px' }} /></a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center py-4 w-100" style={{ backgroundColor: '#f8f9fa' }}>
                <h5>VibeStrings</h5>
                <p>store@vibestrings.com | San Francisco</p>
                <div>
                    <a href="#" className="me-3"><i className="fab fa-facebook fa-lg"></i></a>
                    <a href="#" className="me-3"><i className="fab fa-twitter fa-lg"></i></a>
                    <a href="#"><i className="fab fa-instagram fa-lg"></i></a>
                </div>
                <div className="mt-3">
                    <a href="#" className="me-3">Store</a>
                    <a href="#" className="me-3">Collections</a>
                    <a href="#">Support</a>
                </div>
                <p className="mt-3 small">© 2025 Copyright VibeStrings</p>
            </div>
        </div>
    );
};

export default BrandsPage;