import '../assets/styles/FilterButton.css';
import { useState } from 'react';

const FilterButton = () => {
  const [filterActive, setFilterActive] = useState({
    activeObject: null,
    objects: [
      { id: 1, value: 'Semua' },
      { id: 2, value: 'Hobi' },
      { id: 3, value: 'Kendaraan' },
      { id: 4, value: "Baju" },
      { id: 5, value: "Elektronik" },
      { id: 6, value: "Kesehatan" },
    ],
  });

  function toggleActiveFilter(index) {
    setFilterActive({...filterActive, activeObject: filterActive.objects[index]})
    console.log(index);
  }

  function toggleActiveStyle(index){
    if(filterActive.objects[index] === filterActive.activeObject){
      return "filter-text-button filter-active"
    } else {
      return "filter-text-button filter-inactive"
    }
  }

  return (
    <div className='container mt-5'>
      <p className='find-category-text'>Telusuri Kategori</p>
      {filterActive.objects.map((elements, index) => {
        return (
          <button key={index} className={toggleActiveStyle(index)} onClick={() => {toggleActiveFilter(index)}}>
            <i className='bi bi-search filter-icon'></i>
            {elements.value}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButton;
