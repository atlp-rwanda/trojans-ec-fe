/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addReview } from '../../../redux/features/actions/addreview'
import StarRating from './StarRating'
import { toast } from 'react-toastify'

const AddReviewForm = ({ id }) => {
  const dispatch = useDispatch()
  const [number, setNumber] = useState(4)
  const [add, setAdd] = useState(false)
  const [feedback, feedText] = useState('')

  const { message } = useSelector((state) => state.review)

  useEffect(() => {
    toast(message)
    console.log({ message })
  }, [message])

  const submit = (e) => {
    const data = { id, rate: { rate: number, feedback } }
    dispatch(addReview(data))
    e.preventDefault()
    console.log(data)
  }

  return (
    <>
      {!add ? (
        <div className="before-review">
          <button
            className="button login-btn relative"
            onClick={() => setAdd(true)}
          >
            add review
          </button>
        </div>
      ) : (
        <form onSubmit={submit}>
          <div className="rates">
            <input
              type="number"
              defaultValue={number}
              max={5}
              min={0}
              onChange={(e) => setNumber(e.target.value)}
            />
            <StarRating rating={number} />
          </div>
          <textarea
            name="textArea"
            placeholder="Feedback "
            onChange={(e) => feedText(e.target.value)}
          />
          <div className="buttons">
            <button type="reset" className="button login-btn relative">
              Cancel
            </button>
            <button type="submit" className="button login-btn relative">
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  )
}

export default AddReviewForm
