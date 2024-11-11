import React, { useEffect, useState } from 'react';
import ProductList from '../Components/ProductList';
import axios from 'axios';
import { Pagination, Spinner } from 'react-bootstrap';
import SearchBar from '../Components/SearchBar';

const Products = () => {
  const [recherche, setRecherche] = useState('');
  const [tri, setTri] = useState(''); // État pour le critère de tri
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Page actuelle
  const [productsPerPage] = useState(8); // Nombre de produits par page

  useEffect(() => {
    // Fonction asynchrone pour récupérer les produits depuis l'API
    const fetchProduits = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProduits(response.data); // Met à jour l'état avec les données reçues
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      } finally {
        setLoading(false); // Arrête l'affichage du chargement
      }
    };

    fetchProduits(); // Appel initial de la fonction
  }, []); // Exécute une seule fois au montage du composant


  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;// Last product index
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // First product index

  // Page change function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="sr-only">Chargement des produits...</span>
        </Spinner>
        <p>Chargement des produits...</p>
      </div>
    );
  }

    // Filter products by search criteria
  const produitsFiltres = produits.filter((produit) =>
    produit.title.toLowerCase().includes(recherche.toLowerCase())
  );

  // Sorting filtered products
  const produitsTries = [...produitsFiltres].sort((a, b) => {
    if (tri === 'prix-asc') {
      return a.price - b.price; // Sort by ascending price
    } else if (tri === 'prix-desc') {
      return b.price - a.price; // Sort by price descending
    } else if (tri === 'nom') {
      return a.title.localeCompare(b.title); // Sort by name (alphabetical order)
    }
    return 0; // If no sort criteria are selected
  });

  // Current products after pagination
  const currentProducts = produitsTries.slice(indexOfFirstProduct, indexOfLastProduct);
  return (
    <div className="shop-container container mt-4">
      {/* Row for SearchBar and Sort */}
      <div className="row mb-4">
        {/* SearchBar */}
        <div className="col-md-6 col-lg-5 col-12 mb-3 ">
          <SearchBar recherche={recherche} setRecherche={setRecherche} />
        </div>
        <div className='col-md-6 col-lg-2 col-12' ></div>
        {/* Dropdown for sorting */}
        <div className="col-md-6 col-lg-5 col-12 text-right" >
          <select
            className="form-control"
            onChange={(e) => setTri(e.target.value)}
            value={tri}
          >
            <option value="">Trier par</option>
            <option value="prix-asc">Prix croissant</option>
            <option value="prix-desc">Prix décroissant</option>
            <option value="nom">Nom (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Affichage de la liste de produits */}
      <ProductList produitsFiltres={currentProducts}/>

      {/* Pagination */}
      <div className='d-flex align-item-center justify-content-center my-5' >
        <Pagination className='text-center'>
            {[...Array(Math.ceil(produitsTries.length / productsPerPage))].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
      </div>

    </div>
  );
};

export default Products;
