import { useState } from "react";
import api from "../services/authService";

export default function Stock() {

        const medicineFields = [
    { name: "medicineName", label: 'Medicine Name', type: 'text', placeholder: "Medicine Name", required: true },
    { name: "medicineType", label: 'Medicine Type', type: 'text', placeholder: "Medicine Type", required: true },
    { name: "medicineCategory", label: 'Category', type: 'text', placeholder: "Category", required: true },
    { name: "medicineSubCategory", label: 'Sub-Category', type: 'text', placeholder: "Sub-Category", required: true },
    { name: "medicineWtg", label: 'Weight', type: 'text', placeholder: "Weight", required: true },
    { name: "medicineImage", label: 'Image URL', type: 'text', placeholder: "Image URL", required: true },
    { name: "medicinePrice", label: 'Price', type: 'number', placeholder: "Price", required: true },
    { name: "medicineDescription", label: 'Description', type: 'text', placeholder: "Description", required: true },
    { name: "medicineCompany", label: 'Company Name', type: 'text', placeholder: "Company Name", required: true },
    { name: "medicineQuantity", label: 'Quantity', type: 'number', placeholder: "Quantity", required: true },
    { name: "medicineManufactureDate", label: 'Manufacture Date', type: 'date', placeholder: "Manufacture Date", required: true },
    { name: "medicineExpiryDate", label: 'Expiry Date', type: 'date', placeholder: "Expiry Date", required: true },
  ];

  const data=async()=>{
    try{
  const response=await api.get('/api/v1/medicine/inventory/stock')
  
  }
   catch(err){console.log("Error in Stock")}
}

    return (
        <div><h1>Stock</h1>
        
            <table>
                <thead>
                    <tr className='border-2 border-black'>
                      {medicineFields.map((item, index) => (
                        <th key={index} className='border-2 border-black ' >{item.label}</th>
                      ))}
                    </tr>
                 </thead>
                 <tbody>
                  <tr>

                  </tr>
                 </tbody>
            </table>
       
        </div>
    )
}

