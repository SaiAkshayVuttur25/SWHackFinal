import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';

const NavBar = ({ setlogin }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const dummyProducts = {
    SportyStore: [{ id: 1, name: 'Football' }, { id: 2, name: 'Cricket Bat' }],
    FitnessHub: [{ id: 3, name: 'Treadmill' }, { id: 4, name: 'Yoga Mat' }],
    'Tasty Treats': [{ id: 5, name: 'Burger' }, { id: 6, name: 'Pizza' }],
    "Foodie's Paradise": [{ id: 7, name: 'Pasta' }, { id: 8, name: 'Salad' }],
    'Comfy Homes': [{ id: 9, name: 'Sofa' }, { id: 10, name: 'Bed' }],
    StyleWood: [{ id: 11, name: 'Chair' }, { id: 12, name: 'Table' }],
    DailyMart: [{ id: 13, name: 'Milk' }, { id: 14, name: 'Bread' }],
    GroceryKing: [{ id: 15, name: 'Rice' }, { id: 16, name: 'Oil' }]
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const results = [];

    Object.entries(dummyProducts).forEach(([shop, products]) => {
      products.forEach((product) => {
        if (product.name.toLowerCase().includes(query.toLowerCase())) {
          results.push({ ...product, shop });
        }
      });
    });

    setSearchResults(results);
  };

  const handleResultClick = (shop, productId) => {
    navigate(`/product/${encodeURIComponent(shop)}/${productId}`);
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#bfdbfe',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'opacity 1s',
      opacity: fadeIn ? 1 : 0
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }}>

        {/* Logo */}
        <div style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#1e3a8a',
          whiteSpace: 'nowrap',
          marginBottom: '8px'
        }}>
          <h2 to="/" style={{ textDecoration: 'none', color: '#1e3a8a' }}>
            Local Vendor Business
          </h2>
        </div>

        {/* Search */}
        <div style={{ position: 'relative', flexGrow: 1, margin: '0 16px', maxWidth: '400px' }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 30px 8px 12px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
              outline: 'none'
            }}
          />
          <div style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#555'
          }}>
            <Search size={18} />
          </div>

          {searchQuery && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              zIndex: 10,
              maxHeight: '250px',
              overflowY: 'auto',
              marginTop: '4px'
            }}>
              {searchResults.length > 0 ? (
                searchResults.map((result) => (
                  <div
                    key={result.id}
                    onClick={() => handleResultClick(result.shop, result.id)}
                    style={{
                      padding: '8px 12px',
                      cursor: 'pointer',
                      borderBottom: '1px solid #eee'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                  >
                    {result.name} – <strong>{result.shop}</strong>
                  </div>
                ))
              ) : (
                <div style={{ padding: '8px 12px', color: '#888' }}>No products found</div>
              )}
            </div>
          )}
        </div>

        {/* Cart + Sign In */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginTop: '8px',
          whiteSpace: 'nowrap'
        }}>
          <Link to="/cart" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#1e3a8a',
            fontSize: '14px',
            textDecoration: 'none'
          }}>
            <ShoppingCart size={20} />
            <span>Cart</span>
          </Link>
          <button
            onClick={() => setlogin(true)}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#1e40af'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
          >
            Sign In
          </button>
        </div>

      </div>
    </div>
  );
};

export default NavBar;
