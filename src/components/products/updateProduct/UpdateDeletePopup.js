/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ComfirmPopup from '../../shared/ComfirmPopup.js'
import { deleteProductThunk } from '../../../redux/features/actions/products.js'
import {
  getProduct,
  setProductIdToDel,
  setProductNameToDel,
} from '../../../redux/features/slices/products.js'

const UpdateDeletePopup = () => {
  const { productIdToDel, productNameToDel, productToUpdate } = useSelector(
    getProduct,
  )
  const dispatch = useDispatch()
  const deleteMessage = `Are you sure you want to delete the product ${productNameToDel}?`
  const cancelDelete = (e) => {
    e.stopPropagation()
    dispatch(setProductNameToDel({ productNameToDel: null }))
    dispatch(setProductIdToDel({ productIdToDel: null }))
  }
  const comfirmDelete = (e) => {
    e.stopPropagation()
    dispatch(deleteProductThunk(productIdToDel))
    dispatch(setProductNameToDel({ productNameToDel: null }))
  }
  return (
    <div>
      {!productToUpdate && (
        <ComfirmPopup
          message={deleteMessage}
          actionType="Delete"
          className="drop-content comfirm-delete-product absolute bg-white bg-gray-100 rounded-md shadow-xl"
          comfirmActionMessage="Yes"
          handleAction={comfirmDelete}
          handleCancel={cancelDelete}
          data_testid="comfirm-delete-popup"
          cancelMessage="No"
        />
      )}
    </div>
  )
}

export default UpdateDeletePopup
