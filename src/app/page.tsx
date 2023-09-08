import Header from '@/components/Header'
import Balance from '@/components/Balance'
import IncomeExpenses from '@/components/IncomeExpenses'
import History from '@/components/History'
import AddTransaction from '@/components/AddTransaction'

export default function Home() {
  return (
    <>
      <Header />
      <Balance />
      <IncomeExpenses />
      <History />
      <AddTransaction />
    </>
  )
}
