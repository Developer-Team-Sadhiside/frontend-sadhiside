import '../assets/styles/FilterButton.css';
import { useState } from 'react';
import { useProductContext } from '../services/productService';

const FilterButton = (props) => {
  const productContext = useProductContext();

  const [filterActive, setFilterActive] = useState({
    activeObject: { value: 'Semua' },
    objects: [{ value: 'Semua' }, { value: 'Hobi' }, { value: 'Kendaraan' }, { value: 'Baju' }, { value: 'Elektronik' }, { value: 'Kesehatan' }],
  });

  function toggleActiveFilter(index) {
    setFilterActive({ ...filterActive, activeObject: filterActive.objects[index] });
  }

  function toggleActiveStyle(index) {
    if (filterActive.objects[index].value === filterActive.activeObject.value) {
      return 'filter-text-button filter-active';
    } else {
      return 'filter-text-button filter-inactive';
    }
  }

  return (
    <div className='container mt-5'>
      <p className='find-category-text'>Telusuri Kategori</p>
      {filterActive.objects.map((elements, index) => {
        return (
          <button
            key={index}
            className={toggleActiveStyle(index)}
            onClick={() => {
              toggleActiveFilter(index);
              productContext.filterProduct(elements.value);
            }}
          >
            <i className='bi bi-search filter-icon'></i>
            {elements.value}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButton;
