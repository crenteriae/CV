import LeftPane from "./left"
import RightPane from "./right"
import Header from "./header"

export default function Home() {
  return (
    <>
      <Header />
      <div className='flex flex-row'>
        <div className='flex w-8/12 flex-col'>
          <LeftPane />
        </div>
        <div className='flex w-4/12 flex-col'>
          <RightPane />
        </div>
      </div>
    </>
  )
}
