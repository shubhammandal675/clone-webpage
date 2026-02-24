'use client'
import { Card, CardHeader, CardContent, Chip, Button, Select, MenuItem, Typography } from '@mui/material'

// Global Font Style Constant
const outfitFont = { fontFamily: 'Outfit, Outfit Fallback, sans-serif' }

const TopCategories = ({ categories = [], onAdd, onRemove }) => {
  return (
    <Card sx={{ mb: 6, ...outfitFont }}>
      <CardHeader
        title={<Typography variant="h6" sx={{ ...outfitFont, fontWeight: 600 }}>Top 10 Categories</Typography>}
        subheader={<Typography variant="body2" sx={outfitFont}>You can select up to 10 categories</Typography>}
        action={
          <Select
            value=""
            displayEmpty
            size='small'
            sx={{ minWidth: 200, ...outfitFont }}
            onChange={(e) => onAdd(e.target.value)}
          >
            <MenuItem value="" disabled sx={outfitFont}>Select Category</MenuItem>
            <MenuItem value='Electronics_test1' sx={outfitFont}>Electronics_test1</MenuItem>
            <MenuItem value='Bakeware' sx={outfitFont}>Bakeware</MenuItem>
            <MenuItem value='Cutlery' sx={outfitFont}>Cutlery</MenuItem>
          </Select>
        }
      />
      <CardContent>
        <div className='flex flex-wrap gap-2 mb-4'>
          {categories?.map(cat => (
            <Chip
              key={cat.id}
              label={cat.name}
              // Remix Icon for close
              deleteIcon={<i className='ri-close-line' style={{ fontSize: '18px' }} />}
              onDelete={() => onRemove(cat.id)}
              variant='filled'
              sx={{
                ...outfitFont,
                backgroundColor: '#f3f4f6', // Gray-100
                color: '#4b5563',           // Gray-600 text
                borderRadius: '6px',
                fontWeight: 500,
                padding: '4px',
                '& .MuiChip-deleteIcon': {
                  color: '#ef4444',         // Normal state: Red
                  marginRight: '6px',
                  marginLeft: '-4px',
                  transition: '0.2s',
                  '&:hover': {
                    color: '#a71515'        // Hover state: Dark Red
                  }
                }
              }}
            />
          ))}
        </div>
        <div className='flex justify-end'>
          <Button 
            variant='contained' 
            sx={{ 
              backgroundColor: '#22a6b3', 
              ...outfitFont,
              textTransform: 'none',
              '&:hover': { backgroundColor: '#1b858f' }
            }}
          >
            Save
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
export default TopCategories