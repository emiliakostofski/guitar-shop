import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_BRAND_MODELS } from '../graphql/queries';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ModelsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    const { loading, error, data } = useQuery(GET_BRAND_MODELS, {
        variables: { id },
    });

    if (loading) return <p className="text-center my-5">Loading...</p>;
    if (error) return <p className="text-danger text-center my-5">Error: {error.message}</p>;

    const brand = data?.findUniqueBrand;
    const models = brand?.models || [];

    const filteredModels = models
        .filter((model) => model.name.toLowerCase().includes(search.toLowerCase()))
        .filter((model) =>
            typeFilter ? model.type.toLowerCase() === typeFilter.toLowerCase() : true
        );

    return (
        <div>
            {/* Hero Section */}
            <div
                className="text-white text-center py-5"
                style={{
                    backgroundColor: '#ff6c2c',
                    borderBottomLeftRadius: '50% 20%',
                }}
            >
                <h1>{brand.name}</h1>
                <p className="lead">
                    Play like a <span style={{ color: '#ff3b3b' }}>Rock star</span>
                </p>
                <p>
                    With a legacy dating back to the 1960s, {brand.name} blends expert craftsmanship
                    with cutting-edge performance.
                </p>
            </div>

            {/* Title + Filters */}
            <div className="container text-center my-5">
                <h3>
                    Check out the <span style={{ color: '#ff3b3b' }}>Selection</span>
                </h3>

                <div className="d-flex justify-content-center align-items-center gap-3 my-4 flex-wrap">
                    <select
                        className="form-select w-auto"
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                    >
                        <option value="">All Types</option>
                        <option value="Electric">Electric</option>
                        <option value="Acoustic">Acoustic</option>
                        <option value="Bass">Bass</option>
                    </select>

                    <input
                        type="text"
                        className="form-control w-50"
                        placeholder="Search models..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Product Grid */}
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    {filteredModels.map((model) => (
                        <div className="col" key={model.id}>
                            <div
                                className="card h-100 text-center p-3"
                                onClick={() => navigate(`/model/${model.id}`)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img
                                    src={model.image || 'https://via.placeholder.com/150x150?text=Guitar'}
                                    className="card-img-top mx-auto"
                                    alt={model.name}
                                    style={{ height: '150px', objectFit: 'contain' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{model.name}</h5>
                                    <p className="card-text">Type: {model.type}</p>
                                    <p className="card-text">Price: ${model.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dummy Pagination */}
                <nav className="my-5 d-flex justify-content-center">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default ModelsPage;
