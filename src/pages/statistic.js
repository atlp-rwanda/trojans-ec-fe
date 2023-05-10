/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ErrorHandler from '../components/shared/ErrorHandler'
import {
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
  FaPercentage,
  FaMoneyBill,
  FaUndo,
  FaMoneyBillWave,
} from 'react-icons/fa'
// import Skeleton from "react-loading-skeleton";
import { Skeleton } from '@mui/material'
import { LoadingStatistic } from '../components/skeleton/statisticLoading'
import { getStatistic, getOrders } from '../redux/features/actions/statistic'
import Error from '../components/shared/Error'
import StatisticCard from '../components/statisticCard'
import OrdersChart from '../components/chart'

const SellerStatisticPage = () => {
  const dispatch = useDispatch()
  const { loading, response, orders, isFetchingOrder } = useSelector(
    (state) => state.statistic,
  )

  useEffect(() => {
    dispatch(getStatistic())

    dispatch(getOrders())
  }, [dispatch])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Statistics</h1>

      {isFetchingOrder || loading ? (
        <>
          <LoadingStatistic testid="loading-statistic" count={6} />
        </>
      ) : response && response.status == '401' ? (
        <Error
          code="401"
          title="Unauthorized"
          description="You need to sign in"
          to={'login'}
        />
      ) : (
        <>
          <div className="flex flex-col-reverse gap-8 md:flex-row">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              <StatisticCard
                icon={<FaDollarSign size={32} color="#5856d6" />}
                title="Total Sales"
                value={response?.stats.totalProductsAmount}
              />

              <StatisticCard
                icon={<FaShoppingCart size={32} color="#5856d6" />}
                title="Orders Shipped"
                value={response?.stats.SalesNumber}
              />

              <StatisticCard
                icon={<FaMoneyBillWave size={32} color="#5856d6" />}
                title="Loss"
                value={response?.stats.totalLoss}
              />

              <StatisticCard
                icon={<FaUndo size={32} color="#5856d6" />}
                title="Expired Products"
                value={response?.stats.expiredProducts}
              />
            </div>
            <div className="w-full md:w-1/2">
              <OrdersChart data={orders?.message} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default SellerStatisticPage
