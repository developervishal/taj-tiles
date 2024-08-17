import AddCategoryDialog from '@/components/custom/add-category-dialog'
import CategoryTable from '@/components/custom/categories-table'
import Heading from '@/components/custom/heading'
import { Button } from '@/components/ui/button'
import { getCategories } from '@/lib/category'
import React from 'react'

async function CategoryPage() {
    const categories = await getCategories()
    return (
        <div className='px-12'>
            <Heading title='Category' />
            <div className='mt-10'>
                <AddCategoryDialog />
            </div>
            <div className='max-w-[450px] mt-12'>
                <CategoryTable categories={categories} />
            </div>
        </div>
    )
}

export default CategoryPage