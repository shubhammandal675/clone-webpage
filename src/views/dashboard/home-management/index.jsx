'use client'

import { useState } from 'react'
import Grid from '@mui/material/Grid'
import TopCategories from './TopCategories'
import CategoryOrder from './CategoryOrder'

// Font constant for Outfit
const outfitFont = { fontFamily: 'Outfit, Outfit Fallback, sans-serif' }

const HomeManagementView = () => {
  // Aapka data state - Yeh Single Source of Truth hai
  const [categories, setCategories] = useState([
    { id: '1', name: 'Electronics_test1' },
    { id: '2', name: 'Bakeware' },
    { id: '3', name: 'Cutlery' }
  ])

  // Logic: Item delete karne ke liye
  const handleRemove = (id) => {
    setCategories(prev => prev.filter(cat => cat.id !== id))
  }

  // Logic: Naya item add karne ke liye (Duplicate check ke saath)
  const handleAdd = (name) => {
    if (!name || categories.find(c => c.name === name)) return
    if (categories.length >= 10) {
      alert("You can only add up to 10 categories");
      return;
    }
    const newItem = { id: Date.now().toString(), name }
    setCategories(prev => [...prev, newItem])
  }

  // Logic: Drag and Drop ke baad naya order set karne ke liye
  const handleReorder = (newList) => {
    setCategories(newList)
  }

  return (
    // Grid container mein font family apply ki hai
    <Grid container spacing={6} sx={{ ...outfitFont }}>
      <Grid item xs={12}>
        <TopCategories 
          categories={categories} 
          onAdd={handleAdd} 
          onRemove={handleRemove} 
        />
      </Grid>
      <Grid item xs={12}>
        <CategoryOrder 
          categories={categories} 
          onReorder={handleReorder} 
          onRemove={handleRemove} 
        />
      </Grid>
    </Grid>
  )
}

export default HomeManagementView