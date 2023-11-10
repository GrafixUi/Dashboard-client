import React, { useEffect, useState } from 'react';
// import InvoiceField from './InvoiceField';
import { connect } from 'react-redux';
import { fetchItems } from '../../Redux/actions/Items/items';
import { FiX } from 'react-icons/fi';

function InvoiceItem({
  id,
  onDeleteItem,
  items,
  fetchItems,
}) {
  const [selectedItem, setSelectedItem] = useState('');
  const [itemDetails, setItemDetails] = useState({ description: '', sellingprice: 0, quantity: 0 });

  const deleteItemHandler = () => {
    onDeleteItem(id);
  };

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleItemChange = (selectedItem) => {

    const selectedItemObj = items.find((item) => item.name === selectedItem);
    setItemDetails({
      description: selectedItemObj ? selectedItemObj.description : '',
      sellingprice: selectedItemObj ? selectedItemObj.sellingprice : 0,
      quantity: itemDetails.quantity, 
    });
  };

  const handleQuantityChange = (e) => {
    setItemDetails({
      ...itemDetails,
      quantity: e.target.value,
    });
  };

  const handleSellingPriceChange = (e) => {
    setItemDetails({
      ...itemDetails,
      sellingprice: e.target.value,
    });
  };

  return (
    <tr>
      <td className="">
        <div>
          <select
            className="text-sm leading-6 bg-white border rounded p-2 w-full text-gray-700 sm:col-span-2 sm:mt-0"
            value={selectedItem}
            onChange={(e) => {
              setSelectedItem(e.target.value);
              handleItemChange(e.target.value);
            }}
          >
            <option value="">Select an Item</option>
            {items.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <textarea
            className="form-control p-2 mt-2"
            rows="2"
            placeholder="Item Information"
            value={itemDetails.description || ""}
            
          ></textarea>
        </div>
      </td>
      <td className="">
        <input
          className="p-2 border rounded-lg"
          type="number"
          value={itemDetails.quantity || 1}
          onChange={handleQuantityChange}
        />
      </td>
      <td className="relative w-[10px]">
        <input
          className="p-2 border rounded-lg"
          type="number"
          readOnly disabled
          value={itemDetails.sellingprice}
          onChange={handleSellingPriceChange}
        />
      </td>
      <td className="pl-5 items-center justify-center">
        <button
          className="rounded-md bg-red-500 p-2 text-white shadow-sm 
                    transition-colors duration-200 hover-bg-red-600"
          onClick={deleteItemHandler}
        >
          <FiX width={50} />
        </button>
      </td>
    </tr>
  );
}

const mapStateToProps = (state) => ({
  items: state.items.items,
  loading: state.items.loading,
  error: state.items.error,
});

const mapDispatchToProps = {
  fetchItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceItem);
