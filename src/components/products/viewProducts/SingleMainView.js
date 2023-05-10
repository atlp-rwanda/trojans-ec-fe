/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import Images from './Images'
import WishlistPopup from '../../wishlist/wishlistPopup'
import '../../../styles/wishlist.scss'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import UseSingleMainView from '../../hooks/useSingleMainView'
import SingleProductDetail from './SingleProductDetail'
import { LoadingSingleMain } from '../../skeleton/LoadingSingleMain'
import AddReviewForm from '../viewProducts/addreview'
import StarRating from '../viewProducts/StarRating'
/* istanbul ignore next */
const SingleMainView = ({ selectedProduct, categories, loading }) => {
  const {
    addToCartHandler,
    addWishlist,
    toggleModal,
    wishLoading,
    added,
    addedWish,
    wishError,
    modal,
  } = UseSingleMainView()
  useEffect(() => {
    if (wishError.payload === 401 && wishError.status) {
      toast.error('You are not authorized')
    } else if (wishError.payload === 'Network Error' && wishError.status) {
      toast.error('Check your internet connection and try again!')
    } else if (wishError.status) {
      toast.error('Something went wrong')
    }
  }, [wishError])

  return (
    <>
      {loading ? (
        <LoadingSingleMain />
      ) : (
        <>
          <div className="w-full flex justify-center flex-col items-center sm:flex-row sm:justify-center">
            <ToastContainer />
            <div className="sm:mr-10">
              <Images images={selectedProduct.images} />
            </div>
            <SingleProductDetail
              addToCartHandler={addToCartHandler}
              addWishlist={addWishlist}
              categories={categories}
              selectedProduct={selectedProduct}
              loading={loading}
              wishLoading={wishLoading}
              addedWish={addedWish}
            />
            {modal && (
              <div className="modal mt-[10%]">
                <div onClick={toggleModal} className="overlay"></div>
                <WishlistPopup
                  success={true}
                  handleClick={toggleModal}
                  statusMessage={'Success'}
                  message={`${added ? 'Added to' : 'Removed from'} wishlist`}
                />
              </div>
            )}
          </div>
          <div className="reviews">
            <h1>Review</h1>
            <AddReviewForm id={selectedProduct.id} />
            <ul>
              {selectedProduct &&
                selectedProduct.ratings &&
                (selectedProduct.ratings.length === 0 ? (
                  <div className="grey">No review added</div>
                ) : (
                  selectedProduct.ratings.map((rate) => (
                    <li key={rate}>
                      <div className="review-card">
                        <h3>{rate.name}</h3>
                        <span>
                          {rate.rate} <StarRating rating={rate.rate} />
                        </span>
                        <p>{rate.feedback}</p>
                      </div>
                    </li>
                  ))
                ))}
            </ul>
          </div>
        </>
      )}
    </>
  )
}

export default SingleMainView
