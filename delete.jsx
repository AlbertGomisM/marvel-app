import React, { useState } from 'react';
import Modal from 'react-modal';

const ProductGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage('');
    setLightboxOpen(false);
  };

  // Array of products with details and images
  const products = [
    { id: 1, name: 'Product 1', thumbnailImageUrl: 'thumbnail1.jpg', fullImageUrl: 'image1.jpg' },
    { id: 2, name: 'Product 2', thumbnailImageUrl: 'thumbnail2.jpg', fullImageUrl: 'image2.jpg' },
    // Add more products as needed
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {/* Product details content */}
          {/* Display product details and other information */}
          {/* Include an image thumbnail gallery or a single image */}
          <img
            src={product.thumbnailImageUrl}
            alt="Product Thumbnail"
            onClick={() => openLightbox(product.fullImageUrl)}
          />
        </div>
      ))}

      <Modal
        isOpen={lightboxOpen}
        onRequestClose={closeLightbox}
        // Add necessary props for the lightbox modal
      >
        <img src={selectedImage} alt="Product Image" />
        {/* Additional lightbox content */}
      </Modal>
    </div>
  );
};

export default ProductGallery;